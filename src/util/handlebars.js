module.exports = {
    formatDate: (date) => {
        return date.toLocaleDateString('en-GB');
    },
    formatDateTime: (date) => {
        return date.toLocaleString('en-GB');
    },
    increaseIndex: (index) => {
        return index + 1;
    },
    getFullName: (firstname, lastname) => {
        return `${lastname} ${firstname}`;
    },
};
