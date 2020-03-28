import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import imgLogo from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import style from './style';

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();   
    const incident = route.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor ${Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)} `;

    function navigateBack(){
        navigation.goBack();
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: `Heroi do Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhats(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={imgLogo}/>
                <TouchableOpacity
                style={style.detailsButton}
                onPress={navigateBack}
            >
                <Feather name='arrow-left' size={16} color='#E02041' />
            </TouchableOpacity>
            </View>

            <View style={style.incidents}>
                    <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
    <Text style={style.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                    <Text style={style.incidentProperty}>CASO:</Text>
                    <Text style={style.incidentValue}>{incident.title}</Text>

                    <Text style={style.incidentProperty}>VALOR</Text>
                    <Text style={style.incidentValue}>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(incident.value)}</Text>
            </View>

            <View style={style.contactBox}>
                <Text style={style.heroTitle}>Salve o dia!</Text>
                <Text style={style.heroTitle}>Seja o herois desse caso.</Text>

                <Text style={style.heroDescription}>Entre em contato:</Text>
                <View style={style.actions}>
                    <TouchableOpacity style={style.action} onPress={sendWhats}>
                        <Text style={style.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.action} onPress={sendEmail}>
                        <Text style={style.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}