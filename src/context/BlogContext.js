import CreateDataContext from './CreateDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case 'deleteBlogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'editBlogPost':
            return state.map(blogPost => {
                if (blogPost.id === action.payload.id)
                    return action.payload;
                else
                    return blogPost;

            })
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'addBlogPost', payload: { title, content } });
        callback();
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'deleteBlogPost', payload: id });
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'editBlogPost', payload: { id, title, content } });
        callback();
    };
}

export const { Context, Provider } = CreateDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, []);