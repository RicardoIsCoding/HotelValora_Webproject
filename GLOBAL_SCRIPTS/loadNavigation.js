document.addEventListener('DOMContentLoaded', () => {
    console.log("Loading Navigation");
    const sections = document.querySelectorAll('section');
    const nav = document.getElementById('dynamic-nav');
    
    if (sections.length > 0 && nav) {
        const ul = document.createElement('ul');

        sections.forEach(section => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            const sectionId = section.id;
            const sectionName = sectionId.replace(/-/g, ' ');

            a.href = `#${sectionId}`;
            a.textContent = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

            li.appendChild(a);
            ul.appendChild(li);
        });

        nav.appendChild(ul);
    }
    console.log("Navigation Loaded Sucessfully");
});
