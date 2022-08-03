import './linearChart.css'
import { Line } from 'react-chartjs-2'
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
import Spinner from '../../spinner/Spinner'

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

    if (!data) return <Spinner text={'Загрузка данных с сервера...'}/>

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
    
    const colorCode = '#fff'
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'График изменения курса Bitcoin и Ethereum за последние 14 дней',
                color: '#fff',
                fullSize: true
            },
       },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: colorCode,
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    color: colorCode,
                },
            }
        }
    }

    const dataLine = {
        labels: labels,
        datasets: [
            {
                id: 1,
                label: 'Bitcoin',
                data: dataBitcoin,
                borderColor: 'rgb(242, 169, 0)',
                backgroundColor: 'rgba(242, 169, 0)',
            },
            {
                id: 2,
                label: 'Ethereum',
                data: dataEthereum,
                borderColor: 'rgb(201, 157, 102)',
                backgroundColor: 'rgba(201, 157, 102)',
            },
        ],
    }

    return (
       <div className="chart-block">
                <Line options={options} data={dataLine} />
            </div>
    )
}

export default Chart