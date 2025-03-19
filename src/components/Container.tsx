import { View } from "@/components/Themed"
import { ReactNode } from "react"

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <View style={{
            flex: 1,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            {children}
        </View>
    )
}