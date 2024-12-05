import React, { useEffect, useState } from 'react'
import './game.css'
import { useSelector } from 'react-redux';

function GameHeader({time,myBet}) {
  const amount = useSelector((state) => state.Myreducer.amount);

  return (
    <div className='header_main_game'>
      <div className="row">
        <div className="col-4">logo</div>
        <div className="col-4"><h3>{amount}$</h3></div>
        <div className="col-4"><h3>Bit Result Time  {myBet ? "BET TIME OVER" : time }</h3></div>
      </div>
    </div>
  )
}

export default GameHeader