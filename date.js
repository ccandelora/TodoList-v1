exports.getDate = function () {
    const d = new Date();
    const day = d.getDay();
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    return today = d.toLocaleDateString('en-US', options);
}