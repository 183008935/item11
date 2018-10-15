import React, { Component } from 'react'
import {HashRouter as Router , Route,Link} from "react-router-dom";
import Topic from './../router1/topic';
import About from './../router1/about';
import Main from './../router1/main';
import Home from './home';
export default class IRoute extends Component {
    render() {
        return (
               <Router>
                   <Home>
                     {/* <Route exact={true} path='/' component={Main}/> */}
                     <Route  path='/main'  render={
                        ()=>
                            <Main>
                                <Route path='/main/a' component={About}/>
                            </Main> 
                     }/> 
                     <Route path='/about' component={About}/>
                     <Route path='/topic' component={Topic}/>  
                   </Home>
               </Router>
        )
    }
}
