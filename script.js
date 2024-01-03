const hamburger = document.querySelector('.hamburger-menu'); 
const navMenu = document.querySelector('.nav-menu'); 
  
hamburger.addEventListener('click', () => { 
  navMenu.classList.toggle('hide'); 
});




const   selectBtn = document.querySelector(".select-btn"),
        items = document.querySelectorAll(".item");
      

selectBtn.addEventListener("click" , ()=> {
    selectBtn.classList.toggle("open")
});

// ___________________________________   




// Swiper 
const sliderContainers = document.querySelectorAll('.slider-container');
sliderContainers.forEach((sliderContainer) => {
  const mainSlide = sliderContainer.querySelector('.main-slide');
  const thumbnailSlider = sliderContainer.querySelector('.thumbnail-slider .slides');
  const thumbnailImages = thumbnailSlider.querySelectorAll('.thumbnail-image');
  const prevBtn = sliderContainer.querySelector('.prev-btn');
  const nextBtn = sliderContainer.querySelector('.next-btn');
  const counter = sliderContainer.querySelector('.slides-numbers .active');
  const totalCounter = sliderContainer.querySelector('.slides-numbers .total');
  
  let currentSlide = 0;
  const visibleSlides = 3; 
  const totalSlides = thumbnailImages.length;

  function showSlide(index) {
    const slideImage = document.createElement('img');
    slideImage.src = thumbnailImages[index].src;
    slideImage.alt = `Slide ${String(index + 1).padStart(2, '0')}`;
    slideImage.classList.add('slide-image');
    while (mainSlide.firstChild) {
      mainSlide.removeChild(mainSlide.firstChild);
    }
    mainSlide.appendChild(slideImage);

    thumbnailImages.forEach((image, idx) => {
      let newIndex = (currentSlide + idx) % totalSlides;
      image.src = thumbnailImages[newIndex].src;

      if (totalSlides <= visibleSlides || (idx >= currentSlide && idx < currentSlide + visibleSlides)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });

    thumbnailImages.forEach(image => image.classList.remove('active'));
    thumbnailImages[currentSlide].classList.add('active');
    thumbnailSlider.scrollLeft = currentSlide * (61 + 10);

    counter.textContent = String(index + 1).padStart(2, '0');
    totalCounter.textContent = String(totalSlides).padStart(2, '0');
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);

    // عند الوصول إلى الصورة الأخيرة، أعد السلسلة مرة أخرى
    if (currentSlide === totalSlides - visibleSlides) {
      currentSlide = 0;
    }
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  thumbnailImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  showSlide(currentSlide);
});



