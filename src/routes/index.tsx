import { Switch } from 'react-router-dom'
import { Home, Login, Signup } from '../pages'
import Route from './route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  )
}

export default Routes
