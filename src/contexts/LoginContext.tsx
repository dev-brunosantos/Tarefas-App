import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";

interface UsuarioLogin {
    email: string;
    senha: string;
}

interface LoginProps {
    usuario: UsuarioLogin;
    erro: boolean;
    login: (e: string, s: string) => void;
}

interface ReactProps {
    children: ReactNode;
}

const LoginContext = createContext<LoginProps | undefined>(undefined);

const LoginProvider = ({ children }: ReactProps) => {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        email: '', senha: ''
    })
    const [erro, setErro] = useState(false)

    function login(e: string, s: string) {
        if (e.trim() === "" || s.trim() === "") {
            setErro(true)
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }

        return (
            setErro(false),
            setUsuario({ email: e, senha: s }),
            Alert.alert("Login realizado com sucesso.")
        )
    }

    return (
        <LoginContext.Provider value={{ usuario, login, erro }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }