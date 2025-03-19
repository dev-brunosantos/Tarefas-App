import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { BtnIcone } from "./Btn/BtnIcone";

interface InputProps extends TextInputProps {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }:InputProps) => {

    const { container, input, btnInput } = styles;

    const [seguranca, setSeguranca] = useState(true)
    const [icone, setIcone] = useState('eye-with-line')

    function verSenha() {
        setSeguranca(!seguranca)
        icone === 'eye-with-line' ? setIcone('eye') : setIcone('eye-with-line')
    }

    if(isPassword) {
        return(
            <View style={container} >
            <TextInput style={input} {...rest} />
        </View>
        )
    }

    return(
        <View style={container}>
            <TextInput 
                style={input}
                {...rest}
                secureTextEntry={seguranca}
            />

            {/* <TouchableOpacity style={btnInput} onPress={verSenha}>
               <Entypo name={icone} size={35} /> 
            </TouchableOpacity> */}

            <BtnIcone icone={icone} onPress={verSenha}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        fontSize: 14
    },
    btnInput: {
        height: '100%',
        padding: 10,
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})