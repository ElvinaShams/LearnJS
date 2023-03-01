function Accumulator(value) {
    this.value = value;
    
    this.read = function() {
      let num = +prompt('Число?', '');
      this.value += num;
    }
  }
  
  let accumulator = new Accumulator(1); 
  
  accumulator.read(); 
  accumulator.read(); 
  
  alert(accumulator.value); 