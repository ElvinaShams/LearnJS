// map.keys() не массив
// изменив строку на let keys = Array.from(map.keys()); заработает

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more