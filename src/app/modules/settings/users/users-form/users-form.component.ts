import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  public displayCropDialog: boolean = false;
  
  @ViewChild('profilePhoto', { static: false })
  public profilePhotoUploader!: ElementRef;

  public profilePhotoSource!: any;

  public profilePhotoPreviewImage!: any;
  public finalProfilePhoto: any = 'assets/img/profile_photo.png';

  public form!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createUsersForm();
  }

  createUsersForm() {
    this.form = this.fb.group({
      logo: [null],
      profilePhoto: [null],
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

  cancel(): void {
    this.router.navigate(['painel/configuracoes']);
  }

}
