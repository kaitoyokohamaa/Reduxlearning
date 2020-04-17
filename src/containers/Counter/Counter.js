import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionCreater from '../../store/actions/actions';
import {increment} from '../../store/actions/actions'
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
        onIncrementCounter:() =>dispatch(actionCreater.increment()),
        onDecrementCounter:() =>dispatch(actionCreater.decrement()),
        onAdd5Counter:() =>dispatch(actionCreater.add(10)),
        onSub5Counter:() =>dispatch(actionCreater.substoract(15)),
        onStoreResult:(result) =>dispatch(actionCreater.storeResult(result)),
        onDeleteResult:(id) =>dispatch(actionCreater.deleteResult(id))
    }
}

export default connect(mapStateToProps,mapDisptchToProps)(Counter);