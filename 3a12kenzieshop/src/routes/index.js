import { Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Route from './route'
// import Signup from '../pages/Signup'


const Routes = () => {
    return (
        <Switch>
            <Route isPrivate path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
            <Route isPrivate path='/cart' exact component={Cart}/>
            {/* <Route path='/signup' exact component={Signup}/>  */}
        </Switch>
    )
}
export default Routes
