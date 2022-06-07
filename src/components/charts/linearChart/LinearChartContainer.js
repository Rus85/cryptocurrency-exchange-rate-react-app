import useQueryPromiseAll from "../../../apiComponents/useQueryPromiseAll"
import СurrentExchangeRate from '../../currenExchangeRates/СurrentExchangeRate'
import Chart from "./LinearChart"


import { COINS_CHARTS_URLS_API } from "../../../urlConsts/urlConsts"

const ChartContainer = () => {

    const { data } = useQueryPromiseAll(COINS_CHARTS_URLS_API)

    if (!data.length) return null

    return (
        <div>
            <СurrentExchangeRate />
            <Chart data={data} />
        </div>
    )
}

export default ChartContainer