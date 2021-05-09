import { AuthProvider } from './auth'

const RootProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>
}

export default RootProvider
