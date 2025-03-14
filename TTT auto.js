let a1 = document.getElementById("1");
let a2 = document.getElementById("2");
let a3 = document.getElementById("3");
let a4 = document.getElementById("4");
let a5 = document.getElementById("5");
let a6 = document.getElementById("6");
let a7 = document.getElementById("7");
let a8 = document.getElementById("8");
let a9 = document.getElementById("9");
let result = document.getElementById("result");
let agng = document.getElementById("buttons");
let player1 = localStorage.getItem("player1");
player1 = player1.toUpperCase();
function check(){
    if((a1.innerText == "X" && a2.innerText == "X" && a3.innerText == "X")|| (a1.innerText == "O" && a2.innerText == "O" && a3.innerText == "O") ){
        result.className = "rc";
        a4.disabled = true;
        a5.disabled = true;
        a6.disabled = true;
        a7.disabled = true;
        a8.disabled = true;
        a9.disabled = true;
        if((a1.innerText == "X" && a2.innerText == "X" && a3.innerText == "X")){
            result.innerText = `${player1} conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else if((a1.innerText == "O" && a2.innerText == "O" && a3.innerText == "O")){        
            result.innerText = `Computer conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
    }
    else if((a1.innerText == "X" && a4.innerText == "X" && a7.innerText == "X")|| (a1.innerText == "O" && a4.innerText == "O" && a7.innerText == "O") ){ 
        result.className = "rc";
        a2.disabled = true;
        a3.disabled = true;
        a5.disabled = true;
        a6.disabled = true;
        a8.disabled = true;
        a9.disabled = true;
        if(a1.innerText == "X" && a4.innerText == "X" && a7.innerText == "X"){
            result.innerText = `${player1}  conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
            }
        else{
            result.innerText = `Computer conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
            }
    }
    else if((a4.innerText == "X" && a5.innerText == "X" && a6.innerText == "X")|| (a4.innerText == "O" && a5.innerText == "O" && a6.innerText == "O") ){
        result.className = "rc";
        a1.disabled = true;
        a2.disabled = true;
        a3.disabled = true;
        a7.disabled = true;
        a8.disabled = true;
        a9.disabled = true;
        if(a4.innerText == "X" && a5.innerText == "X" && a6.innerText == "X"){
            result.innerText = `${player1}  conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else{
            result.innerText = `Computer conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
    }
    else if((a7.innerText == "X" && a8.innerText == "X" && a9.innerText == "X")|| (a7.innerText == "O" && a8.innerText == "O" && a9.innerText == "O") ){        
        result.className = "rc";
        a1.disabled = true;
        a2.disabled = true;
        a3.disabled = true;
        a4.disabled = true;
        a5.disabled = true;
        a6.disabled = true;
        if(a7.innerText == "X" && a8.innerText == "X" && a9.innerText == "X"){            
            result.innerText = `${player1}  conquered the match with grandeur`;    
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else{
            result.innerText = `Computer conquered the match with grandeur`;   
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
    }
    else if((a3.innerText == "X" && a6.innerText == "X" && a9.innerText == "X")|| (a3.innerText == "O" && a6.innerText == "O" && a9.innerText == "O") ){        
        result.className = "rc";
        a1.disabled = true;
        a2.disabled = true;
        a4.disabled = true;
        a5.disabled = true;
        a7.disabled = true;
        a8.disabled = true;
        if(a3.innerText == "X" && a6.innerText == "X" && a9.innerText == "X"){
            result.innerText = `${player1}  conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else{
            result.innerText = `Computer conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html"; 
        }
    }
    else if((a1.innerText == "X" && a5.innerText == "X" && a9.innerText == "X")|| (a1.innerText == "O" && a5.innerText == "O" && a9.innerText == "O") ){        
        result.className = "rc";
        a2.disabled = true;
        a3.disabled = true;
        a4.disabled = true;
        a6.disabled = true;
        a7.disabled = true;
        a8.disabled = true;
        if(a1.innerText == "X" && a5.innerText == "X" && a9.innerText == "X"){
            result.innerText = `${player1}  conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else{
            result.innerText = `Computer conquered the match with grandeur`;        
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
    }
    else if((a2.innerText == "X" && a5.innerText == "X" && a8.innerText == "X")|| (a2.innerText == "O" && a5.innerText == "O" && a8.innerText == "O") ){        
        result.className = "rc";
        a1.disabled = true;
        a3.disabled = true;
        a4.disabled = true;
        a6.disabled = true;
        a7.disabled = true;
        a9.disabled = true;
        if(a2.innerText == "X" && a5.innerText == "X" && a8.innerText == "X"){
            result.innerText = `${player1}  conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else{
            result.innerText = `Computer conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";      
        }
    }
    else if((a3.innerText == "X" && a5.innerText == "X" && a7.innerText == "X")|| (a3.innerText == "O" && a5.innerText == "O" && a7.innerText == "O") ){        
        result.className = "rc";
        a1.disabled = true;
        a2.disabled = true;
        a4.disabled = true;
        a6.disabled = true;
        a8.disabled = true;
        a9.disabled = true;
        if(a3.innerText == "X" && a5.innerText == "X" && a7.innerText == "X"){
            result.innerText = `${player1}  conquered the match with grandeur`;    
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
        else{    
            result.innerText = `Computer conquered the match with grandeur`;
            let newgame = document.createElement("a");
            let again = document.createElement("a");
            agng.appendChild(newgame);
            agng.appendChild(again);
            newgame.innerText = "New Game";
            again.innerText = "Play Again";
            newgame.className = "ng";
            again.className = "ag";
            again.href = "TTT auto.html";
            newgame.href = "TTT home page.html";
        }
    }
    else if(count == 9){
        result.innerText = "The Game Ended in Deadlock";
        result.className = "draw";      
        let newgame = document.createElement("a");
        let again = document.createElement("a");
        agng.appendChild(newgame);
        agng.appendChild(again);
        newgame.innerText = "New Game";
        again.innerText = "Play Again";
        newgame.className = "ng";
        again.className = "ag";
        again.href = "TTT auto.html";
        newgame.href = "TTT home page.html"; 
    }
}
let count = 0;
let arr = [a1,a2,a3,a4,a5,a6,a7,a8,a9];
let newval;
function random(){
    if(count % 2 == 1){
        let variant = Math.floor(Math.random()*arr.length);
        let temp = arr[variant];
    if(temp != undefined || temp != null){
        newval = arr[variant];
    }
    else if(temp == undefined || temp == null){
        random();
    }
    }
}
function change1(){
    if(count % 2 == 0){
        a1.innerText = "X";   
    }
    count += 1;
    check();   
    a1.onclick = null;
    arr[0] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);     
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;     
}
function change2(){
    if(count % 2 == 0){
        a2.innerText = "X";
    }
    count += 1;
    check();   
    a2.onclick = null;
    arr[1] = undefined;
    console.log(arr);
    random();    
    console.log(newval);
    let ind = arr.indexOf(newval);     
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;     
}
function change3(){
    if(count % 2 == 0){
        a3.innerText = "X";
    }
    count += 1;
    check();   
    a3.onclick = null;
    arr[2] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;     
}
function change4(){
    if(count % 2 == 0){
        a4.innerText = "X";       
    }
    count += 1;
    check();   
    a4.onclick = null;
    arr[3] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;
}
function change5(){
    if(count % 2 == 0){
    a5.innerText = "X";            
    }
    count += 1;
    check();   
    a5.onclick = null;
    arr[4] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;
}
function change6(){
    if(count % 2 == 0){
        a6.innerText = "X";       
    }
    count += 1;
    check();   
    a6.onclick = null;
    arr[5] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;
}
function change7(){
    if(count % 2 == 0){
        a7.innerText = "X";
    }
    count += 1;
    check();   
    a7.onclick = null;
    arr[6] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;
}
function change8(){
    if(count % 2 == 0){
        a8.innerText = "X";    
    }
    count += 1;
    check();   
    a8.onclick = null;
    arr[7] = undefined;
    console.log(arr);
    random();
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;           
}
function change9(){
    if(count % 2 == 0){
        a9.innerText = "X";
    }
    count += 1;
    check();   
    a9.onclick = null;
    arr[8] = undefined;
    console.log(arr);
    random(); 
    console.log(newval);
    let ind = arr.indexOf(newval);
    newval.innerText = "O";
    check();
    count += 1;
    arr[ind] = undefined;
    console.log(arr);
    newval.onclick = null;       
}
