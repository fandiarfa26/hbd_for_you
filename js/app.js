var hbd = new Vue ({
  el: '#hbd',
  data: {
    dateEvent: new Date("Jan 1, 2021 00:00:00").getTime(),
    //dateEvent: new Date("Dec 25, 2020 13:03:00").getTime(),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isTimeout: false,
    isWaiting: true,
    isOpen: false,
    isFlip: false,
    showFirework: false,
  },
  created() {
    setInterval(() => {
      this.setTime()
    }, 1000);
    
  },
  methods: {
    openGift: function () {
      this.isWaiting = false,
      setTimeout(() => {
        this.isOpen = true;
        this.showFirework = true;
        this.playAudio();
      }, 1000);
    },
    flipCard: function () {
      if (this.isOpen == true) {
        this.isOpen = false,
        setTimeout(() => {
          this.isFlip = true
        }, 600);
      }else{
        this.isFlip = false,
        setTimeout(() => {
          this.isOpen = true
        }, 600);
      }
    },
    setTime: function () {
        var now = new Date().getTime();
        var timeleft = this.dateEvent - now;
        
        if (timeleft > 0) {
          this.days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        }else{
          this.isTimeout = true;
        }
    },
    playAudio: function () {
      let audio = this.$refs.my_audio
      audio.play();
    }
  }
})