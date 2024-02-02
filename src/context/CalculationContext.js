import { createContext, useState } from "react"
import React from 'react'

export const CalculationContext = createContext();

export const CalculationProvider = ({children}) => {
  const [firstNumber, setFirstNumdber] = useState([]);
  const [secondNumber, setSecondNumdber] = useState([]);
  const [result, setResult] = useState(0);

  const handleMultiply = () => {
    setResult(firstNumber * secondNumber);
  }

  const handleDevide = () => {
    setResult(firstNumber / secondNumber);
  }

  const handlePlus = () => {
    setResult(+firstNumber + +secondNumber);
  }

  const handleMinus = () => {
    setResult(firstNumber - secondNumber);
  }

  const handlePercentage = () => {
    setResult(firstNumber / 100);
  }

  const handleDeleteOne = () => {
    setFirstNumdber(firstNumber.slice(0, firstNumber.length - 1))
    console.log(firstNumber);
  }

  const handleDelete = () => {
    setFirstNumdber('');
    setSecondNumdber(0);
    setResult(0);
  }

  const handleDrawNumber = (number) => {
    setFirstNumdber(firstNumber + number);
    console.log(firstNumber);
  }

  return (
    <CalculationContext.Provider
      value={{
        handleDeleteOne,
        handleDrawNumber,
        secondNumber,
        setSecondNumdber,
        firstNumber,
        setFirstNumdber,
        handleMultiply,
        handleDelete,
        handleDevide,
        handleMinus,
        handlePlus,
        handlePercentage,
        result
      }}
    >
      {children}
    </CalculationContext.Provider>
  )
}

