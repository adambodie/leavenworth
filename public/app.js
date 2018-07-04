const header = new Vue({
    el: '#header',
    data: {
        title: "Leavenworth: The Bavarian Experience in Washington",
    }
});

const footer = new Vue({
    el: '#footer',
    data: {
        copyright: "Adam Bodie © "  + new Date().getFullYear(),
    }
});
