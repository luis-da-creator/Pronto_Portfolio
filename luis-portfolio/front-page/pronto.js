console.log(document)

const var1 = document.getElementById("Text1")
console.log(var1)

const Button = document.getElementById("Btn")
console.log(Button)

const dblick = document.getElementById("dblclick")
console.log(dblick)

const img = document.getElementById("larawan")
console.log(img)

const Input = document.getElementById("BEBU")
console.log(Input)

Button.addEventListener(
    "click",function(){
        var1.innerHTML = "Programmer ngani"
    }

)
Button.addEventListener(
    "dblclick",function(){
        var1.style.color = "cyan"
    }
)

Input.addEventListener(
    "input",function(){
        var1.innerHTML =
        "typing" + Input.value

    }
)


img.addEventListener(
    "larawan",function(){
        var1.innerHTML = "Your mouse out the picture"
    }
)

Input.addEventListener(
    "Anton",function (){
        var1.innerHTML = 
        ""+ Input.value + "!"
    }
)
img.addEventListener(
    "larawan",function(){
        var1.innerHTML =
        ""+Input.value
    }
)


Input.addEventListener(
    "focus", function (){
        Input.style.backgroundColor = "Yellow"
    }
)

Input.addEventListener(
    "blur", function (){
        Input.style.backgroundColor = "white"
    }
)