const express = require('express');
const server = express();
server.set('view engine', 'ejs');
const port = 8080;


server.use(express.static(__dirname + '/public'));

server.get('/', (req, res) => {
    res.render('pages/home')
})

server.get('/projects', (req, res) => {
    res.render('pages/projects')
})


server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})