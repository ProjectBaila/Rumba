document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.book-button');
  const dateCards = document.querySelectorAll('.date-card');

  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.98)';
    setTimeout(() => button.style.transform = '', 200);
  });

  dateCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = `translateY(-10px) rotate(${index % 2 ? '2deg' : '-2deg'})`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
});