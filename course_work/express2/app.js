import express from 'express';

const app = express();

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'My Website',
        message: 'Hello from EJS',
        people: ['Mimi', 'Dado', 'Dumba']
    });
});

app.listen(8000, () => console.log('Server started'));