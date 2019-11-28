import React from 'react';

class NumberFiled extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    componentDidUpdate(){
        if (this.state){
            let string = this.state.value
            this.refs.inputNumber.value = this.replaceString(string)
        }
    }

    HandlerInputNumber = (event) => {
        if (event.currentTarget.value){
            this.setState({
                value: event.currentTarget.value
            })
        }
    }

    replaceString(string) {
        string = `${string}`
        string = string.replace(/\D/gm,"")
        return Number(string).toLocaleString();
    }
    
    render() {
        return (
            <input ref="inputNumber" {...this.props} onChange={this.HandlerInputNumber}/>
        );
    }
}

export default NumberFiled
