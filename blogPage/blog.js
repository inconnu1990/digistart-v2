const blogData = [
    {
        id: 1,
        title: "Introduction à JavaScript moderne",
        description: "Découvrez les dernières fonctionnalités de JavaScript ES6+ et comment les utiliser dans vos projets.",
        category: "tech",
        date: "2024-01-15",
        author: "Tech Expert",
        url: "articles/javascript-moderne.html",
        keywords: ["javascript", "es6", "programmation", "web", "frontend"]
    }
];
let searchTerm = '';
let allArticles = [];

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function createArticleCard(article) {
    const template = document.querySelector('[data-article-template]');
    const articleElement = template.content.cloneNode(true);
    

    articleElement.querySelector('[data-image]').style.background = `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`;
    articleElement.querySelector('[data-image]').innerHTML = `<span style="color: white; font-weight: bold; font-size: 14px;">${article.category.toUpperCase()}</span>`;
    articleElement.querySelector('[data-category]').textContent = article.category;
    articleElement.querySelector('[data-title]').textContent = article.title;
    articleElement.querySelector('[data-excerpt]').textContent = article.description;
    articleElement.querySelector('[data-date]').textContent = formatDate(article.date);
    articleElement.querySelector('[data-author]').textContent = article.author;
    
    
    const cardElement = articleElement.querySelector('.article-card');
    cardElement.style.cursor = 'pointer';
    cardElement.setAttribute('data-category', article.category);
    cardElement.setAttribute('data-title', article.title.toLowerCase());
    cardElement.setAttribute('data-excerpt', article.description.toLowerCase());
    cardElement.setAttribute('data-author', article.author.toLowerCase());
    cardElement.setAttribute('data-keywords', article.keywords.join(' ').toLowerCase());
    
    
    cardElement.addEventListener('click', () => {
        window.open(article.url, '_blank');
    });
    
    cardElement.title = `Lire l'article: ${article.title}`;
    
    return articleElement;
}


function searchArticles(term) {
    const filteredArticles = blogData.filter(article => {
        if (term === '') return true;
        
        const searchLower = term.toLowerCase();
        
        
        return article.title.toLowerCase().includes(searchLower) ||
               article.description.toLowerCase().includes(searchLower) ||
               article.author.toLowerCase().includes(searchLower) ||
               article.keywords.some(keyword => 
                   keyword.toLowerCase().includes(searchLower)
               );
    });
    
    return filteredArticles;
}


function displayArticles(articles) {
    const container = document.querySelector('[data-articles-container]');
    const noResults = document.querySelector('.no-results');
    
    
    container.innerHTML = '';
    
    if (articles.length === 0) {
        
        noResults.classList.remove('hide');
    } else {
        
        noResults.classList.add('hide');
        
        
        articles.forEach((article, index) => {
            const articleCard = createArticleCard(article);
            container.appendChild(articleCard);
            
            
            setTimeout(() => {
                const cardElement = container.children[index];
                cardElement.style.opacity = '0';
                cardElement.style.transform = 'translateY(30px)';
                cardElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    cardElement.style.opacity = '1';
                    cardElement.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    }
}


function performSearch() {
    const results = searchArticles(searchTerm);
    displayArticles(results);
}


function init() {
    
    const container = document.querySelector('[data-articles-container]');
    const searchInput = document.querySelector('[data-search]');
    const template = document.querySelector('[data-article-template]');
    
    if (!container) {
        console.error('Élément [data-articles-container] non trouvé');
        return;
    }
    
    if (!template) {
        console.error('Élément [data-article-template] non trouvé');
        return;
    }
    
    
    displayArticles(blogData);
    
    
    if (searchInput) {
        
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                searchTerm = e.target.value;
                performSearch();
            }, 300);
        });
    } else {
        console.error('Élément [data-search] non trouvé');
    }
}


const style = document.createElement('style');
style.textContent = `
    .article-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
        position: relative;
    }
    
    .article-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }
    
    .article-card::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(102, 126, 234, 0.05);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }
    
    .article-card:hover::after {
        opacity: 1;
    }
    
    .article-card:active {
        transform: translateY(-2px);
    }
    
    .no-results {
        text-align: center;
        padding: 40px;
        color: #666;
    }
    
    .no-results.hide {
        display: none;
    }
    
    .search-container {
        position: relative;
    }
    
    .search-input {
        width: 100%;
        padding: 12px 50px 12px 20px;
        border: 2px solid #ddd;
        border-radius: 25px;
        font-size: 16px;
        transition: border-color 0.3s ease;
    }
    
    .search-input:focus {
        outline: none;
        border-color: #667eea;
    }
    
    .search-icon {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 18px;
        color: #666;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', init);