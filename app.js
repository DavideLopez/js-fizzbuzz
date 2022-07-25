

// stampare in console i numeri da 1 a 100

for (let i = 0; i < 100 ; i++) {
   
 const numero = i + 1
 
 //  se i + 1 è multiplo di 3 e multiplo di 5 
 if( numero % 3 === 0 && numero % 5 === 0 ) {
    // stampiamo fizzbuzz
    console.log('FizzBuzz')
 } else if( numero % 3 === 0 ) {
//   altrimenti se numero i + 1 è multiplo di 3 
 // stampiamo fizz
     console.log('Fizz')
 } else if( numero % 5 === 0 ) {
//  altrimenti se i + 1 è multiplo di 5 
 // stampiamo buzz
    console.log('buzz')
 } else
 // altrimenti 
 // stampiamo i + 1
 console.log(numero)

}

