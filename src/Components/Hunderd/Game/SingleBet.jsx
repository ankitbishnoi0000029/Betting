import { useDispatch, useSelector } from 'react-redux';
import './game.css'
import { amount, Histery, remove, reset } from '../../../REDUX-STORE/Actions/Actins';
import close from '/images/close.svg'
import { useEffect, useState } from 'react';


function SingleBet({ time }) {
  const myNewBox = useSelector((state) => state.Myreducer.boxValue);
  const histeryDispatch = useDispatch()
  const mySingleBet = myNewBox.length * 50;
  const myPandingAmmount = useSelector((state) => state.Myreducer.amount);
  const dd = time - 20
  const [myNewTime, setMyNew] = useState(false)
  useEffect(() => {
    if (dd <= 0) {
      setMyNew(true)
    }
  }, [dd])


  const HanleCostmore = () => {
    if (myNewTime) {
      histeryDispatch(reset([]))
      alert("bet time is over")
    } else {
      if (myPandingAmmount >= mySingleBet) {
        const val = window.confirm(`Are you sure this bet and bet Amount : ${mySingleBet} `)
        if (val) {
          histeryDispatch(amount(mySingleBet))
          histeryDispatch(Histery(myNewBox))
          histeryDispatch(reset([]))
          alert("your Bet successfully")
        } else {
          alert("not bet")
        }
      } else {
        alert("your Wallet balance is not inif this bet")
      }
    }
  }
  const HandleClose = (item) => {
    const mycon = window.confirm(`are you sure remove this number : ${item} `)
    if (mycon) {
      histeryDispatch(remove(item))
      console.log(myNewBox);
    }
  }
  return (
    <div className='singleBet'>
      <div>
        <h5 className={`${myNewTime >= 20 ? "text-dark" : "text-danger"} `} > Your bet time remaing  :{myNewTime ? "0" : dd}
        </h5>
      </div>
      <div className='mySidebar col-12' >
        {
          myNewBox?.map((item, index) => (
            <div key={index} className='nde4-md col-4 m-1'>
              <nav className='text-bet'>{item}</nav>
              <img onClick={() => HandleClose(item)} className='mybtn_close' width={25} src={close} alt={`Close ${item}`} />
            </div>
          ))
        }
      </div>

      <div>
        <button onClick={HanleCostmore} className='btn-my-data' type="button">Bet Now </button>
      </div>
    </div>
  )
}

export default SingleBet