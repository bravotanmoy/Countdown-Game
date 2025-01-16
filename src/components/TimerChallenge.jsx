import {useState, useRef} from 'react';
import ResultModal from './ResultModal';

 

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timerExpired, setTimerExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 100;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);

        dialog.current.open();
    }

    function handelReset() {

        setTimeRemaining(targetTime * 1000);
    }

    function handleStart() {
        timer.current = setInterval(() => {
            //setTimerExpired(true);
            // dialog.current.showModal(); // showModal is not react
            //dialog.current.open(); // showModal is not react

            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);

        }, 10);

        setTimerStarted(true);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
        // clearTimeout(timer.current);
        /*
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
        */
    }

    return (
        <>        
        {timerExpired && <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handelReset} /> }
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
               {timerIsActive ? 'Time is running... ' : 'Timer inactive'}
            </p>
        </section>
        </>

    );
}

