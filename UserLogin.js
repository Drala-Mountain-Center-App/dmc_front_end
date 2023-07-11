import React, {useState} from "react";
import {View, TextInput, Button} from 'react-native'

const UserLogin = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log({
            firstName,
            lastName,
            email,
            password
        })
    }

    return (
        <View>
            <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={text => setFirstName(text)}> 
            </TextInput>
            <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}> 
            </TextInput>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={email => setEmail(text)}> 
            </TextInput>
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}> 
            </TextInput>
            <Button title="Submit" onPress={handleSubmit}></Button>
        </View>
    )
}

export default UserLogin;