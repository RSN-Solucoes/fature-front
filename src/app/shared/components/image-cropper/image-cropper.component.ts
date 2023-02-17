import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit, AfterViewInit {
  // Cropper
  @ViewChild("image", {static: false})
  public imageElement!: ElementRef;

  @ViewChild("destinationImage", {static: false})
  public canvas!: ElementRef;

  @Input("src")
  public imageSource!: string;

  public imageDestination!: string;
  
  @Output() croppedImage: EventEmitter<any> = new EventEmitter;
  private cropper!: Cropper;

  constructor() {
  }

  ngOnInit(): void {
    this.imageDestination = "";
  }

  ngAfterViewInit(): void {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();

        this.imageDestination = canvas.toDataURL();

        this.croppedImage.emit(this.imageDestination);
      },
    });
  }
}

