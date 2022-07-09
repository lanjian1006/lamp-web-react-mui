const _array = require('lodash/array')

function _indexOf(tarArray: Array<any>, value: any, start?: number) {
    return _array.indexOf(tarArray, value, start)
}

export {
    _indexOf
}