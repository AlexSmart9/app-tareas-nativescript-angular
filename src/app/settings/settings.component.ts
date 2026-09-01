import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, ApplicationSettings, Dialogs } from '@nativescript/core'

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  userName: string = '';
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.userName =  ApplicationSettings.getString('userName', 'Guest');
  }

  onSave () {
    ApplicationSettings.setString('userName', this.userName);

    Dialogs.alert({
      title: 'Settings',
      message: 'User name saved successfully!',
      okButtonText: 'OK'
    });
  };

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
