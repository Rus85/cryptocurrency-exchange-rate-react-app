import { useCallback } from 'react'
import useQueryFetch from '../../hooks/useQueryFetch'
import PieChart from '../charts/pieChart/PieChart'
import Input from '../input/Input'
import { incBitToState, decBitToState, incEthToState, decEthToState } from '../store/coinsSlices'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/userAuth'
import Spinner from '../spinner/Spinner'
import { CURRENT_EXCHANGE_COINS_RATE } from '../../urlConsts/urlConsts'
import './breifcase.css'
import { motion } from 'framer-motion'


const Breifcase = () => {

    const { isAuth } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { bitState, ethState } = useSelector(state => state.coinsInput)

    useEffect(() => {
        if (isAuth) {
            navigate('/breifcase')
        } else {
            navigate('/signin')
        }

    }, [isAuth, navigate])

    const { data } = useQueryFetch(CURRENT_EXCHANGE_COINS_RATE)

    const bitCallback = useCallback((value, isAdd) => {
        if (isAdd) {
            dispatch(incBitToState(value))
        } else {
            dispatch(decBitToState(value))
        }
    }, [dispatch])

    const ethCallback = useCallback((value, isAdd) => {
        if (isAdd) {
            dispatch(incEthToState(value))
        } else {
            dispatch(decEthToState(value))
        }
    }, [dispatch])

    if (!data) return <Spinner text={'Загрузка данных с сервера...'}/>

    const currentBitRate = data?.bitcoin?.usd ? data.bitcoin.usd * bitState : 0
    const currentEthrate = data?.ethereum?.usd ? data.ethereum.usd * ethState : 0

    const sum = currentBitRate + currentEthrate

    return isAuth ? (
        <>
            <motion.div className="breifcase-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
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
            </motion.div>
            <PieChart coins={[bitState, ethState]} />
        </>
    ) : null

}

export default Breifcase

