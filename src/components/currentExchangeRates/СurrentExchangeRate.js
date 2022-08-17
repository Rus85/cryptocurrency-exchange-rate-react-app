import useQueryFetch from '../../hooks/useQueryFetch'
import { CURRENT_EXCHANGE_COINS_RATE } from '../../urlConsts/urlConsts'
import Spinner from '../spinner/Spinner'
import './currentexchangerate.css'
import bitcoinIcon from '../../assets/bitcoinIcon.png'
import ethereumIcon from '../../assets/ethereumIcon.png'


const СurrentExchangeRate = () => {

    const { data, loading, error } = useQueryFetch(CURRENT_EXCHANGE_COINS_RATE)

    if (loading) return <Spinner />
    if (error) return <Spinner text={'Загрузка данных с сервера...'}/>
    if (!data) return null

    const keys = [
        {
            title: 'BTC',
            key: 'bitcoin',
            icon: bitcoinIcon
        },
        {
            title: 'ETH',
            key: 'ethereum',
            icon: ethereumIcon
        },
    ]

    return (
        <div className='current-exchange'>
            <div>
            <h1>Текущий курс криптовалют</h1>
            </div>
            <div className='coin-boxes'>
                {
                    keys.map(({ title, key, icon }) => (
                        <div className='coin-item' key={key}>
                            <div className='coin-item-blocks'>
                            <div>
                            <h3>{title}</h3>
                            </div>
                            <div>
                            <img className='coins-icons' src={icon} alt="" />
                            </div>
                            </div>
                            <div className='counter'>{new Intl.NumberFormat('ru-RU').format(data[key].usd.toFixed())} $
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default СurrentExchangeRate
