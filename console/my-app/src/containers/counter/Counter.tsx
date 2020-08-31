import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return CounterPresenter({
    count: count
    , onIncrementClick: () => {dispatch(increment())}
    , onDecrementClick: () => {dispatch(decrement())}
  });
}

export interface CounterPresenterProps {
  count: Number
  , onIncrementClick: () => any
  , onDecrementClick: () => any
};

export function CounterPresenter(props: CounterPresenterProps) {

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={props.onIncrementClick}
        >
          +
        </button>
        <span className={styles.value}>{props.count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={props.onDecrementClick}
        >
          -
        </button>
      </div>
      {/* <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div> */}
    </div>
  );
}
