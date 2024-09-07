// console.log('working')

// let box = document.querySelectorAll('div.box');
// let boxElem = Array.from(box);
// let isChange = false;

// const wining_red = [32, 26, 20, 14];

// boxElem.forEach((b, i)=>{
//     b.innerText = i+1
// })

// box.forEach((b, i)=>{
//     b.addEventListener('click', ()=>{
//         if(isChange){
//             b.style.background = "yellow";
//         } else {
//             b.style.background = "red";
//             if(boxElem[wining_red[0]].style.background == "red" && boxElem[wining_red[1]].style.background == "red" && boxElem[wining_red[2]].style.background == "red" && boxElem[wining_red[3]].style.background == "red"){
//                 alert("Red Wins Successfully");
//             }
//         }
//         isChange = !isChange;
//     })
// })




let box = document.querySelectorAll('div.box');
let boxElem = Array.from(box);
let isChange = false;

let user1Red = [];

let user2Yellow = [];

// boxElem.forEach((b, i)=>{
//     b.innerText = i+1
// })

let sum = 0;

box.forEach((b, i)=>{
    b.addEventListener('click', ()=>{
        if(isChange){
            b.style.background = "yellow";
            b.style.pointerEvents = "none";
            user2Yellow.push(i+1);
            console.log (user2Yellow);
        } else {
            b.style.background = "red";
            b.style.pointerEvents = "none";
            user1Red.push(i+1);
            console.log(user1Red);
        }
        isChange = !isChange;
        if(user1Red.length > 3){
            for(i=0;user1Red.length > i; i++){
                sum += user1Red[i]
                if(sum === 96){
                    // console.log(sum/user1Red.length);
                    if((sum/user1Red.length) === 24){
                        console.log("Red Wins the game Successfully")
                    }
                } else {
                    console.log("continue game")
                } 
            }
        }
    })
})

let reset = document.querySelector('button.reset-btn').addEventListener('click', ()=>{
    box.forEach((b)=>{
        b.style.background = "white";
        b.style.pointerEvents = "unset";

        user1Red = [];
        user2Yellow = [];
    })
})