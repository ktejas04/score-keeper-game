import {useState, useEffect} from 'react'
import pingpongLogo from '../../assets/ping-pong.jpeg'
import './Game.css'
import { NavLink } from 'react-router-dom'

function Game() {
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const [winningScore, setWinningScore] = useState(3)
    const [isGameOver, setIsGameOver] = useState(false)
    const [color1, setColor1] = useState('white')
    const [color2, setColor2] = useState('white')
  
    useEffect(() => {
      if (score1 >= winningScore) {
        setIsGameOver(true);
        setColor1('green')
        setColor2('red')      
      }
      else if (score2 >= winningScore) {
        setIsGameOver(true);
        setColor1('red')
        setColor2('green')
      }
    }, [score1, score2, winningScore]);
    
    const clickPlayerOne = () => {
      if (!isGameOver) {
        setScore1(score1 + 1)
      } 
    }
  
    const clickPlayerTwo = () => {
      if (!isGameOver) {
        setScore2(score2 + 1)
      }
    }
  
    const resetScore = () => {
      setScore1(0)
      setScore2(0)
      setIsGameOver(false)
      setColor1('white')
      setColor2('white')
    }
  
    useEffect(resetScore, [winningScore]);
  
    return (
      <>
      <div className="mainContainer">
        <p className='first-p'>Ping Pong Score Keeper</p>
        <div className="score">
          <span className='scoreOne' style={{color: color1}}>{score1}</span> - <span className='scoreTwo' style={{color: color2}}>{score2} </span>
        </div>
        <p>
        Playing until one player gets to
        <select className='select' onChange={(e) => setWinningScore(Number(e.target.value))}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="21">21</option>
        </select>
        </p>
        <div className="points">
          <button 
          className='one'
          onClick={clickPlayerOne} 
          >+1 Player One</button>
          <button
          onClick={clickPlayerTwo}
          className='two'
          >+1 Player Two</button>
          <button 
          onClick={resetScore}
          className='reset'
          >Reset</button>
        </div>
      <NavLink to='/' className='main-menu'>Main Menu</NavLink>
      </div>
      </>
    )
}

export default Game