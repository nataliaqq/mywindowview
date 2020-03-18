export const state = () => ({
    list: [],
    total: null
})

export const mutations = {
    add (state, data) {
        state.list.push(data)
    },

    clear (state) {
        state.list = []
    },

    setTotal (state, total) {
        state.total = total
    }
}