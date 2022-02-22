import React, { useContext } from "react";
import { Context } from "../../state/state";

export default function Chart() {
  const [state, setState] = useContext(Context);
  return (
    <>
         <h1> Food: {state.name}</h1>
      <h1> Food: {state.address}</h1>
      <h1> Quantity: {state.quantity}</h1>
      <h1> Price: {state.price}</h1>
    </>
  );
}
