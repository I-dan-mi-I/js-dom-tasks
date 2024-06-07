// BEGIN

/**
 * @param {Element} tree
 */
const parse = (tree) => {
    let data = [];

    for (const tag of tree.getElementsByTagName("p")) {
        data.push(tag.textContent.trim());
    }

    return data;

}

export default parse;
// END