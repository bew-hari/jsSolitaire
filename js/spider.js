/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Spider(){
    var self = this;
    var dealCols = 10;
    var deck = new Deck(104,13,1);
    deck.shuffle();

    var board = new Array(dealCols);
    for (var i = 0; i < dealCols; i++)
        board[i] = new CardStack();

    var deal = function(){
        var cardsToDeal = 44;
        while (cardsToDeal){
            for (var i = 0; i < dealCols; i++){
                board[i].push(deck.dealCard());

                if (--cardsToDeal == 0) break;
            }
        }
    };

    self.setup = function(){
        var canvas = document.getElementById("solitaireCanvas");

        var playArea = document.createElement("table");
        playArea.id = "spiderPlayArea";
        for (var i = 0; i < dealCols; i++){
            var col = document.createElement("td");
            col.id = "spiderPlayAreaCol" + i;
            col.className = "spiderPlayAreaCol";
            playArea.appendChild(col);
        }

        var dealArea = document.createElement("table");
        dealArea.id = "spiderDealArea";
        for (i = 0; i < 3; i++){
            col = document.createElement("td");
            col.id = "spiderDealAreaCol" + i;
            dealArea.appendChild(col);
        }

        canvas.appendChild(playArea);
        canvas.appendChild(dealArea);
    };

    self.testDeal = function(){
        var cardsLeft = 44;
        var offset = 0;
        while (cardsLeft){
            for (var i = 0; i < dealCols; i++){
                var card = document.createElement("div");
                card.setAttribute("draggable","true");
                card.setAttribute("ondragstart","drag(event)");
                card.className = "testCard";
                if (cardsLeft <= 10)
                    card.classList.add("testCardUp");
                else
                    card.classList.add("testCardDown");
                card.style.top = offset + "px";
                document.getElementById("spiderPlayAreaCol"+i).appendChild(card);
                if (--cardsLeft == 0) break;
            }
            offset += 20;
        }
    };


}

