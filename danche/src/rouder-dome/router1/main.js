import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
     
            <div>
                这是Mian 组件
                <Link to="/main/a">跳转吧</Link>
                <hr/>
                {this.props.children}
            </div>
       
    )
  }
}
