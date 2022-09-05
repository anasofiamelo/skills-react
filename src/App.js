import Routes from "./routes";
import Navbar from "./components/layout/Navbar";

import { AuthContextProvider } from "./contexts/auth-context";
import { UserContextProvider } from "./contexts/user-context";
import { SkillContextProvider } from "./contexts/skill-context";

function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <SkillContextProvider>
          <Navbar />
          <Routes />
        </SkillContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
}

export default App;
