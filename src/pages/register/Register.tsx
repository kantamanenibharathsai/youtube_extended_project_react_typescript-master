import { Box, Button, Paper, Typography } from "@mui/material";
import signUpStyles from "./Register.Styles";
import React, { useState } from "react";
import loginImg from "../../assets/youtubeLoginLogo.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EachUser } from "../../typescript/GlobalTypes";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { addUser } from "../../redux/features/CredentialsSlice";

interface loginFormInterface {
    email: string;
    emailError: string;
    userName: string;
    userNameError: string;
    password: string;
    passwordError: string;
    isPasswordVisible: boolean;
    authenticateText: string;
}

interface IState {
    formState: loginFormInterface,
}

const Register: React.FC = () => {
    const [formState, setFormState] = useState<IState["formState"]>({
        email: "",
        emailError: "",
        userName: "",
        userNameError: "",
        password: "",
        passwordError: "",
        isPasswordVisible: false,
        authenticateText: ""
    });
    const usersCredentials: EachUser[] = useSelector(
        (state: RootState) => state.credentials.users
    );
    const dispatch = useDispatch<AppDispatch>();

    const togglePasswordVisibility = () => {
        setFormState(prevState => ({
            ...prevState,
            isPasswordVisible: !prevState.isPasswordVisible,
        }));
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === "email") setFormState(prevState => ({ ...prevState, email: value, }));
        else if (name === "username") setFormState((prevState) => ({ ...prevState, userName: value }));
        else setFormState((prevState) => ({ ...prevState, password: value }));

    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        event.preventDefault();
        switch (true) {
            case formState.email.trim().length === 0 && formState.password.trim().length === 0 && formState.userName.trim().length === 0:
                setFormState(prevState => ({ ...prevState, emailError: "*Email is mandatory", passwordError: "*Password is mandatory", userNameError: "*Username is mandatory" }));
                return;
            case formState.userName.trim().length === 0 || formState.password.trim().length === 0:
                setFormState(prevState => ({ ...prevState, userNameError: "*Username is mandatory", passwordError: "*Password is mandatory", emailError: "" }));
                return;
            case formState.userName.trim().length === 0 || formState.email.trim().length === 0:
                setFormState(prevState => ({ ...prevState, userNameError: "*Username is mandatory", emailError: "*Email is mandatory", passwordError: "" }));
                return;
            case formState.email.trim().length === 0 || formState.password.trim().length === 0:
                setFormState(prevState => ({ ...prevState, emailError: "*Email is mandatory", passwordError: "*Password is mandatory", userNameError: "" }));
                return;
            case formState.email.trim().length === 0:
                setFormState(prevState => ({ ...prevState, emailError: "*Email is mandatory", passwordError: "", userNameError: "" }));
                return;
            case formState.userName.trim().length === 0:
                setFormState(prevState => ({ ...prevState, userNameError: "*Username is mandatory", passwordError: "", emailError: "" }));
                return;
            case formState.password.trim().length === 0:
                setFormState(prevState => ({ ...prevState, passwordError: "*Password is mandatory", userNameError: "", emailError: "" }));
                return;
            case !formState.email.includes("@"):
                setFormState(prevState => ({ ...prevState, emailError: "*Enter Valid Email" }));
                return;
            case formState.userName.trim().length < 8:
                setFormState(prevState => ({ ...prevState, userNameError: "*Username should have atleast 6 characters" }));
                return;
            case formState.password.trim().length < 8:
                setFormState(prevState => ({ ...prevState, passwordError: "*Password should have atleast 8 characters" }));
                return;
            case !passwordPattern.test(formState.password):
                setFormState(prevState => ({ ...prevState, passwordError: "*Password should have atleast 1 uppercase and 1 lowercase letters, 1 digit and 1 special character" }));
                return;
            default:
                let isCredentialsAlreadyExist = false;
                usersCredentials.forEach(eachUser => {
                    if (eachUser.email === formState.email || eachUser.userName === formState.userName) {
                        isCredentialsAlreadyExist = true;
                        setFormState(prevState => ({ ...prevState, authenticateText: "*Username or email already exist" }));
                    }
                })
                if (isCredentialsAlreadyExist === false) {
                    const randomNum = Math.ceil(Math.random() * 100);
                    dispatch(addUser({
                        userId: randomNum,
                        email: formState.email,
                        userName: formState.userName,
                        password: formState.password
                    }))
                }
        }
    };

    return (
        <Box sx={signUpStyles.mainContainer}>
            <Box sx={signUpStyles.logoText}>Your Logo</Box>
            <Box sx={signUpStyles.parentContainer}>
                <Box sx={signUpStyles.childContainer}>
                    <Paper sx={signUpStyles.signUpContainer}>
                        <Box sx={signUpStyles.signUpChildContainer}>
                            <Box component="img" alt="youtube-login-logo" sx={signUpStyles.youtubeLoginLogo} src={loginImg} />
                            <Box sx={signUpStyles.welcomeText}>Welcome ! <Box component="span" sx={signUpStyles.signInText}>Sign Up</Box></Box>
                            <Box
                                sx={signUpStyles.formContainer}
                                component="form"
                                onSubmit={handleSubmit}
                            >
                                <Box sx={signUpStyles.inputLabelContainer}>
                                    <Box sx={signUpStyles.labelText}>Email</Box>
                                    <Box sx={signUpStyles.inputContainer}>
                                        <Box
                                            sx={signUpStyles.inputEl}
                                            placeholder="Enter your Email"
                                            onChange={handleInputChange}
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            component="input"
                                        />
                                    </Box>
                                    <Typography sx={signUpStyles.errorMsg}>{formState.emailError}</Typography>
                                </Box>
                                <Box sx={signUpStyles.inputLabelContainer}>
                                    <Box sx={signUpStyles.labelText}>Username</Box>
                                    <Box sx={signUpStyles.inputContainer}>
                                        <Box
                                            sx={signUpStyles.inputEl}
                                            placeholder="Enter your username"
                                            onChange={handleInputChange}
                                            name="username"
                                            type="text"
                                            value={formState.userName}
                                            component="input"
                                        />
                                    </Box>
                                    <Typography sx={signUpStyles.errorMsg}>{formState.userNameError}</Typography>
                                </Box>
                                <Box>
                                    <Box sx={signUpStyles.inputLabelContainer}>
                                        <Box sx={signUpStyles.labelText}>Password</Box>
                                        <Box sx={signUpStyles.inputContainer}>
                                            <Box
                                                sx={signUpStyles.inputEl}
                                                placeholder="Enter your Password"
                                                type={formState.isPasswordVisible ? "password" : "text"}
                                                onChange={handleInputChange}
                                                name="password"
                                                value={formState.password}
                                                component="input"
                                            />
                                            {formState.isPasswordVisible ? (
                                                <VisibilityOffIcon
                                                    sx={signUpStyles.eye}
                                                    onClick={togglePasswordVisibility}
                                                />
                                            ) : (
                                                <VisibilityIcon
                                                    sx={signUpStyles.eye}
                                                    onClick={togglePasswordVisibility}
                                                />
                                            )}
                                        </Box>
                                        <Typography sx={signUpStyles.errorMsg}>{formState.passwordError}</Typography>
                                    </Box>
                                </Box>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={signUpStyles.formBtn}
                                >
                                    Register
                                </Button>
                            </Box>
                            <Typography sx={{...signUpStyles.errorMsg, textAlign: "left"}}>{formState.authenticateText}</Typography>
                            <Box sx={signUpStyles.haveContainer}>
                                Already have an Account ?
                                <Box sx={signUpStyles.login} component="span">
                                    <Link style={{ textDecoration: "none", color: "#000000", }} to="/login">Login</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Register;