import { Component, OnInit, ChangeDetectorRef } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import * as camera from '@nativescript/camera';
import * as SocialShare from '@nativescript/social-share';
import { ImageSource } from '@nativescript/core';

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  capturedImage: any= null;
  capturedImageSource: ImageSource | null = null;


  constructor( private cdr: ChangeDetectorRef) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  async onTakePicture() {
    try {
      await camera.requestPermissions();
      const imageAsset = await camera.takePicture({
        width: 300,
        height: 300,
        keepAspectRatio: true,
        saveToGallery: true
      })

      console.log("Picture taken successfully:", imageAsset);

      this.capturedImage = imageAsset;

      this.capturedImageSource = await ImageSource.fromAsset(imageAsset);

      this.cdr.detectChanges(); // Trigger change detection to update the UI  
    } catch (error) {
      console.error('Error taking picture:', error);
    }
  }

  onSharePicture() {
    if (this.capturedImageSource) {
      try{
        SocialShare.shareImage(this.capturedImageSource);
      }catch (error) {
        console.error('Error sharing picture:', error);
      }
    }
  }
}
