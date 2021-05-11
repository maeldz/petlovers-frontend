import { Switch } from 'react-router-dom'
import { Home, Login, Signup, Search, MyPets, NewPet, Profile } from '../pages'
import Route from './route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/search" isPrivate component={Search} />
      <Route path="/my-pets" isPrivate component={MyPets} />
      <Route path="/new-pet" isPrivate component={NewPet} />
      <Route path="/profile" isPrivate component={Profile} />
    </Switch>
  )
}

export default Routes
