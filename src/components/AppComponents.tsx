import { ReactNode } from "react"
import { SafeAreaView, View } from "react-native"

interface ReactProps {
    children: ReactNode;
}

const Tela = ({ children }: ReactProps) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            {children}
        </SafeAreaView>
    )
}

const Container = ({ children }: ReactProps) => {
    return (
        <View style={{
            width: '100%',
            height: 'auto',
            paddingVertical: 20,
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            {children}
        </View>
    )
}