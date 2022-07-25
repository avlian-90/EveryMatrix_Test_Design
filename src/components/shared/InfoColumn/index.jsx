import InfoRow from '../InfoRow/index.jsx';
import {data} from './data.js';
import './styles.css';

function InfoColumn() {
    return (
        <div className="info-column">
            {data.map(row => <InfoRow key={row.id} id={row.id} userName={row.userName} profit={row.profit} commission={row.userName} /> )}
        </div>
    )
}

export default InfoColumn;