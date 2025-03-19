import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons';

interface BtnIconeProps extends TouchableOpacityProps {
    icone: string;
}

export const BtnIcone = ({ icone, ...rest }:BtnIconeProps) => {
    return(
        <TouchableOpacity 
            {...rest}
        >
            <Entypo name={icone} size={35} /> 
        </TouchableOpacity>
    )
}