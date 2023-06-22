export const isValid = ({ title, description }: any) => {
    const regExp = /^[a-zA-Z0-9]+$/

    title = title.split('').filter((el: string) => el !== ' ').join('')
    description = description.split('').filter((el: string) => el !== ' ').join('')

    return regExp.test(title) && regExp.test(description)
}