export const signIn = (token) => ({type: '@user/SIGN_IN', token})

export const logoutAction = (token) => ({type: '@user/LOG_OUT', token})