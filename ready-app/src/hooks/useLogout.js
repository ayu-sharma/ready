import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()

    const logout = () => {
        //REMOVE USER FROM LS
        localStorage.removeItem('user')

        //DISPATCH LOGOUT ACTION
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}