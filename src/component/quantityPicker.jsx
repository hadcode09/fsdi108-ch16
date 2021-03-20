import React, { Component } from 'react';

class QuantityPicker extends Component{
    state = {
        quantity: 1,
        name:' Mark'
    }
    render() {
        return (
            <div>
                <button onClick={this.increaseQuantity} className="btn btn-sm btn-primary">+</button>
                <label>{this.state.quantity}
                </label><button onClick={this.decreaseQuantity} className="btn btn-sm btn-primary">-</button>
            </div>
        );
    }

    increaseQuantity = () => {
        //this.state.quantity = 999; <- DONT modify state directly
        let current = this.state.quantity + 1; // read from the state
        this.setState({quantity: current});
    }

    decreaseQuantity = () => {

        let current = this.state.quantity - 1; 
        if(current > 0){//prevent current going below 1
        this.setState({quantity: current});
        }
    }
}

export default QuantityPicker;