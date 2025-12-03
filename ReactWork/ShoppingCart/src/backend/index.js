import express from 'express';
import cors from 'cors';

const app = express();


const port = 3000;
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
 
  res.send('Hello World! This is a server');
});

app.get('/message', (req, res) => {
  res.send('This is a message');
});

app.post('/register',(req,res)=>{
    const result = req.body;
    console.log(result);
    res.json({msg:"Regisration data is called"})
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});