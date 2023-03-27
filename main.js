// [x] Functies declareren

function congratulate() {
    console.log('Gefeliciteerd!');
}

function giveKisses() {
    console.log('Smak');
}

// [x] Functies aanroepen

congratulate();
// doe dingen
congratulate();
// weer dingen
congratulate();
giveKisses();

// [x] Functies met parameters (parameters plaatsen wij tussen de ()   )
function congratulateColleague(name) {
    console.log('Gefeliciteerd' + name + '!');
}

congratulateColleague('Marjan');
congratulateColleague( 'Mitchell');
congratulateColleague( 'Bas');
congratulateColleague('Kay');

// [x] Return values
// width: 4
// Length: 6
function area(width, length){
    const outcome = width*length;

    return outcome;
}

const livingRoom = area(4, 6);
const kitchen = area(12,4);
const bathroom = area(4, 2);

const houseDescription = 'De woonkamer is ' + livingRoom + ' m2, de keuken is ' + kitchen + ' m2 en de bathroom is ' + bathroom + ' m2.'

console.log(houseDescription);

// wanneer je parameter aanroept zoals in area het geval is noem je het argumenten
// [] Regular vs Arrow functions

const area1 = function (width, length){

    return width*length;
}

const area2 = (width, length) => width * length;

// of const area2 = (width, length) =>
// return width * length;
