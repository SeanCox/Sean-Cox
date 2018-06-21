const express = require('express');
const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log('Example app listening on port 3000!'));
