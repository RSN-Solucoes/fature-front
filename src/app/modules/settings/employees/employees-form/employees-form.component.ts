import { SettingsService } from './../../../../services/settings.service';
import { BILLING_MANAGEMENT_SELECT_LIST, PLATFORM_MANAGEMENT_SELECT_LIST, CLIENT_MANAGEMENT_SELECT_LIST, SERVICES_AND_PRODUCTS_MANAGEMENT_SELECT_LIST } from './employees-form.const';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {
  public displayCropDialog: boolean = false;
  
  @ViewChild('profilePhoto', { static: false })
  public profilePhotoUploader!: ElementRef;

  public profilePhotoSource!: any;

  public profilePhotoPreviewImage!: any;
  public finalProfilePhoto: any = 'assets/img/profile_photo.png';

  public form!: FormGroup;
  public employee!: any;
  public employeeId = this.activatedRoute.snapshot.paramMap.get('id') || '';


  // Permissions
  public platformManagementSelectItems: any[] = PLATFORM_MANAGEMENT_SELECT_LIST;
  public billingManagementSelectItems: any[] = BILLING_MANAGEMENT_SELECT_LIST;
  public clientManagementSelectItems: any[] = CLIENT_MANAGEMENT_SELECT_LIST;
  public servicesAndProductsManagementSelectItems: any[] = SERVICES_AND_PRODUCTS_MANAGEMENT_SELECT_LIST;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private settingsService: SettingsService,
    private requestMessageService: RequestMessageService,
  ) { }

  ngOnInit(): void {
    this.createEmployeesForm();

    this.employeeId ? this.getEmployee() : this.generatePassword();
  }

  createEmployeesForm(): void {
    this.form = this.fb.group({
      fullName: [null],
      email: [null],
      password: [null],
      phone: [null],
      roles: this.fb.array([]),
      photo: [null],
      comments: [null],
      logo: [null],
    });
  }

  getEmployee(): void {
    this.settingsService.getEmployeeById(this.employeeId).subscribe({
      next: (res) => {
        this.employee = res.data;
        this.form.patchValue({
          ...res.data,
        });

        this.finalProfilePhoto = res.data.photo;
      },
      error: (err) => {
      }
    });
  }

  selectProfilePhoto(): void {
    this.displayCropDialog = true;

    const selectedProfilePhoto = this.profilePhotoUploader.nativeElement.files;

    if (selectedProfilePhoto.length > 0) {
      const loadImage = selectedProfilePhoto[0];

      const read = new FileReader();

      read.onload = (loadedArchive: any) => {
        this.profilePhotoSource = loadedArchive.target.result;
      };
      read.readAsDataURL(loadImage);
    };
  }

  cancelPhotoSelection(): void {
    if (this.displayCropDialog == true) {
      this.displayCropDialog = false;
    };

    this.profilePhotoSource = '';
    this.finalProfilePhoto = this.finalProfilePhoto;

    this.form.get('logo')?.reset();
  }

  saveCroppedProfilePhoto(): void {
    this.profilePhotoSource = '';
    this.finalProfilePhoto = this.profilePhotoPreviewImage;

    this.form.get('photo')?.setValue(this.finalProfilePhoto);
    
    this.form.get('logo')?.reset();
    this.displayCropDialog = false;
  }

  removeProfilePhoto(): void {
    this.finalProfilePhoto = 'assets/img/profile_photo.png';

    this.form.get('photo')?.reset();
  }

  generatePassword(): void {
    const chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 8;
    let password = '';
    
    for (let i = 0; i <= passwordLength; i++) {
      const randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    
    this.form.patchValue({
      password,
    });
  }

  clearForm(): void {
    this.form.reset();

    this.removeProfilePhoto();
  }

  submitForm(): void {
    const body = {
      fullName: this.form.get('fullName')?.value,
      phone: this.form.get('phone')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      roles: this.form.get('roles')?.value,
      photo: this.form.get('photo')?.value,
      comments: this.form.get('comments')?.value,
    };

    const request = this.employeeId ? 
      this.settingsService.updateEmployee(this.employeeId, body) :
      this.settingsService.createEmployee(body);

    request.subscribe({
      next: (res) => {
        this.requestMessageService.show(
          `Colaborador ${
            this.employeeId ? 'atualizado' : 'criado'
          } com sucesso`,
          'success'
        );

        setTimeout(() => {
          this.cancel();
        }, 1500);
      },
      error: (err) => {
        this.requestMessageService.show(
          `Houve um erro ao 
          ${this.employeeId ? 'atualizar' : 'criar'}
           colaborador`,
          'error'
        );
      }
    });
  }

  cancel(): void {
    this.router.navigate(['painel/configuracoes']);
  }

}
