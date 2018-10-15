import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import App from './App';
import Login from './pages/login/index';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
// import NoMatch from './pages/nomacth/index';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notice from './pages/ui/notice';
import Message from './pages/ui/messages'
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousel';
import FormLogin from './pages/from/login';
import Register from './pages/from/register';
import BasicTable from './pages/tabel/basic';
import HighTable from './pages/tabel/highTable';
import City from './pages/city';
import Order from './pages/order';
import User from './pages/user';
import Common from './common';
import BikeMap from './pages/map/bikeMap';
import Permission from './pages/permission';
import OrderDetail from './pages/order/detail';
export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path="/common" render={() =>
                            <Common>
                                <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                            </Common>
                        }
                        />
                    <Route path='/' render={() =>
                        <Admin>
                            <Switch> 
                                <Route path='/home' component={Home} />
                                <Route path='/ui/buttons' component={Buttons} />
                                <Route path='/ui/modals' component={Modals} />
                                <Route path='/ui/loadings' component={Loadings} />
                                <Route path='/ui/notification' component={Notice} />
                                <Route path='/ui/messages' component={Message} />
                                <Route path='/ui/tabs' component={Tab} />
                                <Route path='/ui/gallery' component={Gallery} />
                                <Route path='/ui/carousel' component={Carousels} />
                                <Route path='/form/login' component={FormLogin} />
                                <Route path='/form/reg' component={Register} />
                                <Route path='/table/basic' component={BasicTable} />
                                <Route path='/table/high' component={HighTable} />
                                <Route path='/city' component={City} />
                                <Route path='/order' component={Order} />
                                <Route path='/user' component={User} />
                                <Route path='/bikeMap' component={BikeMap} />
                                <Route path='/permission' component={Permission} />
                                <Route component={Home} />
                            </Switch>
                        </Admin>
                    } />  
                     </Switch>       
                </App>
            </Router>
        )
    }
}
