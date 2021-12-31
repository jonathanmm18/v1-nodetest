import express from 'express';
import { route } from 'express/lib/application';
const router = express.Router();

import Player from '../models/player';
import Bingo from '../models/bingo';
var bingo = new Bingo();

router.get('/player/create/:id', (req, res) => {  
   const _id = req.params.id;
   bingo.addPlayer(_id);
   res.send(bingo.getPlayer(_id));
});
router.get('/player/bingo/:id', (req, res) => {
    const _id = req.params.id;
    var player_id = bingo.getPlayer(_id);
  
    if(player_id){
        var bingo_status = player_id.callBingo();
        if(bingo_status){
            res.send({msj:"BINGO!!! You are a winner"});
        }else{
            res.send({msj:"you are not a winner yet!"});
        }
    }else{
        res.send({msj:"you are not a player"});
    }
    
 });

router.get('/player/list', (req, res) => {
    res.send({players: bingo.getPlayers()});
 });

router.get('/bingo/number', (req, res) => {
    const _number = bingo.callNumber();
    res.send({number: _number, bingo: bingo.bingo}); 
 });
 



module.exports = router;    