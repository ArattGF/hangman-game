import { Injectable } from '@angular/core';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

@Injectable({ providedIn: 'root' })
export class AdmobService {
  // Estos son los ID de cada tipo de anuncio
  private bannerId = 'ca-app-pub-3940256099942544/6300978111';
  private interstitialId = 'ca-app-pub-3940256099942544/1033173712';


  async initialize() {
    await AdMob.initialize();
  }

  async showBannerTopCenter() {
    await AdMob.showBanner({
      adId: this.bannerId,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.TOP_CENTER,
      isTesting: true, // ⚠️ cambia a false en producción
    });
  }
  async showBannerBottomCenter() {
    await AdMob.showBanner({
      adId: this.bannerId,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      isTesting: true, // ⚠️ cambia a false en producción
    });
  }

  async hideBanner() {
    await AdMob.hideBanner();
  }

  async showInterstitial() {
    await AdMob.prepareInterstitial({
      adId: this.interstitialId,
      isTesting: true,
    });
    await AdMob.showInterstitial();
  }

  // async showRewarded() {
  //   await AdMob.prepareRewardVideoAd({
  //     adId: this.rewardedId,
  //     isTesting: true,
  //   });
  //   await AdMob.showRewardVideoAd();
  // }

}
