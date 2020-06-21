import React from 'react';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shoppage.component'
import Header from './components/header/header.component'
// import Signin from './pages/signin-signup/signin-signup.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import './App.css'
import { setCurrentUser } from './redux/user/user.action';
import SigninSignout from './pages/signin-signup/signin-signup.component';
import { selectCurrentUser } from './redux/user/user.selector';
import checkOut from './pages/checkout/checkout.component';


class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth)
          ; (await userRef).onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (

      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/Shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : (<SigninSignout />)} />
              <Route exact path='/checkout' component={checkOut} />
        </Switch>
      </div>
    );
  }
}

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const MapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(MapStateToProps, MapDispatchToProps)(App);
