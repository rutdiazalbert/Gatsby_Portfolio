var heroes = ['IronMan', 'Hulk', 'Spiderman', 'Capitan America', 'Lobezno', 'Tormenta', 'Fenix'];

var names = ['Tony Stark', 'Bruce Banner', 'Peter Parker', 'Steve Rogers', 'Logan', 'Ororo', 'Jean Grey'];



var heroeNames = [];

var myHeroe = {

    heroe: "",

    name: ""

}



for (var index = 0; index < heroes.length; index++) {

    myHeroe = {

        heroe: "",

        name: ""

    }

    if (heroes[index] === "IronMan"){

        myHeroe.heroe = heroes[index];

        myHeroe.name = names[index];

        heroeNames.push(myHeroe);

    } else if (heroes[index] === "Hulk"){

        myHeroe.heroe = heroes[index];

        myHeroe.name = names[index];

        heroeNames.push(myHeroe);

    } else if (heroes[index] === "Spiderman"){

        myHeroe.heroe = heroes[index];

        myHeroe.name = names[index];

        heroeNames.push(myHeroe);

    }

    else if (heroes[index] === "Tormenta"){

        myHeroe.heroe = heroes[index];

        myHeroe.name = names[index];

        heroeNames.push(myHeroe);

    }

}



console.log(heroeNames);

var animes = ['My heroe academia', 'Attack on Titans', 'One Piece'];



for (let index = 0; index < animes.length; index++) {

    switch(animes[index]){

        case 'My heroe academia' : console.log('My heroe academia', 8); 

        break;

        case 'Attack on Titans' : console.log('Attack on Titans', 9);

        break;

        case 'One Piece' : console.log('One Piece', 10);

        break;

        default: console.log("No hay anime");

        break;

    }

    

}