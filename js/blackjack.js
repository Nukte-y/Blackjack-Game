


function generator(max,min){        //return random integer value between given interval
return Math.floor(Math.random()*(max-min+1)+min);
};

var player;                        //defined outside of function, so they can hold data coming from seperate functions
var dealer;
var hit;

function playGame(){

    alert("Your game started. Good Luck!");
        dealer=generator(11,2);
        player=generator(21,4);
    alert(`Table: ${dealer}, Player: ${player}`);  //Deal the cards to player

    if(player==21){
        alert(`BLACKJACK! ✨🎊🥳✨🎊You win!`);     //don't forget semicolon
    }
    else{
        playerPlay();
    };

}

function tablePlay() {

    alert(`Table: ${dealer}, Player: ${player}`);
        if(dealer<17){
            do {    
                dealer+=generator(11,2);
                alert(`Table: ${dealer}, Player: ${player}`);
                    if(dealer>player){
                        break;
                    }
            } while (dealer<=21);
        };
        
        player>dealer && dealer<21 ? alert(`Player Wins✨✨🥳✨✨`) :
        player==dealer ? alert(`You are even ⚖`) :
        dealer>21 ? alert(`Player Wins✨✨🥳✨✨`) :
        alert(`You Lost!💣`);      
        

};

function playerPlay(){

    do {
        hit=confirm(`Hit again?`);
            if(hit){ 
                player+=generator(11,2);
                alert(`Table: ${dealer}, Player: ${player}`); 

                    if(player<21){
                        playerPlay(); 
                    }
                    else if(player==21){
                        alert(`Blackjack!!!🤑 Now it's Table's turn!`);
                        tablePlay();
                    }
                    else{
                        alert(`You Lost!💣`); 
                    }
            }
            else{
                alert(`Now it's Table's turn! `);
                tablePlay();
            }

            break;    
    } 
    while (hit);
    
};


// Get the button element
var startGameBtn = document.querySelector('#start-game');

// Add event listener to generate button
startGameBtn.addEventListener('click', playGame);    

        
