for(let i=0; i<100; i++){
    if(parseInt(i % 15) == 0){
        console.log('FizzBuzz')
    }else if(parseInt(i % 3)== 0){
        console.log('Fizz')
    }else if (parseInt(i % 5) == 0){
        console.log('Buzz')
     }
     else {
         console.log(i)
     }
}