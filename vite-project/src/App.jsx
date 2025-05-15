import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



  const ButtonStyles = {
    backgroundColor: "lightblue",
    border: 'blacl',
  }


function Square() {
  const [value, setValue] = useState(null)

  function handleclick () {
    setValue('X')
  }
  return (
    <>
      <button style={ButtonStyles} className='square ' onClick={handleclick}>{value}</button>
    </>
  )
}

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
      <>
      <div className='board-row'>
        <Square value={square[0]}/>
        <Square value={square[1]}/>
        <Square value={square[2]}/>
      </div>
      <div className='board-row'>
        <Square value={square[3]}/>
        <Square value={square[4]}/>
        <Square value={square[5]}/>
      </div>
      <div className='board-row'>
        <Square value={square[6]}/>
        <Square value={square[7]}/>
        <Square value={square[8]}/>
      </div> 
      
      </>
  )
}
export default Board
