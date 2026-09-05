import { Component, OnInit } from '@angular/core';
import * as SocialShare from '@nativescript/social-share';
import { ImageSource, knownFolders, action, Dialogs } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { Toasty } from '@triniwiz/nativescript-toasty';


@Component ({
  selector: 'ns-item-details',
  templateUrl: './item-details.component.html',
})

export class ItemDetailsComponent implements OnInit {

  comments: any[] = [
    {user: 'guest_1', text: "This is a comment", date: new Date()},
    {user: 'guest_2', text: "This is another comment", date: new Date()},
  ]

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit(): void {
  }

  //  Function Pull to Refresh

  onPull( e: any ) {
    const pullRefresh = e.object;

    setTimeout(() => {
      this.comments.push({
        user: 'guest_' + Math.floor(Math.random() * 100),
        text: "This is a new comment added by pull to refresh",
        date: new Date()
      });

      pullRefresh.refreshing = false;
    })
  }

  showToast() {
    const toast = new Toasty({ text: 'Comment edited successfully'});
    toast.show();
  }

  onDelete( commentSelected: any) {

    this.comments = this.comments.filter(c => c !== commentSelected);

    Dialogs.alert({
      title: "Comment Deleted",
      message: "The comment has been deleted successfully",
      okButtonText: "OK"
    });
  };

  onEdit( commentSelected: any) {

    Dialogs.action({
      message: 'Select a new category for the comment',
      cancelButtonText:'Cancel',
      actions: ['✔️ Checked', '❌ Not Checked']
    }).then( result => {
      if (result !== 'Cancel') {
        
        commentSelected.date= result
        
        this.showToast();
      };
    });

  };

  onFavorite( args: any ) {
    
    const starIcon = args.object;

    
    starIcon.animate({
      rotate: 360,               
      scale: { x: 1.5, y: 1.5 }, 
      duration: 500              
    }).then(() => {
    
      starIcon.animate({
        rotate: 0,
        scale: { x: 1, y: 1 },
        duration: 300
      });
    });
  }

  onLongPress( comment: any ) {

    action({
      message: "¿Qué deseas hacer con este elemento?",
      cancelButtonText: "Cancelar",
      actions: ["Compartir Texto", "Compartir Imagen del Logo"]
    }).then((result) => {
      if (result === "Compartir Texto") {
        SocialShare.shareText(`Comentario de ${comment.user}: ${comment.text}`);
      } 
      else if (result === "Compartir Imagen del Logo") {
        this.shareLogo();
      }
    });

  }

  shareLogo() {
    try {

      const imageSource = ImageSource.fromResourceSync("logo");
      if(imageSource) {
        SocialShare.shareImage(imageSource)
      }
    } catch (error) {
      console.error(' Eror al compartir la imagen', error);
    }
  }

  
}