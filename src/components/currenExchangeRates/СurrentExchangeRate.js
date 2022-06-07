import useQueryFetch from '../../apiComponents/useQueryFetch'
import './currentexchangerate.css'

const СurrentExchangeRate = () => {

    const { data } = useQueryFetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd')

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
