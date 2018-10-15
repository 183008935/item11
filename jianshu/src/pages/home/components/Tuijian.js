import React, { Component } from 'react'

import {TuijianWrapper,TuijianItem} from './../style';

import {connect} from "react-redux";
class Tuijian extends Component {
  render() {
    const {list}=this.props;
    return (
      <TuijianWrapper>
        {
          list.map((item)=>{
           return <TuijianItem 
           imgUrl={item.get("imgUrl")}
           key = {item.get("id")}
           /> 
          })
        }
      </TuijianWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list:state.getIn(["home","tuijianList"])
})

export default connect(mapStateToProps,null)(Tuijian)
