import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/Styles/theme';

type Props = {
    children: ReactNode;
}

export function Background( { children }: Props ){

    const { secondary80, secondary100 } = theme.colors
    return(
        <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
            <StatusBar backgroundColor='transparent' translucent/>
            {children}
        </LinearGradient>
    )
}