window.onload= function(){

    var email = document.getElementById('email');
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var pass = document.getElementById('pass');
    var button = document.getElementById('login-button');

   
    function valEmail1() {
        if (emailRegex.test(email.value)) {
            email.classList.add('ok');
            return true;
        } else {
            email.classList.remove('ok');
            email.classList.add('not');
            check1.innerText = 'insert a valid email';
            return false;
        }
    };

    function valEmail2() {
        if (emailRegex.test(email.value)) {

        } else {
            email.classList.remove('ok');
            email.classList.remove('not');
            check1.innerText = '';
            return false;
        }
    };

    email.addEventListener('blur', valEmail1);

    email.addEventListener('focus', valEmail2);

    function valpass1() {
        if (pass.value.length >= 8 && !isNaN(pass.value)) {
            pass.classList.add('ok');
            return true;
        } else {
            pass.classList.remove('ok');
            pass.classList.add('not');
            check2.innerText = 'insert a valid password';
            return false;
        }
    };

    function valpass2() {
        if (pass.value.length >= 8 && !isNaN(pass.value)) {
            return true;
        } else {
            pass.classList.remove('ok');
            pass.classList.remove('not');
            check2.innerText = '';
            return false;
        }
    };

    pass.addEventListener('blur', valpass1);

    pass.addEventListener('focus', valpass2);

    function valSubmit (e) {
        e.preventDefault();
        if (valEmail1(true) && valpass1(true)) {
            alert('Email:' + ' ' + email.value + ' ' + 'Password:' + '' + pass.value);
        } else {
            alert('ERROR: email or passwor invalid');
        }
    };

    button.addEventListener('click', valSubmit);
    
};