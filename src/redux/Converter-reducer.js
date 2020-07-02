const SET_CHANGE_CURRENCY = 'SET_CHANGE_CURRENCY'

const initialState = {
    currency: ['USD', 'BYN', 'EUR', 'RUB'],

    sale: 'USD',
    pay: 'BYN',

    exchange: {
        'USD': { salePrice: 2.37, payPrice: 2.44 },
        'BYN': { salePrice: 0.41, payPrice: 0.43 },
    }
}

const converterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANGE_CURRENCY:
            return {
                ...state,
                sale: state.pay,
                pay: state.sale,
            }
        default:
            return state
    }
}

export const setChangeCurrency = () => ({ type: SET_CHANGE_CURRENCY })


export default converterReducer