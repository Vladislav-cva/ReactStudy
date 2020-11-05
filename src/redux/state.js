
let store = {
    _state: {
        postsData: [
           {id: 1, message:'hi', like: 14},
           {id: 2, message:'Im bored will be myself', like: 88},
         ],
         newTextPost : 'text',
         dialogsData: [
           {id: 1, name:'Vlad'},
           {id: 2, name:'Sasha'},
           {id: 3, name:'Rashel'},
           {id: 4, name:'Ira'},
           {id: 5, name:'Misha'},
         ],
         messageData: [
           {id: 1, message:'hi'},
           {id: 2, message:'Im bored will be myself'},
           {id: 3, message:'She fells happy'},
           {id: 4, message:'He also think so'},
         ],
     },
     getState(){
         return this._state
     },
     renderEntireTree(){
        console.log('hi');
     },
    subscribe(observer){
        this.renderEntireTree = observer;
      },
    dispatch(action){
        if(action.type === 'AddPost'){
            let newPost = {
                id: 3,
                message: this._state.newTextPost,
                like: 0
            };
            this._state.postsData.push(newPost);
            this._state.newTextPost = '';
            this.renderEntireTree(this._state);
        }else if(action.type === 'UpdateNewPostText'){
            this._state.newTextPost = action.newText;
            this.renderEntireTree(this._state);
        }
    },
}

  export default store;
window.store = store;