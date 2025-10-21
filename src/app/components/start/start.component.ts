import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VolumeSidebarComponent } from '../volume-sidebar/volume-sidebar.component';
import { IonRouterOutlet } from '@ionic/angular';

import { AdmobService } from 'src/app/services/admob.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  standalone: true,
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class StartComponent {

  tematicas = [
    {
      id: 'deportes',
      nombre: 'Deportes',
      icono: '⚽',
      descripcion: 'Palabras relacionadas con deportes'
    },
    {
      id: 'ciencia',
      nombre: 'Ciencia',
      icono: '🔬',
      descripcion: 'Términos científicos y naturales'
    },
    {
      id: 'infantil',
      nombre: 'Infantil',
      icono: '🎨',
      descripcion: 'Palabras divertidas para los más pequeños'
    },
    {
      id: 'general',
      nombre: 'General',
      icono: '📚',
      descripcion: 'Vocabulario general y cotidiano'
    }
  ];

  constructor(
    private router: Router,
    private modalController: ModalController ,
      private routerOutlet: IonRouterOutlet,
      private admobService: AdmobService
  ) {}

async openVolumeSettings() {
  const modal = await this.modalController.create({
    component: VolumeSidebarComponent,
    cssClass: 'volume-sidebar-modal',
    breakpoints: [0, 0.5, 0.8],
    initialBreakpoint: 0.8,
    presentingElement: this.routerOutlet.nativeEl // Use nativeEl
  });
  await modal.present();
}

  seleccionarTematica(tematica: string): void {
    this.admobService.showNativeAdvanced();
    this.router.navigate(['/level', tematica]);
  }
}