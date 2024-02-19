import React, { useEffect, useState } from 'react'


const Timer = () => {
    const [seconds, setSeconds] = useState(30);
    var timer;

    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds == 0) {
                setSeconds(30);
            }
        }, 1000)

        return () => clearInterval(timer);
    })
    return (
        <div className='flex justify-center pb-1 font-bold'>
            <div className='p-1 bg-nc rounded-full'>
                <h1>0 : {seconds}</h1>
            </div>
        </div>
    )
}

export default Timer