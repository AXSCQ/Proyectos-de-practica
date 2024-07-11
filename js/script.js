document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '4ec2a47d755142f2ad3bca298728302f';
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.articles.forEach(article => {
                if (article.title && article.description) {
                    const newsItem = document.createElement('div');
                    newsItem.classList.add('news-item');
                    newsItem.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Leer más</a>
                    `;
                    newsContainer.appendChild(newsItem);
                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = `<p>Lo sentimos, no se pudieron cargar las noticias.</p>`;
        });
});
