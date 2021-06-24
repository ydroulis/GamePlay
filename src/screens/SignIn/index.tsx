import React from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';

import IlustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';


export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
        console.log("Home");
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

                    <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} onPress={handleSignIn} />
                </View>
            </View>
        </Background>
    );
}