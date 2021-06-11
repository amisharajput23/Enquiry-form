import React, {useContext, useState} from 'react'
import {Button } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export const FourthStep = () => {

    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [btnDisabled , setBtnDisabled] = useState(true);
    return (
        <div>
              <div>
              <div class="form-floating">
                    <textarea class="form-control" id="floatingTextarea2" style={{height: "100px"}} onChange={(event => (setBtnDisabled(!event.target.value)))}></textarea>
                    <label for="floatingTextarea2">Achievements</label>
                </div>
             </div>
             <div>
           <Button variant="contained" onClick ={() => setStep(5)} disabled={btnDisabled}   style={{marginTop : 10}} color="primary">Next</Button>
           </div>
        </div>
    )
}

export default FourthStep;
