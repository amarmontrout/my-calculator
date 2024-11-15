'use client';

import { Stack, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [ a, setA ] = useState<number>(0);
  const [ b, setB ] = useState<number>(0);
  const [ display, setDisplay ] = useState<string>('0');
  const [ op, setOp ] = useState<string>('');
  const [ first, setFirst ] = useState<boolean>(true);

  const handleNumber = (e: number) => {
    if ( first === true ) {
      firstNumber(e);
    }
    if ( first === false ) {
      secondNumber(e);
    }
  }

  const handleOp = (e: string) => {
    if ( e === 'Q' ) {
      setOp('')
    } else {
      setDisplay(e);
      setOp(e)
      setFirst(false);
    }
  }
  
  const handleEquals = () => {
    if ( op === '+' ) {
      const value = a + b;
      setDisplay(String(value))
    }

    if ( op === '-' ) {
      const value = a - b;
      setDisplay(String(value))
    }

    if ( op === 'X' ) {
      const value = a * b;
      setDisplay(String(value))
    }

    if ( op === '/' ) {
      const value = a / b;
      setDisplay(String(value))
    }
  }

  function firstNumber(e: number) {
    const prevState = a;
    const newState = Number(`${prevState}${e}`);
    
    if ( e === 10 ) {
      setFirst(true);
    } else {
      setDisplay(String(newState));
      setA(newState);
    }
  }
  
  function secondNumber(e: number) {
    const prevState = b;
    const newState = Number(`${prevState}${e}`);
    
    if ( e === 10 ) {
      setFirst(false);
    } else {
      setDisplay(String(newState));
      setB(newState);
    }
  }

  function clearAll (e: boolean) {
    if (true) {
      setDisplay('0');
      setA(0);
      setB(0);
      setOp('');
      setFirst(true);
    }
  }

  function rlc () {
    if (first === true) {
      let strA = String(a);
      let newA = strA.slice(0, -1)
      setDisplay(newA)
      setA(Number(newA))
    } else {
      let strB = String(b);
      let newB = strB.slice(0, -1)
      setDisplay(newB)
      setB(Number(newB))
    }
  }

  return (
    <div>
      <Typography variant={'h5'}>The Calculator</Typography>

      <Stack sx={{width: 'fit-content', boxShadow: 'inset 0px 0px 15px rgba(0,0,0,0.8)'}} direction={'column'} style={{ backgroundColor: '#575757', borderRadius: '20px', padding: '10px'}}>
        
        <Stack style={{backgroundColor: '#CEDFCD', margin: '10px', borderRadius: '10px'}}>
          <Stack style={{ paddingLeft: '5px' }} direction={'row'} spacing={1}>
            <Typography>{ a }</Typography>
            <Typography>{ op }</Typography>
            <Typography>{ b }</Typography>
          </Stack>
          <Typography variant={'body1'} style={{textAlign: 'right', fontSize: '25px', paddingRight: '5px'}}>{ display || 0 }</Typography>
        </Stack>
        
        <Stack alignItems={'center'} justifyContent={'center'} direction={'column-reverse'} spacing={1} style={{ margin: '10px' }}>
          
          <Stack direction={'row'} spacing={1}>
            <Button variant={'contained'}>.</Button>
            
            <Button onClick={ () => handleNumber(0) } variant={'contained'}>0</Button>
            <Button onClick={ () => handleEquals() } variant={'contained'}>=</Button>
            <Button onClick={ () => handleOp('/') } variant={'contained'}>/</Button>
          </Stack>

          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleNumber(1) } variant={'contained'}>1</Button>
            <Button onClick={ () => handleNumber(2) } variant={'contained'}>2</Button>
            <Button onClick={ () => handleNumber(3) } variant={'contained'}>3</Button>
            <Button onClick={ () => handleOp('+') } variant={'contained'}>+</Button>
          </Stack>
          
          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleNumber(4) } variant={'contained'}>4</Button>
            <Button onClick={ () => handleNumber(5) } variant={'contained'}>5</Button>
            <Button onClick={ () => handleNumber(6) } variant={'contained'}>6</Button>
            <Button onClick={ () => handleOp('-') } variant={'contained'}>-</Button>
          </Stack>
          
          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleNumber(7) } variant={'contained'}>7</Button>
            <Button onClick={ () => handleNumber(8) } variant={'contained'}>8</Button>
            <Button onClick={ () => handleNumber(9) } variant={'contained'}>9</Button>
            <Button onClick={ () => handleOp('X') } variant={'contained'}>x</Button>
          </Stack>

          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => clearAll(true) } variant={'contained'}>AC</Button>
            <Button onClick={ () => firstNumber(10) } variant={'contained'}>1st</Button>
            <Button onClick={ () => secondNumber(10) } variant={'contained'}>2nd</Button>
            <Button onClick={ () => rlc() } variant={'contained'}>DEL</Button>
          </Stack>

        </Stack>

      </Stack>
    </div>
  ); 
}
