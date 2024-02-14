import { Box, Button, Paper, Typography } from "@mui/material";
import signInStyles from "./Login.Styles";
import React, { useState } from "react";
import loginImg from "../../assets/youtubeLoginLogo.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate, Link } from "react-router-dom";
import { EachUser } from "../../typescript/GlobalTypes";


const localStorageData = JSON.parse(localStorage.getItem("users-credentials") ?? "null")
const localStorageActiveUser = JSON.parse(localStorage.getItem("activeUser") ?? "null")


interface loginFormInterface {
  email: string;
  password: string;
  isPasswordVisible: boolean;
  authenticateText: string;
}

interface IState {
  formState: loginFormInterface,
  activeUser: number | null
}


const Login: React.FC = () => {
  const [formState, setFormState] = useState<IState["formState"]>({
    email: "",
    password: "",
    isPasswordVisible: false,
    authenticateText: "",
  });
  const [activeUser, setActiveUser] = useState<IState["activeUser"]>(localStorageActiveUser)
  const navigate = useNavigate();


  React.useEffect(() => {
    console.log(activeUser)
      if (activeUser) navigate("/");
  }, [activeUser, navigate])

  const togglePasswordVisibility = () => {
    setFormState((prevState) => ({
      ...prevState,
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") setFormState(prevState => ({ ...prevState, email: value }));
    else setFormState((prevState) => ({ ...prevState, password: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.email.trim().length === 0 || formState.password.trim().length === 0) setFormState(prevState => ({ ...prevState, authenticateText: "*Enter valid credentials" }));
    else {
      let isUserRegistered = false;
      if (localStorageData) {
        localStorageData.forEach((eachUser : EachUser) => {
          if (eachUser.email === formState.email) {
            isUserRegistered = true;
            setFormState(prevState => ({ ...prevState, authenticateText: "" }));
            localStorage.setItem("activeUser", JSON.stringify(eachUser.userId));
            setActiveUser(eachUser.userId)
            navigate("/");
          }
        })
      }
      if (isUserRegistered === false) setFormState(prevState => ({ ...prevState, authenticateText: "*Account doesn't exist. Register" }));
    }
  };

  return (
    <Box sx={signInStyles.mainContainer}>
      <Box sx={signInStyles.logoText}>Your Logo</Box>
      <Box sx={signInStyles.parentContainer}>
        <Box sx={signInStyles.childContainer}>
          <Paper sx={signInStyles.signUpContainer}>
            <Box sx={signInStyles.signUpChildContainer}>
              <Box component="img" alt="youtube-login-logo" sx={signInStyles.youtubeLoginLogo} src={loginImg} />
              <Box sx={signInStyles.welcomeText}>Welcome ! <Box component="span" sx={signInStyles.signInText}>Sign in</Box></Box>
              <Box
                sx={signInStyles.formContainer}
                component="form"
                onSubmit={handleSubmit}
              >
                <Box sx={signInStyles.inputLabelContainer}>
                  <Box sx={signInStyles.labelText}>Email</Box>
                  <Box sx={signInStyles.inputContainer}>
                    <Box
                      sx={signInStyles.inputEl}
                      placeholder="Enter your Email"
                      onChange={handleInputChange}
                      name="email"
                      type="email"
                      value={formState.email}
                      component="input"
                    />
                  </Box>
                </Box>
                <Box>
                  <Box sx={signInStyles.inputLabelContainer}>
                    <Box sx={signInStyles.labelText}>Password</Box>
                    <Box sx={signInStyles.inputContainer}>
                      <Box
                        sx={signInStyles.inputEl}
                        placeholder="Enter your Password"
                        type={formState.isPasswordVisible ? "password" : "text"}
                        onChange={handleInputChange}
                        name="password"
                        value={formState.password}
                        component="input"
                      />
                      {formState.isPasswordVisible ? (
                        <VisibilityOffIcon
                          sx={signInStyles.eye}
                          onClick={togglePasswordVisibility}
                        />
                      ) : (
                        <VisibilityIcon
                          sx={signInStyles.eye}
                          onClick={togglePasswordVisibility}
                        />
                      )}
                    </Box>
                  </Box>
                  <Box sx={signInStyles.rememberContainer}>
                    <Box sx={signInStyles.labelContainer}>
                      <Box
                        sx={signInStyles.checkbox}
                        placeholder="Enter your Password"
                        type="checkbox"
                        id="checkbox"
                        component="input"
                      />
                      <Box
                        sx={signInStyles.remember}
                        htmlFor="checkbox"
                        component="label"
                      >
                        Remember me
                      </Box>
                    </Box>
                    <Box sx={signInStyles.forget}>Forgot Password ?</Box>
                  </Box>
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  sx={signInStyles.formBtn}
                >
                  Login
                </Button>
              </Box>
              {formState.authenticateText && (
                <Typography sx={signInStyles.errorMsgText}>
                  {formState.authenticateText}
                </Typography>
              )}
              <Box sx={signInStyles.haveContainer}>
                Don't have an Account ?
                <Box sx={signInStyles.register} component="span">
                  <Link style={{ textDecoration: "none", color: "#000000", }} to="/register">Register</Link>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;