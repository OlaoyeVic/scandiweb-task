import React from 'react'
import { useQuery, gql } from '@apollo/client'

import undraw from '../assets/undraw.svg'
import './all.css'
import {store} from '../Redux/store'

const PRODUCT_QUERY = gql`
    {
        category {
            name
            products {
                id
                name
                brand
                inStock
                gallery
                prices {
                    amount
                    currency {
                        symbol
                        label
                    }
                }
                attributes {
                    type
                    name
                    items {
                        value
                        displayValue
                        id
                    }
                }
            }
        }
    }
`

class All extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: store.getState().category,
            currency: store.getState().currency
        }
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({category: store.getState().category, currency: store.getState().currency})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    showProducts() {
        if(!this?.props?.data?.loading) {
            const categories = this?.props?.data?.category
            const {products} = categories?.find(category => category?.name === this.state.category)

            products?.map(product => {
                const currentCurrencyPrice = product.prices.find(currency => currency.currency.label === this.state.currency)

                // return <Product data={product} price={currentCurrencyPrice} key={product.id} />
                return <div className='product-card'>
                    <img src={product.gallery[0]} alt='products' />
                    <span>{product.description}</span>
                    <span>{product.currentCurrencyPrice}</span>
                </div>
            })
        }
    }
    render () {
        return (
            <div className='women-category'>
                <div className='women-category-header'>
                    {this?.props?.data?.categories && (
                        <>
                            <h3>{this.state.category.toUpperCase()}</h3>
                        </>
                    )}
                </div>
                {this.showProducts()}
                {/* <div className='product-card'>
                    <img src={undraw} alt='products' />
                    <span>Appollo Running To Short</span>
                    <span>$50.00</span>
                </div> */}
            </div>
        )
    }
}
export default All