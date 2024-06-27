// Wait for the DOM to be fully loaded before inserting the header
document.addEventListener('DOMContentLoaded', loadHeader);

async function loadHeader() {
    try {
        console.log('Loading header...');
        const response = await fetch('../GLOBAL_HTML/header.html');
        if (!response.ok) {
            throw new Error(`Failed to load header: ${response.statusText}`);
        }
        const headerContent = await response.text();
        document.getElementById('header-placeholder').innerHTML = headerContent;
        console.log('Header loaded successfully.');
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

