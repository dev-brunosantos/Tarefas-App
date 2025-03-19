import { Stack } from 'expo-router';
import { AppContextProvider } from '../contexts/AppContextsProvider';

export default function AppLayout() {
    return (
        <AppContextProvider>
            <Stack>
                <Stack.Screen name='index' />
            </Stack>
        </AppContextProvider>
    )
}