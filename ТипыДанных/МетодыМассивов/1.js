function camelize(str) {
    let arrStr = str.split("-");
    arrStr = arrStr.map((arrStrItem, index) => {
      if (index != 0) {
        return (arrStrItem = arrStrItem[0].toUpperCase() + arrStrItem.slice(1));
      }
      return arrStrItem;
    });
  
    return (str = arrStr.join(""));
  }
  alert(camelize("background-color"));
  alert(camelize("list-style-image"));
  alert(camelize("-webkit-transition"));
  