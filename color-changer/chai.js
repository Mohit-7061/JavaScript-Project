const buttons = document.querySelectorAll('.button');


const bodys = document.querySelector('body');

buttons.forEach(function(button){
     console.log(button);
    button.addEventListener('click',function(e){
        if(e.target.id === 'grey'){
            bodys.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            bodys.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'white'){
            bodys.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            bodys.style.backgroundColor = e.target.id
        }
    })
})