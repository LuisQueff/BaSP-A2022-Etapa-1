window.onload = function () {
  var email = document.getElementById("email");
  var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  var check1 = document.getElementById("check1");
  var check2 = document.getElementById("check2");
  var pass = document.getElementById("pass");
  var button = document.getElementById("login-button");
  var numeros = "0123456789";
  var letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

  /* EMAIL */
  function valEmail1() {
    if (emailRegex.test(email.value)) {
      email.classList.add("ok");
      return true;
    } else {
      email.classList.remove("ok");
      email.classList.add("not");
      check1.innerText = "insert a valid email";
      return false;
    }
  }

  function valEmail2() {
    if (emailRegex.test(email.value)) {
    } else {
      email.classList.remove("ok");
      email.classList.remove("not");
      check1.innerText = "";
      return false;
    }
  }

  email.addEventListener("blur", valEmail1);

  email.addEventListener("focus", valEmail2);

  /* PASS */

  function valNum() {
    for (var i = 0; i < pass.value.length; i++) {
      if (numeros.indexOf(pass.value.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function valLet() {
    for (var i = 0; i < pass.value.length; i++) {
      if (letras.indexOf(pass.value.charAt(i), 0) != -1) {
        return true;
      }
    }
    return false;
  }

  function valPass1() {
    if (pass.value.length >= 8 && valNum(true) && valLet(true)) {
      pass.classList.add("ok");
      return true;
    } else {
      pass.classList.remove("ok");
      pass.classList.add("not");
      check2.innerText = "insert a valid password";
      return false;
    }
  }

  function valPass2() {
    if (pass.value.length >= 8 && valNum(true) && valLet(true)) {
    } else {
      pass.classList.remove("ok");
      pass.classList.remove("not");
      check2.innerText = "";
      return false;
    }
  }

  pass.addEventListener("blur", valPass1);

  pass.addEventListener("focus", valPass2);

  /* BUTTON */

  function valSubmit(e) {
    e.preventDefault();
    if (valEmail1(true) && valPass1(true)) {
      alert("Email:" + " " + email.value + " " + "Password:" + "" + pass.value);
    } else {
      alert("ERROR: email or passwor invalid");
    }
  }

  button.addEventListener("click", valSubmit);
};
