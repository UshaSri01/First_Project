import express from 'express';
//Cors is using for getting data from different resourse
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post("/Addition", (req, res) => {

  const {n1, n2} =req.body;
  // console.log(req.body);
  // console.log(n1);
  // console.log(n2);
  let add = n1+n2;
  res.status(200).json({ success: true, data: add });
     
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});