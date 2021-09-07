import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, useWindowDimensions, View, KeyboardAvoidingView } from 'react-native'
import { Image, Input, Button, } from 'react-native-elements'
import { auth } from '../firebase'

const Login = ({ navigation }) => {
    const { width, height } = useWindowDimensions()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email,password)
        // .then()
        .catch( error => alert(error.message))
    }

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged( authUser =>{
            authUser && navigation.replace('Home') 
        })
        return unsubscribe
    }, [])

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container} >
            <Image
                source={require('../assets/signal_logo.jpeg')}
                style={{ height: 150, width: 150, marginBottom: 30 }}
            />
            <View style={[styles.inputContainer, { width: width * 0.85 }]} >
                <Input
                    autoFocus
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    placeholder="Enter password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>

            <Button containerStyle={styles.button} title='Login'  raised onPress={signIn} />
            <Button containerStyle={styles.button} title='Register'  raised type='outline' onPress={() => navigation.navigate('Register')} />
            <View style={{ height: height * 0.05 }}></View>
        </KeyboardAvoidingView>
    )
}

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button: {
        width: 300,
        marginTop: 10
    }
});
