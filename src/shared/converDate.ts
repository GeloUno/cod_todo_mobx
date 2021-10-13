export function convertDate(date: Date): string {
    return date.toLocaleString('en-CA', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
    })
}
