import {Icon, SafeAreaView, TextInput, ImageBackground, StyleSheet, Text, Image, View, Platform, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import React, { Component, useState, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const localImage = require('ItineraryApp/assets/appimages/signupformbackground.png')

const changeVisibility = () => {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');

}

const inputField = () => {
    // const [text, onChangeText] = React.useState("Username");
    // const [secure, setSecure] = React.useState(props.secure);
  
    return (
      <SafeAreaView>
        <View style={styles.inputContainer}>
        <Image style={styles.userIcon}
                source={require('ItineraryApp/assets/icons/User_fill(1).png')}
        />   
        <TextInput
          placeholder="Full Name"
          style={styles.input}
          //onChangeText={onChangeText}
          //value={}
        />
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.emailIcon}
                source={require('ItineraryApp/assets/icons/Message_alt_fill.png')}
        />   
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          //onChangeText={onChangeText}
          //value={}
        />
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.userIcon}
                source={require('ItineraryApp/assets/icons/User_fill(1).png')}
        />   
        <TextInput
          placeholder="Username"
          style={styles.input}
          //onChangeText={onChangeText}
          //value={}
        />
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.passwordIcon}
                source={require('ItineraryApp/assets/icons/Lock_fill.png')}
        />     
        <TextInput
          //onChangeText={(value) => console.log(value)}
          placeholder="Password"
          secureTextEntry
          secure={true}
          style={styles.input}
        />
        {/* {
        <Icon style={{ paddingRight: 15, }}
        name={secure ? "eye" : 'eye-slash'}
        size={20} color='gray' 
        onPress={() => setSecure(!secure)} />
        } */}
        </View>
        <View style={styles.inputContainer}>
        <Image style={styles.passwordIcon}
                source={require('ItineraryApp/assets/icons/Lock_fill.png')}
        />       
        <TextInput
          //onChangeText={(value) => console.log(value)}
          placeholder=" Confirm Password"
          secureTextEntry
          secure={true}
          style={styles.input}
        />
        {/* {
        <Icon style={{ paddingRight: 15, }}
        name={secure ? "eye" : 'eye-slash'}
        size={20} color='gray' 
        onPress={() => setSecure(!secure)} />
        } */}
        </View>

      </SafeAreaView>
    );
  };

const SignupForm = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
          headerShown: false,
      })
    }, []);
    return (
    <View style={styles.container}>
      <ImageBackground source={localImage} resizeMode="cover" style={styles.localImage}>
        <Text style={styles.text}>Sign Up</Text>
         {inputField()}
      </ImageBackground>
      <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.custom}>Sign Up</Text>
      </TouchableOpacity>
        <Text style={styles.text2}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginForm')}>
          <Text style={styles.text2}>Login here.</Text>
        </TouchableOpacity>  
    </View>  
    )  
  }
export default SignupForm

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  localImage: {
    flex: 1,
    justifyContent: "center",
    height: 660,
    width: 420,
  },
  text: {
    fontSize: 45,
    textAlign: "center",
    color: "#FFFFFF",
  },
  text2: {
    textAlign: "center",
    color: "#FFFFFF",
    textDecorationLine: 'underline',
  },
  custom: {
    fontFamily: 'ABeeZee',
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: 'white',
    width: 278,
    height: 40,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d7d7d7',
    marginHorizontal: 65,
    marginTop: 10,
    marginBottom: 10
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    backgroundColor: "#CE80D4",
    width: 205,
    height: 56,
    marginBottom: 150,
    marginHorizontal: 105,
  },
  userIcon: {
    tintColor: '#000000',
    opacity: 0.45,
    width: 35,
    height: 35,
  },
  emailIcon: {
    width: 35,
    height: 35,
  },
  passwordIcon: {
    width: 35,
    height: 35,
  },
});








