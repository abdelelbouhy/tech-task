// import path from 'path';
import ejs from 'ejs';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import * as childProcess from 'child_process';

const app = express();

const storedData = {};

app
    .set('view engine', 'html')
    .engine('html', ejs.renderFile)
    .set('views', path.resolve(__dirname, '../views'))
    .use('/dist', express.static(path.resolve(__dirname, '../../dist/')))
    .listen(3000, () => {
        const command = /linux|darwin/.test(process.platform) ? 'open' : process.platform === 'win32' ? 'start' : '';

        // if (command) {
        //     childProcess.exec(`${command} -a "Google Chrome" http://localhost:3000`, () => {
        //
        //     });
        //
        //     console.log('http://localhost:3000');
        // } else {
        //     console.log('http://localhost:3000');
        // }

    });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req, res) => {
    res.render('index');
});

app.post('/addSnippet', (req, res) => {
    storedData[req.body.hash] = req.body.value;
    res.send(req.body)
});

app.post('/getMovieItem', (req, res) => {

});


