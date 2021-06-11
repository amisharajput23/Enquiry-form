import {Button } from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import React, {useContext} from "react";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export const FifthStep = () => {

    const [state, setState] = React.useState({
        No_one: true,
        Father: false,
        Mother: false,
        Brother: false,
        Sister: false,
        Other: false
    });
    const { No_one, Father,Mother,Brother,Sister, Other } = state;
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Family Members</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox checked={No_one} onChange={handleChange} name="No_one" />}
                        label="No_one"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Father} onChange={handleChange} name="Father" />}
                        label="Father"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Mother} onChange={handleChange} name="Mother" />}
                        label="Mother"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Brother} onChange={handleChange} name="Brother" />}
                        label="Brother"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Sister} onChange={handleChange} name="Sister" />}
                        label="Sister"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={Other} onChange={handleChange} name="Other" />}
                        label="Other"
                    />
                </FormGroup>
            </FormControl>
            <div>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    Submit
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Form has been submitted
                    </Alert>
                </Snackbar>
            </div>
        </div>

    )
}

export default FifthStep;
