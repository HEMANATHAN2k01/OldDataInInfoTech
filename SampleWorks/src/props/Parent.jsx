import React,{useState} from "react";
import { Look } from "./Look";
export const Parent = () => {
  const name = "Hemanathan";
  const dept = "MCA";
  const contact = 9361094253;
  const [blood, setBlood] = useState('')
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Department : {dept}</h1>
      <Look contact={{contact,blood:setBlood}} />
      <h1> {blood}</h1>
    </div>
  );
};
