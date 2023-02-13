import react, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [number, setNumber] = useState({
    num1: '',
    num2: ''
  });
  const [result,setResult] =useState();
  const [SResult,setSResult] = useState();
  
  let name ,value;
  const HandleNumberInput = (event) => {
    name=event.target.name;
    value=event.target.value;
    setNumber({...number, [name]:value})
  }

  const addition =async ()=>{
    let a = parseInt(number.num1);
    let b = parseInt(number.num2);
    setResult(a+b);
    try{

      const data = await axios.post('http://localhost:8000/Addition', {n1:a,n2:b});
      setSResult(data.data.data);
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div className="w-50 p-3">
      <div className="d-flex">
        <label  className="form-label w-50">Enter First Number</label>
        <input type="number" className="form-control" id="Number1" name='num1' value={number.num1} onChange={HandleNumberInput}></input>
      </div>
      <div className="d-flex mt-4">
        <label  className="form-label w-50">Enter Second Number</label>
        <input type="number" className="form-control" id="Number2" name='num2' value={number.num2} onChange={HandleNumberInput}></input>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={addition}>Submit</button>
      </div>
      <div className='mt-4'>
        <h4>Your Addition Result(from server) is: <span>{result}</span></h4>
        <h4>Your Addition Result(from client) is: <span>{SResult}</span></h4>
      </div>
    </div>
  );
}

export default App;
