const availablePackages = {
    'hello-world': '/wasm/hello_world.wasm',
  };
  
  document.getElementById('run-command').addEventListener('click', async () => {
    const command = document.getElementById('command-input').value.trim();
    const commandLog = document.getElementById('command-log');
  
    if (command.startsWith('wpm install')) {
      const packageName = command.split(' ')[2];
      if (availablePackages[packageName]) {
        const response = await fetch(availablePackages[packageName]);
        const wasmBytes = await response.arrayBuffer();
        loadAndRunWasm(new File([wasmBytes], `${packageName}.wasm`));
      } else {
        commandLog.value += `Package "${packageName}" non trouvé.\n`;
      }
    } else {
      commandLog.value += `Commande "${command}" non reconnue.\n`;
    }
  });
  