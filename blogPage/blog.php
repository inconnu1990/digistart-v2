<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>blog page</title>
    <link rel="stylesheet" href="blog.css">
    <script src="blog.js" defer></script>
</head>
<body>
    <!-- Navigation identique à votre site -->
    <header>
        <nav>
            <div class="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="logo">DIGISTART</div>
            <ul class="nav-links">
                <li><a href="../main.php#About">à propos</a></li>
                <li><a href="../main.php#Services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="../main.php#formulaire">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Blog Header -->
    <section class="blog-header">
        <h1>Notre Blog</h1>
        <p>Découvrez nos derniers articles sur le marketing digital, le développement web et les stratégies digitales</p>
    </section>

    <!-- Search Section -->
    <section class="search-section">
        <div class="search-container">
            <input 
                type="text" 
                class="search-input" 
                placeholder="Rechercher des articles par titre, catégorie ou auteur..."
                data-search
            >
            <span class="search-icon">🔍</span>
        </div>
    </section>

    <!-- Blog Content -->
    <section class="blog-content">
        <div class="articles-grid" data-articles-container></div>
        
        <div class="no-results hide">
            <h2>Aucun article trouvé</h2>
            <p>Essayez avec d'autres mots-clés</p>
        </div>

        <div class="back-home-container">
            <a href="../main.php" class="back-home">← Retour à l'accueil</a>
        </div>
    </section>

    <!-- Template pour les articles -->
    <template data-article-template>
        <div class="article-card">
            <div class="article-image" data-image></div>
            <div class="article-content">
                <span class="article-category" data-category></span>
                <h2 class="article-title" data-title></h2>
                <p class="article-excerpt" data-excerpt></p>
                <div class="article-meta">
                    <span class="article-date" data-date></span>
                    <span class="article-author" data-author></span>
                </div>
            </div>
        </div>
    </template>

</body>
</html>