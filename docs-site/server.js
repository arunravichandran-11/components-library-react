const express = require('express');
const { func } = require('prop-types');
const app = express();

app.use(express.static('dist'));
app.get('*', (req, res) => {
    res.sendFile('./dist/index.html', { root: __dirname });
});

app.listen(3200, function(req, res) {
    console.log('app served');
});
