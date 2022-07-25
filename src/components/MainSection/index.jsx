import Charts from "../Charts";
import Dashboard from "../Dashboard";
import Header from "../Header";
import Headings from "../Headings";
import Titles from "../Titles";
import TotalAmounts from "../TotalAmounts";
import UserData from "../UserData";
import './styles.css';


function MainSection() {
    return (
        <div className="main-section">
            <Header />
            <Dashboard />
            <TotalAmounts />
            <Charts />
            <Headings />
            <Titles />
            <UserData />
        </div>
    )
}

export default MainSection;