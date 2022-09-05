import Routes from "./routes";
import { AuthContextProvider } from "./contexts/auth-context";
import { useAuth } from "./contexts/auth-context";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
