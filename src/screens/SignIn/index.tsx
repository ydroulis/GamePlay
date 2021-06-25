import React from 'react';
import { useAuth } from '../../hooks/auth';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { theme } from '../../global/Styles/theme';


export function SignIn() {

    const {  signIn, loading } = useAuth();

    async function handleSignIn() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <Background>
            <View style={styles.container}>
                <Image source={IlustrationImg} style={styles.image} resizeMode="stretch" />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas
                    </Text>
                    <Text style={styles.subtitle}>
                        Crie Grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    {
                        loading ? <ActivityIndicator color={theme.colors.primary}/> :
                        <ButtonIcon 
                            title="Entrar com Discord" 
                            activeOpacity={0.7} 
                            onPress={handleSignIn} 
                        />
                    }
                </View>
            </View>
        </Background>
    );
}