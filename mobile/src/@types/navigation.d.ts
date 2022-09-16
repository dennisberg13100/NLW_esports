export interface GameParams {
    id: string
    title: string
    bannerURL: strign
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined
            game: GameParams
        }
    }
}