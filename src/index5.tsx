import React from 'react';
import ReactDOM from 'react-dom';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class Timer {
  secondsPassed: number[] = [];
  value = 0;
  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed.push(++this.value);
  }
}

const myTimer = new Timer();

// setInterval(() => {
//   myTimer.increaseTimer();
// }, 1000);

// A function component wrapped with `observer` will reacts to any
// future change in an observable it used before
const TimerView = observer(({ timer }: { timer: Timer }) => (
  <div>
    <button
      onClick={() => {
        myTimer.increaseTimer();
      }}
    >
      add
    </button>
    Seconds passed:{' '}
    {timer.secondsPassed.map((li) => {
      return <div>{li}</div>;
    })}
  </div>
));

ReactDOM.render(<TimerView timer={myTimer} />, document.getElementById('root'));
