// currently assumes that dates are in the format dd/mm/yyyy
export const dateStringToDate = (dateString: string): Date => {
    const dateParts = dateString
        .split('/')
        .map((value: string): number => { return parseInt(value) })

    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}