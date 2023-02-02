
import { createContext, useState, useContext, useEffect } from 'react';
import { Loading } from './components/loading/Loading';
import { auth } from './firebaseConfig';
import { useLazyQuery, useMutation } from '@apollo/client';
import { CREATE_ADMIN_USER_ONE, GET_USER } from './queries';

const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext)
}

// TODO: localStorageを使用したので、必要ないかも。
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // GetUserのqueryを実行する
    const [executeUser, { data: userData, error: userError, loading: userLoading }] = useLazyQuery(GET_USER);
    const [execute, { error: adminError, loading: adminLoading }] = useMutation(
        CREATE_ADMIN_USER_ONE,
        {
            onCompleted: () => {
                // ("ユーザー登録が完了しました。");
            },
            onError: () => {
                // ("ユーザー登録に失敗しました。");
            },
        }
    );
    const value = { user, loading, userData }

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            setUser(user)
        })
        unsubscribed()
        setLoading(false)
    }, [])

    useEffect(() => {
        // ユーザーが存在するか確認する
        executeUser({
            variables: {
                email: user?.email,
            }
        })
        // ユーザーが存在しない場合は、ユーザーを作成する
        if (!userData) {
            execute({
                variables: {
                    email: user?.email,
                    name: user?.displayName,
                }
            })
        }
    }, [user])


    if (loading || userLoading || adminLoading) {
        return <Loading />;
    } else {
        return <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    }
}



