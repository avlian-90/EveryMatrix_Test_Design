import './styles.css';
import bars from '../../images/bars.svg';
import flag from '../../images/flag.svg';
import userImg from '../../images/userImg.png';
import caret from '../../images/caret.svg';

function Header() {
    return (
        <div className="header">
            <div className="white-space"></div>
            <div className="bar">
                <img src={bars} alt="bar"/>
            </div>
            <div className="flag">
                <img src={flag} alt="flag"/>
                <span>EN</span>
            </div>
            <div className="login">
                <img src={userImg} className="user" alt="user"/>
                <div>
                    <span>Hello, Max!</span>
                    <p>Last login: Thu Mar 20 2014</p>
                </div>
                <img src={caret} className="caret" alt="caret"/>
            </div>
        </div>
    )
}

export default Header;