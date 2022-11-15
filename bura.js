class Card{
    constructor(color,image,value){
        this.color = color
        this.image = image
        this.value = value
    }
}
let tb = document.querySelector(".tb")
let pcards = document.querySelectorAll(".pim")
let arr = [
    new Card("aguri","aguri-10.png",10),
    new Card("aguri","aguri-tuzi.png",11),
    new Card("aguri","aguri-valeti.png",2),
    new Card("aguri","aguri-dama.png",3),
    new Card("aguri","aguri-karoli.png",4),
    new Card("guli","guli-10.png",10),
    new Card("guli","guli-tuzi.png",11),
    new Card("guli","guli-valeti.png",2),
    new Card("guli","guli-dama.png",3),
    new Card("guli","guli-karoli.png",4),
    new Card("kvavi","kvavi-10.png",10),
    new Card("kvavi","kvavi-tuzi.png",11),
    new Card("kvavi","kvavi-valeti.png",2),
    new Card("kvavi","kvavi-dama.png",3),
    new Card("kvavi","kvavi-karoli.png",4),
    new Card("jvari","jvari-10.png",10),
    new Card("jvari","jvari-tuzi.png",11),
    new Card("jvari","jvari-valeti.png",2),
    new Card("jvari","jvari-dama.png",3),
    new Card("jvari","jvari-karoli.png",4),
]

let randomindexarr = []
while(randomindexarr.length != 20){
    let randnumber = parseInt(Math.random() * 20)
    if(randomindexarr.indexOf(randnumber) == -1){
        randomindexarr.push(randnumber)
    }
}

for(let i = 0; i < 6; i++){
    
    pcards[i].src = arr[randomindexarr[i]].image
}

for(let i of pcards){
    i.addEventListener("click",function(){
        if(i.style.border == "3px solid black"){
            i.style.border = "none"
        }
        else{
        i.style.border = "3px solid black"
        }
    })
}
let card1 = document.querySelector(".card1")
let card2 = document.querySelector(".card2")

let p1score = 0
let p2score = 0
var score1 = 0
var score2 = 0
console.log(card2)
let svla2 = document.querySelector(".svla2")
let gataneba1 = document.querySelector(".gataneba1")
let gachra1 = document.querySelector(".gachra1")
svla2.addEventListener("click",function(){
    for(let i = 3; i < pcards.length; i++){
        if(pcards[i].style.border == "3px solid black"){
            card2.innerHTML = pcards[i].src
            let source = pcards[i].src.split("").reverse().join("")
            let  delindex = source.indexOf("/")
            newsource4= source.slice(0,delindex).split("").reverse().join("")
            card2.src = newsource4
            score1 = arr.filter(x=> x.image == newsource4)[0].value
            console.log(score1,newsource4)
        }
    }
})
let newsource3 = ""
let newsource4 = ""
gataneba1.addEventListener("click",function(){
    for(let i = 0; i < 3; i++){
        if(pcards[i].style.border == "3px solid black"){
            card2.innerHTML = pcards[i].src
            let source = pcards[i].src.split("").reverse().join("")
            let  delindex = source.indexOf("/")
             newsource3= source.slice(0,delindex).split("").reverse().join("")
            card1.src = newsource3
            score2 = arr.filter(x=> x.image == newsource3)[0].value
            console.log(score2)
            p1score += score2
            p1score += score1
        }
    }
    console.log(p1score,p2score)
})


var mycard = ""
var yourcard = ""

gachra1.addEventListener("click",function(){
    for(let i = 0 ; i < 3; i++){
            if(pcards[i].style.border == "3px solid black"){
                card2.innerHTML = pcards[i].src
                let source = pcards[i].src.split("").reverse().join("")
                let  delindex = source.indexOf("/")
                let newsource= source.slice(0,delindex).split("").reverse().join("")
                card1.src = newsource  
                mycard = card1.src
                yourcard = card2.src
                console.log(newsource)
                console.log(newsource4)
            }
        }
})
