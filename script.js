// ============ COUNTER HARI JADIAN ============
// Tanggal jadian: 17 Agustus 2024
const startDate = new Date('2024-08-17T00:00:00');

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days.toLocaleString('id-ID');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCounter();
setInterval(updateCounter, 1000);

// ============ FLOATING HEARTS ============
const heartsContainer = document.getElementById('hearts-container');
const heartEmojis = ['❤️', '💕', '💖', '💗', '💓'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  heart.style.left = Math.random() * 100 + '%';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  heart.style.animationDuration = (Math.random() * 8 + 8) + 's';
  heart.style.animationDelay = Math.random() * 5 + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 16000);
}

setInterval(createHeart, 900);

// ============ SCROLL ANIMATION ============
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-item').forEach(el => {
  observer.observe(el);
});

// ============ LOVE LETTER TOGGLE ============
const envelope = document.getElementById('envelope');
const letterContent = document.getElementById('letter-content');

envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  letterContent.classList.toggle('open');

  // Scroll ke surat setelah dibuka
  if (letterContent.classList.contains('open')) {
    setTimeout(() => {
      letterContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  }
});