export const state = () => ({
    user: null
})

export const mutations = {
    saveUser(state, data) {
        state.user = data
    }
}

export const getters = {
    user: state => state.user
}