class Pwa {
    private serviceWorkerRegistration?: ServiceWorkerRegistration;
  
    constructor() {
      if (isSecureContext && "serviceWorker" in navigator) {
        (async () => {
          this.serviceWorkerRegistration = await navigator.serviceWorker.register("sw.js");
        })();
      }
    }
  }
  
  export const pwa = new Pwa();
  