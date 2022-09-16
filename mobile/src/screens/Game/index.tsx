import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute, useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { GameParams } from '../../@types/navigation'
import { FlatList, TouchableOpacity, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"
import { THEME } from '../../theme'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Image, Text } from 'react-native'
import { Heading } from '../../components/Heading'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { useEffect, useState } from 'react'

export function Game() {

    const route = useRoute() 
    const navigation = useNavigation()
    const game = route.params as GameParams

    const [ duos, setDuos ] = useState<DuoCardProps[]>([])
    
    function handelGoBack() {
        navigation.goBack()
    }

    useEffect(() => {
        fetch(`http://192.168.100.120:3333/game/${game.id}/ads`)
        .then(res => res.json())
        .then(data => setDuos(data))
    }, [])

    console.log(duos)

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={handelGoBack}
                    >
                        <Entypo 
                            name="chevron-thin-left"
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image
                        source={logoImg}
                        style={styles.logo}

                    />
                    <View style={styles.right}/>
                </View>

                <Image 
                    source={{uri: game.bannerURL}}
                    style={styles.cover}
                    resizeMode="cover"

                />

                <Heading
                    title={game.title}
                    subtitle="Conecte-se e comece a jogar!"
                />
                
                <FlatList 
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> (
                        <DuoCard 
                            data={item}
                            onConnect={() => {}} 
                        />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={duos.length ? styles.contentList : styles.emptyListContent}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={()=>{
                        return(
                            <Text style={styles.emptyListText}>
                                Ainda não foi cadastrados nenhum jogo.
                            </Text>
                        )
                    }}
                />
                
                
               
            </SafeAreaView>
        </Background>   
    )
}