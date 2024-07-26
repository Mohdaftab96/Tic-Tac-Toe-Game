let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");



let turn0 = true; // playerX, playerO
let count = 0;

let winPattern = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
]


const resetGame = () =>{
      turn0 = true;
      enableboxes();
      count = 0;
      msgContainer.classList.add("hide");
}



boxes.forEach((box) =>{
      box.addEventListener("click", () => {
            // console.log("button was click");
            if(turn0 === true){
                  box.innerText = "O";
                  turn0 = false;
            }else{
                  box.innerText = "X";
                  turn0 = true;
            }
            box.disabled = "box"; // disabled is liye kiye h hum ki "O" and "X" again n again click krne pe change na ho.
            count++; 



            let isWinner = checkWinner(); // function
            if(count === 9 && !isWinner){
                  gameDraw();
            }
      });   
});

// jeetne ke baad jo remaining boxes ko disabled krenge
const disableboxes = () =>{
      for(let box of boxes){
            box.disabled = true;
      }
}


// reset krne ke liye
const enableboxes = () =>{
      for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
      }
}


const gameDraw = () =>{
      msg.innerText = "Game was draw";
      msgContainer.classList.remove("hide");
      disableboxes();
}





const showWinner = (winner) =>{
      console.log(winner);
      msg.innerText = `Congratulation, Winner is ${winner}`;
      msgContainer.classList.remove("hide");
}


const checkWinner = () =>{
      for(let pattern of winPattern){

            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != " "){
                  if(pos1Val === pos2Val && pos2Val === pos3Val){
                        console.log("winner", pos1Val);
                        showWinner(pos1Val);
                        disableboxes();
                        enableboxes();

                  }
            }          
      }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);



