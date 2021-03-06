import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom'
import { useAuth } from '../contexts/auth'

interface Props extends RouteProps {
  component: React.FC<RouteComponentProps>
  isPrivate?: boolean
}

const RouteWrapper: React.FC<Props> = ({
  component: Component,
  isPrivate,
  ...rest
}) => {
  const { signed } = useAuth()

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/search" />
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />
}

export default RouteWrapper
