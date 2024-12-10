const carouselContainer = document.querySelector('.carousel-container');
const carouselslide = document.getElementById("carouselslide");
const carouselitem = document.querySelectorAll('.carousel-item');

const itemWidth = carouselItem[0].clientWidth;
let counter =  0;

function moveCarousel () {
carouselSlide.style.transition =  'transform 0.3s ease-in-out';
carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
}

function handleNextSlide(){
if(counter >= carouselItem.length - 1) return;
counter++;
moveCarousel()
}

function handlePrevSlide () {
if(counter <= 0) return;
counter--;
moveCarousel();
}

carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;

document.addEventListener ('DOMContentLoaded', () => {
const prevBtn = document.createElement('button');
prevBtn.textContent = "🦇";
prevBtn.style.cursor = "pointer";
prevBtn.addEventListener('click', handlePrevSlide);
carouselContainer.appendChild(prevBtn);

const nextBtn = document.createElement('button');
nextBtn.textContent = '🦇'
nextBtn.style.cursor = "pointer";
nextBtn.addEventListener('click', handleNextSlide);
carouselContainer.appendChild(nextBtn);
})
    
