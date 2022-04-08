const initialProductState = {
    category: 'all',
    productID: currentID,
    currency: preferredCurrency || 'USD',
    bag: JSON.parse(localStorage.getItem('bag')) || []
}

const rootReducer = (state = initialProductState, action) => {
    switch(action.type) {
        case "CATEGORY_UPDATE": {
            return {
                ...state,
                category: action.category
            }
        }
        case "CURRENCY_UPDATE": {
            return {
                ...state,
                currency: action.currency
            }
        }
        case "PRODUCT_ID_UPDATE": {
            return {
                ...state,
                productID: action.productID
            }
        }
        case "ADD_TO_BAG": {
            localStorage.setItem('bag', JSON.stringify([...state.bag, action.product]))

            return {
                ...state,
                bag: [...state.bag, action.product]
            }
        }
        case "CLEAR_BAG": {
            return {
                ...state,
                bag: []
            }
        }
        case "READ_BAG_ITEM": {
            const newBag = state.bag.filter(bagItem => bagItem.id !== action.id)
            localStorage.setItem("bag", JSON.stringify(newBag))

            return {
                ...state,
                bag: newBag
            }
        }
        case "QUANTITY_INC": {
            const newBag = state.bag.map(item => {
                if(item.id===action.id) {
                    if(item.quantity < 10) {
                        return {
                            ...item,
                            quantity: Number(item.quantity) + 1
                        }
                    } else return item
                } else return item
            })

            localStorage.setItem('bag', JSON.stringify(newBag))

            return {
                ...state,
                bag: newBag
            }
        }
        case "QUANTITY_DEC": {
            const newBag = state.bag.map(item => {
                if(item.id===action.id) {
                    if(item.quantity > 1) {
                        return {
                            ...item,
                            quantity: Number(item.quantity) - 1
                        }
                    } else return item
                } else return item
            })
            localStorage.setItem('bag', JSON.stringify(newBag))

            return {
                ...state,
                bag: newBag
            }
        }
        default:
             return state
    }
}

const currentID = window.location.pathname.split('/')[2]
const preferredCurrency = localStorage.getItem('preferredCurrency')

export default rootReducer