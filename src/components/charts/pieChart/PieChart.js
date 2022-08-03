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
                'rgba(242, 169, 0)',
                'rgba(201, 157, 102)'
            ],
            borderColor: [
                '#fff',
                '#fff'
            ],
            // borderWidth: 1,
            hoverOffset: 4
          },
        ],
      }
      
        return (
            <div className="pie-chart-block">
                <Pie data={data} />
            </div>
        ) 
}

export default PieChart