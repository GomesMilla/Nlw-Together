import React, { useState } from "react";
import {    
        View, 
        Text,
        Image,
        StatusBar,
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png';

export function Signin() {
    return (
        <View style={styles.container }>
            <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent = {true}
            />
            <Image source={ IllustrationImg } 
                    style={styles.image}
                    resizeMode="stretch" 
            />
            <View style={styles.content}> 
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas{`\n`}
                    facilmente!
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos jogar seus games {`\n`}
                    favoritos com seus amigos    
                </Text> 
                <ButtonIcon/>        
            </View>
        </View>
    );
}






// Arquivos "tsx" são para renderização de elementos e por esse motivo é importante importar o arquivo React 