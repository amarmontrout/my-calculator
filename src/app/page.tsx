'use client';

import { Stack, Button, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [ display, setDisplay ] = useState(0)

  const handleClick = ( value ) => {
    setDisplay( value );
  };

  return (
    <div>
      <Typography variant={'h5'}>The Calculator</Typography>

      <Stack sx={{width: 'fit-content', boxShadow: 'inset 0px 0px 15px rgba(0,0,0,0.8)'}} direction={'column'} style={{ backgroundColor: '#575757', borderRadius: '20px', padding: '10px'}}>
        
        <Stack style={{backgroundColor: '#CEDFCD', margin: '10px', borderRadius: '10px'}}>
          <Typography variant={'body1'} style={{textAlign: 'right', fontSize: '25px', paddingRight: '5px'}}>{ display }</Typography>
        </Stack>
        
        <Stack alignItems={'center'} justifyContent={'center'} direction={'column-reverse'} spacing={1} style={{ margin: '10px' }}>
          
          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleClick(0) } variant={'contained'}></Button>
            <Button onClick={ () => handleClick(0) } variant={'contained'}>0</Button>
            <Button onClick={ () => handleClick('.') } variant={'contained'}>.</Button>
            <Button onClick={ () => handleClick('=') } variant={'contained'}>=</Button>
          </Stack>

          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleClick(1) } variant={'contained'}>1</Button>
            <Button onClick={ () => handleClick(2) } variant={'contained'}>2</Button>
            <Button onClick={ () => handleClick(3) } variant={'contained'}>3</Button>
            <Button onClick={ () => handleClick('+') } variant={'contained'}>+</Button>
          </Stack>
          
          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleClick(4) } variant={'contained'}>4</Button>
            <Button onClick={ () => handleClick(5) } variant={'contained'}>5</Button>
            <Button onClick={ () => handleClick(6) } variant={'contained'}>6</Button>
            <Button onClick={ () => handleClick('-') } variant={'contained'}>-</Button>
          </Stack>
          
          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleClick(7) } variant={'contained'}>7</Button>
            <Button onClick={ () => handleClick(8) } variant={'contained'}>8</Button>
            <Button onClick={ () => handleClick(9) } variant={'contained'}>9</Button>
            <Button onClick={ () => handleClick('x') } variant={'contained'}>x</Button>
          </Stack>

          <Stack direction={'row'} spacing={1}>
            <Button onClick={ () => handleClick(0) } variant={'contained'}>C</Button>
            <Button onClick={ () => handleClick(0) } variant={'contained'}></Button>
            <Button onClick={ () => handleClick(0) } variant={'contained'}></Button>
            <Button onClick={ () => handleClick('/') } variant={'contained'}>/</Button>
          </Stack>

        </Stack>

      </Stack>
    </div>
  ); 
}
