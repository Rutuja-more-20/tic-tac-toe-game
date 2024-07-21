let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
let cnt=0;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame =() =>{
 turnO=true;
 cnt=0;
 enabledboxes();  
 msgcontainer.classList.add("hide");
};

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        cnt++;
        
        let isWinner=chkwinner();
        if(cnt===9 && !isWinner){
            gamedraw();
        }
    });
});

const gamedraw= ()=>{
    msg.innerText=`Game draw`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const showwinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const chkwinner = ()=>{
    for(let pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!= "" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                //console.log("winner",pos1);
                showwinner(pos1);
                return true;
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);