<template>
  <div class="container">
    <!-- <i-card
     i-class="equipList"
     v-for="(item,index) in equipment"
     :key="index"
     :title="item.equipmentName" 
     :extra="item.equipmentHour+'h'" 
     full=true
     :thumb="item.equipmentImage"
     @click="gotoDetail(item.id)">
    <view slot="content">{{item.equipmentDesc}}</view>
     <view slot="footer">{{item.equipmentHour}}</view>
  </i-card> -->
    <div
      v-for="(item,index) in equipment"
      :key="index"
      class="equiplist"
      @click="gotoDetail(item.id)"
      >
      <div class="equipPic" :style="{backgroundImage:'url('+item.equipmentImage+')'}"></div>
      <div class="equipInfo">
        <div>{{item.equipmentName}}</div>
        <div class="workList">
          <span>作业范围:{{item.workList}}</span>
          </div>
        <div style="font-size:12px;margin-top:8rpx;">
          <span>租赁类型:{{item.payType}}</span>
          <span style="float:right;">铲斗容量:{{item.equipmantCapacity}}</span>
          </div>
        <!-- <div>{{item.equipmentDesc}}</div> -->
      </div>
    </div>
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
        console.log(res.data)
        this.equipment = res.data
      })
    },
    gotoDetail (id) {
      let url = '/pages/equipmentDetail/main?id=' + id
      wx.navigateTo({
        url: url
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
.equiplist{
  width: 100%;
  height: 150rpx;
  display: flex;
  .equipPic{
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    flex: 0 0 25%;
    height: 100%;
  }
  .equipInfo{
    flex: 0 1 75%;
    padding-left: 20rpx;
    padding-top: 15rpx;
    overflow:hidden;
    .workList{
      font-size: 12px;
      color: #505050;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top:8rpx;
    }
    span{
      color: #505050;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
