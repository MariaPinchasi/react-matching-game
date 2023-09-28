import happy from '../assets/happy.png'
import sad from '../assets/sad.png'
const Header = ({ countCorrect, countInCorrect }) => {
    return (
        <header className='top-menu'>
            <div>
                <img src={happy} />
                <h4> {countCorrect}</h4>
            </div>
            <div>
                <img src={sad} />
                <h4> {countInCorrect}</h4>
            </div>
        </header>
    )
}

export default Header