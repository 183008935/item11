import React, { Component } from 'react'

import { connect } from 'react-redux';

import {TopicWrapper,TopicItem} from './../style';

class Topic extends Component {
  render() {
      const { list } = this.props;
    return (
      
      <TopicWrapper>
        {
          list.map((item)=>{
            return (
              <TopicItem  key={item.get('id')}>
                <img 
                className="topic-pic"
                src={item.get('imgUrl')} alt="64"/>
                {item.get('title')}
            </TopicItem>
            )
          })
        }
       
        <div className="special">更多热门专题 ></div>
      </TopicWrapper>
    )
  }
}
const mapStateToProps = (state) => ({
  list:state.get("home").get('topicList')
})

export default connect(mapStateToProps,null)(Topic)
