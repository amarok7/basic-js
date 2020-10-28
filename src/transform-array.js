const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (typeof arr == 'undefined') {
        throw new Error
    } else if (arr.length == 0) {
        return arr;
    } else {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                if (i == arr.length - 1) {
                    return result
                } else {
                 result.push(arr[i + 1])
                    result.pop()
                    i += 2
                }
            } else if (arr[i] == '--discard-prev') {
                if (i == 0) {
                    result.push(arr[i])
                    result.pop()
                } else {
                    result.pop()
                }
            } else if (arr[i] == '--double-next') {
                if (i == arr.length - 1) {
                    return result
                } else {
                    result.push(arr[i + 1])
                }
            } else if (arr[i] == '--double-prev') {
                if (i == 0) {
                    result.push(arr[i])
                    result.pop()
                } else {
                    result.push(arr[i - 1])
                }
            } else {
                result.push(arr[i])
            }
        }
        return result
    }
}

