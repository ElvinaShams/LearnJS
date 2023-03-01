function random(min, max) {
    let num;
    num = Math.random()*(max-min) + min;
    return num;
}

alert(random(1, 5));