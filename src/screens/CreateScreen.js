import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { state, addBlogPost } = useContext(Context);
    return (
        <View>
            <Text style={styles.labelStyle}>Enter Title:</Text>
            <TextInput style={styles.inputStyle} onChangeText={setTitle} />
            <Text style={styles.labelStyle}>Enter Content</Text>
            <TextInput style={styles.inputStyle} onChangeText={setContent} />
            <Button
                title="Add Blog Post"
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                    
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: 15,
        paddingVertical: 30,
        alignItems: "center",
        flex: 1
    },
    labelStyle: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10
    },
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 10,
        padding: 10,
        marginBottom: 15
    }
});

export default CreateScreen;