
import { createContext, useState, useContext, useEffect } from 'react';
import { Loading } from './components/Loading/Loading';
import { auth } from './firebaseConfig';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const value = { user, loading }

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            setUser(user)
            console.log(user)
            console.log(user?.email)
            setLoading(false)
        })
        return () => {
            unsubscribed()
        }
    }, [])

    if (loading) {
        return <Loading />;
    } else {
        return <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    }
}



