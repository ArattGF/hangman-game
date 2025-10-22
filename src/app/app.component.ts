import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { AdmobService } from './services/admob.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  showVolumeSidebar = false;

  constructor(
    private modalController: ModalController,
    private platform: Platform,
    private admobService: AdmobService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();

    console.log('Plataforma lista');

    try {
      await this.admobService.initialize();
      console.log('AdMob inicializado correctamente');
    } catch (err) {
      console.error(' Error al inicializar AdMob:', err);
    }
  }

  openVolumeSettings() {
    this.showVolumeSidebar = true;
  }
}
