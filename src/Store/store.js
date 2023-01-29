import { createStore } from 'vuex'


import comment from '@/Store/modules/comment.js'

const store = createStore({
    modules:{
        comment
    }
})


export default store