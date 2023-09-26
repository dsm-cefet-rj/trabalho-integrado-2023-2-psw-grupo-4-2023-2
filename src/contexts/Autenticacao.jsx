import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({});

export const Autenticacao = ({ children }) => {
    const users = [];
    const [user, setUser] = useState();

    const signin = (login, password) => {
        const hasUser = users.find(user => (user?.login === login));

        if (hasUser) {
            if (hasUser.password === password) {
                setUser(hasUser)
            } else {
                return "Senha incorreta";
            }
            return "Logado com Sucesso";
        } else {
            return "Usuário não cadastrado";
        }
    };

    const signup = (nome, login, password) => {

        const hasUser = users.find(user => (user?.login === login));

        if(hasUser){
            hasUser.nome = nome
            hasUser.password = password;
        }else{
            users.push({
                nome,
                login,
                password
            })
        }
        return;
    };

    const signout = () => {
        setUser(null);
    };

    return (
        <AutenticacaoContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        >
            {children}
        </AutenticacaoContext.Provider>
    );
};
