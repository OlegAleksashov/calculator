import { createContext, useState } from "react";
import React from "react";

export const CalculationContext = createContext();

export const CalculationProvider = ({ children }) => {
  const [result, setResult] = useState("");

  const handleOperations = () => {
    const operators = {
      "+": { precedence: 1, associativity: "left" },
      "-": { precedence: 1, associativity: "left" },
      "*": { precedence: 2, associativity: "left" },
      "/": { precedence: 2, associativity: "left" },
    };

    function isOperator(token) {
      return token in operators;
    }

    function getPrecedence(operator) {
      return operators[operator].precedence;
    }

    function applyOperator(operator, operand1, operand2) {
      switch (operator) {
        case "+":
          return operand1 + operand2;
        case "-":
          return operand1 - operand2;
        case "*":
          return operand1 * operand2;
        case "/":
          return operand1 / operand2;
        default:
          console.log("Sorry, such operator does not exist");
      }
    }

    function evaluateExpression(tokens) {
      const outputQueue = [];
      const operatorStack = [];

      for (const token of tokens) {
        if (!isNaN(token)) {
          outputQueue.push(parseFloat(token));
        } else if (isOperator(token)) {
          const currentOperator = token;
          let topOperator = operatorStack[operatorStack.length - 1];

          while (
            isOperator(topOperator) &&
            ((operators[currentOperator].associativity === "left" &&
              getPrecedence(currentOperator) <= getPrecedence(topOperator)) ||
              (operators[currentOperator].associativity === "right" &&
                getPrecedence(currentOperator) < getPrecedence(topOperator)))
          ) {
            outputQueue.push(operatorStack.pop());
            topOperator = operatorStack[operatorStack.length - 1];
          }

          operatorStack.push(currentOperator);
        }
      }

      while (operatorStack.length > 0) {
        outputQueue.push(operatorStack.pop());
      }

      const evaluationStack = [];

      for (const token of outputQueue) {
        if (!isNaN(token)) {
          evaluationStack.push(token);
        } else if (isOperator(token)) {
          const operand2 = evaluationStack.pop();
          const operand1 = evaluationStack.pop();
          evaluationStack.push(applyOperator(token, operand1, operand2));
        }
      }

      return evaluationStack[0];
    }

    try {
      const tokens = result.match(/(\d+(\.\d+)?|\S)/g);
      setResult(evaluateExpression(tokens));
    } catch (err) {
      setResult("Type next calculations!");
    }
  };

  const handlePercentage = () => {
    setResult(result / 100);
  };

  const handleDeleteOne = () => {
    if (typeof result == "number") {
      setResult("");
    } else {
      setResult(result.slice(0, result.length - 1));
    }
  };

  const handleDelete = () => {
    setResult("");
  };

  const handleFromKeyBoard = (input) => {
    handleDrawNumber(input.key);
  };

  const handlefunc = (e) => {
    setResult(e.target.value);
  };

  const handleDrawNumber = (input) => {
    const operators = ["/", "*", "+", "-", "%", "."];

    if (input === "Enter") {
      handleOperations();
    }

    if (input === "Backspace") {
      handleDeleteOne();
    }

    if (operators.includes(input)) {
      if (operators.includes(result[result.length - 1])) {
        setResult((prevValue) => prevValue.slice(0, -1) + input);
      } else {
        setResult((prevValue) => prevValue + input);
      }
    } else {
      setResult((prevValue) => prevValue + input);
    }
    console.log(result);
  };

  return (
    <CalculationContext.Provider
      value={{
        handlefunc,
        handleFromKeyBoard,
        handleDeleteOne,
        handleDrawNumber,
        handleDelete,
        handlePercentage,
        result,
        handleOperations,
        setResult,
      }}
    >
      {children}
    </CalculationContext.Provider>
  );
};
