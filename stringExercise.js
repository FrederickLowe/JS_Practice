//DrEvil
function DrEvil(a) {
    if (a >= 1000000) {
        return a + " dollars (pinky)";
    } else {
        return a + " dollars";
    }
}

//mixUp
function mixUp(firstString, secondString) {
    str1 = firstString;
    str2 = secondString;
    newStr1 = str1.replace(firstString.slice(0, 2), secondString.slice(0, 2));
    newStr2 = str2.replace(secondString.slice(0, 2), firstString.slice(0, 2));

    //better version
    //return b.slice(0, 2) + a.slice(2) + " " + a.slice(0, 2) + b.slice(2);
    return newStr1 + " " + newStr2;
}

//fixStart
function fixStart(str) {
    /*if (str.length > 1) {
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) > 0 && (str.charAt(i) == str.charAt(0))) {
                str = str.replace(str.charAt(i), "*");
            }
        }
    }
    return str;*/

    //correct answer
    var c = str.charAt(0);
    return c + str.slice(1).replace(new RegExp(c, 'g'), '*');
}

//verbing
function verbing(str) {
    if (str.length >= 3 && !(str.endsWith("ing"))) {
        return str + "ing";
    } else if (str.length < 3) {
        return str;
    } else {
        return str + "ly";
    }
}

//notBad
function notBad(str) {
    var n = str.indexOf("not");
    var b = str.indexOf("bad");

    if (b > n) {
        return str.replace(str.slice(n, str.length), "good!");
    } else {
        return str;
    }
}
