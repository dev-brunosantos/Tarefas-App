import { Text } from "react-native";
import { Container, Tela } from "../components/AppComponents";
import { useEffect } from "react";
import { router } from "expo-router";

export default function App() {

    useEffect(() => {
        function mudarTela() {
            setTimeout(() => {
                return router.push('./Login')
            }, 1000)
        }

        mudarTela()
    })

    return (
        <Tela>
            <Container>
                <Text style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>
                    Tarefas
                </Text>
            </Container>
        </Tela>
    )
}