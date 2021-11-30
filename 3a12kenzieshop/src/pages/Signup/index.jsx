// import { Container, Button, TextField, CssBaseline, 
//     Box, Typography, FormControl, RadioGroup, FormLabel, FormControlLabel, Radio} from "@mui/material"
// import { Link } from 'react-router-dom'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
// import { useForm } from "react-hook-form"
// import { useHistory } from "react-router-dom"
// import api from '../../services/api'
// import { useState } from "react"

// const Signup = () => {

//     const [inputValue, setInputValue] = useState("Primeiro módulo (Introdução ao Frontend)")

//     const schema = yup.object().shape({
//         name: yup.string().required('Campo obrigatório!'),
//         password: yup.string().min(6, 'Minimo de 6 digitos').required('Campo obrigatório!'),
//         passwordConfirm: yup.string().oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório')
//     })
  
//     const history = useHistory();
    
//     function handleInput(evt){
//         setInputValue(evt.target.value)
//     }

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm({
//         resolver: yupResolver(schema),
//       });


//       const handleSignIn = ( {password, name} ) => { 
//         const user = {password, name}
//         api
//         .post('/users', user)
//         .then(response => {
 
//             toast.success("Cadastro feito com sucesso!")
//             history.push('/')
            
//         })
//         .catch((err) => toast.error('E-mail ou senha inválidos'))
//     }

//     return(

//     <Container component='main' maxWidth='xs'>
//         {/* CssBaseline da um reset global */}
//         <CssBaseline />
//         <Box 
//             sx={{
//                 marginTop: 8,
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center'
//             }}
//         >
//             <Typography component='h1' variant='h4'>Kenzie <span className='hub'>Hub</span></Typography>
//         </Box>
        
//         <Box 
//         component='form' 
//         sx={{ mt: 1, border: '1px solid #F5F5F5'}} 
//         onSubmit={handleSubmit(handleSignIn)}>
            
//             <TextField 
//             {...register("name")}
//             id="outlined-basic" 
//             fullWidth 
//             label='Nome' 
//             sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
//             helperText={errors.name?.message}
//             error={!!errors.name?.message}
//             />
//             <TextField 
//             {...register("email")}
//             id="outlined-basic" 
//             fullWidth 
//             label='Email' 
//             sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
//             helperText={errors.email?.message}
//             error={!!errors.email?.message}
//             />
//             <TextField 
//             {...register("bio")}
//             id="outlined-basic" 
//             fullWidth 
//             label='Bio' 
//             sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
//             helperText={errors.bio?.message}
//             error={!!errors.bio?.message}
//             />
//             <TextField 
//             type='tel'
//             {...register("contact")}
//             id="outlined-basic"
//             fullWidth 
//             label='Contato' 
//             sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
//             helperText={errors.contact?.message}
//             error={!!errors.contact?.message}
//             />

//             <Box component='div'  sx={{ 
//                 mt: 1, 
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 justifyContent: 'space-around'
//                 }}>

//             <FormControl component="fieldset">
//             <FormLabel component="legend">Selecionar módulo</FormLabel>

//             <RadioGroup 
//             value = {inputValue}
//             row aria-label="course_module" 
//             onChange={(evt) => handleInput(evt)}
//             >

//                 <FormControlLabel 
//                 {...register("course_module")}
//                 value="Primeiro módulo (Introdução ao Frontend)" 
//                 control={<Radio />} 
//                 label="Primeiro" 
                
//                 />
//                 <FormControlLabel
//                 {...register("course_module")} 
//                 value="Segundo módulo (Frontend Avançado)" 
//                 control={<Radio />} 
//                 label="Segundo" 
//                 />

//                 <FormControlLabel
//                 {...register("course_module")} 
//                 value="Terceiro módulo (Introdução ao Backend)" 
//                 control={<Radio />} 
//                 label="Terceiro" />

//                 <FormControlLabel
//                 {...register("course_module")} 
//                 value="Quarto módulo (Backend Avançado)"
//                 control={<Radio />} 
//                 label="Quarto" />

//             </RadioGroup>
//             </FormControl>
//             </Box>
//             <TextField 
//             type='password'
//             {...register("password")}
//             id="outlined-basic"
//             fullWidth 
//             label='Senha' 
//             sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
//             helperText={errors.password?.message}
//             error={!!errors.password?.message}
//             />

//             <TextField
//             type='password'
//             {...register("passwordConfirm")}
//             id="outlined-basic" 
//             fullWidth 
//             label='Confirmar Senha' 
//             sx={{ mt:2, background: '#F5F5F5', color: '#999999' }}
//             helperText={errors.passwordConfirm?.message}
//             error={!!errors.passwordConfirm?.message}
//             />

//             <Button type='submit' fullWidth variant='contained' 
//                 sx={{
//                     "&:hover": {
//                         backgroundColor: '#2d2a77'
//                     },
//                     mt:3, 
//                     mb: 2, 
//                     bgcolor: '#403CAA',
//                     padding: 2
//                 }}> Cadastrar </Button>
//             <Link to='/'>Voltar</Link>
        
//         </Box>

        
        
//     </Container>
//     )
// }
// export default Signup