/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Deck(){
    var self = this;

    var numCards;
    var cards;

    self.setup = function(numOfCards, numRank, numSuit){
        numCards = numOfCards;
        cards = new Array(numCards);

        var n = 0;
        while(numOfCards > 0){
            for (var i = 1; i <= numSuit; i++){
                for (var j = 1; j <= numRank; j++){
                    cards[n] = new Card(j,i);
                    n++;
                    numOfCards--;
                    if (numOfCards == 0) break;
                }
            }
        }
    };

    self.shuffle = function(){
        var rand;
        var tempCard;

        for (var i = numCards - 1; i > 0; i--){
            rand = Math.ceil(Math.random()*i);
            tempCard = cards[i];
            cards[i] = cards[rand];
            cards[rand] = tempCard;
        }
    };
}