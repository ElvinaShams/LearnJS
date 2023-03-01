//1
console.log( null || 2 || undefined ); //2

//2
console.log( console.log(1) || 2 || console.log(3) ); //3

//3
console.log( 1 && null && 2 ); //null

//4
console.log( console.log(1) && console.log(2) ); //1

//5
console.log( null || 2 && 3 || 4 ); //3


//6
if ( age >= 14 && age <= 90  ) {
    console.log('Ты еще полон сил!')
}; 

//7
if (!(age >= 14 && age <= 90)) {
    console.log('=(')
}; 
if (age < 14 && age > 90) {
    console.log('=(')
}; 

//8
if (-1 || 0) alert( 'first' ); //выполнится
if (-1 && 0) alert( 'second' ); // не выполнится
if (null || -1 && 1) alert( 'third' ); //выполнится
