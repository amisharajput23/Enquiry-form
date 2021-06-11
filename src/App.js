import React, { useContext } from 'react';
import FirstStep from './Components/FirstStep';
import './App.css';
import SecondStep from './Components/SecondStep';
import {Stepper, StepLabel, Step, StepConnector } from '@material-ui/core';
import ThirdStep from './Components/ThirdStep';
import  FourthStep  from './Components/FourthStep';
import { multiStepContext} from './StepContext';
import FifthStep from './Components/FifthStep';
import SixthStep from './Components/SixthStep'
function App() {
   const {currentStep, finalData} = useContext(multiStepContext);
  function showStep(step){
    switch(step) {
      case 1:
        return <FirstStep/>;
      case 2:
        return <SecondStep/>;
      case 3:
        return <ThirdStep/>;
      case 4:
        return <FourthStep/>;
      case 5: 
      return <FifthStep/>;
      case 6:
        return <SixthStep/>;
      default: 
        return "Unknown step";
      
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color:'black'}}>Enquiry Form</h1>
        <div className="center-stepper">
          <Stepper alternativeLabel activeStep={currentStep - 1} orientation="horizontal" connector={true}>
            <Step>
              <StepLabel>first step</StepLabel>
            </Step>
            <Step>
              <StepLabel>second step</StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>
        </div>
  {showStep(currentStep)}
      </header>
    </div>
  );
}

export default App;
