import './styles.css';

const headings = ["Top Affiliates", "Signups", "Pending Commissions"];

function Headings() {
    return (
        <div className="headings">
            {headings.map(heading => <div key={heading} className="heading">{heading}</div>)}
        </div>
    )
}

export default Headings;