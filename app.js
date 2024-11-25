// app.js
async function loadAndRunWasm(file) {
    const commandLog = document.getElementById('command-log');
    commandLog.value += `Chargement du fichier ${file.name}...\n`;
  
    try {
      const wasmBytes = await file.arrayBuffer();
      const module = await WebAssembly.compile(wasmBytes);
      const instance = await WebAssembly.instantiate(module, {
        wasi_snapshot_preview1: {} // Étendre les imports selon vos besoins.
      });
  
      if (instance.exports.main) {
        instance.exports.main(); // Appel de l'entrée principale, si disponible.
        commandLog.value += "Module exécuté avec succès !\n";
      } else {
        commandLog.value += "Aucune fonction 'main' détectée.\n";
      }
    } catch (error) {
      commandLog.value += `Erreur lors de l'exécution : ${error.message}\n`;
    }
  }
  
  document.getElementById('load-module').addEventListener('click', () => {
    const wasmFile = document.getElementById('wasm-file').files[0];
    if (!wasmFile) {
      alert('Veuillez sélectionner un fichier Wasm.');
      return;
    }
    loadAndRunWasm(wasmFile);
  });
  
  document.getElementById('run-command').addEventListener('click', () => {
    const command = document.getElementById('command-input').value.trim();
    const commandLog = document.getElementById('command-log');
    commandLog.value += `Exécution de la commande : ${command}\n`;
    // Ajouter la gestion des commandes spécifiques ici.
  });
  