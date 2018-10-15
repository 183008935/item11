import React from 'react';
export default class Child extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentWillMount(){
        console.log('will Mount');
    }
    componentDidMount(){
        console.log('Did Mount')
    }
    componentWillReceiveProps(newProps){
        console.log('will props' + newProps)
    }
    shouldComponentUpdate(){
        console.log('shoul Update');
        return true
    }
    componentWillUpdate(){
        console.log('will Updata')
    }
    componentDidUpdate(){
        console.log('Did Mount')
    }
    render(){
        return(
             <div>
                 <p>子组件</p>
            <p>{this.props.name}</p>
        </div>
        )
       
    }
}