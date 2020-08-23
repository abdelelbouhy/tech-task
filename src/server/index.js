import path from 'path';
import ejs from 'ejs';
import express from 'express';

const app = express();

app
    .set('view engine', 'html')
    .engine('html', ejs.renderFile)
    .set('views', path.resolve(__dirname, '../views'))
    .use('/dist', express.static(path.resolve(__dirname, '../../dist/')))
    .get('/', (req, res) => {
        res.render('index.html');
    })
    .listen(4000, () => console.log('App listening on port 4000'));
