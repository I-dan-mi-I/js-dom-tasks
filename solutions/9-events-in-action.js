export default () => {
    // BEGIN
    /**
    * @param {Event} event
    */
    const tabButtonCallback = (event) => {

        /**
         * @type {HTMLButtonElement}
         */
        let button = event.target;

        if (button.dataset.bsTarget === undefined)
            return;

        for (let activeElement of document.querySelectorAll(`button[data-bs-toggle="${button.dataset.bsToggle}"]`)) {
            activeElement.classList.remove("active");
            let tab = document.querySelector(activeElement.dataset.bsTarget);
            tab.classList.remove("active");
        }

        button.classList.add("active")
        let tab = document.querySelector(button.dataset.bsTarget);
        tab.classList.add("active")

    }

    document.querySelectorAll(".nav-link").forEach((button) => {
        button.addEventListener('click', tabButtonCallback);
    })
    // END
};
