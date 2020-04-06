export const state = () => ({
    socket: {
        isConnected: false,
        message: '',
        reconnectError: false,
    }
})

export const mutations = {
    SOCKET_ONOPEN (state, event)  {
      state.socket.isConnected = true
    },
    SOCKET_ONCLOSE (state, event)  {
      state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
      console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message)  {
      state.socket.message = message
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT(state, count) {
      console.info(state, count)
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },
}

export const getters = {
    socketStatus: state => state.socket.isConnected ? 'connected' : 'disconnected',

    message: state => state.socket.message
}

