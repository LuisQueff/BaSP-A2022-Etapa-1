window.onload= function(){

    var email = document.getElementById('email');
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var check1 = document.getElementById('check1');
    var check2 = document.getElementById('check2');
    var pass = document.getElementById('pass');
    var button = document.getElementById('login-button');

   
    function valEmail1() {
        if (emailRegex.test(email.value)) {
            return true;
        } else {
            email.classList.add('nemail');
            check1.innerText = 'insert a valid email';
            return false;
        }
    };

    function valEmail2() {
        if (emailRegex.test(email.value)) {
            email.classList.remove('email');
        } else {
            email.classList.remove('nemail');
            check1.innerText = '';
        }
    };

    email.addEventListener('blur', valEmail1);

    email.addEventListener('focus', valEmail2);

    function valpass1() {
        if (pass.value.length >= 8 && !isNaN(pass.value)) {
            return true;
        } else {
            email.classList.add('nemail');
            check2.innerText = 'insert a valid password';
            return false;
        }
    };

    function valpass2() {
        if (pass.value.length >= 8 && !isNaN(pass.value)) {
            return true;
        } else {
            email.classList.remove('nemail');
            check2.innerText = '';
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