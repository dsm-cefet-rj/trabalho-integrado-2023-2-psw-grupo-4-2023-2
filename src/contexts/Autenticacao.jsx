import { createContext, useEffect, useState } from "react";

export const AutenticacaoContext = createContext({});
import { users } from '../database/users';

export const Autenticacao = ({ children }) => {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const signin = (login, password) => {
        console.log('signin');
        console.log(users);
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
        console.log('signup');
        console.log(users);

        const hasUser = users.find(user => (user?.login === login));

        if (hasUser) {
            hasUser.nome = nome
            hasUser.password = password;
        } else {
            users.push({
                nome,
                login,
                password
            })
        }
        return;
    };

    const signout = () => {
        console.log('signout');
        console.log(users);
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
