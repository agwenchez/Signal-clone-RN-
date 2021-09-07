import React from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem>
            <Avatar
                size={50}
                rounded
                source={{ uri: 'https://image.pngaaa.com/569/2189569-middle.png' }}
            />
            <SafeAreaView>
                <ListItem.Content>
                    <ListItem.Title style={{ fontWeight: '200' }} > Youtube Chat</ListItem.Title>
                    <SafeAreaView>
                        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail" style={{ paddingRight: 65 }}>
                            Hii chat imeanza na haitaki mbrrrcha.
                            Hii chat imeanza na haitaki mbrrrcha.
                            Hii chat imeanza na haitaki mbrrrcha.
                            Hii chat imeanza na haitaki mbrrrcha.
                            Hii chat imeanza na haitaki mbrrrcha
                        </ListItem.Subtitle>
                    </SafeAreaView>
                </ListItem.Content>
            </SafeAreaView>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})
