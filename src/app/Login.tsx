import { Container, Tela } from "../components/AppComponents";
import { BtnComponent } from "../components/Btn";
import { InputComponent } from "../components/Input";

export default function Login() {
    return(
        <Tela>
            <Container>
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu email"
                />
                <InputComponent 
                    isPassword={true}
                    placeholder="Digite sua senha"
                />
            </Container>

            <Container>
                <BtnComponent 
                    titulo="Entrar"
                />
            </Container>

            {/* <Container>

            </Container> */}
        </Tela>
    )
}