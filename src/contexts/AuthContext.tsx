// User importado do supabase, user autenticado, envia dados (id, email etc)
import { User } from "@supabase/supabase-js"

// createContext partilha infos useContext usa esse context em outros components
import {createContext, useContext, useEffect, useState} from "react"
import { supabase } from "../lib/supabase";

interface AuthContextProps{
    user: User | null; 
    setAuth: (authUser: User | null) => void; //recebe user e da update ao estado auth
    loading: boolean
}

const AuthContext = createContext ({} as AuthContextProps)

export const AuthProvider = ({children} : {children: React.ReactNode}) => {

    //user = valor atual, setUser da update ao seu estado
    const [user, setUser] = useState<User | null>(null)

      const [loading, setLoading] = useState(true);


    //func que vai atualizar o estado
    function setAuth (authUser: User | null){
        setUser(authUser)
    }

    useEffect(()=>{
         let active = true;

        //vai procurar a sessao existente qnd a app inicia

        supabase.auth.getSession().then(({data: {session}}) =>{
            setAuth(session?.user ?? null)
            setLoading(false);
        });

        //vai detetar alteracoes no auth do user
        const {data: {subscription}} = supabase.auth.onAuthStateChange((
            _event, session
        )=>{
            console.log("session user", session?.user)

            //existe sessao = guarda | n existe = null
            setAuth(session?.user ?? null);
        })

        return ()=>{
            active = false
            subscription.unsubscribe()
        }

    },[])

    return(
        <AuthContext.Provider value= {{user, setAuth, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

//resumindo, dar login authUser: user | logout = authUser: null