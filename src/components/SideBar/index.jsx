import {upIcons, downIcons} from './data';
import DownIcon from '../shared/DownIcon';
import UpIcon from '../shared/UpIcon';
import './styles.css';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="head-icon">
                <div className="first-icon">b</div>
                <div className="yellow-circle"></div>
            </div>
            <div className="up-icons">
                {upIcons.map((component, index) => <UpIcon key={index} Component={component} />)}
            </div>
            <div className="down-icons">
                {downIcons.map((component, index) => <DownIcon key={index} Component={component} />)}
            </div>
            <div className="remain"></div>
        </div>
    )
}

export default SideBar;