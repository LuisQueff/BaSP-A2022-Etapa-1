window.onload = function () {
    var locality = document.getElementById("locality");
    var address = document.getElementById("address");
    var tel = document.getElementById("tel");
    var lastName = document.getElementById("last-name");
    var dni = document.getElementById("dni");
    var pCode = document.getElementById("pcode");
    var date = document.getElementById("date");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var check1 = document.getElementById("check1");
    var check2 = document.getElementById("check2");
    var check3 = document.getElementById("check3");
    var check4 = document.getElementById("check4");
    var check5 = document.getElementById("check5");
    var check6 = document.getElementById("check6");
    var check7 = document.getElementById("check7");
    var check8 = document.getElementById("check8");
    var check9 = document.getElementById("check9");
    var check10 = document.getElementById("check10");
    var check11 = document.getElementById("check11");
    var pass = document.getElementById("pass");
    var rpass = document.getElementById("rpass");
    var button = document.getElementById("create-button");
    var number = "0123456789";
    var letter = " abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var index = address.value.indexOf(" ");
    var addr1 = address.value.substring(0, index);
    var addr2 = address.value.substring(index + 1, address.value.length);

  /* Name */

    function valNum1() {
        for (var i = 0; i < name.value.length; i++) {
            if (number.indexOf(name.value.charAt(i), 0) != -1) {
                return false;
            }
        }
        return true;
    }

    function name1() {
        if (name.value.length > 3 && valNum1(true)) {
            name.classList.add("ok");
            return true;
        } else {
            name.classList.remove("ok");
            name.classList.add("not");
            check1.innerText = "insert a valid name";
            return false;
        }
    }

    function name2() {
        if (name.value.length > 3 && valNum1(true)) {
        } else {
            check1.innerText = "";
            name.classList.remove("ok");
            name.classList.remove("not");
        }
    }

    name.addEventListener("blur", name1);
    name.addEventListener("focus", name2);

  /* Last name */

    function valNum2() {
        for (var i = 0; i < lastName.value.length; i++) {
            if (number.indexOf(lastName.value.charAt(i), 0) != -1) {
                return false;
            }
        }
        return true;
    };

    function lastName1() {
        if (lastName.value.length > 3 && valNum2(true)) {
            lastName.classList.add("ok");
        } else {
            lastName.classList.remove("ok");
            lastName.classList.add("not");
            check2.innerText = "insert a valid name";
        }
    };

    function lastName2() {
        if (lastName.value.length > 3 && valNum2(true)) {
        } else {
            check2.innerText = "";
            lastName.classList.remove("ok");
            lastName.classList.remove("not");
        }
    };

    lastName.addEventListener("blur", lastName1);
    lastName.addEventListener("focus", lastName2);

  /* DNI */

    function dni1() {
        if (dni.value.length > 7 && !isNaN(dni.value)) {
            dni.classList.add("ok");
        } else {
            check3.innerText = "insert a valid DNI";
            dni.classList.remove("ok");
            dni.classList.add("not");
        }
    };

    function dni2() {
        if (dni.value.length > 7 && !isNaN(dni.value)) {
        } else {
            check3.innerText = "";
            dni.classList.remove("ok");
            dni.classList.remove("not");
        }
    };

    dni.addEventListener("blur", dni1);
    dni.addEventListener("focus", dni2);

  /* Phone */

    function tel1() {
        if (tel.value.length === 10 && !isNaN(tel.value)) {
            tel.classList.add("ok");
        } else {
            check5.innerText = "insert a valid phone number";
            tel.classList.remove("ok");
            tel.classList.add("not");
        }
    };

    function tel2() {
        if (tel.value.length === 10) {
        } else {
            check5.innerText = "";
            tel.classList.remove("ok");
            tel.classList.remove("not");
        }
    };

    tel.addEventListener("blur", tel1);
    tel.addEventListener("focus", tel2);

  /* Address */

    function dirNum1() {
        for (var i = 0; i < addr1.value.length; i++) {
            if (number.indexOf(addr1.value.charAt(i), 0) != -1) {
                return false;
            }
        }
        return true;
    };

    function dirLet1() {
        for (var i = 0; i < addr1.value.length; i++) {
            if (letter.indexOf(addr1.value.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function dir1() {
        if (dirNum1 && dirLet1 && addr1.value.length >= 5) {
            return true;
        } else {
            return false;
        }
    };

    function dirNum2() {
        for (var i = 0; i < addr2.value.length; i++) {
            if (number.indexOf(addr2.value.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    };

    function dirLet2() {
        for (var i = 0; i < addr2.value.length; i++) {
            if (letter.indexOf(addr2.value.charAt(i), 0) != -1) {
                return false;
            }
        }
        return true;
    };

    function dir2() {
        if (dirNum2 && dirLet2) {
            return true;
        } else {
            return false;
        }
    };

    function address1() {
        if (dir1 && dir2) {
            address.classList.add("ok");
        } else {
            address.classList.remove("ok");
            address.classList.add("not");
            check6.innerText = "insert a valid address";
        }
    };

    function address2() {
        if (dir1 && dir2) {
        } else {
            check6.innerText = "";
            address.classList.remove("ok");
            address.classList.remove("not");
            }
    };

    address.addEventListener("blur", address1);
    address.addEventListener("focus", address2);

  /* Locality */

    function loc1() {
        if (locality.value.length > 3) {
            locality.classList.add("ok");
        } else {
            locality.classList.remove("ok");
            locality.classList.add("not");
            check7.innerText = "insert a valid locality";
        }
    };

    function loc2() {
        if (locality.value.length > 3) {
        } else {
            locality.classList.remove("ok");
            locality.classList.remove("not");
            check7.innerText = "";
        }
    };

    locality.addEventListener("blur", loc1);
    locality.addEventListener("focus", loc2);

  /* Postal code */

    function pCode1() {
        if (!isNaN(pCode.value) && (pCode.value.length == 4 || pCode.value.length == 5)) {
            pCode.classList.add("ok");
        } else {
            pCode.classList.remove("ok");
            pCode.classList.add("not");
            check8.innerText = "insert a valid pCode";
        }
    };

    function pCode2() {
        if (!isNaN(pCode.value) && (pCode.value.length == 4 || pCode.value.length == 5)) {
        } else {
            pCode.classList.remove("ok");
            pCode.classList.remove("not");
            check8.innerText = "";
        }
    };

    pCode.addEventListener("blur", pCode1);
    pCode.addEventListener("focus", pCode2);

  /* Email */

    function email1() {
        if (emailRegex.test(email.value) || email.value <= 0) {
            email.classList.add("ok");
            return true;
        } else {
            email.classList.remove("ok");
            email.classList.add("not");
            check9.innerText = "insert a valid email";
            return false;
        }
    };

    function email2() {
        check9.innerText = "";
    };

    email.addEventListener("blur", email1);
    email.addEventListener("focus", email2);

  /* Password */

    function valNum() {
        for (var i = 0; i < pass.value.length; i++) {
            if (number.indexOf(pass.value.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    }

    function valLet() {
        for (var i = 0; i < pass.value.length; i++) {
            if (letter.indexOf(pass.value.charAt(i), 0) != -1) {
                return true;
            }
        }
        return false;
    }

    function valPass1() {
        if (pass.value.length >= 8 && valNum && valLet) {
            pass.classList.add("ok");
        } else {
            pass.classList.remove("ok");
            pass.classList.add("not");
            check10.innerText = "insert a valid password";
        }
    }

    function valPass2() {
        if (pass.value.length >= 8 && valNum && valLet) {
        } else {
            pass.classList.remove("ok");
            pass.classList.remove("not");
            check10.innerText = "";
        }
    }

    pass.addEventListener("blur", valPass1);
    pass.addEventListener("focus", valPass2);

  /* Repeat password */

    function valNumR() {
        for (var i = 0; i < rpass.value.length; i++) {
            if (number.indexOf(rpass.value.charAt(i), 0) != -1) {
            return true;
            }
        }
        return false;
    };

    function valLetR() {
        for (var i = 0; i < rpass.value.length; i++) {
            if (letter.indexOf(rpass.value.charAt(i), 0) != -1) {
            return true;
            }
        }
        return false;
    };

    function valPass3() {
        if (rpass.value.length >= 8 && valNumR && valLetR && rpass.value == pass.value) {
            rpass.classList.add("ok");
        } else {
            rpass.classList.remove("ok");
            rpass.classList.add("not");
            check11.innerText = "insert a valid password111";
        }
    };

    function valPass4() {
        if (rpass.value.length >= 8 && valNum && valLet && rpass.value == pass.value) {
        } else {
            rpass.classList.remove("ok");
            rpass.classList.remove("not");
            check11.innerText = "";
        }
    };

    rpass.addEventListener("blur", valPass3);
    rpass.addEventListener("focus", valPass4);

};
