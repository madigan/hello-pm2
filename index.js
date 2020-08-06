const app = require('express')();

app
    .get('/:name', (req, res) => res.send(`Hello ${req.params.name}!`))
    .listen(80, console.log);