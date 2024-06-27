function loadScripts(scripts) {
    scripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        scriptElement.defer = true; // Ensure scripts are loaded and executed in order
        scriptElement.onload = () => console.log(`Loaded script: ${script}`);
        scriptElement.onerror = () => console.error(`Error loading script: ${script}`);
        document.body.appendChild(scriptElement);
    });
}

// List of scripts to load
const scriptsToLoad = [
    '../GLOBAL_SCRIPTS/loadFooter.js',
    '../GLOBAL_SCRIPTS/loadGoToTopButton.js',
    //'../GLOBAL_SCRIPTS/GoToTop.js',
    // Add more script paths as needed
];

// Wait for the DOM to be fully loaded before loading the scripts
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed. Starting to load scripts.");
    loadScripts(scriptsToLoad);
});
