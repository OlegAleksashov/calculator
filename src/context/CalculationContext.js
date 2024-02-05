import { createContext, useState } from "react"
import React from 'react'

export const CalculationContext = createContext();

export const CalculationProvider = ({children}) => {
  const [result, setResult] = useState([]);
  const [selectOperator, setSelectOperator] = useState([])

  const handleOperations = () => {
    let array = [];
    let arrayResult = [];
    array = result.toString();
    if (array.includes('/')) {
      arrayResult = array.split('/');
      setResult(arrayResult[0] / arrayResult[1]);
    } else if (array.includes('*')) {
      arrayResult = array.split('*');
      setResult(arrayResult[0] * arrayResult[1]);
    } else if (array.includes('+')) {
      arrayResult = array.split('+');
      setResult(+arrayResult[0] + +arrayResult[1]);
    } else if (array.includes('-')) {
      arrayResult = array.split('-');
      setResult(arrayResult[0] - arrayResult[1]);
    }
  };
  
  const handlePercentage = () => {
    setResult(result / 100);
  }

  const handleDeleteOne = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const handleDelete = () => {
    setResult('');
  }

  const handleDrawNumber = (input) => {
    const operators = ['/', '*', '+', '-', '%'];
  
    if (operators.includes(input)) {
      if (operators.includes(result[result.length - 1])) {
        setResult(result.slice(0, result.length - 1) + input);
      } else {
        setResult(result + input);
      }
    } else {
      setResult(result + input);
    }
  };


  return (
    <CalculationContext.Provider
      value={{
        handleDeleteOne,
        handleDrawNumber, 
        handleDelete,
        handlePercentage,
        result,
        handleOperations,
        selectOperator,
        setSelectOperator,
        setResult
      }}
    >
      {children}
    </CalculationContext.Provider>
  )
}

