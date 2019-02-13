<template>
  <div class="container">
   这里面展示
  </div>
</template>

<script>
export default {
  data () {
    return {
      equipmentInfo: {}
    }
  },
  components: {
  },

  methods: {
    // 获取设备详情
    getEquDetail (params) {
      const db = wx.cloud.database()
      console.log(params)
      db.collection('text').where({id: params}).get().then(res => {
        this.equipmentInfo = res.data
        console.log(this.equipmentInfo)
      })
    }
  },
  onLoad () {
    let id = this.$root.$mp.query.id
    this.getEquDetail(id)
  },
  created () {
  }
}
</script>

<style lang=scss scoped>

</style>
