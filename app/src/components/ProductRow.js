/**
 * Created by guiulianaheran on 19-01-17.
 */
import React from 'react'

export default class ProductRow extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <h6>{this.props.product.name}</h6>
        )
    }
}