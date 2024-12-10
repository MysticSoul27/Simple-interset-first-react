import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const validateInput = (inputTag) =>{
    console.log(inputTag, typeof inputTag);
    const {name, value} = inputTag
    console.log(name);
    console.log(typeof value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(value.match(/^\d+(\.\d+)?$/));

    if(name == 'principle'){
      setPrinciple(value)
      if(value.match(/^\d+(\.\d+)?$/)){
        setinvalidPrinciple(false)
      }else{
        setinvalidPrinciple(true)
      }
    }else if(name == 'rate'){
      setRate(value)
      if(value.match(/^\d+(\.\d+)?$/)){
        setinvalidRate(false)
      }else{
        setinvalidRate(true)
      }
    }else if(name == 'year'){
      setYear(value)
      if(value.match(/^\d+(\.\d+)?$/)){
        setinvalidYear(false)
      }else{
        setinvalidYear(true)
      }
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    console.log("button clicked");
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please enter the form completely!!!")
    }
  }

  const handleReset = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setinvalidPrinciple(false)
    setinvalidRate(false)
    setinvalidYear(false)
  }
 




  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light p-5 rounded'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your Simple Interest Easily !</p>
          <div className='bg-warning text-center p-5 rounded'>
            <h1>&#8377; {interest}</h1>
            <p className='fw-bolder'>Total simple interest</p>
          </div>
          <form className='mt-5'>
            {/* principle amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-principle" label="&#8377; Principle Amount" variant="outlined" />
            </div>
            {/* Invalid principle */}
            {
              invalidPrinciple  && <div className="text-danger fw-bolder mb-3">
              Invalid Principle Amount !!!
            </div>
            }
            {/* Rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* Invalid rate */}
            {
              invalidRate  && <div className="text-danger fw-bolder mb-3">
              Invalid rate Amount !!!
            </div>
            }
            {/* year */}
            <div className='mb-3'>
              <TextField value={year || ""} name='year' onChange={(e)=>validateInput(e.target)} className='w-100' id="outlined-year" label="Time period (Yr)" variant="outlined" />
            </div>
            {/* Invalid Year */}
            {
              invalidYear  && <div className="text-danger fw-bolder mb-3">
              Invalid Year !!!
            </div>
            }
            <Stack direction="row" spacing={2}>
              <Button type="submit" onClick={handleCalculate} disabled ={invalidPrinciple || invalidRate || invalidYear} className='bg-dark' variant="contained" style={{width: "50%", height: "70px"}}>Calculate</Button>
              <Button onClick={handleReset} className='border border-dark text-dark' variant="outlined" style={{width: "50%", height: "70px"}}>RESET</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
