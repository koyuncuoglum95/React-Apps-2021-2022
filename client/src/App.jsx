import { useState } from 'react'
import axios from 'axios';
import './App.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';



function App() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState([]);


  const chatHandler = () => {
    axios.post('http://localhost:5000', {
      prompt: prompt 
    })
    .then(function (res) {
      console.log(res);
      setAnswer(res.data);
    })
    .catch(function (error) {
      console.log(error);
    })


  }


  return (
    <div>
      <Typography variant="h2" component="h2" style={{marginLeft: '45.6rem', marginTop: '-1rem'}}>MT OpenAI Chat</Typography>
    <Box
    sx={{
      width: 700,
      height: 750,
      backgroundColor: 'white',
      marginLeft: '38rem',
      borderRadius: '10px',
      marginTop: '2rem',
    }}
  >
    <Typography variant='p' component="p" color="black" fontSize={20} textAlign={'center'}>{answer.bot}</Typography>
  </Box>
  <TextField id="outlined-basic" variant="outlined" onChange={(e) => setPrompt(e.target.value)} style={{width: '600px', marginTop: '5rem', marginLeft: '40.5rem', backgroundColor: 'white', borderRadius: '6px'}}/>
    <Button style={{marginTop: '6rem', marginLeft: '1rem', color: 'white'}} onClick={chatHandler}><SendIcon></SendIcon></Button>
  </div>
  )
}

export default App
