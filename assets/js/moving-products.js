const productImages = [
  { src: "/assets/images/breeze-product/1.gif", alt: "Product 1" },
  { src: "/assets/images/breeze-product/2.gif", alt: "Product 2" },
  { src: "/assets/images/breeze-product/3.gif", alt: "Product 3" },
  { src: "/assets/images/breeze-product/4.gif", alt: "Product 4" },
  { src: "/assets/images/breeze-product/5.gif", alt: "Product 5" },
  { src: "/assets/images/breeze-product/6.gif", alt: "Product 6" },
  { src: "/assets/images/breeze-product/7.gif", alt: "Product 7" },
  { src: "/assets/images/breeze-product/8.gif", alt: "Product 8" },
  { src: "/assets/images/breeze-product/9.gif", alt: "Product 9" },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("moving-product");

  const movingImageDiv = document.createElement("div");
  movingImageDiv.className = "moving-product";

  // Append two sets of images for seamless loop
  [...productImages, ...productImages].forEach(({ src, alt }) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    movingImageDiv.appendChild(img);
  });

  container.appendChild(movingImageDiv);
});
