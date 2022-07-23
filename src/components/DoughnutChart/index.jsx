import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function DoughnutChart() {

    const data = {
        labels: ["Total Views", "Total Clicks", "Signups"],
        datasets: [
            {
                data: [200, 65, 22],
                backgroundColor: ["#FBCF71", "#1F7BB6", "#01AAAA"],
            },
        ]
    }
    return (
        <div style={{width: "500px", height: "500px"}}> 
            <Doughnut data={data} />
        </div>
    )
}

export default DoughnutChart;