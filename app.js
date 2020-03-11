console.log("Script loaded")

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', fillbox));

var turn = 0;
var Xplayer = [];
var Oplayer = [];

var winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function fillbox(cell){
    if (turn % 2 == 0){
        this.innerHTML = "X";
        turn = turn + 1;
        var clickedCell = cell.target;
        Xplayer.push(parseInt(clickedCell.getAttribute('index')));
        Xplayer.sort(function(a, b) { return a - b })
        checkWinner(Xplayer);
        this.removeEventListener("click", fillbox);
        

    }
    else {
        this.innerHTML = "O";
        turn = turn + 1;
        var clickedCell = cell.target;
        Oplayer.push(parseInt(clickedCell.getAttribute('index')));
        Oplayer.sort(function(a, b) { return a - b })
        checkWinner(Oplayer);
        this.removeEventListener("click", fillbox)
    }
};
function checkWinner(player){
    
    if (turn >= 5) {
        
        for (i = 0; i < winCondition.length; i++) {
            var sets = winCondition[i];  // winning hand
            var setFound = true;

            for (r = 0; r < sets.length; r++) {
                var found = false;
                
                for (s = 0; s < player.length; s++) {
                    if (sets[r] == player[s]) {
                        found = true;
                    }
                }

                if (found == false) {
                    setFound = false;
                    break;
                    }
            }
            if (setFound == true) {
                        if (turn % 2 == 0){
                            alert("Player O has won.");
                            location.reload();
                        } else {
                            alert("Player X has won.");
                            location.reload();
                        }
                        break;
            }
    }
    if(turn == 9 && setFound == false){
        alert("It's a draw!");
        location.reload();
        }
    }
};