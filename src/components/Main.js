import React from 'react'
import { useSelector } from 'react-redux'
import StepBar from './StepBar'
import { steps } from './utils';

function Main() {
    const activeStep = useSelector(state => state.todos.activeStep);

    return (
        <div>
            <StepBar />
            {steps.map(step => {
                if(step.id === activeStep) return step.page;
            })}
        </div>
    )
}

export default Main
