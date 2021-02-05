const target = document.getElementById("target");
let array = ["simple", "clear", "smart", "strong"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () =>{
    const letter = document.createElement("span");
    target.appendChild(letter)

    letter.classList.add("letter");
    letter.style.opacity = "0";
    letter.style.animation = "anim 5s ease forwards";
    letter.textContent = array[wordIndex][letterIndex]

    //retirer la letrre au bout de 2s
    setTimeout(() => {
        letter.remove();
    },2000)
}

const loop =() =>{
    setTimeout(() => {
        if (wordIndex >= array.length){  // si le dernier mot du tableau est atteint
            wordIndex = 0;      //repart au premier mot
            letterIndex = 0;    //repart à la premère lettre
            loop();             //relance la boucle
        }
        else if (letterIndex < array[wordIndex].length){ // si il reste encore des lettres dans le mot
            createLetter();
            letterIndex++;      //faire appel à la lettre suivante
            loop();             //relance la boucle
        } else {
            letterIndex = 0;        //quand la dernière lettre est partie
            wordIndex++;        //passe au mot suivant
            setTimeout(() => {
                loop();         //relance la boucle
            },2000);         //toutes les 2s
        }
    },80);      //interval d'apparition (0.08s)
}

//APPEL DE LA FONCTION
loop();


