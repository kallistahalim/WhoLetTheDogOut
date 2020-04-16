//set up variable of people who can take the dog out
    //Nenad - Kallista

var hooman = ["Kallista", "Nenad"];


//set up randomizer to determine(by computer) who will walk the dog
    //Math.floor(Math.random) * number of indexes in variable above
        //if that person is picked, the other person has to do dishes and clean the kitchen

document.onkeypress = function() {
    var computerDecision = hooman[Math.floor(Math.random()* hooman.length)];
    console.log(computerDecision);
    document.querySelector("#button").innerHTML = computerDecision;
}

//show it on the browser