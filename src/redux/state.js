let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, my name is Tania", likesCount: 30},
                {id: 2, message: "How are you?", likesCount: 130},
                {id: 3, message: "Hello, my name is Dima", likesCount: 20},
                {id: 4, message: "Hello, my name is Pasha", likesCount: 4},
                {id: 5, message: "Hello, my name is Sveta", likesCount: 32},
                {id: 6, message: "Hello, my name is Ira", likesCount: 55}
            ],
            newPostText: 'Study React'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Tanushka', avatar: "/images/avatar.png"},
                {id: 2, name: 'Masha',  avatar: "/images/avatar2.jpg"},
                {id: 3, name: 'Sasha',  avatar: "/images/avatar3.jpg"},
                {id: 4, name: 'Vel',  avatar: "/images/avatar2.jpg"},
                {id: 5, name: 'Katia',  avatar: "/images/avatar5.png"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "i'm fine"},
                {id: 4, message: "Thank's"},
                {id: 5, message: "Goodbye my love"}
            ]
        },
        friendsPage: {
            friendsAll: [
                {id: 1, name: 'Tanushka', avatar: "/images/avatar.png"},
                {id: 2, name: 'Masha',  avatar: "/images/avatar2.jpg"},
                {id: 3, name: 'Sasha',  avatar: "/images/avatar3.jpg"},
                {id: 4, name: 'Vel',  avatar: "/images/avatar2.jpg"},
                {id: 5, name: 'Katia',  avatar: "/images/avatar5.png"}
            ]
        },
        sideBar: {
            friends: [
                {id: 1, avatar: "/images/avatar.png"},
                {id: 2, avatar: "/images/avatar2.jpg"},
                {id: 3, avatar: "/images/avatar3.jpg"}

            ]
        }

    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('State was changed');
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '' ;
        this._statererenderEntireTree(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        rerenderEntireTree(this._state);
    },
    subscribe (observer) {
        rerenderEntireTree = observer;
    }
}

export default store;
window.store = store;