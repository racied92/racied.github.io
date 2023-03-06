const menuButtons = document.querySelectorAll('.menu-button');

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtener el menú correspondiente al botón clickeado
    const menu = button.nextElementSibling;
    // Agregar o quitar la clase 'show' para mostrar u ocultar el menú
    menu.classList.toggle('show');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const name = `${user.name.first} ${user.name.last}`;
      const photo = user.picture.large;
      const location = `${user.location.city}, ${user.location.country}`;
      const email = `${user.email}`;
      const date = `${user.dob.date}`;
      const cell = `${user.cell}`;
      document.querySelector('#name').textContent = name;
      document.querySelector('#photo').setAttribute('src', photo);
      document.querySelector('#location').textContent = location;
      document.querySelector('#email').textContent = email;
      document.querySelector('#date').textContent = date;
      document.querySelector('#cell').textContent = cell;
    })
    .catch(error => console.error(error));
});
