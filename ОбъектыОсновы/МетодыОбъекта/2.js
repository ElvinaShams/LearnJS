let calculator = {
    read() {
    this.a = +prompt("Введите первое число", 0);
    this.b = +prompt("Введите второе число", 0);
    },
    
    sum() {
    alert (`Сумма ${this.a} и ${this.b} равна ${this.a + this.b}`)
    },
    
    mul() {
    alert (`Произведение ${this.a} и ${this.b} равно ${this.a * this.b}`)
    },
    }