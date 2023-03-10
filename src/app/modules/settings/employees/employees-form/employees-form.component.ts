import { BILLING_MANAGEMENT_SELECT_LIST, PLATFORM_MANAGEMENT_SELECT_LIST, CLIENT_MANAGEMENT_SELECT_LIST, SERVICES_AND_PRODUCTS_MANAGEMENT_SELECT_LIST } from './employees-form.const';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  // Permissions
  public platformManagementSelectItems: any[] = PLATFORM_MANAGEMENT_SELECT_LIST;
  public billingManagementSelectItems: any[] = BILLING_MANAGEMENT_SELECT_LIST;
  public clientManagementSelectItems: any[] = CLIENT_MANAGEMENT_SELECT_LIST;
  public servicesAndProductsManagementSelectItems: any[] = SERVICES_AND_PRODUCTS_MANAGEMENT_SELECT_LIST;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createEmployeesForm();

    this.generatePassword();
  }

  createEmployeesForm() {
    this.form = this.fb.group({
      logo: [null],
      profilePhoto: [null],
      password: [null],
    });
  }

  selectProfilePhoto(): void {
    this.displayCropDialog = true;

    const selectedLogo = this.profilePhotoUploader.nativeElement.files;

    if (selectedLogo.length > 0) {
      const loadImage = selectedLogo[0];

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

    this.form.get('profilePhoto')?.setValue(this.finalProfilePhoto);
    
    this.form.get('logo')?.reset();
    this.displayCropDialog = false;
  }

  removeProfilePhoto(): void {
    this.finalProfilePhoto = 'assets/img/profile_photo.png';

    this.form.get('profilePhoto')?.reset();
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

  cancel(): void {
    this.router.navigate(['painel/configuracoes']);
  }

}
