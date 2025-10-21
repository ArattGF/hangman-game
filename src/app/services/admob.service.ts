import { Injectable } from '@angular/core';
import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

@Injectable({ providedIn: 'root' })
export class AdmobService {
  private nativeAdvancedAd = ' ';
  // private nativeAdvancedAd = 'ca-app-pub-9366794734476212~3072818332 ';

  async initialize() {
    await AdMob.initialize(); // inicializa SDK
    // pedir estado de tracking / consentimiento (opcional)
    const tracking = await AdMob.trackingAuthorizationStatus();
    // si quieres solicitar autorización en iOS:
    if (tracking.status === 'notDetermined') {
      await AdMob.requestTrackingAuthorization();
    }
    // requestConsent si tu mercado lo requiere (UMPF)
    await AdMob.requestConsentInfo();
  }



  async showNativeAdvanced() {
    await AdMob.prepareInterstitial({ adId: this.nativeAdvancedAd, isTesting: true });
    await AdMob.showInterstitial();
  }
}
