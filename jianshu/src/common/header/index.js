import React, { Component } from 'react';

import { connect } from 'react-redux';

import { CSSTransition } from 'react-transition-group';

import { actionCreators } from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
}from './style.js';

class Header extends Component {

    getListArea = () => {
        const {mouseIn, focused, list, page ,totalPage ,handleMouseEnter,handleChangePage, handleMouseLeave} = this.props;

        const newList=list.toJS();

        const  pageList=[];

           if(newList.length){
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
            
           }
            
        
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage , this.spinIcon)}>
                    <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe851;</i>
                        换一批
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {/* {
                            list.map((item, index) => {
                                return <SearchInfoItem key={index}>{item}</SearchInfoItem>
                            })
                        } */}
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
             )
        }else{
            return null
        }
    }
    render(){
        const { focused, handleFocus, handleBlur , list } = this.props;
        return (
            <HeaderWrapper>
                 <Logo/>
                 <Nav>
                   <NavItem className='left active'>首页</NavItem>
                   <NavItem className='left'>下载App</NavItem>
                   <NavItem className='right'>登录</NavItem>
                   <NavItem className='right'>
                   <i className="iconfont">&#xe636;</i>
                   </NavItem>
                   <SearchWrapper>
                   <CSSTransition
                     in={focused}
                     timeout={200}
                     classNames='slide'
                   >
                   <NavSearch 
                     className={focused ? 'focused':''}
                     onFocus={()=>handleFocus(list)}
                     onBlur={handleBlur}
                   ></NavSearch>
                   </CSSTransition>
                   <i className={focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe60b;</i>
                   {this.getListArea()}
                   </SearchWrapper>
                 </Nav>
                 <Addition>
                     <Button className='writting'>
                     <i className="iconfont">&#xe624;</i>
                     写文章</Button> 
                     <Button className='reg'>注册</Button>
                     </Addition>
            </HeaderWrapper>
        )
    }
}
const  mapStateToProps = (state) =>{
     return {
         focused:state.get('header').get('focused'),
         list:state.get('header').get('list'),
         page:state.get('header').get('page'),
         totalPage:state.get('header').get('totalPage'),
         mouseIn:state.get('header').get('mouseIn')
         //等价写法
         //focused:state.getIn(['header','focused'])
     }
}
const mapDispacthToprops = (dispacth) =>{
       return {
        handleFocus(list){
            console.log(list);  //避免无意义的ajax请求。
            (list.size===0) &&  dispacth(actionCreators.getList())
            // if(list.size>0){
            //     dispacth(actionCreators.getList())
            // }   
            dispacth(actionCreators.searchFocus())
        },
        handleBlur(){   
            dispacth(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispacth(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispacth(actionCreators.MouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            let  originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
             if(originAngle){
                originAngle=parseInt(originAngle,10)
             }else{
                originAngle=0;
             }
            spin.style.transform='rotate('+ (originAngle+360)+'deg)'
            if(page<totalPage){
               dispacth(actionCreators.ChangePage(page+1))  
            }else{
                dispacth(actionCreators.ChangePage(1))  
            }    
        }
       }
}
export default connect(mapStateToProps,mapDispacthToprops)(Header);