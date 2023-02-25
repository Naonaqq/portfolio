const btnDarkMode = document.querySelector(".dark-mode-btn");
const body = document.body;

// Получаем текущее время
const currentHour = new Date().getHours();

// Проверяем значение переменной darkMode в localStorage
const darkMode = localStorage.getItem('darkMode');

if (darkMode === 'dark') {
  body.classList.add('dark');
  btnDarkMode.classList.add('dark-mode-btn--active');
} else if (darkMode === 'light') {
  body.classList.remove('dark');
  btnDarkMode.classList.remove('dark-mode-btn--active');
} else if (currentHour < 6 || currentHour > 20) { // Если darkMode не задан, проверяем время суток
  body.classList.add('dark');
  btnDarkMode.classList.add('dark-mode-btn--active');
}

// Обработчик клика на кнопку
btnDarkMode.addEventListener('click', () => {
  body.classList.toggle('dark');
  btnDarkMode.classList.toggle('dark-mode-btn--active');

  // Сохраняем значение переменной darkMode в localStorage
  if (body.classList.contains('dark')) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
});

// Обновляем тему в зависимости от времени суток
setInterval(() => {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 6 && currentHour <= 20) {
    body.classList.remove('dark');
    btnDarkMode.classList.remove('dark-mode-btn--active');
  } else {
    body.classList.add('dark');
    btnDarkMode.classList.add('dark-mode-btn--active');
  }
}, 1000 * 60 * 60); // Проверяем время каждый час
