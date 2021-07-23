import React from "react";
import {
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

import DiscodrImage from '../../assets/discord.png'
import { styles } from "./style";

export function ButtonIcon(){
    return(
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View style={styles.icone}>
                <Image source={DiscodrImage} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                Entrar com o Discord
            </Text>
        </TouchableOpacity>
    );
}
