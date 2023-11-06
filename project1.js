const cardArray =[
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    },
    {
        name: 'fries',
        img: 'fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'milkshake.png'
    },
    {
        name: 'pizza',
        img: 'pizza.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIDs = []
const cardWon = []

function createBoard(){
    for(let i =0 ; i<cardArray.length ; i++){
       const card= document.createElement('img')
       card.setAttribute('src' , 'blank.png')
       card.setAttribute('data-id', i )
       card.addEventListener('click',flipCard)
       gridDisplay.append(card)
    }
}
createBoard()

function checkMatch(){
const cards= document.querySelectorAll('img')
const optionOneId = cardChosenIDs[0]
const optionTwoId = cardChosenIDs[1]
if(optionOneId== optionTwoId){
    cards[optionOneId].setAttribute('src', 'blank.png')
    cards[optionTwoId].setAttribute('src', 'blank.png')
    alert('you have clicked the same image!')
}
if(cardChosen[0]==cardChosen[1]){
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'white.png')
    cards[optionTwoId].setAttribute('src', 'white.png')
    cards[optionOneId].removeEventListener('click' , flipCard)
    cards[optionTwoId].removeEventListener('click' , flipCard)
    
    cardWon.push(cardChosen)
} else{
    cards[optionOneId].setAttribute('src', 'blank.png')
    cards[optionTwoId].setAttribute('src', 'blank.png')
    alert('sorry try again!')

}
resultDisplay.innerHTML = cardWon.length
cardChosen = []
cardChosenIDs = []
if(cardWon.length == cardArray.length/2){
    resultDisplay.innerHTML = 'congragulations, you found them all!'
}
}
function flipCard(){
    let cardId= this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIDs.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}