var computer = Math.floor(Math.random()*100);

console.log(computer);



function game(){
    var user = document.querySelector(".guess").value;
    console.log(user);
    
    
    if (user > computer) {
        document.getElementById("guessResponse").innerHTML = "<br> You're too high.";
    } else if (computer > user) {
        document.getElementById("guessResponse").innerHTML = "<br> You're too low.";
    } else if (computer == user) {
        document.getElementById("guessResponse").innerHTML = "<br> You're a genius or something!!!!";
    } else {
        document.getElementById("guessResponse").innerHTML = "<br> LIke OMG Becky pic something!!!!";
    }
}