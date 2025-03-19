import { useState } from "react";
import { Tela } from "../components/AppComponents";
import { Container } from "../components/Container";
import { InputComponent } from "../components/Input";
import { BtnComponent } from "../components/Btn";
import { Alert } from "react-native";
import { router } from "expo-router";

export default function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    function validarCadastro() {
        if(nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            return Alert.alert("Todos os campos devem ser preenchidos.")
        }
        if(confirmarSenha !== senha) {
            return Alert.alert("As senhas não são iguais. Por favor, verificar.")
        }

        return(
            Alert.alert("Usuário cadastrado com sucesso."),
            router.back()
        )
    }

    return (
        <Tela>
            <Container>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    onChangeText={setNome}
                />
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
                <InputComponent
                    isPassword={true}
                    placeholder="Confirme sua senha"
                    onChangeText={setConfirmarSenha}
                />
            </Container>

            <Container>
                <BtnComponent 
                    titulo="Cadastrar"
                    onPress={validarCadastro}
                />
            </Container>
        </Tela>
    )
}