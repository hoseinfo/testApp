import React,{useState} from 'react';

import {Text} from 'react-native';
import LoginScreen from "react-native-login-screen";


export default function LoginPage(props) {

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [spinnerVisibility,setSpinnerVisibility] = useState(false);

    return(
        <LoginScreen 
        spinnerEnable
  spinnerVisibility={spinnerVisibility}
  labelTextStyle={{
    color: "#adadad",
    fontFamily: "Now-Bold",
  }}
  logoTextStyle={{
    fontSize: 27,
    color: "#fdfdfd",
    fontFamily: "Now-Black",
  }}
  loginButtonTextStyle={{
    color: "#fdfdfd",
    fontFamily: "Now-Bold",
  }}
  textStyle={{
    color: "#757575",
    fontFamily: "Now-Regular",
  }}
  signupStyle={{
    color: "#fdfdfd",
    fontFamily: "Now-Bold",
  }}
  usernameOnChangeText={(username) => setUserName(username)}
  onPressSettings={() => alert("Settings Button is pressed")}
  passwordOnChangeText={(password) => setPassword(password)}
  onPressLogin={() => {
    setSpinnerVisibility(true);
    setTimeout(() => {
      setSpinnerVisibility(false);
    }, 2000);
    if(userName == "hosseinfo" && password == 123456){
        props.navigation.navigate('MainPage');
    }
  }}
  onPressSignup={() => {
    console.log("onPressSignUp is pressed");
  }}
        />
    )
    
}