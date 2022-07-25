import './styles.css';
import {ReactComponent as ChevronRight} from '../../images/chevronRight.svg';
import {ReactComponent as Heart} from '../../images/heart.svg';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="dashboard">
                <div className="chevron"><ChevronRight fill="white" /></div>
                <span>Dashboard</span>
            </div>
            <div className="addToFav">
                <Heart fill="grey" />
                <span>ADD THIS PAGE TO FAVORITES</span>
            </div>
        </div>
    )
}

export default Dashboard;