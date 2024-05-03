window.addEventListener("load", function () {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".content").style.display = "block";
  document.body.style.overflow = "auto"; // Restore scrolling after content is loaded
});
document.addEventListener("DOMContentLoaded", function () {
  const feedContainer = document.getElementById("news-feed");
  const feedUrl =
    "https://feeds.capi24.com/v1/Search/articles/news24/SouthAfrica/rss";

  fetch(feedUrl)
    .then((response) => response.text())
    .then((xml) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "text/xml");
      const items = xmlDoc.querySelectorAll("item");

      items.forEach((item) => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;
        const imageUrl = item.querySelector("enclosure").getAttribute("url");
        const description = item.querySelector("description").textContent;

        const slide = document.createElement("div");
        slide.classList.add("carousel-slide");

        slide.innerHTML = `
    <a href="${link}" class="carousel-slide-link">
        <div class="carousel-slide-container">
            <img src="${imageUrl}" alt="${title}" class="news-image rounded-md w-90 h-90">
            <div class="carousel-slide-content font-sans rounded-md font-bold">
                <h2 class" font-bold">${title}</h2>
            </div>
        </div>
    </a>
`;

        feedContainer.appendChild(slide);
      });

      // Initialize and start carousel
      const carouselSlides = document.querySelectorAll(".carousel-slide");
      const numSlides = carouselSlides.length;
      let currentSlide = 0;

      setInterval(() => {
        currentSlide = (currentSlide + 1) % numSlides;
        showSlide(currentSlide);
      }, 5000); // Change slide every 5 seconds

      function showSlide(index) {
        carouselSlides.forEach((slide, i) => {
          if (i === index) {
            slide.style.display = "block";
          } else {
            slide.style.display = "none";
          }
        });
      }
    })
    .catch((error) => console.error("Error fetching RSS feed:", error));
});
