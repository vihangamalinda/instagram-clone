import React, { Component } from 'react'
import { View ,Button,TextInput} from 'react-native'

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

export class Register extends Component {
constructor(props){
    super(props);

    this.state = {
        email:'',
        password:'',
        name:''
    }
    this.onSignUp= this.onSignUp.bind(this)
}

onSignUp(){
    const {email,password,name} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
}

  render() {
    return (
      <View>
          <TextInput
          placeholder='name'
          onChange={(name)=> this.setState({name})}
          />
           <TextInput
          placeholder='email'
          onChange={(email)=> this.setState({email})}
          />
           <TextInput
          placeholder='password'
          secureTextEntry={true}
          onChange={(password)=> this.setState({password})}
          />
          <Button
          onPress={()=>this.onSignUp()}
          title="Sign Up"
          />
      </View>
    )
  }
}

export default Register