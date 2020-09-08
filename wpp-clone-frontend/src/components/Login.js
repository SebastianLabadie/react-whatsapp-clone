import React, { useEffect, useState } from "react";
import styled,{keyframes} from "styled-components";
import { auth } from "../firebase";
import Button from '@material-ui/core/Button';

const asd=keyframes`
    to{
      border-bottom:2px solid #f50057;
      transform:scale(1.1);
    }
`
const LoginStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  display: ${({ open }) => (open ? "grid" : "none")};
  place-items: center;
  background: #dadbd3;
  .container {
    width: 50%;
    height: 50%;
    box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.75);
    background: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      input {
        width: 80%;
        margin: 1em;
        padding: 1em;
        border:none;
        outline:none;
        border-bottom:2px solid #dadbd3;
        &:focus{
        animation: .5s ${asd} forwards;
        }
      }
      
    }
  }
`;
const Login = ({ setName }) => {
  const [open, setOpen] = useState(true);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setOpen(false);
        setName(username);
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setOpen(false);
            setName(username);
          })
          .catch((e) => console.log(e));
      });
  };

  return (
    <LoginStyled open={open}>
      <div className="container">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="outlined" color="secondary" type="submit">
              Login
          </Button>
        </form>
      </div>
    </LoginStyled>
  );
};

export default Login;
