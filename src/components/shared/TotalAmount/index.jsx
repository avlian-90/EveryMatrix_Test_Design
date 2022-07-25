import { ReactComponent as Dollar } from '../../../images/dollar.svg';
import './styles.css';

function TotalAmmount({className, amount, Icon, description, color}) {
    console.log(color)
    return (
        <div className={`total-amount ${className}`}>
            <div className="amount">
                <Dollar fill={color} />
                <span style={{color: color}}>{amount}</span>
            </div>
            <div className="sphere">
                <Icon fill={color} />
                <span>{description}</span>
            </div>
        </div>
    )
}

export default TotalAmmount;