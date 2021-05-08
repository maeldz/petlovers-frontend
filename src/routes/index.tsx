import { Route, Switch } from 'react-router-dom'
import { Home, Login } from '../pages'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
  )
}

export default Routes
