import { Text } from "react-native";
import { Container, Tela } from "../components/AppComponents";

export default function App() {
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