console.log("Welcome to tic tac toe")
let music=new Audio("music.mp3")
let turn_change =new Audio("ting.mp3")
let game_over=new Audio("gameover.mp3")
let turn ="X"
let gameover=false
const Change_turn=()=>{

    return turn==="X"?"O":"X"
}

const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if ((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!=='')){
            document.querySelector('.Info').innerText=boxtext[e[0]].innerText+" Won"
            game_over.play()
            gameover=true
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="200px"
            document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width="20vw"
        }

    })

}

music.play()
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText=turn
            turn =Change_turn()
            turn_change.play()
            checkWin()
           if(!gameover){
            document.getElementsByClassName("Info")[0].innerText="Turn for " + turn
           }

        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(e=>{
        e.innerText=''
    })
    isgameover=false
    document.querySelector(".line").style.width="0"
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="0"
    document.getElementsByClassName("Info")[0].innerText="Turn for " + turn
})