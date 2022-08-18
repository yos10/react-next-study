import type { NextApiRequest, NextApiResponse } from 'next';
import type { FizzBuzzInterface } from '../../../answers';

const fizzBuzz = (num: number): FizzBuzzInterface => {
  if (num % 3 === 0 && num % 5 === 0) {
    return { answer: 'fizzbuzz', color: 'green', size: 100 };
  } else if (num % 3 === 0) {
    return { answer: 'fizz', color: 'blue', size: 50 };
  } else if (num % 5 === 0) {
    return { answer: 'buzz', color: 'red', size: 25 };
  } else {
    return { answer: num, color: 'black', size: 10 };
  }
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FizzBuzzInterface>
) {
  if (req.method === 'GET') {
    console.log(req.query.num);
    if (typeof req.query.num === 'string') {
      res.status(200).json(fizzBuzz(parseInt(req.query.num)));
    } else {
      res.status(404).end();
    }
  } else {
    res.status(405).end();
  }
}
