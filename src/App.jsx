import { useState } from 'react'



import './App.css'

import { imgData } from './constants/data'
import Header from './components/Header'
import Central from './components/Central'
import Footer from './components/Footer'

function App() {
  const [countCorrect, setCountCorrect] = useState(0);
  const [countInCorrect, setCountInCorrect] = useState(0);
  const [displayedImg, setDisplayedImg] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const { src, text, isCorrect } = imgData[displayedImg];

  function btnPressed(btnType) {
    if (isCorrect && btnType === 'correct-btn' || !isCorrect && btnType === 'inCorrect-btn') {
      setCountCorrect((countCorrect) => countCorrect + 1)
    }
    else {
      setCountInCorrect((countInCorrect) => countInCorrect + 1)
    }
    nextImg();

  }

  function nextImg() {
    if (displayedImg < imgData.length - 1) {
      setDisplayedImg((displayedImg) => displayedImg + 1);
    }
    else {
      setIsGameOver(true);
    }
  };
  if (!isGameOver) {
    return (
      <main className='container'>
        <Header countCorrect={countCorrect} countInCorrect={countInCorrect} />
        <Central src={src} text={text} />
        <Footer btnPressed={btnPressed} />
      </main>
    )
  }
  else {
    return (
      <main className='container'>
        <p className='game-over'>Game Over</p>
        <p className='game-over'>{`${countCorrect} correct answers`}</p>
      </main>
    )
  }

}

export default App
