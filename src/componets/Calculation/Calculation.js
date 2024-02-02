import React, { useContext } from 'react'
import Results from '../Results/Results'
import CalcHandlerBtn from '../CalcHandlerBtn/CalcHandlerBtn'
import InputValue from '../InputValue/InputValue';
import { CalculationContext } from '../../context/CalculationContext';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import ButtonDeleteOne from '../ButtonDeleteOne/ButtonDeleteOne';

const Calculation = () => {
  const { firstNumber, 
          handleDeleteOne,
          setFirstNumdber, 
          handleDelete,
          secondNumber,
          setSecondNumdber,
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
      <InputValue value={firstNumber} handler={setFirstNumdber}/>
      <CalcHandlerBtn title={'C'} handler={handleDelete}/>
      {/* <ButtonDeleteOne title={'<<<'} handler={() => {
        handleDeleteOne()}}
        value={firstNumber}
        /> */}
      <ButtonDeleteOne title={'<<<'} handler={handleDeleteOne}/>
      <CalcHandlerBtn title={'*'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'/'} handler={handleDrawNumber}/>
      <br/>
      <CalcHandlerBtn  title={'7'} handler={handleDrawNumber}/>
      <CalcHandlerBtn  title={'8'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'9'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'+'} handler={handleDrawNumber}/>
      <br/>
      <CalcHandlerBtn  title={'4'} handler={handleDrawNumber}/>
      <CalcHandlerBtn  title={'5'} handler={handleDrawNumber}/>
      <CalcHandlerBtn  title={'6'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'-'} handler={handleDrawNumber}/>
      <br/>
      <CalcHandlerBtn  title={'1'} handler={handleDrawNumber}/>
      <CalcHandlerBtn  title={'2'} handler={handleDrawNumber}/>
      <CalcHandlerBtn  title={'3'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'%'} handler={handlePercentage}/>
      <br/>
      <CalcHandlerBtn title={'='} handler={() => {}}/>
      <CalcHandlerBtn  title={'0'} handler={handleDrawNumber}/>
      <CalcHandlerBtn title={'.'} handler={handleDrawNumber}/>
      <Results result={result}/>
    </div>
  )
}

export default Calculation