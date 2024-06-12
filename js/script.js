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
            <img src="${imageUrl}" alt="${title}" class="news-image rounded-md w-90 h-96">
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
        showSlide(currentSlide);
        currentSlide = (currentSlide + 1) % numSlides;
      }, 6000); // Change slide every 5 seconds

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

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Swiper carousel
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoplay: {
      delay: 5000, // Set autoplay interval to 5 seconds
      disableOnInteraction: false,
    },
  });

  // Function to update Twitter timeline link every 5 seconds
  function updateTwitterTimeline() {
    var twitterTimelineLink = document.getElementById('twitter-timeline');
    twitterTimelineLink.href = "https://twitter.com/TrafficSa?ref_src=twsrc%5Etfw&random=" + Math.random(); // Append random parameter to force reload
  }

  // Update Twitter timeline every 5 seconds
  setInterval(updateTwitterTimeline, 5000);
});