const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('./public'));
app.use(express.json());

//States
const userStore = {}

// app.post('/register', (req, res) => {
//     const {usernsme, password} = req.body;
//     const id = `${Date.now()}'
// })



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})