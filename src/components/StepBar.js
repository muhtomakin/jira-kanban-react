import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveStep } from '../redux/slice';
import AddTask from './AddTask';
import TaskManagement from './TaskManagement';
import { steps } from './utils';

const useStyles = makeStyles(() => ({
    root: {
        background: 'blue',
    }
}));

function StepBar() {
    const activeStep = useSelector(state => state.todos.activeStep);
    const dispatch = useDispatch();
    const classname = useStyles();

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper 
                activeStep={-1}
                alternativeLabel
            >
                {steps.map((step) => (
                <Step 
                    key={step.id}
                    onClick={() => dispatch(changeActiveStep(step.id))}
                >
                    <StepLabel StepIconProps=
                        {
                            activeStep === step.id 
                                ? {classes: { root: classname.root }}
                                : null
                        }
                    >{step.label}</StepLabel>
                </Step>
                ))}
            </Stepper>
        </Box>
    );
}

export default StepBar;