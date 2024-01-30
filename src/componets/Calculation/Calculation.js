import React, { useContext } from 'react'
import Results from '../Results/Results'
import CalcHandlerBtn from '../CalcHandlerBtn/CalcHandlerBtn'
import InputValue from '../InputValue/InputValue';
import { CalculationContext } from '../../context/CalculationContext';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

const Calculation = () => {
  const { firstNumber, 
          secondNumber, 
          setFirstNumdber, 
          setSecondNumdber,
          handleDelete,
          handleDevide,
          handleMinus,
          handleMultiply,
          handlePercentage,
          handlePlus,
          result
        } = useContext(CalculationContext);     

  return (
    <div className='calc'>
      <ButtonIcon/>
      <InputValue value={firstNumber} handler={(event) => setFirstNumdber(event.target.value)} title={'1st number:'}/>
      <InputValue value={secondNumber} handler={(event) => setSecondNumdber(event.target.value)} title={'2nd number:'}/>
      <CalcHandlerBtn title={'*'} handler={handleMultiply}/>
      <CalcHandlerBtn title={'/'} handler={handleDevide}/>
      <CalcHandlerBtn title={'+'} handler={handlePlus}/>
      <CalcHandlerBtn title={'-'} handler={handleMinus}/>
      <CalcHandlerBtn title={'%'} handler={handlePercentage}/>
      <CalcHandlerBtn title={'C'} handler={handleDelete}/>
      <Results result={result}/>
    </div>
  )
}

export default Calculation