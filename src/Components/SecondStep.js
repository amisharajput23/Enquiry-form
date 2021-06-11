import React, { useContext } from 'react'
import {Button, TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import { useState } from 'react';


export const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [btnDisabled , setBtnDisabled] = useState(true);
    return (
        <div>
            <div>
                 <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(text) => setBtnDisabled(!text.target.value)} />
             </div>
             <div>
           <Button disabled={btnDisabled} variant="contained"onClick ={() => setStep(3)} color="primary" style={{marginTop : 10}}>Next</Button>
           </div>
        </div>
    )
}


export default SecondStep;
