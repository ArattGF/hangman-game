import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AudioService } from 'src/app/services/audio.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-volume-sidebar',
  templateUrl: './volume-sidebar.component.html',
  styleUrls: ['./volume-sidebar.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class VolumeSidebarComponent implements OnInit {
  volume: number = 100;

  constructor(
    public audioService: AudioService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.volume = this.getStoredVolume() || 100;
    this.applyVolume();
  }

  onVolumeChange(event: any): void {
    this.volume = event.detail.value;
    this.applyVolume();
    this.storeVolume();
  }

  private applyVolume(): void {
    if (this.audioService.setVolume) {
      this.audioService.setVolume(this.volume / 100);
    }
  }

  private storeVolume(): void {
    localStorage.setItem('gameVolume', this.volume.toString());
  }

  private getStoredVolume(): number {
    const stored = localStorage.getItem('gameVolume');
    return stored ? parseInt(stored, 10) : 100;
  }

  testSound(): void {
    this.audioService.playSound('acierto');
  }

  close() {
    this.modalController.dismiss();
  }

  volumeFormatter(value: number): string {
    return `${value}%`;
  }
}