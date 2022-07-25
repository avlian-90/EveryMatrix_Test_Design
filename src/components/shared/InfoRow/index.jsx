import {ReactComponent as List} from '../../../images/list.svg';
import './styles.css';

function InfoRow({id, userName, profit, commission}) {
    return (
        <div className="info-row">
            <span className="first">{id}</span>
            <span className="second">{userName}</span>
            <span className="third">{profit}</span>
            <span className="forth">{commission}</span>
            <div><List fill="gray" width="25px" /></div>
        </div>
    )
}

export default InfoRow;