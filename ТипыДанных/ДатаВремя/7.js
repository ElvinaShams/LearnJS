function getSecondsToTomorrow() {
    let now = new Date();
    let day = 24 * 60 * 60;
  
    return (
      day - (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds())
    );
  }
  
  console.log(getSecondsToTomorrow());
  