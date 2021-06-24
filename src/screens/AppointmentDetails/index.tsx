import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Header } from '../../components/Header';
import { ButtonIcon } from "../../components/ButtonIcon";
import { Member } from '../../components/Member';
import { ListDivider } from "../../components/ListDivider";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons"
import { theme } from "../../global/Styles/theme";
import BannerImg from '../../assets/banner.png'



export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Yuri',
            avatar_url: 'https://github.com/ydroulis.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Yuri',
            avatar_url: 'https://github.com/ydroulis.png',
            status: 'offline'
        },
    ]
    return (
        <Background>
            <Header title='Detalhes' action={
                <BorderlessButton>
                    <Fontisto
                        name="share"
                        size={24}
                        color={theme.colors.primary}
                    />
                </BorderlessButton>
            } />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>Lendários</Text>
                    <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da m10</Text>
                </View>
            </ImageBackground>

            <ListHeader title="Jogadores" subtitle="Total 3" />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}