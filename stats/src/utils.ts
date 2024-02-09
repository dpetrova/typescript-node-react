export const parseDate = (dateString: string): Date => {
    const dateParts = dateString
        .split("/")
        .map((val: string): number => parseInt(val))

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]) // months in Date constructor are 0 indexed   
}