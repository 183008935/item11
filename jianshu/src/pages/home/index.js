import React, { Component } from 'react';
import List from './components/list';
import Topic from './components/Topic';
import Tuijian from './components/Tuijian';
import Writer from './components/Writer';
import { HomeWrapper,
    HomeLeft,
    HomeRight
} from './style';
import Axios from 'axios';

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
       <HomeLeft>
           <img  className="banner-img"   
           src="http://upload.jianshu.io/admin_banners/web_images/4502/25b524b6d1d21c508b7ca6a6a0a77ead48eed1b6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
           <Topic/>
           <List/>
           </HomeLeft>
       <HomeRight>
           <Tuijian/>
           <Writer/>
       </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount(){
     Axios.get("/api/home.json").then((res)=>{
       console.log(res)
     })
  }
}
