import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

interface BtnIconeProps extends TouchableOpacityProps {
    icone: string;
}

export const BtnIcone = ({ icone, ...rest }:BtnIconeProps) => {
    return(
        <TouchableOpacity 
            {...rest}
            style={styles.btnInput}
        >
            <Entypo name={icone} size={35} /> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnInput: {
        height: '100%',
        padding: 10,
        position: 'absolute',
        right: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})