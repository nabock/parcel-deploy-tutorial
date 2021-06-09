// import "./css/styles.css";

// console.log("Мастерская: деплой билда от Parcel на GitHub Pages");

import users from './users.js';
console.log(users);

const refs = {
    wrapper: document.querySelector('.wrapper'),
    form: document.querySelector('.form'),
    input: document.querySelector('.login')
}



// const parseUsers = JSON.parse(users);

// console.log(parseUsers);



const createCards = (user) => {
    const userCard = document.createElement('div');

    const userName = document.createElement('p');
    userName.textContent = user.name;

    const userMail = document.createElement('p');
    userMail.textContent = user.email;

    userCard.append(userMail, userName);
    userCard.classList.add('card')
    return userCard;

}

const getUser = users.map((elem) => {
    return createCards(elem);

})
refs.wrapper.append(...getUser);


refs.form.addEventListener('submit', onFormSubmit)
function onFormSubmit(e) {
    e.preventDefault();
    const value = refs.input.value
    const filterUsers = users.filter(user => user.name.includes(value) || user.email.includes(value))
    const usersGet = filterUsers.map(user => {
        return createCards(user)
    })
    refs.wrapper.innerHTML = ""
    refs.wrapper.append(...usersGet)
    console.log(filterUsers)

}

// console.log(getUser);

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// const array = [1, 21, 3, 3, 4, 5, 5, 6, 777, 8, 999, 66, 2]

// const set = new Set(array)

// console.log(set);

// const person = {
//     name: 'Roman',
//     age: 25
// };

// localStorage.setItem('Name', 'Roman');
// localStorage.setItem('data', 'person');