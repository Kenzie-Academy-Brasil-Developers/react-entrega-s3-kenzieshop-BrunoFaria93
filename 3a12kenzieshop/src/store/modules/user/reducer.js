const defaultState ={
    token: localStorage.getItem('token') || '',
    user: {}
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case '@user/SIGN_IN':
            const { token } = action

            return {...state, token}

        case '@user/LOG_OUT':
            return ''
        default:
            return state
    }
}
export default userReducer
