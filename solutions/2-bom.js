// BEGIN
/**
 * @param {string} href
 */
const task = (href) => {
    location.href = href;
    return `${navigator.appCodeName}/${navigator.appVersion.split(' ')[0]} ${location.href}`
}

export default task;
// END