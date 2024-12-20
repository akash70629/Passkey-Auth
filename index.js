const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static('./public'));
app.use(express.json());

//States
const userStore = {}

app.post('/register', (req, res) => {
    const {usernsme, password} = req.body;
    const id = `${Date.now()}`

    //hthis line is for fithub steak 

    const user = {
        usernsme,
        password,
        id
    }

    userStore[id] = user;

    console.log(`Register Success`);

    return res.json({id})

})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);

    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);

    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);

    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);

    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
 
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);


    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);


    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    

    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);    console.
    console.log(`Server running on port ${PORT}`);


    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
 
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on port ${PORT}`);
    

})