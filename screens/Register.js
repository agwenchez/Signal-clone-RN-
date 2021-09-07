import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, useWindowDimensions, } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Image, Input, Button, Text } from 'react-native-elements'
import { auth } from '../firebase'


const Register = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const { width, height } = useWindowDimensions()

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || 'https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png'
                })
            }).catch(error => alert(error.message))
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle:'Back'
        })
    }, [navigation])

    return (
        <View style={styles.container} >
            {/* <StatusBar style='light' /> */}
            <Text h3 style={{ marginBottom: 50, marginTop: -80 }} > Create Signal account</Text>
            <View style={[styles.inputContainer, { width: width * 0.85 }]} >
                <Input
                    autoFocus
                    placeholder="Enter Fullname"
                    type="text"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Input
                    placeholder="Profile picture URL(optional)"
                    type="text"
                    value={imageUrl}
                    onChangeText={text => setImageUrl(text)}
                />
                <Input
                    placeholder="Enter email"
                    type="email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Input
                    secureTextEntry
                    placeholder="Enter password"
                    type="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    onSubmitEditing={register}
                />
            </View>
            <View style={{ marginTop: 20 }} >
                <Button containerStyle={styles.button} raised title='Register' onPress={register} />
                {/* <Text style={{marginTop:6, textAlign:'center'}} >OR</Text> */}
                <Button containerStyle={styles.button} raised title='Login' type='outline' onPress={() => navigation.navigate('Login')} />
            </View>
            {/* <View style={{ height: height * -0.09 }}></View> */}
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // inputContainer: {
    //     width: 300
    // },
    button: {
        width: 300,
        marginTop: 15
    }
});
