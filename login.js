function myFunction() {
  // retreive the form element, create empty text string variable, concatenates value to string 'text'
    var x = document.getElementById("form");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
    }
    document.getElementById("ptag").innerHTML = text;
  }

  function showAnimeImage(divElement) {
    // create image element and set its src attribute to the URL of an anime image
    var imgElement = document.createElement("img");
    imgElement.src = "https://images6.alphacoders.com/415/thumb-1920-415519.jpg";
  
    // append the image to the div element. The divElement is the parent and the appendChild make the imgElement the child
    divElement.appendChild(imgElement);
  }
  
  function promptAndShowAnimeImages() {
    var numImages = prompt("How many anime characters do you want to see?");
  
    // get a reference to the div element
    var divElement = document.getElementById("anime-div");
  
    // use a loop to show the image that many times
    for (var i = 0; i < numImages; i++) {
      showAnimeImage(divElement);
    }

    document.write(numImages + " anime images wow!");
  }
  
  // call the function to show the images
  promptAndShowAnimeImages();
/*
  function showAnimeImage() {
// create an image element and set its src attribute to the URL of an anime image
var imgElement = document.createElement("img");
imgElement.src = "https://images6.alphacoders.com/415/thumb-1920-415519.jpg";

// append the image to the body of the page
document.body.appendChild(imgElement);
}

function promptAndShowAnimeImages() {
var numImages = prompt("How many anime characters do you want to see?");

// use a loop to show the image that many times
for (var i = 0; i < numImages; i++) {
showAnimeImage();
}
}

// call the function to show the images
promptAndShowAnimeImages(); */
