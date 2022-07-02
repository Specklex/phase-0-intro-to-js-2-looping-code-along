function writeCards(names, gifts){
    const messages = [];
    for(let i = 0; i < names.length; i++){
       messages.push(`Thank you, ${names[i]}, for the wonderful ${gifts} gift!`);
    }
    return messages;
}

function countDown(){
   let number = 10;
    while (number >= 0 ){
        console.log(number)
        number--;
    }
    
}
