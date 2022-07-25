import './styles.css';


const titles = ["ID", "Username", "Profit($)", "Commission($)", "View"];

function Title() {
    return (
        <div className="title">
            {titles.map((title, i) => <span key={i} className={(i === 0 || i === 4) ? "flex-15" : i === 2 ? "flex-20" : "flex-25"}>{title}</span>)}
        </div>
    )
}

export default Title;