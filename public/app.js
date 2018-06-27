const header = new Vue({
    el: '#header',
    data: {
        title: "Welcome to Leavenworth",
        click: 0
    },
    methods: {
    changeLanguage: function () {
        this.click++;
        this.title = (this.click % 2 == 0) ? "Welcome to Leavenworth" : "Willkommen in Leavenworth";
    }
  }
});

const footer = new Vue({
    el: '#footer',
    data: {
        copyright: "Adam Bodie © "  + new Date().getFullYear(),
    }
});
