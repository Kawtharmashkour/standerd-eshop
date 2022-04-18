import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";
import axios from "axios";

import Input from "../../Shared/Form/Input";
import FormContainer from "../../Shared/Form/FormContainer";
import Error from "../../Shared/Form/Error";
import MainButton from "../../components/MainButton";
import baseURL from "../../assets/common/baseURL";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    if (email === "" || password === "" || phone === "" || name === "") {
      setError("Please input all field(s)");
    } else {
      console.log("Success");
    }

    let user = {
      name: name,
      phone: phone,
      email: email,
      password: password,
      isAdmin: false,
    };

    axios
      .post(`${baseURL}users/register`, user)
      .then((res) => {
        if (res.status == 200) {
          Toast.show({
            type: "success",
            Text1: "Register Succeeded",
            text2: "Please login to your account",
          });
          setTimeout(() => {
            props.navigation.navigate("Login");
          }, 500);
        }
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          Text1: "Register Fail",
          text2: "Please try again",
        });
      });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Register"}>
        <Input
          placeholder={"Email"}
          name={"email"}
          id={"email"}
          onChangeText={(text) => setEmail(text.toLowerCase())}
        />
        <Input
          placeholder={"Name"}
          name={"name"}
          id={"name"}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder={"Phone Number"}
          name={"phone"}
          id={"phone"}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Password"}
          name={"password"}
          id={"password"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {error ? <Error message={error} /> : null}
        <MainButton onPress={() => handleRegister()}>
          <Text>Register</Text>
        </MainButton>
        <MainButton onPress={() => props.navigation.navigate("Login")}>
          <Text>Back to Login</Text>
        </MainButton>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

export default Register;
