// 1)Створити в HTML форму логінізації з двома input-ами
// вивести в консоль значення цих полів
// якщо хочаб одне з них є пустим,вивести в консоль повідомлення("заповніть поля") та припинити виконання функції
const form = document.querySelector("#form");

form.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(e.currentTarget.elements);

    const{
        elements: {login, password},
    } = e.currentTarget;
    if(login.value === "" || password.value === ""){
        console.log("Заповніть обов'язкові поля");
        return
    }
    console.log('login :>> ', login.value);
    console.log('password :>>', password.value);
}
// 2) за допомогою івенту "input" вивести в консоль написані символи у іnput-і
const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("input", onInput);

function onInput(e){
    console.log(e.currentTarget.value);
}
