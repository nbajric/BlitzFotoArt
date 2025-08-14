/*
  Skripte zur Steuerung der Bildslideshow sowie des Galerie‑Modals.  
  Das Karussell wechselt automatisch alle fünf Sekunden zwischen den Hintergrundbildern.  
  Im Galerie‑Abschnitt öffnet ein Klick auf ein Bild eine vergrößerte Ansicht in einem Modal.  
*/

document.addEventListener('DOMContentLoaded', () => {
  // Slider logic
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  // Initial display
  showSlide(currentSlide);
  // Auto slide change every 5 seconds
  setInterval(nextSlide, 5000);

  // Gallery modal logic
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.modal-close');
  const galleryImages = document.querySelectorAll('.gallery-item img');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  const closeModal = () => {
    modal.style.display = 'none';
  };

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    // Close the modal when clicking outside the image
    if (e.target === modal) {
      closeModal();
    }
  });
});
