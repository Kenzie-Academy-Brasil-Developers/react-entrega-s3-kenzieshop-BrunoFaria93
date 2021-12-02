import api from '../../../services/api'
import { signIn } from './actions'
import { useHistory } from 'react-router-dom'


export const signInThunk = (userData, history) => (dispatch) => {
    api
    .post('/sessions/', userData)
    .then(response => {
        localStorage.setItem('token', response.data.access)

        dispatch(signIn(response.data.access))
        history.push('/')
    }) 
    .catch(err => console.log(err))
}
