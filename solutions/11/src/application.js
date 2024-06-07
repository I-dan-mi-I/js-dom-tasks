import 'whatwg-fetch';

export default () => {
    // BEGIN
    /**
     * @param {Event} event
     */
    const autocompleteCallback = async (event) => {

        /**
         * @type {HTMLInputElement}
         */
        let inputElement = event.target;

        let autocompletePathName = inputElement.dataset.autocomplete;
        let autocompleteName = inputElement.dataset.autocompleteName;

        if (autocompletePathName === undefined || autocompleteName === undefined)
            return;

        let url = new URL(window.location.origin);

        url.pathname = autocompletePathName;
        url.searchParams.append('search', inputElement.value);

        let fetchResult = await fetch(url);
        let fetchJSON = await fetchResult.json();

        let ulElement = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);
        ulElement.innerHTML = '';

        if (!Array.isArray(fetchJSON) || fetchJSON.length === 0)
            ulElement.innerHTML = '<li>Nothing</li>';
        else {
            fetchJSON.forEach((value) => {

                let child = document.createElement("li")
                child.textContent = value;

                ulElement.append(child);
            })
        }
    }

    document.querySelectorAll("input[data-autocomplete]").forEach((element) => {
        element.addEventListener('input', autocompleteCallback);
    })

    // END
};
