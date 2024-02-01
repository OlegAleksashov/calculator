import React, { useContext } from 'react'
import Results from '../Results/Results'
import CalcHandlerBtn from '../CalcHandlerBtn/CalcHandlerBtn'
import InputValue from '../InputValue/InputValue';
import { CalculationContext } from '../../context/CalculationContext';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import ButtonNumber from '../ButtonNumber/ButtonNumber';

const Calculation = () => {
  const { firstNumber, 
          setFirstNumdber, 
          handleDelete,
          handleDevide,
          handleMinus,
          handleMultiply,
          handlePercentage,
          handlePlus,
          result,
          handleDrawNumber
        } = useContext(CalculationContext);     

  return (
    <div className='calc'>
      <ButtonIcon/>
      <InputValue value={firstNumber} handler={(event) => setFirstNumdber(event.target.value)}/>
      <CalcHandlerBtn title={'C'} handler={handleDelete}/>
      <CalcHandlerBtn title={'<<<'} handler={() => {}}/>
      <CalcHandlerBtn title={'*'} handler={handleMultiply}/>
      <CalcHandlerBtn title={'/'} handler={handleDevide}/>
      <br/>
      <ButtonNumber title={'7'} handler={handleDrawNumber}/>
      <ButtonNumber title={'8'} handler={handleDrawNumber}/>
      <ButtonNumber title={'9'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'+'} handler={handlePlus}/>
      <br/>
      <ButtonNumber title={'4'} handler={handleDrawNumber}/>
      <ButtonNumber title={'5'} handler={handleDrawNumber}/>
      <ButtonNumber title={'6'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'-'} handler={handleMinus}/>
      <br/>
      <ButtonNumber title={'1'} handler={handleDrawNumber}/>
      <ButtonNumber title={'2'} handler={handleDrawNumber}/>
      <ButtonNumber title={'3'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'%'} handler={handlePercentage}/>
      <br/>
      <CalcHandlerBtn title={'='} handler={() => {}}/>
      <ButtonNumber title={'0'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'.'} handler={handlePercentage}/>
      <Results result={result}/>
    </div>
  )
}

export default Calculation