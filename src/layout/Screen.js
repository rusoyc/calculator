import React from 'react';

import ResultsScreen from './ResultsScreen'
import ComputationScreen from './ComputationScreen'

const screen = (props) => (
    <section className="screen">
        <ResultsScreen>{props.result}</ResultsScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
    </section>
)

export default screen