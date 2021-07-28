const apps = document.querySelector(".header-apps");
const dropdown = document.querySelector(".dropdown");

apps.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});

apps.addEventListener('mouseleave', () => {
  dropdown.classList.remove('show');
});