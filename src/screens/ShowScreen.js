import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(item => item.id === id);

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{blogPost.title}</Text>
            <Text style={styles.textStyle}>{blogPost.content}</Text>
        </View>
    );
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <EvilIcons name="pencil" size={30} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: "center",
        flex: 1
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30
    }
});

export default ShowScreen;