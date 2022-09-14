// 18:00 -> 1080

export function convertHouresStringToMInutes(houreString: string) {
    const [houres, minutes] = houreString.split(':').map(Number)
    const minutesAmaunt = houres * 60 + minutes

    return minutesAmaunt
}