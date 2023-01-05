
import { createContext, useState, useContext, useEffect } from 'react';
import { Loading } from './components/Loading/Loading';
import { auth } from './firebaseConfig';
import { useMutation } from '@apollo/client';
import { CREATE_ADMIN_USER_ONE } from './queries';


const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const [execute, { error: adminError, loading: adminLoading }] = useMutation(
        CREATE_ADMIN_USER_ONE,
        {
            onCompleted: () => {
                alert("ユーザー登録が完了しました。");
            },
            onError: () => {
                console.log("ユーザー登録に失敗しました。");
            },
        }
    );

    const value = { user, loading }

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            setUser(user)
            console.log(user)
            console.log(user?.email, ' ', user?.displayName)
        })
        unsubscribed()
        execute({
            variables: {
                email: user?.email,
                name: user?.displayName,
            }
        })
        setLoading(false)
    }, [])



    if (loading) {
        return <Loading />;
    } else {
        return <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    }
}



