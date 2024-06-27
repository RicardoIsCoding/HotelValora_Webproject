// Wait for the DOM to be fully loaded before inserting the footer
document.addEventListener('DOMContentLoaded', loadFooter);

async function loadFooter() {
    try {
        console.log('Loading footer...');
        const response = await fetch('../GLOBAL_HTML/footer.html');
        if (!response.ok) {
            throw new Error(`Failed to load footer: ${response.statusText}`);
        }
        const footerContent = await response.text();
        document.getElementById('footer-placeholder').innerHTML = footerContent;
        console.log('Footer loaded successfully.');
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

