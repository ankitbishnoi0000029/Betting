import React, { useState } from 'react'
import './game.css'
import { useDispatch, useSelector } from 'react-redux'
import { amount, Box_Values } from '../../../REDUX-STORE/Actions/Actins'


function GameBox({ item }) {
  const myAmc = useSelector((state) => state.Myreducer.amount);
  const myNewBox = useSelector((state) => state.Myreducer.boxValue);

  const dispatch = useDispatch()
  const MyClickHandle = (item) => {
    dispatch(Box_Values(item))

  }


  return (
    <>
      <div className='game_box_outer'>
        <button disabled={myNewBox.length == 24 || myAmc == 0} onClick={() => MyClickHandle(item)} className={myNewBox.length == 24 || myAmc == 0 ? "box mybutton bg-danger" : "box mybutton"}>{item}</button>
      </div>
    </>
  )
}

export default GameBox