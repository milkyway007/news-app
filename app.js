const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const PORT = 4000;

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache');

app.get('/register', (request,response) => {
  response.render('register');
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
