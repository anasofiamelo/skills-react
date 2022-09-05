import Routes from "./routes";
import Navbar from "./components/layout/Navbar";

import { AuthContextProvider } from "./contexts/auth-context";
import { UserContextProvider } from "./contexts/users-context";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <Navbar />
        <Routes />
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
