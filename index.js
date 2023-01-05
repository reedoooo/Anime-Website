
    
    let userPrompt = confirm("Is it alright if I ask you something?"); //creates variable userPrompt and sets value to a confirmation form yes or no
    let favoriteAnime = prompt("What's your favorite anime?"); //create variable and sets value to a confirmation form, answer contingent
    
    if (userPrompt) { //conditional if the user presses yes
        console.log("Great!");  //display great on console
    } else { //conditional pt 2
        console.log("You suck"); //otherwise display you suck on console
    }

    callFunction = function(){
        if (favoriteAnime === "Naruto") { //conditional if the answer to the prompt is Naruto
            console.log("Welcome!"); //have the console log display welcome
        } else if (favoriteAnime === ""){
            prompt("Anything animated counts!");
            document.getElementById("dope").innerHTML = favoriteAnime;
        } else if (favoriteAnime != null){
            console.log(`I love ${favoriteAnime}! Welcome to the website!`); // otherwise display I love (answer from form submission). welcome to website
            document.getElementById("dope").innerHTML = favoriteAnime;
        }
    }
    function myFunction() {
        var x = document.getElementById("frm1");
        var text = "";
        var i;
        for (i = 0; i < x.length ;i++) {
          text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
      }

