let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  console.log("PWA disponível"); // <-- adicione isso
  e.preventDefault();
  deferredPrompt = e;

  window.showInstallPrompt = async function () {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      deferredPrompt = null;
      return result.outcome;
    } else {
      return 'not_available';
    }
  };
});