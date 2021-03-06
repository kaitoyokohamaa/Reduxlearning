import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions'
class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAdd5Counter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSub5Counter}  />
                <hr />
                <button onClick={ () =>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {
                        this.props.storedResults.map(strResult =>(
                            <li key={strResult.id} onClick ={()=>{this.props.onDeleteResult(strResult.id)}}>{strResult.value}</li>
                        ))
                    }
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps= state =>{
    return{
        ctr:state.ctr.counter,
        storedResults:state.res.results
    }
}

const mapDisptchToProps = dispatch =>{
    return {
        onIncrementCounter:() =>dispatch({type:actionTypes.INCREMENT}),
        onDecrementCounter:() =>dispatch({type:actionTypes.DECREMENT}),
        onAdd5Counter:() =>dispatch({type:actionTypes.ADD,val:10}),
        onSub5Counter:() =>dispatch({type:actionTypes.SUB, val:15}),
        onStoreResult:(result) =>dispatch({type:actionTypes.STORE_RESULT,result:result}),
        onDeleteResult:(id) =>dispatch({type:actionTypes.DELETE_RESULT,resultElId:id})
    }
}

export default connect(mapStateToProps,mapDisptchToProps)(Counter);