var app = new Vue({
    el: '#app',
    data: {
        
            countLike:0,
            countDislike:0
    },

    methods: {
        incrementCounter() {
          this.countLike++;
        },
        decrementCounter() {
          this.countDislike++;
        }
      }

    }



)
