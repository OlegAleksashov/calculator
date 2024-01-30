import { createContext, useState } from "react"
import React from 'react'

export const CalculationContext = createContext();

export const CalculationProvider = ({children}) => {
  const [firstNumber, setFirstNumdber] = useState(0);
  const [secondNumber, setSecondNumdber] = useState(0);
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

  const handleDelete = () => {
    setFirstNumdber(0);
    setSecondNumdber(0);
    setResult(0);
  }
  return (
    <CalculationContext.Provider
      value={{
        firstNumber,
        setFirstNumdber,
        secondNumber,
        setSecondNumdber,
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

