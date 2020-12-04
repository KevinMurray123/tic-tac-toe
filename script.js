"use strict";

let turn = 1;
let cellValues = ['11', '12', '13', '21', '22', '23', '31', '32', '33']

if(turn == 1){
    document.getElementById("turn").textContent = "It's X's Turn"
}{
    document.getElementById("turn").textContent = "It's O's Turn"
}
for(;;){
    document.getElementById("bongofeet").play()
}


function placeShape(cell){
    //When X places something.
    if(turn == 1){
        for(let i = 0 ; i < cellValues.length ; i++){
            if(cellValues[i] == cell && cellValues[i] != "O"){
                document.getElementById(cell).textContent = "X"
                cellValues[i] = "X";
                document.getElementById("turn").textContent = "It's O's Turn"
                turn *= -1;
            }
        }
        checkForWinX();
        
        checkForTie()
    // When O places something.
    }else{        
        for(let i = 0 ; i < cellValues.length ; i++){
            if(cellValues[i] == cell && cellValues[i] != "X"){
                document.getElementById(cell).textContent = "O"
                cellValues[i] = "O";
                document.getElementById("turn").textContent = "It's X's Turn"
                turn *= -1;
            }
        }
        checkForWinO();
    }
}

function checkForWinX(){
    if(cellValues[0] == "X" && cellValues[1] == "X" && cellValues[2] == "X"){
        xWin();
        document.getElementById(11).classList.add("highlight");
        document.getElementById(12).classList.add("highlight");
        document.getElementById(13).classList.add("highlight");
    }
    else if(cellValues[3] == "X" && cellValues[4] == "X" && cellValues[5] == "X"){
        xWin();
        document.getElementById(21).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(23).classList.add("highlight");
    }
    else if(cellValues[6] == "X" && cellValues[7] == "X" && cellValues[8] == "X"){
        xWin();
        document.getElementById(31).classList.add("highlight");
        document.getElementById(32).classList.add("highlight");
        document.getElementById(33).classList.add("highlight");
    }
    else if(cellValues[0] == "X" && cellValues[3] == "X" && cellValues[6] == "X"){
        xWin();
        document.getElementById(11).classList.add("highlight");
        document.getElementById(21).classList.add("highlight");
        document.getElementById(31).classList.add("highlight");
    }
    else if(cellValues[1] == "X" && cellValues[4] == "X" && cellValues[7] == "X"){
        xWin();
        document.getElementById(12).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(32).classList.add("highlight");
    }
    else if(cellValues[2] == "X" && cellValues[5] == "X" && cellValues[8] == "X"){
        xWin();
        document.getElementById(13).classList.add("highlight");
        document.getElementById(23).classList.add("highlight");
        document.getElementById(33).classList.add("highlight");
    }
    else if(cellValues[0] == "X" && cellValues[4] == "X" && cellValues[8] == "X"){
        xWin();
        document.getElementById(11).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(33).classList.add("highlight");
    }
    else if(cellValues[2] == "X" && cellValues[4] == "X" && cellValues[6] == "X"){
        xWin();
        document.getElementById(13).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(31).classList.add("highlight");
    }
}

function checkForWinO(){
    if(cellValues[0] == "O" && cellValues[1] == "O" && cellValues[2] == "O"){
        oWin();
        document.getElementById(11).classList.add("highlight");
        document.getElementById(12).classList.add("highlight");
        document.getElementById(13).classList.add("highlight");
    }
    else if(cellValues[3] == "O" && cellValues[4] == "O" && cellValues[5] == "O"){
        oWin();
        document.getElementById(21).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(23).classList.add("highlight");
    }
    else if(cellValues[6] == "O" && cellValues[7] == "O" && cellValues[8] == "O"){
        oWin();
        document.getElementById(31).classList.add("highlight");
        document.getElementById(32).classList.add("highlight");
        document.getElementById(33).classList.add("highlight");
    }
    else if(cellValues[0] == "O" && cellValues[3] == "O" && cellValues[6] == "O"){
        oWin();
        document.getElementById(11).classList.add("highlight");
        document.getElementById(21).classList.add("highlight");
        document.getElementById(31).classList.add("highlight");
    }
    else if(cellValues[1] == "O" && cellValues[4] == "O" && cellValues[7] == "O"){
        oWin();
        document.getElementById(12).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(32).classList.add("highlight");
    }
    else if(cellValues[2] == "O" && cellValues[5] == "O" && cellValues[8] == "O"){
        oWin();
        document.getElementById(13).classList.add("highlight");
        document.getElementById(23).classList.add("highlight");
        document.getElementById(33).classList.add("highlight");
    }
    else if(cellValues[0] == "O" && cellValues[4] == "O" && cellValues[8] == "O"){
        oWin();
        document.getElementById(11).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(33).classList.add("highlight");
    }
    else if(cellValues[2] == "O" && cellValues[4] == "O" && cellValues[6] == "O"){
        oWin();
        document.getElementById(13).classList.add("highlight");
        document.getElementById(22).classList.add("highlight");
        document.getElementById(31).classList.add("highlight");
    }
}

function checkForTie(){
    let count = 0;
    for(let i = 0 ; i < cellValues.length ; i++){
        if(cellValues[i] == "X" || cellValues[i] == "O"){
            count++;
        }
    }
    if(count == 9){
        document.getElementById("winner").textContent = "No One Wins!!!"
        document.getElementById("turn").textContent = ""
        document.getElementById("wow").play()
    }
}

function xWin(){
    document.getElementById("winner").textContent = "X Wins!!!"
    document.getElementById("turn").textContent = ""
    document.getElementById("wow").play()
}

function oWin(){
    document.getElementById("winner").textContent = "O Wins!!!"
    document.getElementById("turn").textContent = ""
    document.getElementById("wow").play()
}

function resetGame(){
    turn = 1;
    cellValues = ['11', '12', '13', '21', '22', '23', '31', '32', '33'];
    document.getElementById("winner").textContent = ""
    document.getElementById("11").textContent = ""
    document.getElementById("12").textContent = ""
    document.getElementById("13").textContent = ""
    document.getElementById("21").textContent = ""
    document.getElementById("22").textContent = ""
    document.getElementById("23").textContent = ""
    document.getElementById("31").textContent = ""
    document.getElementById("32").textContent = ""
    document.getElementById("33").textContent = ""
    document.getElementById(11).classList.remove("highlight")
    document.getElementById(12).classList.remove("highlight")
    document.getElementById(13).classList.remove("highlight")
    document.getElementById(21).classList.remove("highlight")
    document.getElementById(22).classList.remove("highlight")
    document.getElementById(23).classList.remove("highlight")
    document.getElementById(31).classList.remove("highlight")
    document.getElementById(32).classList.remove("highlight")
    document.getElementById(33).classList.remove("highlight")
}

function playRandomSound(){
    switch(Math.floor(Math.random() * 10)){
        case(0): 
            document.getElementById("bongofeet").play();
            break;
        case(1): 
            document.getElementById("bite").play();
            break;
        case(2): 
            document.getElementById("boing").play();
            break;
        case(3): 
            document.getElementById("flip").play();
            break;
        case(4): 
            document.getElementById("hop").play();
            break;
        case(5): 
            document.getElementById("slip").play();
            break;
        case(6): 
            document.getElementById("splash").play();
            break;
        case(7): 
            document.getElementById("couin").play();
            break;
        case(8): 
            document.getElementById("strings").play();
            break;
        case(9): 
            document.getElementById("gobble").play();
            break;
    }
    
}