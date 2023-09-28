import correctImg from '../assets/correct.png'
import inCorrectImg from '../assets/InCorrect.png'
const Footer = ({ correctPressed, inCorrectPressed }) => {
    return (
        <footer className='bottom-menu'>
            <img src={correctImg} onClick={correctPressed} />
            <img src={inCorrectImg} onClick={inCorrectPressed} />
        </footer>
    )
}

export default Footer