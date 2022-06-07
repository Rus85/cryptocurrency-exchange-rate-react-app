import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import './pieChart.css'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = (props) => {
    
    const data = {
        
        labels: ['Bitcoin', 'Ethereum'],
        datasets: [
          {
            label: '# of Votes',
            data: props.coins,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(53, 162, 235, 0.5)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(53, 162, 235)'
            ],
            borderWidth: 1,
          },
        ],
      }
      
        return (
            <div className="pie-chart-block">
                <Pie data={data}/>
            </div>
        ) 
}

export default PieChart