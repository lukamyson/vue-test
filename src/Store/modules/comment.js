
import axios from "axios";



export default {
    namespaced: true,
    state: {
        comments: null
    },
    mutations: {
        getComment(state, comments) {
            state.comments = comments
        }
    },
    actions: {
        async getComment({commit}){
            
         
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/comments')

                const comments = res.data
                console.log(comments);
                commit('getComment', comments)
            } catch (error) {
                console.log(error);
            }
        }
    },
    
}