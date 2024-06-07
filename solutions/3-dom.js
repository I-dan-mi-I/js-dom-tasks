// BEGIN
const prettify = () => {
    document.body.innerHTML = document.body.innerHTML.trim().split('\n').map((value) => `<p>${value.trim()}</p>`).join('\n');
}

prettify();
// END