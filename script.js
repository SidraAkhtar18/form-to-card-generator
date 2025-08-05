let form = document.querySelector('form');
let inputs = document.querySelectorAll('.input');
let container = document.getElementById('cards-container');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values
  let name = inputs[0].value;
  let email = inputs[1].value;
  let message = inputs[2].value;

  // Create a new card
  let card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h3>Name: ${name}</h3>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `;

  // Add card to container
  container.appendChild(card);

  // Clear form fields
  form.reset();
});
