import React from "react";
import fizzBuzz from "../../modules/fizzbuzz";

export default function FizzBuzz() {
  return (
    <div>
      <div>
        <h1>Input</h1>
        <div>
          Min: <input></input>
        </div>
        <div>
          Max: <input></input>
        </div>
        <button>Calculate</button>
      </div>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((element) => {
          return <li>{fizzBuzz(element)}</li>;
        })}
      </ul>
    </div>
  );
}
