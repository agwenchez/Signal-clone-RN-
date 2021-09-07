import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Image, Input, Button, } from 'react-native-elements'
import { FontAwesome as Icon } from '@expo/vector-icons'
import { db } from '../firebase'

const AddChat = ({ navigation }) => {
    const [input, setInput] = useState('')

    const createChat = async () =>{
        await db.collection('chats').add({
            chatName: input
        }).then(()=> navigation.goBack())
        .catch(error => alert(error.message) )
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Add a New Chat',
            headerBackTitle: 'Chats'
        })
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={ <Icon name='wechat' type='antdesign' size={24} color='black' />}
            />
            <Button title='Create New Chat' onPress={createChat} />
        </SafeAreaView>
    )
}

export default AddChat

const styles = StyleSheet.create({})
