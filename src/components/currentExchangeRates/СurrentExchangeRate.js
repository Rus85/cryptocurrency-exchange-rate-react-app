import useQueryFetch from '../../hooks/useQueryFetch'
import { CURRENT_EXCHANGE_COINS_RATE } from '../../urlConsts/urlConsts'
import Spinner from '../spinner/Spinner'
import './currentexchangerate.css'


const СurrentExchangeRate = () => {

    const { data, loading, error } = useQueryFetch(CURRENT_EXCHANGE_COINS_RATE)

    if (loading) return <Spinner />
    if (error) return <Spinner text={'Загрузка данных с сервера...'}/>
    if (!data) return null

    const keys = [
        {
            title: 'BTC',
            key: 'bitcoin',
        },
        {
            title: 'ETH',
            key: 'ethereum',
        },
    ]

    return (
        <div className='current-exchange'>
            <h1>Текущий курс криптовалют</h1>
            <div className='coin-boxes'>
                {
                    keys.map(({ title, key }) => (
                        <div className='coin-item' key={key}>
                            <h3>{title}</h3>
                            <div className='counter'>{new Intl.NumberFormat('ru-RU').format(data[key].usd.toFixed())} $</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default СurrentExchangeRate
