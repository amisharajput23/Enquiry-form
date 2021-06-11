import React, {useContext, useState} from 'react'
import {Button, TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

const ThirdStep=() =>{
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [btnDisabled, setBtnDisabled] = useState(true);
    return (
        <div>
             <div>
                 <TextField type="date"  id="outlined-basic" label="Date of birth" onChange={(e) => setBtnDisabled(!e.target.value)}       InputLabelProps={{
                     shrink: true,
                 }}/>
             </div>
             <div>
           <Button disabled={btnDisabled} variant="contained"onClick ={() => setStep(4)} color="primary" style={{marginTop : 10}}   >Next</Button>
           </div>
        </div>
    )
}

export default ThirdStep;
