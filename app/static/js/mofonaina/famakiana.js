let apparance = document.querySelector('#apparance'),
    mofonaina = document.querySelector('#mofonaina');


apparance.onchange = function (){
    let value = apparance.value;
    if(value === 'black'){
        mofonaina.style.color = 'white';
    }
    else{
        mofonaina.style.color = 'black';
    }
    mofonaina.style.backgroundColor = value;
}

document.querySelector('#retour').onclick = function ()  {
    history.back();
}