function readNumber() {
  let num = prompt("Введите  число", "");
  if (num === null || num === "") {
    return null;
  } else if (!Number.isFinite(num)) {
    num = prompt("Введите только число", "");
  }
  return num;
}

alert(`Ваше число ${readNumber()}`);
