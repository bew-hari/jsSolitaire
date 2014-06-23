/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Card(newRank, newSuit){
    var self = this;

    var rank = newRank;
    var suit = newSuit;

    self.getRank = function(){return rank; };
    self.getSuit = function(){return suit; };

    var faceUp = false;
    self.isFaceUp = function(){return faceUp; };
    self.flip = function(){faceUp = !faceUp; };
}

function drag(ev){

}

function CardNode(newCard){
    var self = this;
    var card = newCard;

    var prevCard = null;
    var nextCard = null;

    self.getCard = function(){return card;};
    self.setNext = function(next){nextCard = next;};
    self.getNext = function(){return nextCard;};
    self.setPrev = function(prev){prevCard = prev;};
    self.getPrev = function(){return prevCard;};
}

function CardStack(){
    var self = this;

    var top = null;

    self.isEmpty = function(){return (top == null); };

    self.push = function(newCard){
        var card = new CardNode(newCard);
        if (!self.isEmpty()){
            card.setPrev(top);
            top.setNext(card);
        }
        top = card;
    };

    self.pop = function(){
        if (self.isEmpty())
            return null;

        var card = top.getCard();
        top = top.getPrev();

        return card;
    };

    self.peek = function(){
        if (self.isEmpty())
            return null;

        return top.getCard();
    };
}