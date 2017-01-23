/**
 * Created by guiulianaheran on 19-01-17.
 */
import React from 'react'
import SearchBar from './SearchBar.js'
import ProductTable from './ProductTable.js'
import {Pie} from 'react-chartjs-2';
import {Bubble} from 'react-chartjs-2';



const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const dataBuble = {
    labels: ['January'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [{x:10,y:20,r:5}]
        }
    ]
};


export default class FilterableProductTable extends React.Component {
    constructor(){
        super();
        this.state = {
            filter: null
        }
    }
    filterList(env){
        let filter = env.target.value;
        this.setState({
            filter: filter
        })
    }
    render(){
        return (
            <div>
                <SearchBar onChange={this.filterList.bind(this)}/>
                <ProductTable products = {this.props.store} filter={this.state.filter}/>
                <Pie data={data} />
                <Bubble data={dataBuble} />
            </div>
        )
    }
}
