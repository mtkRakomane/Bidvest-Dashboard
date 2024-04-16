// //news=======================================================
//  const url = 'https://www.businesslive.co.za/rss/?publication=bl&section=news';

// async function getData() {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       // console.log(data);
      
//       // Store fetched articles
//       const articles = data.results;
  
    
//       let currentIndex = 0;
  
//       // Display the next article
//       function displayNextArticle() {
//         const newsContainer = document.querySelector('.news');
//         newsContainer.innerHTML = ''; // Clear current content
  
//         const article = articles[currentIndex];
//         const articleElement = document.createElement('div'); //putting the news in a div
//         articleElement.classList.add('news-article'); //new class
//         articleElement.innerHTML = `
//           <h2>${article.title}</h2>
   
         
//         `;
//         newsContainer.appendChild(articleElement);
  
//         // Increment index or loop back to the first article
//         currentIndex = (currentIndex + 1) % articles.length;
//       }
  
//       // Initial display
//       displayNextArticle();
  
//       // timer for the slide
//       setInterval(displayNextArticle, 5000); // Show a new article every 5 seconds
//     } catch (error) {
//       console.error('Error fetching news data:', error);
//     }
//   }
  
//   getData();



