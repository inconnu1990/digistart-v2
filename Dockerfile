# Use the official PHP image with Apache
FROM php:8.2-apache

# Install PHP extensions if needed (uncomment and add as needed)
# RUN docker-php-ext-install mysqli pdo pdo_mysql

# Enable Apache mod_rewrite if you use .htaccess
RUN a2enmod rewrite

# Copy your PHP code into the container
COPY . /var/www/html/

# Set permissions (optional, for uploads etc.)
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80 