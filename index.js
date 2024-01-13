let color = document.getElementById("color");
let shape = document.getElementById("shape");
let outer = document.getElementById("outer");
let inner = document.getElementById("inner");


function changecolor(){
    let colorstring = "#";
    let string = "abcdef0123456789";
    for(let i = 0; i<6; i++){
         colorstring += string.charAt(Math.floor(Math.random() *string.length));
    }
    outer.style.backgroundColor = colorstring
}
function changeshape() {
    let shapes = ["Circle", "Square", "Triangle","Hexagon"];
    let finalshape = shapes[Math.floor(Math.random() * shapes.length)];
    switch (finalshape) {
      case "Circle":
        inner.style.clipPath = " polygon( 50% 0%,100% 25%,100% 75%,50% 100%, 0% 75%,0% 25%)circle(50% at 50% 50%)";
        // inner.style.borderRadius = "50%";
        break;
      case "Square":
       inner.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
        // inner.style.borderRadius = "0";
        break;
      case "Triangle":
        inner.style.borderRadius = "0";
        inner.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        break;
      case "Hexagon":
        inner.style.clipPath =
          "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)";
        break;
    }
}

color.addEventListener("click",changecolor);
shape.addEventListener("click", changeshape);
