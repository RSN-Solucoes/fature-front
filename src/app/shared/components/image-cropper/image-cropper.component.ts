import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit, AfterViewInit {
  // Cropper
  @ViewChild('image', { static: false })
  public imageElement!: ElementRef;

  @ViewChild('destinationImage', { static: false })
  public canvas!: ElementRef;

  @Input('src')
  public imageSource!: string;

  public imageDestination!: string;

  @Output() croppedImage: EventEmitter<any> = new EventEmitter();
  private cropper!: Cropper;

  constructor() {}

  ngOnInit(): void {
    this.imageDestination = '';
  }

  ngAfterViewInit(): void {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,

      data: {
        width: (0 + 200) / 2,
        height: (0 + 200) / 2,
      },

      crop: (event) => {
        const width = event.detail.width;
        const height = event.detail.height;

        if (width < 50 || height < 50 || width > 200 || height > 200) {
          this.cropper.setData({
            width: Math.max(50, Math.min(200, width)),
            height: Math.max(50, Math.min(200, height)),
          });
        }

        const canvas = this.cropper.getCroppedCanvas();

        this.imageDestination = canvas.toDataURL();

        this.croppedImage.emit(this.imageDestination);
      },
    });
  }
}
