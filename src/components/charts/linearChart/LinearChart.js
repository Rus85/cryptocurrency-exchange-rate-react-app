import './linearChart.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const Chart = ({ data }) => {

    const [bitcoin, ethereum] = data

    const [labels, dataBitcoin] = bitcoin.prices.reduce((acc, item) => {
        acc[0].push(new Date(item[0]).toLocaleDateString('ru', {
            day: '2-digit',
            month: '2-digit'
        }))
        acc[1].push(item[1])
        return acc
    },
        [[], []]
    )

    const dataEthereum = ethereum.prices.map(item => item[1])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'График изменения курса Bitcoin и Ethereum за последние 14 дней',
            },
        },
    }

    const dataLine = {
        labels: labels,
        datasets: [
            {
                id: 1,
                label: 'Bitcoin',
                data: dataBitcoin,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                id: 2,
                label: 'Ethereum',
                data: dataEthereum,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <div className="chart-block">
            <Line
                options={options} data={dataLine} />
        </div>
    )
}

export default Chart