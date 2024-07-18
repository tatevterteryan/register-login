let email; let password; let namesurname; let username; let surname;
let users = [];

function User(username, surname, camelcase, email) {
    this.username = username;
    this.surname = surname;
    this.camelcase = camelcase;
    this.email = email;
}
function login() {
    email = prompt("email");
    password = prompt("password");
    let user = users.find(el => el.email === email);
    if (user) {
        if (password === camelCase(user.camelcase)) {
            alert("Yes");
        } else {
            alert("password is wrong, please try again");
            login();
        }
    } else {
        storage(email, password);
    }
}
function storage(emailstorage, passwordstorage) {
    let obj = JSON.parse(localStorage.getItem('user'));
    if (obj.email === emailstorage) {
        if (passwordstorage === camelCase(obj.camelcase)) {
            alert("welcome");
        } else {
            alert("password is wrong, please try again");
            login();
        }
    } else {
        alert('email is wrong, please try again');
    }
}
function camelCase(passw) {
    let ps = '';
    let passwordindex = 1;
    for (let i = 2; i <= (-3 + Math.sqrt(9 + 8 * passw.length)) / 2 + 1; i++) {
        ps += passw[passwordindex];
        passwordindex += i + 1;
    }
    console.log(ps);
    return ps;
}


function register() {
    namesurname = prompt("name-surname");
    let words = namesurname.split(" ");

    if (words.length !== 2) {
        alert("Please try again");
        return register();
    }

    username = words[0];
    surname = words[1];


    email = prompt("email");
    if (email.includes("@") && email.indexOf("@") < email.lastIndexOf(".") && email.indexOf("@") > 0) {


        password = prompt("password (8 nishic avel, metsatar, poqratar, tver)");
        if (password.length <= 7 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || /\s/.test(password)) {
            alert("please try again");
            return register();
        }



        let repeatpassword = prompt("Repeat password");

        if (password !== repeatpassword) {
            alert("please try again");
            return register();
        }
        hash();
    }
    else {
        alert('try again');
        register();
    }
}
function hash() {
    let type;
    let camelcase = '';

    for (let i = 0; i < password.length; i++) {
        for (let j = 0; j <= i; j++) {
            type = Math.random() < 0.5 ? 'number' : 'letter';

            if (type === 'number') {
                camelcase += Math.floor(Math.random() * 10);
            } else {
                let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                camelcase += alphabet[Math.floor(Math.random() * alphabet.length)];
            }

        }
        camelcase += password[i];

    }

    users.push(new User(username, surname, camelcase, email));
    let myobj = JSON.stringify(new User(username, surname, camelcase, email));

    localStorage.removeItem('user');
    localStorage.setItem('user', myobj);
    alert('you registered');
}


function start() {
    let choice = prompt("Do you want to register or log in? (register/login)");

    if (choice === "login") {
        login();
    } else if (choice === "register") {
        register();
    } else {
        alert("Please try again");
        start();
    }
}

start();




