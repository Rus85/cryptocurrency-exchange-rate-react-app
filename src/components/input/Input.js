import { useRef } from 'react'
import './input.css'

const Input = ({ inputCallBack }) => {

    const inputEl = useRef(null)

    const onChangeHandler = (isAdd) => {

        if (!Number(inputEl.current.value) || Number(inputEl.current.value) < 0) {
            return alert('Введите пожалуйста число больше 0')
        }

        if (inputCallBack) {
            inputCallBack(+inputEl.current.value, isAdd)
        }
        inputEl.current.value = null
    }

    return (
        <div className='input-block'>
            <input ref={inputEl} placeholder='Введите значение' />
            <div className='btn'>
                <button onClick={() => onChangeHandler(true)}>+</button>
                <button onClick={() => onChangeHandler(false)}>-</button>
            </div>
        </div>
    )
}

export default Input