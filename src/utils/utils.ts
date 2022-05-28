
class Utils {
    static isValidEmail(str: string) {
        return /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(
            str
        )
    }
}

export default Utils
