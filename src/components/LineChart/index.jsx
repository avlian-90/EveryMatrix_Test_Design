import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart() {

const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
        {
            label: "First Dataset",
            data: [20, 60, 20, -40, -30, 30, 50],
            backgroundColor: "#FBCF71",
            borderColor: "#FBCF71",
            tension: 0.4,
        },
        {
            label: "Second Dataset",
            data: [-30, 25, 58, 22, -40, -30, 20],
            backgroundColor: "#1F7BB6",
            borderColor: "#1F7BB6",
            tension: 0.4,
        },
        {
            label: "Third Dataset",
            data: [40, 50, 0, -45, -20, 40, 55],
            backgroundColor: "#01AAAA",
            borderColor: "#01AAAA",
            tension: 0.4,
        }
    ]
}
    return (
        <div style={{width: "800px", height: "800px"}}> 
            <Line data={data} />
        </div>
    )
}

export default LineChart;