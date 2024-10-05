import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'The man who survived both mustard gas and pepper spray is a seasoned veteran now.'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'I told my wife she should embrace her mistakes. She gave me a hug.'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'Why do we tell actors to “break a leg?” Because every play has a cast.'
        },
        {
            id: 4,
            title: 'Joke 4',
            content: 'I’m reading a book on the history of glue. I just can’t seem to put it down.'
        },
        {
            id: 5,
            title: 'Joke 5',
            content: 'I only know 25 letters of the alphabet. I don’t know y.'
        },
    ];
    res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });