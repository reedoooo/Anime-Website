
    
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
    
    extractInfo = function() {
        // Get the value of the input element
        var inputValue = document.getElementById("input-element").value;
  
        // Set the innerHTML of the output div to the value of the input element
        document.getElementById("output-div").innerHTML = inputValue;
      }

