import React, { useEffect, useState } from "react";
import { Buttons } from "./Buttons"

export const Timmer = () => {
    const [time, setTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [isStopped, setIsStopped] = useState(false);

    useEffect( () => {
        let interval;
        if(isStarted) {
            interval = setInterval( () => {
                setTime(time + 1);
            }, 1000)
        }
        return () => clearInterval(interval);
    });

    let second = time;
    let minute = Math.floor(time / 60);
    let hour = Math.floor(minute / 60);

    const startOrResume = () => {
        setIsStarted(!isStarted);
        setIsStopped(false);
    }

    const stop = () => {
        setIsStopped(!isStopped);
        setIsStarted(!isStarted);
    }

    const reset = () => {
        setTime(0);
        setIsStarted(false);
        setIsStopped(!isStopped);
    }

    return(
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <div className = "timmer">
                {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:{second.toString().padStart(2, "0")}
            </div>
            <Buttons
                isStarted = { isStarted }
                isStopped = { isStopped }
                reset = { reset }
                startOrResume = { startOrResume }
                stop = { stop }
            />
        </div>
    )
}