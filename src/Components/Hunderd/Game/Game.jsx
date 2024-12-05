import './game.css'
import GameBox from './GameBox'
import SingleBet from './SingleBet';
import GameHeader from './GameHeader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box_Values, Histery, reset } from '../../../REDUX-STORE/Actions/Actins';
function Game() {
    const BoxCountiny = Array.from({ length: 100 }, (_, index) => index + 1);

    const left =  2* 30;
    const [time, settime] = useState(left)
    const [myBet, setMyBet] = useState(false)

    const myNewBox = useSelector((state) => state.Myreducer.boxValue);


    const histeryDispatch = useDispatch()


    useEffect(() => {
        if (time <= 0) {
            setMyBet(true);
            histeryDispatch(reset())
            return;
        }
        const timeout = setTimeout(() => {
            settime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [time]);


    return (
        <>
            <GameHeader time={time} myBet={myBet}></GameHeader>
            <div className='main_bar_game'>
                <div className='row'>
                    <div className="col-12 d-flex">
                        <div className='endi3 col-10' >
                            {
                                BoxCountiny.map((item, index) => (
                                    <div key={index} className="counting">
                                        <GameBox item={item}></GameBox>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='col-2'>
                            <SingleBet time = {time}></SingleBet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Game