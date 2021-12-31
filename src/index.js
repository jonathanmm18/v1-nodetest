import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';

const app = express();

const session=require('express-session');

// middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use('/api', require('./routes/bingo'));



// middlewares para Vue.js roouter modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')))

//  configuracion
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')} `)
})


