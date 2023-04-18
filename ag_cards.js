"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Tutorial Case

   Author: Jaedan
   Date:  4/17/23 
   
   Filename: ag_cards.js


   Custom Object Classes
   
   pokerGame
      The pokerGame object contains properties and methods for the game
      of draw poker

   pokerDeck
      The pokerDeck object contains an array of poker cards and methods
      for shuffling and drawing cards from the deck.

   pokerHand
      The pokerHand object contains an array of poker cards drawn from a
      poker deck. The methods associated with the object include the ability 
      to calculate the value of the hand and to mark cards to be discarded,
      replaced with new cards from a poker deck.

   pokerCard
      The pokerCard object contains properties and methods associated with
      individual poker cards including the card rank, suit, and value.
   
	
*/

/* The pokerGame Object */
var pokerGame = {
   currentBank: null,
   currentBet: null,


   placeBet: function() {
      this.currentBank -= this.currentBet;
      return this.currentBank;
   }
};

/* Constructor function for poker cards */
function pokerCard(cardSuit, cardRank) {
   this.suit = cardSuit;
   this.rank = cardRank;
   this.rankValue = null;
}

/* Constructor function or poker decks */
function pokerCard() {
   this.cards = new Array(52);

   var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
   var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

   var cardCount = 0;
   for (var i = 0; i <4; i++) {
      for (var j = 0; j < 12; j++) {
         this.cards[cardCount] = new pokerCard(suits[i], ranks[j]);
         this.cards[cardCount].rankValue = j+2;
         cardCount++;
      }
   }

   //Method to randomly sort the deck
   this.shuffle = function() {
      this.cards.sort(function() {
         return 0.5 - Math.random();
      });
   };
}