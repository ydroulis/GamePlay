import React from 'react';
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, activeOpacity} : Props){
    return(
        <TouchableOpacity activeOpacity={activeOpacity} style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>

            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}