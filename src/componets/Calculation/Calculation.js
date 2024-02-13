import React, { useContext } from "react";
import CalcHandlerBtn from "../CalcHandlerBtn/CalcHandlerBtn";
import InputValue from "../InputValue/InputValue";
import { CalculationContext } from "../../context/CalculationContext";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import ButtonDeleteOne from "../ButtonDeleteOne/ButtonDeleteOne";

const Calculation = () => {
  const {
    handlefunc,
    handleFromKeyBoard,
    handleDeleteOne,
    handleDelete,
    handlePercentage,
    result,
    handleDrawNumber,
    handleOperations,
  } = useContext(CalculationContext);

  return (
    <div className="calc">
      <ButtonIcon />
      <InputValue tipt="text" 
                  value={result} 
                  handler={handleFromKeyBoard}
                  onKeyDown={handlefunc} 
      />
      <CalcHandlerBtn title={"C"} handler={handleDelete} />
      <ButtonDeleteOne title={"CE"} handler={handleDeleteOne} />
      <CalcHandlerBtn title={"*"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"/"} handler={handleDrawNumber} />
      <br />
      <CalcHandlerBtn title={"7"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"8"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"9"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"+"} handler={handleDrawNumber} />
      <br />
      <CalcHandlerBtn title={"4"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"5"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"6"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"-"} handler={handleDrawNumber} />
      <br />
      <CalcHandlerBtn title={"1"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"2"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"3"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"%"} handler={handlePercentage} />
      <br />
      <CalcHandlerBtn title={"="} handler={handleOperations} />
      <CalcHandlerBtn title={"0"} handler={handleDrawNumber} />
      <CalcHandlerBtn title={"."} handler={handleDrawNumber} />
    </div>
  );
};

export default Calculation;
