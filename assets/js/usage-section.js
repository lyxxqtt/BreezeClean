const track = document.querySelector(".usage-track");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".arrow.prev");
const nextBtn = document.querySelector(".arrow.next");

let currentIndex = 0;
let autoSlide = setInterval(nextSlide, 4000);

function showSlide(index) {
  currentIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot, i) =>
    dot.classList.toggle("active", i === index)
  );
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + dots.length) % dots.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoSlide();
  });
});

function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 4000);
}

showSlide(currentIndex);
