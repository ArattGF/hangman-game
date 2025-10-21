import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

import { AdmobService } from './services/admob.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {


  constructor(private modalController: ModalController, protected platform: Platform, private admobService: AdmobService) {

      this.platform.ready().then(() => {
      this.admobService.initialize().then(() => {
 
      });
  });
  }



    showVolumeSidebar = false;

  openVolumeSettings() {
    this.showVolumeSidebar = true;
  }
}
