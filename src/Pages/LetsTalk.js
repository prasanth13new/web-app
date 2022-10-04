import { Button, TextField } from '@mui/material'
import React from 'react'
import './letstalk.css'


function LetsTalk() {
    return (
        <div className='talk_container' >
            <h2>Tell your Quories briefly</h2>
            <form className="form_container" >
                <input className="text_field" label="Your Name" variant="outlined" placeholder='Your Name' />
                <input className="text_field" label="Email" variant="outlined" placeholder='Email'  />
                <input className="text_field2" label="Your Quories" variant="outlined" placeholder='Your Quories'  />
            
                <Button variant="outlined" size="large">Submit</Button>
            </form>
        </div>
    )
}

export default LetsTalk