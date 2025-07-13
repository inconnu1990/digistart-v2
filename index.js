document.addEventListener('DOMContentLoaded', function() {
  const title = 'DIGISTART';
  const digistartAnim = document.getElementById('digistartAnim');
  const introHero = document.getElementById('introHero');
  const heroImage = document.getElementById('heroImage');
  const heroCtaWrapper = document.getElementById('heroCtaWrapper');

  // Animate DIGISTART in the glowing digistart-animation div
  digistartAnim.innerHTML = '';
  title.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    span.style.animation = `letterIn 0.5s forwards ${(i * 0.10 + 0.3)}s`;
    span.style.display = 'inline-block';
    digistartAnim.appendChild(span);
  });

  // Fade out intro, show hero image and button after animation
  const totalDuration = title.length * 120 + 1800; // ms
  setTimeout(() => {
    introHero.style.opacity = '0';
    setTimeout(() => {
      introHero.style.display = 'none';
      heroImage.style.display = '';
      heroCtaWrapper.style.display = 'flex';
    }, 1000);
  }, totalDuration);
});