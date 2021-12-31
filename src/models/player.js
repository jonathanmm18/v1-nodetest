import Card from '../models/card';
export default class Player{

    constructor(id){
        this.id = id;
        this.card = new Card();
        this.card.generateCardNumbers();
        this.winner = false;
    }
    getId(){
        return this.id;
    }
    getCards(){
        return this.card;
    }
    findNumber(number){
        return this.card.findNumber(number);
    }
    callBingo(){
        var bingo = this.card.bingo();
        if(bingo){
            this.winner = true;
        }
        return bingo;
    }
}