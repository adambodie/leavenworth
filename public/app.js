const header = new Vue({
    el: '#header',
    data: {
        title: "Welcome to Leavenworth",
    }
});

const footer = new Vue({
    el: '#footer',
    data: {
        copyright: "Adam Bodie © "  + new Date().getFullYear(),
    }
});
