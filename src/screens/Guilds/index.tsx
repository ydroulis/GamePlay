import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/Styles/theme";
import { Guild } from "../../components/Guild";
import { GuildProps } from "../../components/Guild";

import { ListDivider } from "../../components/ListDivider";

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
const guilds = [
    {
        id: '1',
        name: 'Lendários',
        icon: 'image.png',
        owner: true
    },
    {
        id: '2',
        name: 'Galera do Game',
        icon: 'image.png',
        owner: true
    },
]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild data={item} onPress={() => handleGuildSelect(item)}/>
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.guilds}
            />
        </View>
    )
}