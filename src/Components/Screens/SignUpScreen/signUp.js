import React from "react";
import styles from "./style";
import { Text, TextInput, View, Image, Linking, Button } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../../../Utilities/firebase.config.js"
import { getFirestore } from "firebase/firestore";

export default function SignUpPage({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  async function signUp() {
    setEmail(email.trim());
    if (email.trim() === "" || password === "") {
      setError("Email and password are mandatory.");
      return;
    }
    //Validate Email
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.trim())) {
      setError("Please enter a valid email.");
      return;
    }
    // Validate password length
    if (!(password.length >= 6)) {
      setError("Password must be at least 6 symbols long");
      return;
    }
    // Validate password length
    if (!(password.length <= 20)) {
      setError("Password can be a maximum of 20 symbols long");
      return;
    }
    //validate password combination
    // if(!(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(password))) {
    //   setError("Password must contain lower letters, upper letters and numbers.")
    //   return
    // }

    try {
      createUserWithEmailAndPassword(auth, email.trim(), password);
    } catch (error) {
      setError(error.message);
    }
  }
  const onLoginClick = () => {
    navigation.navigate("Log In");
  };

  function renderError() {
    if (error === "") return;
    else return <Text style={styles.errorMessage}>{error + "\n"}</Text>;
  }

  return (
    <View style={styles.loginScreenContainer}>
      <View style={styles.loginFormView}>
      <Text style={styles.logoText}>Sign Up</Text>

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
          onPress={() => signUp()}
          title="Sign up"
        >
          
        </Button>
        <Text
          style={styles.alreadyAnAccountText}
          title="Login"
        >
          Already have an account?
        </Text>
        <Text
          style={styles.secondaryButton}
          onPress={() => onLoginClick()}
          title="Login"
        >
          Login
        </Text>
      </View>
    </View>
  );
}
