import React from "react";
import styles from "./style";
import { Text, TextInput, View, Image, Button } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../Utilities/firebase.config.js"

function LoginScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  async function onLogin() {
    setEmail(email.trim());
    if (email.trim() === "" || password === "") {
      setError("Email and password are mandatory.");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
      setError("Please enter a valid email.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
    } catch (error) {
      setError("Email and password does not match.");
    }
  }

  const onSignUp = () => {
    navigation.navigate("Sign Up");
  };
  function renderError() {
    if (error === "") return;
    else return <Text style={styles.errorMessage}>{error + "\n"}</Text>;
  }

  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>
        <Text style={styles.logoText}>Log In</Text>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          placeholderColor="#c4c3cb"
          style={styles.loginFormTextInput}
          secureTextEntry={true}
        />
        {renderError()}
        <Button
          style={styles.primaryButton}
          mode="contained"
          onPress={() => onLogin()}
          title="Login"
        >
          
        </Button>
        <Text
          style={styles.secondaryButton}
          onPress={() => onSignUp()}
        >
          Sign up
        </Text>
      </View>
    </View>
  );
}
export default LoginScreen;
