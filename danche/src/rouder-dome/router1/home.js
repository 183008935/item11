import React, { Component } from 'react'
import {HashRouter,Route,Link,Switch} from 'react-router-dom';
import Topic from './topic';
import About from './about';
import Main from './main';
export default class Home extends Component {
  render() {
    return (
        <HashRouter>
                <div>
                     <ul>
                         <li>
                             <Link to="/">home</Link>
                         </li>
                         <li>
                             <Link to="/about">about</Link>
                         </li>
                         <li>
                             <Link to="/topic">topic</Link>
                         </li>
                     </ul>
                     <hr/>
                     <Switch>
                      <Route exact={true} path='/' component={Main}/>
                     <Route path='/about' component={About}/>
                     <Route path='/topic' component={Topic}/>  
                     </Switch>
                      
                </div>
        </HashRouter>
    )
  }
}
