function toggleTable() {
    const table = document.querySelector('.styled-table');
    if (table.style.display === 'none') {
        table.style.display = '';
    } else {
        table.style.display = 'none';
    }
}