import MainSection from "../MainSection";
import SideBar from "../SideBar";
import './styles.css';

function MainPage() {
    return (
        <div className="main-page">
            <SideBar />
            <MainSection />
        </div>
    )
}

export default MainPage;