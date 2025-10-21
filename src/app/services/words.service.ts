import { Injectable } from '@angular/core';
import { Theme, Level } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private palabras: Map<string, string[]> = new Map();

  constructor() {
    this.inicializarPalabras();
  }

  private inicializarPalabras(): void {
    this.palabras.set('deportes-normal', [
      'futbol', 'baloncesto', 'tenis', 'natacion', 'ciclismo',
      'atletismo', 'voley', 'boxeo', 'rugby', 'golf'
    ]);

    this.palabras.set('deportes-avanzado', [
      'esgrima', 'halterofilia', 'piragüismo', 'waterpolo', 'balonmano',
      'pentatlón', 'triatlón', 'badminton', 'kayak', 'esquí'
    ]);

    this.palabras.set('ciencia-normal', [
      'átomo', 'célula', 'planeta', 'energía', 'oxígeno',
      'molécula', 'gravedad', 'volcán', 'circuito', 'imán'
    ]);

    this.palabras.set('ciencia-avanzado', [
      'bioquímica', 'electromagnetismo', 'fotosíntesis', 'termodinámica', 'cromosoma',
      'ecosistema', 'mitocondria', 'radioactividad', 'neurología', 'astronomía'
    ]);

    this.palabras.set('infantil-normal', [
      'parque', 'amigo', 'juguete', 'pelota', 'cuento',
      'colegio', 'familia', 'mascota', 'dibujo', 'fiesta'
    ]);

    this.palabras.set('infantil-avanzado', [
      'dinosaurio', 'mariposa', 'arcoíris', 'aventura', 'astronauta',
      'castillo', 'piratas', 'princesa', 'dragón', 'tesoro'
    ]);

    this.palabras.set('general-normal', [
      'casa', 'libro', 'mesa', 'puerta', 'ventana',
      'silla', 'reloj', 'plato', 'vaso', 'cama'
    ]);

    this.palabras.set('general-avanzado', [
      'arquitectura', 'filosofía', 'democracia', 'tecnología', 'gastronomía',
      'literatura', 'economía', 'universidad', 'biblioteca', 'hospital'
    ]);
  }

  obtenerPalabraAleatoria(tematica: Theme, nivel: Level): string {
    const clave = `${tematica}-${nivel}`;
    const listaPalabras = this.palabras.get(clave) || [];

    if (listaPalabras.length === 0) {
      return 'error';
    }

    const indiceAleatorio = Math.floor(Math.random() * listaPalabras.length);
    return listaPalabras[indiceAleatorio].toUpperCase();
  }
}
