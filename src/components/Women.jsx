import React from 'react'
import { useQuery, gql } from '@apollo/client'

import undraw from '../assets/undraw.svg'
import './women.css'

const PRODUCT_QUERY = gql`
    {
        products {
            id
            category
        }
    }
`

class Women extends React.Component {
    constructor() {
        super()
        const {data, loading, error} = useQuery()
    }
    render () {
        return (
            <div className='women-category'>
                <div className='women-category-header'>
                    <h3>Category Name</h3>
                </div>
                <div className='product-card'>
                    <img src={undraw} alt='products' />
                    <span>Appollo Running To Short</span>
                    <span>$50.00</span>
                </div>
            </div>
        )
    }
}
export default Women