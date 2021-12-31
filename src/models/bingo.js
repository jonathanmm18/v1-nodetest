import Player from '../models/player';
export default class Bingo{
    constructor(){
        this.players = [];
        this.min = 1;
        this.max = 75;
        this.bingo = false;
        this.callNumbers = [];

    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    addPlayer(id){
        this.players.push(new Player(id));
    }
    getPlayers(){
        return this.players;
    }
    getPlayer(id){
        return this.players.find(p => p.id === id);
    }
    getPlayerCards(id){
        return this.getPlayer(id).getCards();
    }
    callNumber(){
        if( this.callNumber.length === 75 ) return false;

        var number = this.getRndInteger(this.min, this.max);
        // generate a number how is not in the list of callNumbers
        while(this.callNumbers.find(n => n === number)){
            number = this.getRndInteger(this.min, this.max);
        }
        this.callNumbers.push(number);
        // update all the cards of the players
        this.players.forEach(player => {
            player.findNumber(number);
        });
        // return the number chosen
        return number;
    }
}