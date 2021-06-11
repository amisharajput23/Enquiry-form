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
import { makeStyles } from '@material-ui/core/styles';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function App() {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }));

  function getSteps() {
    return ['Get Started', 'Section 1', 'Section 2', 'Section 3', 'Section 4'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FirstStep />;
      case 1:
        return <SecondStep />;
      case 2:
        return <ThirdStep />;
      case 3:
          return <FourthStep />
      case 4:
            return <FifthStep />
      default:
        return 'Unknown step';
    }
  }

    const classes = useStyles();
  const {currentStep, finalData} = useContext(multiStepContext);
    const steps = getSteps();

    return (
        <div className="App">
          <div className="center-stepper">
              <h1 style={{color:'black'}}>Enquiry Form</h1>
            <div className={classes.root}>
              <Stepper activeStep={currentStep - 1} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                      <StepContent>
                        <Typography>{getStepContent(index)}</Typography>
                      </StepContent>
                    </Step>
                ))}
              </Stepper>
              {currentStep === steps.length && (
                  <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                  </Paper>
              )}
            </div>
          </div>
        </div>

    );


}

export default App;
