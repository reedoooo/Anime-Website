
    
    let userPrompt = confirm("Is it alright if I ask you something?"); //creates variable userPrompt and sets value to a confirmation form yes or no
    let favoriteAnime = prompt("What's your favorite anime?"); //create variable and sets value to a confirmation form, answer contingent
    let userAns = favoriteAnime;
    if (userPrompt) { //conditional if the user presses yes
        console.log("Great!");  //display great on console
    } else { //conditional pt 2
        console.log("You suck"); //otherwise display you suck on console
    }



    callFunction = function(){

        while (!userAns) {
            userAns = prompt("What's your favorite anime?!");
            document.getElementById("dope2").innerHTML = userAns;
            if (!userAns) {
              alert("You must provide an answer!");
            } else {
              document.getElementById("dope").innerHTML = userAns;
            }
        }
    }



    extractInfo = function() {
        // Get the value of the input element
        var inputValue = document.getElementById("input-element").value;
  
        // Set the innerHTML of the output div to the value of the input element
        document.getElementById("output-div").innerHTML = inputValue;
      }

      /*  
          let anythingAnime = prompt("Anything animated counts!");
             if (favoriteAnime === "Naruto") { //conditional if the answer to the prompt is Naruto
            console.log("Welcome!"); //have the console log display welcome
        } else if (favoriteAnime === "" || favoriteAnime != null){
            document.getElementById("dope").innerHTML = favoriteAnime;
        } else if (anythingAnime != null || anythingAnime === ""){
            console.log(`I also love ${anythingAnime}! Welcome to the website!`); // otherwise display I love (answer from form submission). welcome to website
            document.getElementById("dope2").innerHTML = anythingAnime;
        } else if (userAns === String(anythingAnime)) {
            document.getElementById("dope2").innerHTML = anythingAnime;
        } else {
            favoriteAnime;
        }
        */
