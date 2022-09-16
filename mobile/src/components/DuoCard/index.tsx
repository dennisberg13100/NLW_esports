import { TouchableOpacity, View, Text} from 'react-native'
import { GameController } from 'phosphor-react-native'
import { THEME } from '../../theme'
import { DuoInfo } from '../DuoInfo'
import { styles } from './styles'


export interface DuoCardProps {
    id: string
    name: string
    weekDays: string[]
    useVoiceChanel: boolean
    yearsPlaying: number
    houreStart: string
    houreEnd: string
}

interface Props {
    data: DuoCardProps
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) { 
    return (
        <View style={styles.container}>
            <DuoInfo 
                label="Nome"
                value={data.name}
            />
            <DuoInfo 
                label="Tempo de jogo"
                value={`${data.yearsPlaying} ano(s)`}
            />
            <DuoInfo 
                label="Disponibilidade"
                value={`${data.weekDays.length} dias ${data.houreStart} \u2022 ${data.houreEnd}`}
            />
            <DuoInfo 
                label="Chamada de áudio"
                value={data.useVoiceChanel ? "Sim" : "Não" }
                colorValue={data.useVoiceChanel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
            />

{            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController 
                    color={THEME.COLORS.TEXT}
                    size={20}
                />
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>}

        </View>
    )
}