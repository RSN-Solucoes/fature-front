import { CUSTOMIZATION_BACKGROUNDS } from './customization.const';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {
  public displayDialog: boolean = false;
  public customizationBackgrounds: any = CUSTOMIZATION_BACKGROUNDS;
  public selectedBackground!: any;

  public displayCropDialog: boolean = false;

  @ViewChild("logo", {static: false})
  public logoUploader!: FileUpload;

  public imageLogoSource!: any;

  public logoPreviewImage: any = "assets/img/profile_photo.png";

  public color!: string;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { 
  }

  ngOnInit(): void {
    this.createCustomizationForm();
  }

  getCroppedImageLogo(event: any) {
    this.logoPreviewImage = event;
  }

  createCustomizationForm() {
    this.form = this.fb.group({
      color: this.fb.group({
        background: [null],
        button: [null]
      }),
      url: [null],
    });
  }

  updateColorField(color: string, type: string) {
    if(type === 'button') {
      this.form.patchValue({
        color: {
          button: color
        }
      });
    };
    if(type === 'background') {
      this.form.patchValue({
        color: {
          background: color
        }
      });
    };
  }

  selectLogo() {
    this.displayCropDialog = true;

    const selectedLogo = this.logoUploader._files;

    if(selectedLogo.length > 0) {
      const loadImage = selectedLogo[0];

      const read = new FileReader();

      read.onload = (loadedArchive: any) => {
        this.imageLogoSource = loadedArchive.target.result;
      }
      read.readAsDataURL(loadImage);
    };
  }

  cancelImageSelection() {
    this.displayCropDialog = false;

    this.logoUploader.clear();
  }

  selectBackground(index: any) {
    this.selectedBackground = this.customizationBackgrounds[index];
  }

  clearForm() {
    alert('clear form');
  }

  submitForm() {
    alert('submit form');
  }

}
