let choices=document.querySelectorAll(".choice");
let msg=document.querySelectorAll("#msg");
let userinput=document.querySelectorAll("#user-input");
let compinput=document.querySelectorAll("#comp-input");
let userscore=0;
let compscore=0;

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    let userchoice=choice.getAttribute("id");
    playGame(userchoice);
    


});
});

const playGame=(userchoice)=>{
    console.log(" you click",userchoice);
    const comp=compchoice();
    console.log(" comp click",comp);

    if(userchoice===comp){
        drawgame();
    }

     else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=comp==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=comp==="scissor"?false:true;
        }
        else{
            userWin=comp==="rock"?false:true;
        }
        showWinner(userWin);
     }
    
   
}



const showWinner=(userWin)=>{
    if(userWin){
        console.log(` you won `);
        msg.innerText="you won"
        userscore++;
        userinput.innerText=userscore;
        
    }
    else{
        console.log("you lose");
        msg.innerText="lose";
        compscore++;
        compinput.innerText=compscore;

    }
}

const compchoice=()=>{
    const value=["scissor","paper","rock"];
   const randIdx= Math.floor(Math.random()*3);
   return value[randIdx];

}

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game is draw !!! try again";

    
}