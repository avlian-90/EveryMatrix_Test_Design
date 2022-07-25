import TotalAmmount from '../shared/TotalAmount/index.jsx';
import {data} from './data.js';
import './styles.css';

function TotalAmounts() {
    return (
        <div className="total-amounts">
            {data.map((el, i) => <TotalAmmount 
                key={i} 
                className={i === 0 && "no-dollar"} 
                amount={el.amount} 
                Icon={el.icon} 
                description={el.description}
                color={el.color} 
            />)}
        </div>
    )
}

export default TotalAmounts;