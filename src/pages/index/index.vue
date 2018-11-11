<template>
  <div class="container">
    <i-card
     i-class="equipList"
     v-for="(item,index) in equipment"
     :key="index"
     :title="item.equipmentName" 
     :extra="item.equipmentHour+'h'" 
     full=true
     :thumb="item.equipmentImage">
    <view slot="content">{{item.equipmentDesc}}</view>
    <!-- <view slot="footer">{{item.equipmentHour}}</view> -->
  </i-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      equipment: []
    }
  },

  components: {
  },

  methods: {
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    getEquipment () {
      const db = wx.cloud.database()
      db.collection('text').get().then(res => {
        this.equipment = res.data
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.getEquipment()
  }
}
</script>

<style lang=scss scoped>
._i-card{
  width: 100%;
}
</style>
