// wasi/wasi_worker.js
self.onmessage = async (event) => {
    const { wasmBytes } = event.data;
  
    try {
      const module = await WebAssembly.compile(wasmBytes);
      const instance = await WebAssembly.instantiate(module, {
        wasi_snapshot_preview1: {} // Ajouter les imports nécessaires.
      });
  
      if (instance.exports.main) {
        instance.exports.main();
        self.postMessage({ success: true, message: 'Module exécuté avec succès.' });
      } else {
        self.postMessage({ success: false, message: 'Aucune fonction "main" trouvée.' });
      }
    } catch (error) {
      self.postMessage({ success: false, message: `Erreur : ${error.message}` });
    }
  };
  