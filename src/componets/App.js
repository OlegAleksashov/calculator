import React from 'react';
import Calculation from './Calculation/Calculation';
import '../App.css';
import { CalculationProvider } from '../context/CalculationContext';
import { ThemeContextProvider } from '../context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <CalculationProvider>
        <Calculation/>
      </CalculationProvider>
    </ThemeContextProvider>
  );
}

export default App;
