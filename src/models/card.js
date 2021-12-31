export default class Card {
    constructor(){
        this.x_dim = 5;
        this.y_dim = 5;
        this.card = [];
        this.card_interval = [ [1,15],[16,30],[31,45],[46,60],[61,75] ];       
        for (let i = 0; i < this.x_dim; i++) {
            this.card.push(new Array(this.x_dim));
        }
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    generateCardNumbers(){
        for (let i = 0; i < this.x_dim; i++) {
            for (let j = 0; j < this.y_dim; j++) {
                var number = this.getRndInteger( this.card_interval[i][0], this.card_interval[i][1] );
                while( Array.isArray(this.card[i]) && this.card[i].find(n => n === number)  ){
                    number = this.getRndInteger( this.card_interval[i][0], this.card_interval[i][1] );
                }
                this.card[i][j] = [number,false];
            }
        }
        this.card[2][2] = '';
    }

    findNumber(number){
        for (let i = 0; i < this.x_dim; i++) {
            for (let j = 0; j < this.y_dim; j++) {
               if(this.card[i][j][0] === number ){
                this.card[i][j][1] = true;
                return true;
               }
            }
        }
        return false;
    }

    bingo(){
        for (let i = 0; i < this.x_dim; i++) {
            for (let j = 0; j < this.y_dim; j++) {
               if(this.card[i][j][1] === false ){
                return false;
               }
            }
        }
        this.bingo = true;
        return true;
    }

}