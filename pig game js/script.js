'use strict';
// selecting buttons 
const dice = document.querySelector('.dice')
const roll = document.querySelector('.btn--roll')
const hold = document.querySelector('.btn--hold')
const again =  document.querySelector('.btn--new')

//selecting elements 
const player_0 = document.querySelector('.player--0')
const player_1 = document.querySelector('.player--1')
const global_score_0 = document.getElementById('score--0')
const global_score_1 = document.getElementById('score--1')
const current_score_0 =  document.getElementById('current--0')
const current_score_1 =  document.getElementById('current--1')

let playing, global_score, currrent, active_player

// function for again button
const init = function(){
global_score_0.textContent = 0
global_score_1.textContent = 0
playing = true
global_score = [0,0]
currrent = 0
active_player = 0
dice.classList.add('hidden')
current_score_0.textContent=0
current_score_1.textContent=0
player_0.classList.remove('player--winner')  
player_1.classList.remove('player--winner')
player_1.classList.remove('player--active')
player_0.classList.add('player--active')
}

init()

//switch player function 
const switch_player = function(){
    document.getElementById(`current--${active_player
    }`).textContent=0
    currrent=0
    active_player= active_player===0 ? 1 : 0
    player_0.classList.toggle('player--active')
    player_1.classList.toggle('player--active')
}

// rolling dice 
roll.addEventListener('click',function(){
    if(playing){
    const random_dice_number = Math.trunc(Math.random()*6)+1
    dice.classList.remove('hidden')
    dice.src=`dice-${random_dice_number}.png`

    if(random_dice_number!==1){
    currrent = currrent + random_dice_number
    document.getElementById(`current--${active_player
    }`).textContent = currrent
    }else{
       switch_player()
        }
    }
    })
    
    //hold button 
hold.addEventListener('click', function(){
    if(playing){
    global_score[active_player] = global_score[active_player] + currrent
    document.getElementById(`score--${active_player}`).textContent=global_score[active_player]
    if(global_score[active_player] >= 100){
        playing = false
        dice.classList.add('hidden')
        document.querySelector(`.player--${active_player}`).classList.add('player--winner')
        document.querySelector(`.player--${active_player}`).classList.remove('player--active')
    }
    else{
        switch_player()
    }
    }
})

// new game 
again.addEventListener('click',init)