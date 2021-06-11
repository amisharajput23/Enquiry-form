import React, { useContext } from 'react'
import {Button, TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

const ThirdStep=() =>{
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>
             <div>
                 <TextField id="outlined-basic" label="Date of Birth" variant="outlined" />
             </div>
             <div>
           <Button variant="contained"onClick ={() => setStep(4)} color="primary">Next</Button> 
           </div>
        </div>
    )
}

export default ThirdStep;
