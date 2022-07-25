import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './styles.css';


function DoughnutChart() {

    const data = {
        datasets: [
            {
                rotation: 185,
                borderWidth: 0,
                data: [200, 65, 22],
                backgroundColor: ["#FBCF71", "#1F7BB6", "#01AAAA"],
            },
        ]
    }
    const options = {
        responsive: true,
        elements: {
          center: {
            text: "50",
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Active Medias",
            align: "start",
            color: "#C7C7C7",
            font: {
              size: 24,
            },
          },
        },
      };
    return (
        <div className="doughnut-chart"> 
            <div>
              <Doughnut data={data} options={options} />
              <div className="relative">50</div>
            </div>
            <div className="statistics">
              <div className="left">
                  <p className="ctr">CTR</p>
                  <div className="yellow">
                    <div></div>
                    <p>Total Views</p>
                  </div>
                  <div className="darkBlue">
                    <div></div>
                    <p>Total Clicks</p>
                  </div>
                  <div className="lightBlue">
                    <div></div>
                    <p>Signups</p>
                  </div>
              </div>
              <div className="right">
                  <p>25%</p>
                  <p>200</p>
                  <p>65</p>
                  <p>22</p>
              </div>
            </div>
        </div>
    )
}

export default DoughnutChart;


