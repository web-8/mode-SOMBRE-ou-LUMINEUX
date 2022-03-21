console.log('connecté'); 

//je sélectionne et je stocke mes éléments
const switchBox = document.querySelector('.switch');//la div switch
console.log(switchBox);//je vérifie

const btn = document.querySelector('.btn');//la div btn
console.log(btn);//je vérifie

const icone = document.querySelector('i');//l'icone
console.log(icone);//je vérifie

const container = document.querySelector('.container');//le container
console.log(container);//je vérifie

const titre = document.querySelector('h1');//le titre
console.log(titre);//je vérifie

//je soumets mes éléments à une action lors du clic
switchBox.addEventListener('click', function(){ //j'informe lors du click
    console.log('Div cliquée'); //je vérifie
    btn.classList.toggle('btn-change');//je déplace le cercle qui est dans le boutton
    //classList.toggle sert à déplacer, changer
    //il se déplace grâce aussi aux positions données dans mon css avec l'élément .btn-change
    icone.classList.toggle('icone-change');//pareil je déplace mon icone 
    //grâce aux positionnement donné dans le css avec .icone-change
    icone.classList.toggle('fa-sun');//je change mon icone lune en icone soleil

    //maintenant je vais modifier les couleurs de fonds
    //les couleurs sont dans le css avec .switch-change, je peux actionner ici
    switchBox.classList.toggle('switch-change');
    //je fais pareil pour le container
    container.classList.toggle('container-change');
    //Pour le titre, je lui donne une condition
    if(titre.innerText === "SOMBRE"){
        titre.innerText = "LUMINEUX";
    }else{
        titre.innerText = "SOMBRE";
    }

});

