import { Injectable } from '@angular/core';
import { Sounds } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

    private volume: number = 1;

  private audios: { [key in Sounds]: HTMLAudioElement } = {
    acierto: new Audio('assets/sounds/acierto.mp3'),
    error: new Audio('assets/sounds/error.mp3'),
    victoria: new Audio('assets/sounds/victoria.mp3'),
    derrota: new Audio('assets/sounds/derrota.mp3')
  };

  constructor() {
    // Correctly iterate over the audio objects
    Object.values(this.audios).forEach((audioElement: HTMLAudioElement) => {
      audioElement.load(); // Preload the audio :cite[2]
    });
  }

    setVolume(level: number): void {
    this.volume = level;
  }

  getVolume(): number {
    return this.volume;
  }

  public playSound(sound: Sounds): void {
    const audio = this.audios[sound];
    audio.volume = this.volume;
    audio.currentTime = 0; // Reset to start
    audio.play().catch(error => console.log(`Error playing ${sound} sound:`, error));
  }
    volumeFormatter(value: number): string {
    return `${value}%`;
  }
}