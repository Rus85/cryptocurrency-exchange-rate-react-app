import useQueryPromiseAll from "../../../hooks/useQueryPromiseAll"
import СurrentExchangeRate from '../../currentExchangeRates/СurrentExchangeRate'
import Chart from "./LinearChart"
import { COINS_CHARTS_URLS_API } from "../../../urlConsts/urlConsts"
import Spinner from "../../spinner/Spinner"
import { motion } from 'framer-motion'
import './linearChartContainer.css'


const LinearChartContainer = () => {

    const { data } = useQueryPromiseAll(COINS_CHARTS_URLS_API)

    if (!data.length) return <Spinner text={'Загрузка данных с сервера...'}/>

    return (
        <motion.div className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <СurrentExchangeRate />
            <Chart data={data} />
        </motion.div>
    )
}

export default LinearChartContainer