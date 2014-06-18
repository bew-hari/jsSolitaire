/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Spider(){
    var self = this;
    var deck = new Deck();

    deck.setup(104,13,1);
    deck.shuffle();

    self.setup = function(){
        var canvas = document.getElementById("solitaireCanvas");

        var playArea = document.createElement("table");
        playArea.id = "spiderPlayArea";
        for (var i = 0; i < 10; i++){
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
}