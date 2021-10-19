const container = document.getElementById("container");
const x = "500px";
const y = "500px";
const defaultColor = "grey";
let color = defaultColor;
let colorState = "normal";
let slider = document.getElementById("myRange");
let output = document.getElementById("slideText");

//function creates grid based on slider value
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    //loops through aray of grid items to apply eventlistener
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        
        //on mouseover it will check the colorState then apply respective color.
        cell.addEventListener("mouseover", function(event){

            //standard color application
            if (colorState === "normal"){
            event.target.style.backgroundColor = color;
            
            //random color application
            } else if (colorState === "rainbow") {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                let color = "#" + randomColor; 
                event.target.style.backgroundColor = color;
            }
        } )
        container.appendChild(cell).className = "grid-item";    
        }
    };

//set up standard grey color mode
let noir = document.getElementById("classic");
noir.onclick = function(){
    color = defaultColor;
    colorState = "normal";
}
//set up rainbow mode
let takashi = document.getElementById("rainbow");
takashi.onclick = function(){
    colorState = "rainbow";
}    
//set up eraser
let erase = document.getElementById("eraser");
erase.onclick = function (){
    colorState = "normal";
    color = "white";
}


//reset the grid function
let clear = document.getElementById("clearBtn");
clear.onclick = function(){
    var elements = document.getElementsByClassName('grid-item');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = "";
      }
    }

//apply slider value to slideText
output.innerHTML = slider.value;


slider.oninput = function() {
    output.innerHTML = this.value;

    slider = this.value;
    console.log(this.value);
    var elements = document.getElementsByClassName('grid-item');
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.backgroundColor = "";
          elements[i].style.padding = y / slider.value;

        }
    makeRows(this.value, this.value);


}

console.log(slider.value);

makeRows(slider.value, slider.value);





