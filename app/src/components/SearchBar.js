/**
 * Created by guiulianaheran on 19-01-17.
 */
import React from 'react'

export default class SearchBar extends React.Component {
    constructor () {
        super()
    }

    render(){
        return(
            <div>
                <input onChange={this.props.onChange} type="text"/>
                <input type="checkbox"/>
            </div>
        )
    }
}