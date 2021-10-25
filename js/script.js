const row = document.querySelector('.row');


for(let i = 1; i <= 100; i++){
    const box = document.createElement('div');
    box.className = 'box';
    
    if(!(i % 3) && !(i % 5)){
        box.innerHTML = 'fizzbuzz';
        box.classList.add('fizzbuzz');
    }else if(!(i % 3)){
        box.innerHTML = 'fizz';
        box.classList.add('fizz');
    }else if(!(i % 5)){
        box.innerHTML = 'buzz';
        box.classList.add('buzz');
    }else{
        box.innerHTML = i;
    }

    row.append(box);
    console.log(box);
}