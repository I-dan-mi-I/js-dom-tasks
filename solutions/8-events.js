export default () => {
    // BEGIN
    let button = document.getElementById("alert-generator");
    button.onclick = () => {
        let alerts = document.querySelector(".alerts");

        let child = document.createElement("div")
        child.classList.add("alert", "alert-primary");
        child.append(document.createTextNode(`Alert ${alerts.querySelectorAll(".alert").length + 1}`));

        alerts.prepend(child);
    }
    // END
};