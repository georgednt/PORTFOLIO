// Smooth scroll effect for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle project details
function showDetails(projectId) {
    const project = document.getElementById(projectId);
    project.classList.toggle("show");
}

// Zoom effect for image
function zoomImage(img) {
    const zoomedImage = document.createElement('div');
    zoomedImage.style.backgroundImage = `url(${img.src})`;
    zoomedImage.style.backgroundSize = 'contain';
    zoomedImage.style.backgroundRepeat = 'no-repeat';
    zoomedImage.style.backgroundPosition = 'center';
    zoomedImage.style.position = 'fixed';
    zoomedImage.style.top = '50%';
    zoomedImage.style.left = '50%';
    zoomedImage.style.width = '80%';
    zoomedImage.style.height = '80%';
    zoomedImage.style.transform = 'translate(-50%, -50%)';
    zoomedImage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    zoomedImage.style.cursor = 'zoom-out';
    zoomedImage.style.zIndex = '1000';
    
    zoomedImage.onclick = function () {
        document.body.removeChild(zoomedImage);
    };
    document.body.appendChild(zoomedImage);
}

// Toggle theme between Dark Mode and Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});