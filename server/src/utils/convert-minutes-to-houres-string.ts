export function convertMinutesToHouresString(totalMinutes: number) {
    const houres = Math.floor(totalMinutes/60)
    const minutes = totalMinutes % 60

    return `${String(houres).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`
}