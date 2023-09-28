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

  const { src, text, isCorrect } = imgData[displayedImg];

  function correctPressed() {
    if (isCorrect) {
      setCountCorrect((countCorrect) => countCorrect + 1)
    }
    else {
      setCountInCorrect((countInCorrect) => countInCorrect + 1)
    }
    nextImg();

  }

  function inCorrectPressed() {
    if (!isCorrect) {
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
      setDisplayedImg(0);
    }
  };

  return (

    <main className='container'>
      <Header countCorrect={countCorrect} countInCorrect={countInCorrect} />
      <Central src={src} text={text} />
      <Footer correctPressed={correctPressed} inCorrectPressed={inCorrectPressed} />
    </main>

  )
}

export default App
