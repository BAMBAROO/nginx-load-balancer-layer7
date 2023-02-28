const app = require('express')();
const env = process.env.VALUE;
const port = process.env.PORT;
app.get('/', (req,res) => {
	res.send(`APPID: ${port}, home page says hello!!!`)
});

app.get('/admin', (req, res) => {
	res.send(`APPID ${port}, ADMIN page only choosen people can see this page!!!`)
});

app.get('/env', (req,res) => {
	res.send(`superhero ${env}`)
});

app.listen(8000, ()=> {console.log("server is running")});
