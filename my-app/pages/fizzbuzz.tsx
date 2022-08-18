import React, { useState } from 'react';
import type { FizzBuzzInterface } from '../answers';

const fizzBuzz = () => {
  const [fizzBuzzAnswer, setFizzBuzzAnswer] =
    useState<FizzBuzzInterface | null>(null);
  const [num, setNum] = useState(0);
  const fetchResult = (num: number) => {
    const url = `/api/fizzbuzz/${num}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setFizzBuzzAnswer(json));
    console.log(url);
  };
  return (
    <>
      <div>
        <h1>FizzBuzz</h1>
        <label>
          数字を入力してね
          <input
            type="number"
            value={num}
            onChange={(e) => {
              setNum(Number(e.target.value));
              fetchResult(Number(e.target.value));
            }}
          />
        </label>
      </div>
      <div>
        {fizzBuzzAnswer! && (
          <p
            style={{
              color: fizzBuzzAnswer.color,
              fontSize: fizzBuzzAnswer.size,
            }}
          >
            {fizzBuzzAnswer.answer}
          </p>
        )}
      </div>
    </>
  );
};

export default fizzBuzz;
