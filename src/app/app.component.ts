import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application } from '@nativescript/core'
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-messaging';
import { Toasty } from '@triniwiz/nativescript-toasty';


@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl!: string
  private _sideDrawerTransition!: DrawerTransitionBase

  constructor(private router: Router, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject services.
  }

 async ngOnInit(): Promise<void> {
    this._activatedUrl = '/home'
    this._sideDrawerTransition = new SlideInOnTopTransition()

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects))

      try{
        await firebase().initializeApp();
        console.log("Firebase initialized successfully");

        const messaging = firebase().messaging();
        const token = await messaging.getToken();
        console.log("Firebase Messaging Token: " + token);

        messaging.onMessage((message : any) => {
          console.log("Received foreground message: ", message);
          if (message && message.notification?.title) {
            new Toasty({ text: `${message.notification.title}: ${message.notification.body}` }).show();
          }
        })
      }
      catch (error) {
        console.error("Firebase initialization error: " + error);
      }
    }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    })

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.closeDrawer()
  }
}
