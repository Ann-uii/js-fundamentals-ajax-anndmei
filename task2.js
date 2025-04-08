// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const secondUrl = "https://jsonplaceholder.typicode.com/users";
const search = document.getElementById("userNameInput");
const btn = document.getElementById("getUserButton");
const span = document.getElementById("userCity");

btn.addEventListener("click", () => {
  fetch(secondUrl)
    .then(response => response.json())
    .then(users => {
      const name = search.value.trim().toLowerCase();
      const foundUser = users.find(user => user.name.toLowerCase() === name);
      span.textContent = foundUser.address.city;
    })
});