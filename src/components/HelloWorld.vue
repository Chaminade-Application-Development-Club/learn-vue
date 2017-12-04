<template lang="pug">
  v-container(fluid, v-resize="onResize")
    v-layout(row,wrap)
      v-flex.xs6
        v-pm(title="Total Cones")
      v-flex.xs6
        v-pm(title="Avg. Cones MBG")
    v-layout(row,wrap)
      v-flex.xs12
        div(id='qr')
  
</template>

<script>
import QRCode from 'qrcodejs2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      windowSize: {
        x: 0,
        y: 0
      },
      qrSize: 0,
      gameData: {
        teamName: '',
        mode: '',
        totalCones: 0,
        averageConesMbg: 0,
        spire: 0,
        ground: 0,
        mbgTime: 0,
        coneTime: 0,
        mbg20: 0,
        mbg10: 0,
        mbg5: 0,
        preload: true
      },
      result: '',
      hasQR: false
    }
  },
  mounted () {
    this.onResize()
    this.getQR()
    console.log(JSON.stringify(this.windowSize))
    console.log(JSON.stringify(this.qrSize))
    console.log(this.hasQR)
  },
  methods: {
    getQR () {
      if (this.hasQR !== true) {
        var qr = new QRCode(document.getElementById('qr'), {
          width: this.qrSize,
          height: this.qrSize
        })
        qr.makeCode(JSON.stringify(this.gameData))
        this.hasQR = true
      } else {
        qr.makeCode(JSON.stringify(this.gameData))
      }
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      this.qrSize = 0.75 * this.windowSize.x
      this.getQR()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
