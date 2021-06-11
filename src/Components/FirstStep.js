import React, { useContext }from 'react'
import { Button } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    return (
        <div>
         <Button variant="contained" onClick ={() => setStep(2)} color="primary">Start</Button>   
        </div>
    )
}


export default FirstStep;
