function checkSpam(str) {
    let newStr = str.toLowerCase();
    if (newStr.includes("viagra") || newStr.includes("xxx")) {
      return true;
    }
    return false;
  }
  
  console.log(checkSpam("buy ViAgRA now"));
  