import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(item => item.id === id)

    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.labelStyle}>Edit Title:</Text>
            <TextInput style={styles.inputStyle} onChangeText={setTitle} value={title} />
            <Text style={styles.labelStyle}>Edit Content</Text>
            <TextInput style={styles.inputStyle} onChangeText={setContent} value={content} />
            <Button
                title="Save Changes"
                onPress={() => {
                    editBlogPost(id, title, content, () => {
                        navigation.pop();
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

export default EditScreen;