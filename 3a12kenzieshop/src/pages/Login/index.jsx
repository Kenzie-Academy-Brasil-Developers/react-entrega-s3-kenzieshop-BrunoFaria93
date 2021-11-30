import { useState } from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { Container, Button, TextField, 
    Box, Typography} from "@mui/material"
import { signInThunk } from "../../store/modules/user/thunks"
import { Link } from 'react-router-dom'

const Login = () => {
    const [error, setError] = useState(false)
    
    const schema = yup.object().shape({
        username: yup.string().required('Campo obrigatório'),
        password: yup
        .string()
        .min(6, 'Mínimo de 6 digitos')
        .required('Campo obrigatório')
    })

    const history = useHistory()

    const dispatch = useDispatch()

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
     } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        dispatch(signInThunk(data, history))
    }
    return(
        <Container sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <TextField
                {...register("username")}
                margin='normal'
                variant='outlined'
                label='Nome de usuário'
                size='small'
                color='primary'
                helperText={errors.username?.message}
                error={!!errors.username?.message}
                
                ></TextField>
            </div>

            <div>
                <TextField
                {...register("password")}
                margin='normal'
                variant='outlined'
                label='Senha'
                type='password'
                size='small'
                color='primary'
                helperText={errors.password?.message}
                error={!!errors.password?.message}
                
                ></TextField>
            </div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Button 
                type='submit' 
                variant='contained' 
                color='primary' 
                size='large'
                sx={{
                    marginTop: 4,
                    padding: '7px 40px',
                    backgroundColor: '#403CAA',
                }}
                >Enviar</Button>

                {/* <Link to='/signup'>Não possui conta? Cadastre-se</Link> */}
            </Box>
            
            
            </form>
            {error && <span> Usuario ou senha incorretas! </span>}
        </Container>
    )
}

export default Login