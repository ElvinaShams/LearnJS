function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    };
  
    this.calculate = function (str) {
      const [a, operator, b] = str.split(" ");
  
      if (!a || !b || !isFinite(a) || !isFinite(b)) {
        console.log("Ошибка: введите ЧИСЛО оператор ЧИСЛО");
  
        return;
      }
  
      return this.methods[operator](Number(a), Number(b));
    };
  
    this.addMethod = function (operator, func) {
      this.methods[operator] = func;
    };
  }
  
  let powerCalc = new Calculator();
  powerCalc.addMethod("*", (a, b) => a * b);
  powerCalc.addMethod("/", (a, b) => a / b);
  powerCalc.addMethod("**", (a, b) => a ** b);
  
  let result = powerCalc.calculate("2 * 3");
  alert(result); // 8