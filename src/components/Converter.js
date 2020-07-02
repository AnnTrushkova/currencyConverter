import React from 'react'
import styles from './Converter.module.css'


const Converter = ({ sale, pay, onButtonClick, inputSale, inputPay, currency, onChangeInput }) => {
    return (
        <div className={styles.converter}>
            <div className={styles.title}>
                <img
                    src="https://opencartforum.com/screenshots/monthly_2017_03/currency_icon.png.cc52d639ffea77670174f884880256ed.png"
                    alt="" className={styles.image} />
                <span>Конвертер валют</span>
            </div>
            <div className={styles.block}>
                <div>
                    <div className={styles.input}>
                        <Input data-name={'sale'} placeholder="Продажа банку" value={inputSale} onChangeInput={onChangeInput} />
                        <Select value={sale} currency={currency} />
                    </div>

                    <div className={styles.input}>
                        <Input data-name={'pay'} placeholder="Покупка у банка" value={inputPay} onChangeInput={onChangeInput} />
                        <Select value={pay} currency={currency} />
                    </div>
                </div>
                <div className={styles.button}>
                    <button onClick={onButtonClick} />
                </div>
            </div>
        </div>
    )
}

const Input = ({ onChangeInput, ...props }) => {
    const onInputChange = (event) => {
        onChangeInput(event.target.dataset.name, event.target.value)
    }
    return <input {...props} onChange={onInputChange} />
}

const Select = (props) => {
    return <select  {...props}  >
        {props.currency.map(c => <option value={c}>{c}</option>)}
    </select>
}

export default Converter