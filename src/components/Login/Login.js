import React from "react";
import LoginForm from "../FormComponent/LoginForm/LoginForm";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import LoginAPI from "../../API/Login/login";
import { useAuth } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Login = () => {
  const { addToast } = useToasts();
  const { setLoggedIn } = useAuth();
  const history = useHistory();
  const classes = useStyles();

  const submitProfile = async (values, setSubmitting) => {
    try {
      const resp = await LoginAPI(values);

      if (resp) {
        const { jwt, refresh_token } = resp;

        localStorage.setItem("bearerToken", jwt);
        localStorage.setItem("refreshToken", refresh_token);

        setLoggedIn(true);

        history.push("/");

        addToast("Logged In Successfully", {
          appearance: "success",
          autoDismiss: 500,
        });
      }

      setSubmitting(false);
    } catch (e) {
      setSubmitting(false);
      addToast("Error While Logged In", {
        appearance: "error",
        autoDismiss: 500,
      });
    }
  };

  const redirectToSignUp = () => {
    history.push("/sign-up");
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <h3
          style={{ textAlign: "center", marginTop: "5px", marginBottom: "5px" }}
        >
          Sign In
        </h3>
      </div>
      <LoginForm onSubmit={submitProfile} />

      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item onClick={redirectToSignUp} style={{ cursor: "pointer" }}>
          {"Don't have an account? Sign Up"}
        </Grid>
      </Grid>
    </Container>
  );
};
export default Login;
