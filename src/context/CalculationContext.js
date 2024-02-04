import { createContext, useState } from "react"
import React from 'react'

export const CalculationContext = createContext();

export const CalculationProvider = ({children}) => {
  const [result, setResult] = useState([]);
  const [selectOperator, setSelectOperator] = useState('')

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
    setResult(0);
  }

  const handleDrawNumber = (number) => {
    setResult(result + number);
  }

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

