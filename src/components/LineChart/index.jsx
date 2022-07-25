import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import {ReactComponent as ChevronDown} from '../../images/chevronDown.svg';

function LineChart() {

const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
        {
            label: "Clicks",
            data: [20, 60, 20, -40, -30, 30, 50],
            backgroundColor: "#FBCF71",
            borderColor: "#FBCF71",
            tension: 0.4,
            borderWidth: 1.5,
        },
        {
            label: "Page View",
            data: [-30, 25, 58, 22, -40, -30, 20],
            backgroundColor: "#1F7BB6",
            borderColor: "#1F7BB6",
            tension: 0.4,
            borderWidth: 1.5,
        },
        {
            label: "Sign ups",
            data: [40, 50, 0, -45, -20, 40, 55],
            backgroundColor: "#01AAAA",
            borderColor: "#01AAAA",
            tension: 0.4,
            borderWidth: 1.5,
        },
    ]
}
const options = {
    plugins: {
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          color: "#C7C7C7",
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
  };
    return (
        <div className="line-chart"> 
            <Line data={data} options={options} />
        </div>
    )
}

export default LineChart;


  