// Creating image elements with a random number inserted via literals
// Used to randomize the display of class .sketches-section, which is used to
// Produce a continguous flowing image composed of separate images

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

let imageArray = [];
let counter = 0;

// TODO: Refactor this later, this way is clean-looking but quite slow

// while loop for ensuring that non-repeating numbers are used
while (counter < 5) {    

    let newRandom = getRandomNum(5);
    let newImg = `img/box${newRandom}.png`;

    if (imageArray.includes(newImg)) {
        continue;
    }
    else {
        imageArray.push(newImg);
    }
    
    counter++;
}

// Counter is for iterating through the elements by class name
// getElementById() is best practice but I've stuck with this for the time being
counter = 0;

// forEach for dynamically creating the elements each time page is loaded
imageArray.forEach(image => {

    let newImage = document.createElement("IMG");
    let boxElement = document.getElementsByClassName("box")[counter];
    boxElement.appendChild(newImage).src = image;

    counter++;

    }
);
