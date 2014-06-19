/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Spider(){
    var self = this;
    var dealCols = 10;
    var deck = new Deck();

    deck.setup(104,13,1);
    deck.shuffle();

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
            for (var i = 0; i < 10; i++){
                var card = document.createElement("div");
                card.setAttribute("draggable","true");
                card.setAttribute("ondragstart","drag(event)");
                card.className = "testCard";
                card.style.top = offset + "px";
                document.getElementById("spiderPlayAreaCol"+i).appendChild(card);
                if (--cardsLeft == 0) break;
            }
            offset += 20;
        }
    };
}

function drag(ev){
    
}