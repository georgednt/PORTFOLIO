

// Toggle Project Details
function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// Zoom Image
document.querySelectorAll('.project-details img').forEach((img) => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = 1000;

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';

        modal.appendChild(modalImg);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    });
});

document.querySelectorAll('.button-64').forEach((button, index) => {
    button.addEventListener('click', () => {
        const projectDetails = document.querySelectorAll('.project-details');
        projectDetails.forEach((detail, detailIndex) => {
            if (index === detailIndex) {
                // Εναλλαγή εμφάνισης του τρέχοντος project
                if (detail.style.display === 'block') {
                    detail.style.display = 'none';
                } else {
                    detail.style.display = 'block';
                }
            } else {
                // Κρύψε όλα τα άλλα projects
                detail.style.display = 'none';
            }
        });
    });
});