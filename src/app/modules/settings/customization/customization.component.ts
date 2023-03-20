import { SettingsService } from './../../../services/settings.service';
import { CUSTOMIZATION_BACKGROUNDS } from './customization.const';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { RequestMessageService } from 'src/app/shared/components/request-message/request-message.service';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss'],
})
export class CustomizationComponent implements OnInit {
  public displayBackgroundImageDialog: boolean = false;
  public defaultBackgroundStyle = 'background-color: #c2c2c2';
  public customizationBackgrounds: any = CUSTOMIZATION_BACKGROUNDS;
  public selectedBackgroundImage!: any;

  public backgroundInputStyle!: any;

  public displayCropDialog: boolean = false;

  public imageLogoSource!: any;

  @ViewChild('logo', { static: false })
  public logoUploader!: FileUpload;

  public logoPreviewImage: any = 'assets/img/profile_photo.png';

  public color!: string;
  public form!: FormGroup;

  public buttonPreviewStyle!: string;

  public customizationData!: any[];

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private requestMessageService: RequestMessageService,
    ) {}

  ngOnInit(): void {
    this.createCustomizationForm();

    this.getCustomizationData();
  }

  createCustomizationForm(): void {
    this.form = this.fb.group({
      backgroundImage: [null],
      backgroundColor: [null],
      buttonColor: [null],
      logo: [null],
      logoExtension: [null],
      wallpaper: [null],
      url: [null],
    });
  }

  getCustomizationData(): void {
    this.settingsService.getCustomizations().subscribe({
      next: (res) => {
        this.customizationData = res.data;
        this.form.patchValue({
          ...this.customizationData
        })
        //this.logoPreviewImage = res.data.logo; ERRO
        this.updateButtonPreviewColor(res.data.buttonColor);
        this.updateBackgroundPreviewColor(res.data.backgroundColor);
      },
      error: (err) => {
      }
    });
  }

  updateButtonPreviewColor(color: string): void {
    this.buttonPreviewStyle = `background-color: ${color}`;
  }

  updateBackgroundPreviewColor(color: string): void {
    this.defaultBackgroundStyle = `${this.defaultBackgroundStyle}; background-color: ${color}`;
  }

  selectLogo(): void {
    this.displayCropDialog = true;

    const selectedLogo = this.logoUploader._files;

    if (selectedLogo.length > 0) {
      const loadImage = selectedLogo[0];

      const read = new FileReader();

      read.onload = (loadedArchive: any) => {
        this.imageLogoSource = loadedArchive.target.result;
      };
      read.readAsDataURL(loadImage);
    }
  }

  removeLogo(): void {
    this.logoPreviewImage = 'assets/img/profile_photo.png';

    this.cancelLogoSelection();
  }

  cancelLogoSelection(): void {
    if (this.displayCropDialog == true) {
      this.displayCropDialog = false;
    }

    this.logoPreviewImage = 'assets/img/profile_photo.png';
    this.imageLogoSource = '';

    this.logoUploader.clear();
  }

  saveCroppedLogo(): void {
    this.form.get('logo')?.setValue(this.logoPreviewImage);

    this.displayCropDialog = false;
  }

  selectBackground(index: any): void {
    this.selectedBackgroundImage = this.customizationBackgrounds[index];
  }

  chooseBackgroundImage(): void {
    this.defaultBackgroundStyle = `background: url(${this.selectedBackgroundImage.src})`;

    this.backgroundInputStyle = this.defaultBackgroundStyle;

    this.displayBackgroundImageDialog = false;
  }

  clearForm(): void {
    this.form.reset();

    this.removeLogo();
  }

  submitForm(): void {
    const body = this.form.getRawValue();

    this.settingsService.updateCustomizations(body).subscribe({
      next: () => {
        this.requestMessageService.show(
          `Dados da empresa salvos com sucesso.`,
          'success'
        );
      },
      error: (err) => {
        this.requestMessageService.show(
          `Ocorreu um erro: ${err}`,
          'error'
        );
      },
    });
  }
}
