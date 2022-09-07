import { useState } from "react";
import { useAuth } from "../../contexts/auth-context";

import Input from "../UI/Input";
import Button from "../UI/Button";
import Container from "../UI/Container";
import Card from "../UI/Card";

const LoginForm = (props) => {
  const auth_context = useAuth();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function changeUserInputHandler(value) {
    setUser(value);
  }

  function changePasswordInputHandler(value) {
    setPassword(value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    auth_context.loginHandler(user, password);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <Container>
        <Card>
          <Container>
            <h1 className="main-title"> Sign In </h1>
            <p className="sub-text">
              Create your profile and share your programming skills!
            </p>
            <Input
              onChangeInputValue={changeUserInputHandler}
              placeholder="example"
            />
            <Input
              type="password"
              onChangeInputValue={changePasswordInputHandler}
              placeholder="*******"
            />
            <p>Not a user? Register</p>
            <Button type="submit" button_text="Login" />
            <p>Forgot your password?</p>
          </Container>
        </Card>
      </Container>
    </form>
  );
};

export default LoginForm;
