import { useState } from "react";
import { Container, Tela } from "../components/AppComponents";
import { BtnComponent } from "../components/Btn";
import { InputComponent } from "../components/Input";
import { useLogin } from "../hooks/useLogin";
import { Text, TouchableOpacity } from "react-native";

export default function Login() {

    const { usuario, erro, login } = useLogin()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function realizarLogin() {
        login(email, senha)
    }

    return(
        <Tela>
            <Container>
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu email"
                    onChangeText={setEmail}
                />
                <InputComponent 
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                />
            </Container>

            <Container>
                <BtnComponent 
                    titulo="Entrar"
                    onPress={realizarLogin}
                />
            </Container>

            <Container>
                {erro && (
                    <TouchableOpacity>
                        <Text>Não possui conta? Cadastre-se aqui.</Text>
                    </TouchableOpacity>
                )}
            </Container>
        </Tela>
    )
}