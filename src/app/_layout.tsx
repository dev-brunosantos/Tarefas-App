import { Stack } from 'expo-router';
import { AppContextProvider } from '../contexts/AppContextsProvider';

export default function AppLayout() {
    return (
        <AppContextProvider>
            <Stack>
                <Stack.Screen name='index' />
                <Stack.Screen name='./Login' />
                <Stack.Screen name='./NovoUsuario' />
            </Stack>
        </AppContextProvider>
    )
}