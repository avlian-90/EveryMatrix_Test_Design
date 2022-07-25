import DoughnutChart from '../DoughnutChart';
import LineChart from '../LineChart';
import MapChart from '../MapChart';
import {ReactComponent as ChevronDown} from '../../images/chevronDown.svg';
import './styles.css';

function Charts() {
    return (
        <div className="charts">
            <div className="line-chart">
                <div className="wrapper">
                    <div className="media">
                        <h2>Medias Staats</h2>
                        <div>
                            <span>Last Week</span>
                            <ChevronDown fill="#C7C7C7" width="15px" />
                        </div>
                    </div>
                    <LineChart />
                </div>
            </div>
            <DoughnutChart />
            <div className="map-chart">
                <div className="geographic-data">
                    <h2>Geographic Data</h2>
                    <div>
                        <span>Last Month</span>
                        <ChevronDown fill="#C7C7C7" width="15px" />
                    </div>
                </div>
                <div className="map">
                    <div className="squares">
                        <div></div>
                        <div></div>
                    </div>
                    <MapChart />
                </div>
                <div className="sign-up">
                    <span>Affiliate Sign Ups</span>
                    <ChevronDown fill="#C7C7C7" width="15px" />
                </div>
                <div className="countries">
                    <div className="country">
                        <p>1. United States</p>
                        <p>200</p>
                    </div>
                    <div className="country">
                        <p>2. Chine</p>
                        <p>65</p>
                    </div>
                    <div className="country">
                        <p>3. United Kingdom</p>
                        <p>22</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Charts;