import React from 'react'
import Converter from './Converter'
import { connect } from 'react-redux'
import { setChangeCurrency } from '../../redux/Converter-reducer'


class ConverterContainer extends React.Component {

    state = {
        inputSale: '',
        inputPay: '',
    }

    onChangeInput = (name, value) => {
        let result;
        switch (name) {
            case 'sale': {
                this.setState({ inputSale: value })
                result = this.props.exchange[this.props.sale].salePrice * Number(value) //продажа банку
                this.setState({ inputPay: result })
                break
            }
            case 'pay': {
                this.setState({ inputPay: value })
                result = this.props.exchange[this.props.pay].payPrice * Number(value) //покупка у банка
                this.setState({ inputSale: result })
                break
            }
        }
    }

    onButtonClick = () => {
        this.props.setChangeCurrency()
        if (this.state.inputSale && this.state.inputPay) {
            this.setState({ inputPay: this.state.inputSale, inputSale: this.state.inputPay })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.exchange[this.props.sale] !== prevProps.exchange[prevProps.sale]) {
            if (this.state.inputSale && this.state.inputPay) {
                let result = this.props.exchange[this.props.sale].salePrice * Number(this.state.inputSale); //продажа банку
                this.setState({ inputPay: result })
            }
        }
    }

    render() {
        return (
            <Converter {...this.props}
                onButtonClick={this.onButtonClick}
                inputSale={this.state.inputSale}
                inputPay={this.state.inputPay}
                onChangeInput={this.onChangeInput}
            />
        )
    }
}

const mapState = (state) => {
    return {
        sale: state.converterPage.sale,
        pay: state.converterPage.pay,
        exchange: state.converterPage.exchange,
        currency: state.converterPage.currency,
    }
}


export default connect(mapState, { setChangeCurrency })(ConverterContainer)