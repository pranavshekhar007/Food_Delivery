import React from "react";

class SearchClassBased extends React.Component {
    constructor(props){
        super();
        this.props=props;
        this.state ={
            count: 0,
            count1 : 1,
        }
    }

    render(){
        function updateCount(){
            this.setState({count: this.state.count + 1});
        }
        return (
            <>
                <h1>Search Class Based Components</h1>
                <p>{this.props.name}</p>
                <p>{this.state.count}</p>
                <p>{this.state.count1}</p>
                <button onClick={updateCount.bind(this)}>update me</button>
            </>
        )
    }
}

export default SearchClassBased;