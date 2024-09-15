let boxes = document.querySelectorAll(".box");
let winnermessage = document.querySelector(".p1");
let restbtn = document.querySelector("#Reset");
let newgamebtn = document.querySelector("#newgame")
let turnO = true;
let data = [
    [0, 1, 2],
    [3, 5, 4],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let count = 0;
boxes.forEach(function (box) {
    box.addEventListener("click", function (id) {
        if (turnO) {
            box.innerHTML = "O"
            turnO = false
            box.disabled = true
        }
        else {
            box.innerHTML = "X"
            turnO = true
            box.disabled = true
        }
        count++
        //console.log(count)
        checkwinner()
    })
});
function checkwinner() {
    for (let pattern of data) {
        let position = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;
        if (position != "" && position2 != "" && position3 != "") {
            if (position == position2 && position2 == position3) {
                winnermessage.innerHTML = `winner is ${position}`
                // This condition will not work if write this
                //boxes.disabled = true
                disabledboxes()
                newgamebtn.style.display = "block";
            }
        }
        if(count == boxes.length){
            winnermessage.innerHTML = "Draw"
        }
    }
}
function disabledboxes() {
    for (let box of boxes) {
        box.disabled = true
    }
  
}
function enableboxes() {
    for (let box of boxes) {
        box.disabled = false
    }
}
restbtn.addEventListener("click", function () {
    for (let box of boxes) {
        turnO = true
        box.innerHTML = "";
        winnermessage.innerHTML = ""
        newgamebtn.style.display = "none"
        enableboxes()
        count = 0

    }
});
newgamebtn.addEventListener("click",function(){
    for(let box of boxes){
        let turno  = true
        box.innerHTML = ""
         winnermessage.innerHTML = ""
        newgamebtn.style.display = "none"
        enableboxes()
        count = 0
    }   
});
