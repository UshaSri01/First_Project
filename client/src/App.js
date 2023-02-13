import react, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import img from './Assest/img.jpg'
import Navbar from './component/Navbar'

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
    <div className='p-2'>
      <Navbar />
      <div className='d-flex mt-4'>
        <img src={img} alt="..." className="img-thumbnail " style={{width:'300px',height:'300px',objectFit:'cover'}} />
        <div className='w-75 contant'>
          <h3>James Smith</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>
    <div className="w-50 p-3 mt-4">
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
    </div>
  );
}

export default App;
