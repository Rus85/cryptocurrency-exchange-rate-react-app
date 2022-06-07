import { useCallback, useState } from 'react'
import useQueryFetch from '../../apiComponents/useQueryFetch'
import PieChart from '../charts/pieChart/PieChart'
import Input from '../input/Input'
import './breifcase.css'


const Breifcase = () => {

    const [bitState, setBitState] = useState(10)
    const [ethState, setEthState] = useState(5)

    const { data } = useQueryFetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd')

    const bitCallback = useCallback((value, isAdd) => {
        setBitState((prev) => {
            if (isAdd) {
                return prev + value
            }
            if (prev < value) {
                return 0
            }
            return prev - value
        })
    }, [setBitState])

    const ethCallback = useCallback((value, isAdd) => {
        setEthState((prev) => {
            if (isAdd) {
                return prev + value
            }
            if (prev < value) {
                return 0
            }
            return prev - value
        })
    }, [setEthState])


    const currentBitRate = data?.bitcoin?.usd ? data.bitcoin.usd * bitState : 0
    const currentEthrate = data?.ethereum?.usd ? data.ethereum.usd * ethState : 0

    const sum = currentBitRate + currentEthrate

    return (
        <>
            <div className="breifcase-block">
                <h2>Текущий баланс криптовалют:</h2>
                <div className='breifcase-coins-block'>
                    <div className="btc-block">
                        <h2>BTC</h2>
                        <div className="coin-block">
                            <div className="coin-counter">{bitState}</div>
                            <Input inputCallBack={bitCallback} />
                        </div>
                    </div>
                    <div className="eth-block">
                        <h2>ETH</h2>
                        <div className="coin-block">
                            <div className="coin-counter">{ethState}</div>
                            <Input inputCallBack={ethCallback} />
                        </div>
                    </div>
                </div>
                <div className="breifcase-sum">
                    <h2>Общий баланс криптовалют в USD:</h2>
                    <div className="breifcase-sum-block">
                        <div className="breifcase-sum-counter">{new Intl.NumberFormat('ru-RU').format(sum.toFixed())} $</div>
                    </div>
                </div>
            </div>
            <PieChart coins={[bitState, ethState]} />
        </>
    )
}

export default Breifcase

