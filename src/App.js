import React,{useEffect} from 'react';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header.component' 
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import './App.css'
import SigninSignout from './pages/signin-signup/signin-signup.component';
import { selectCurrentUser } from './redux/user/user.selector';
import checkOut from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';


const App =({checkUserSession,currentUser})=> {
  useEffect(()=>{
    checkUserSession()
  },[checkUserSession])
  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/Shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : (<SigninSignout />)} />
              <Route exact path='/checkout' component={checkOut} />
        </Switch>
      </div>
    );
}

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
const MapDispatchToProps = dispatch => ({
  checkUserSession: () =>dispatch(checkUserSession())
})
export default connect(MapStateToProps,MapDispatchToProps)(App);
