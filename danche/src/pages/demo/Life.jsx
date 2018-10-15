import React from 'react';
import Child  from './Child';
import {Button} from 'antd';
import './index.less';

export default class Life extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    
    }
    handelAdd=()=>{
     this.setState({
         count:this.state.count+1
     })
    }
    handelA=()=>{
        this.setState({
            count:this.state.count-1
        })
       }
    render(){
        
        return(
            <div className='content'>
                <p>  React生命周期-1

                </p>
                <Button onClick={this.handelAdd}>Antd点击加一下</Button>
                <button onClick={this.handelAdd}>点击加一下</button>
                <button onClick={this.handelA}>点击减一下</button>
                <p>{this.state.count}</p>
                <Child  name={this.state.count}/>
            </div>
        )
    }
}