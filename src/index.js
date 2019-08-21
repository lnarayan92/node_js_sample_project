import "dotenv/config";
import express from 'express';
import cors from 'cors';

console.log(process.env.MY_SECRET);
console.log('Hello Node Project - changed');

const app = express();

app.use(cors());

app.get('/', (req,res)=>{
 res.send("its a get req");
});

app.listen(process.env.PORT, () =>
  console.log("node app is listening on port 3000!"),
);
