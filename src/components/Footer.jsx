import correctImg from '../assets/correct.png'
import inCorrectImg from '../assets/notCorrect.png'
const Footer = ({ btnPressed }) => {
    return (
        <footer className='bottom-menu'>
            <img src={correctImg} onClick={() => btnPressed('correct-btn')} />
            <img src={inCorrectImg} onClick={() => btnPressed('inCorrect-btn')} />
        </footer>
    )
}

export default Footer