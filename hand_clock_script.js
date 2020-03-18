function get_src(num) {
    var result = "hand_clock/pictures/";
    switch (num) {
        case 0:
            result += "zero";
            break;
        case 1:
            result += "one";
            break;
        case 2:
            result += "two";
            break;
        case 3:
            result += "three";
            break;
        case 4:
            result += "four";
            break;
        case 5:
            result += "five";
            break;
        default:
            result += "zero";
            break;
    }
    result += ".png";
    return result;
}

function set_img(img, num) {
    img.src = get_src(num);
    img.width = 100;
    img.height = 100;
    img.alt = "alt_text";
}

function set_imgs(tImg, bImg, n) {
    if (n > 5) {
        tImg.src = get_src(5);
        bImg.src = get_src(n - 5);
    } else {
        tImg.src = get_src(n);
        bImg.src = get_src(0);
    }
}

var h10t = document.getElementById("h10t");
var h10b = document.getElementById("h10b");
var h1t = document.getElementById("h1t");
var h1b = document.getElementById("h1b");

var m10t = document.getElementById("m10t");
var m10b = document.getElementById("m10b");
var m1t = document.getElementById("m1t");
var m1b = document.getElementById("m1b");

set_img(h10t, 0);
set_img(h10b, 0);
set_img(h1t, 0);
set_img(h1b, 0);

set_img(m10t, 0);
set_img(m10b, 0);
set_img(m1t, 0);
set_img(m1b, 0);

set_img(s10t, 0);
set_img(s10b, 0);
set_img(s1t, 0);
set_img(s1b, 0);

function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    set_imgs(h10t, h10b, Math.floor(h / 10));
    set_imgs(h1t, h1b, h % 10);

    set_imgs(m10t, m10b, Math.floor(m / 10));
    set_imgs(m1t, m1b, m % 10);

    set_imgs(s10t, s10b, Math.floor(s / 10));
    set_imgs(s1t, s1b, s % 10);
}

setInterval(updateClock, 1000);