---

# **Wasm OS Prototype**

Bienvenue dans **Wasmux Prototype**, un projet visant à explorer la création d’un système d’exploitation minimaliste compilé vers WebAssembly (**Wasm**) et **WASI** (WebAssembly System Interface). Ce projet intègre des modules Wasm dynamiques exécutables dans un navigateur ou via un runtime comme **WasmEdge**.

---

## **Fonctionnalités principales**
- **Interface utilisateur simple** : Charger et exécuter des modules Wasm directement depuis le navigateur.
- **Support WASI** : Exploitez les capacités d’entrée/sortie des modules Wasm compatibles WASI.
- **Exécution de modules Wasm** : Gestion et exécution des applications compilées pour WebAssembly.
- **Système de fichiers virtuel** *(à venir)* : Lecture/écriture dans un espace de fichiers virtuel.
- **Gestion des paquets Wasm** *(à venir)* : Installer et exécuter des applications via un gestionnaire de paquets dédié.
- **Système d'exploitation léger et portable** *(à venir)* : Installer Wasmux sur un pc ou dans une machine virtuelle ou sous forme de "docker à la wasm".
- **compatible avec les modules nodeJS !** *(à venir)* : Utilisez vos modules préférés comme electronjs, React, Vue.js, Next.js, Tailwind CSS, Bootstrap, Three.js, Angular, TypeScript, webpack, Playwright, Testing Library, Sass, etc pour n'en citer que quelque uns !".


---

## **Technologies utilisées**
- **WebAssembly (Wasm)** : Architecture binaire portable.
- **WASI (WebAssembly System Interface)** : Interface pour les modules WebAssembly.
- **WasmEdge** *(optionnel)* : Runtime Wasm pour exécuter les applications sur serveur.
- **HTML / JavaScript** : Interface utilisateur et gestion de la logique applicative.
- **Javascript** : Langage utilisé pour compiler des modules Wasm.

---

## **Installation**

### Prérequis
- Navigateur compatible WebAssembly.
- Optionnel : [NodeJS](https://nodejs.org/fr/download/) et `WasmEdge` pour compiler vos propres modules.

### Étapes
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/aHIPPOz/wasmux.git
   cd wasmux
   ```
2. Lancez le projet :
   - Ouvrez le fichier `index.html` dans un navigateur compatible js type node.
3. (Optionnel) Compilez vos modules Wasm :
   - Installez `WasmEdge` pour compilez de Javascipt vers Wasm :
     ```bash
     curl -sSf https://raw.githubusercontent.com/WasmEdge/WasmEdge/master/utils/install.sh | bash && source $HOME/.wasmedge/env
     ```
   - Compilez un fichier Javascipt :
     [JS2WASM](https://wasmedge.org/docs/category/develop-wasm-apps-in-javascript/)

---

## **Utilisation**
1. Accédez à l’interface utilisateur via le fichier `index.html`.
2. Chargez un fichier `.wasm` via le shell.
3. Executer la commande suivante pour exécuter le module.
     ```bash
     wpm install ./chemin/vers/le/fichier/main.wasm
     ```

---

## **Exemple de module Javascipt**

Voici un exemple d’application nodeJS pouvant être compilée en Wasm :

```javascript
// hello.js
function main() {
    console.log("Hello from WASM OS using WasmEdge!");
}

main();

```

### Compilation
[JS2WASM](https://wasmedge.org/docs/category/develop-wasm-apps-in-javascript/)

Le fichier compilé se trouve `/quelque_part/`.

---

## **Fonctionnalités futures**
- Ajout d’un système de fichiers virtuel.
- Gestionnaire de paquets pour installer des applications Wasm.
- Amélioration de l’intégration avec WasmEdge et d'autres runtimes.
- Interface utilisateur enrichie.

---

## **Contributions**
Les contributions sont les bienvenues ! Voici comment vous pouvez aider :
1. Forkez le dépôt.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b feature/nom-de-la-feature
   ```
3. Effectuez vos modifications et committez-les :
   ```bash
   git commit -m "Ajout d'une nouvelle fonctionnalité"
   ```
4. Poussez vos modifications :
   ```bash
   git push origin feature/nom-de-la-feature
   ```
5. Ouvrez une Pull Request.

---

## **Licence**
Ce projet est sous licence Personalisée. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.

---

## **Contact**
Pour toute question ou suggestion, ouvrez une **issue** ou contactez-moi via [@aHIPPOz](https://github.com/aHIPPOz)

---

**a.** Ajouter une section pour inclure des modules Wasm pré-compilés dans le dépôt.  
**b.** Documenter les étapes pour l’intégration avec un serveur WasmEdge.
