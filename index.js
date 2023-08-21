
//detecting button press.

var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i =0; i<numberOfDrums;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
        var hold = this.innerHTML;

        check(hold);

       buttonAnimation(hold);

    });

}

//detecting keyboard press.


document.addEventListener("keydown", function(event){
   check(event.key);
   buttonAnimation(event.key);
});



// the main function.

function check(key){
    switch (key) {
        case "w":
             var audio = new Audio('sounds/tom-1.mp3');
             audio.play();
             
            break;

        case "a":
             var audio = new Audio('sounds/tom-2.mp3');
             audio.play();

            break;

        case "s":
             var audio = new Audio('sounds/tom-3.mp3');
             audio.play();

            break;

        case "d":
             var audio = new Audio('sounds/tom-4.mp3');
             audio.play();

            break;

        case "j":
             var audio = new Audio('sounds/snare.mp3');
             audio.play();

            break;

        case "k":
             var audio = new Audio('sounds/crash.mp3');
             audio.play();

            break;

        case "l":
             var audio = new Audio('sounds/kick-bass.mp3');
             audio.play();

            break;
    
        default:
            console.log(key);
            break;
    }
}


function buttonAnimation(currentKey){
    var keyPressed = document.querySelector("."+currentKey);
    keyPressed.classList.add("pressed");
    setTimeout(function(){
        keyPressed.classList.remove("pressed");
    }, 100)


}





