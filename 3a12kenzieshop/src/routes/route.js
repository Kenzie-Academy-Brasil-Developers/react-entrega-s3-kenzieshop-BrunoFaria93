import { useEffect } from "react";
import { useSelector  } from "react-redux";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";

const Route = ( {isPrivate = false, component: Component, ...rest} ) => {

    const {token} = useSelector(state => state.user)
    // console.log(token)

    useEffect( () => {
        // console.log(token)
    }, [token])

    return (
        <ReactDOMRoute 
        {...rest}
            render={() => {
                return isPrivate === !!token ? <Component /> : <Redirect to={isPrivate ? '/login' : '/'} />
            }}
        />
    )
}
export default Route