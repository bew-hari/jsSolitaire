/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Card(newRank, newSuit){
    var self = this;

    var rank = newRank;
    var suit = newSuit;

    self.getRank = function(){return rank; };
    self.getSuit = function(){return suit; };
}