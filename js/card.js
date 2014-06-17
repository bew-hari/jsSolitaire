/**
 * Created by bewharichanwong on 6/17/14 AD.
 */

function Card(rank, suit){
    var self = this;

    var rank = rank;
    var suit = suit;

    self.getRank = function(){return rank; };
    self.getSuit = function(){return suit; };
}