

function transformHourMinuteSecondToSecond(value) {
    value = value.split(":")
    const hoursToSeconds = parseInt(value[0]) * 60 * 60
    const minutesToSeconds = parseInt(value[1]) * 60
    
    return hoursToSeconds + minutesToSeconds + parseInt(value[2])

}

module.exports = { transformHourMinuteSecondToSecond }