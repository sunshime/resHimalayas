// pages/index/tabBar/tabBar.js

import tabList from '../../api/tabbar.js'

// const tabLists = tabList;
// console.log('tabLists====>', tabLists)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: tabList,
    navScrollLeft: 0,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentTab: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let query = wx.createSelectorQuery();
    query.select('.nav-item').boundingClientRect()
    query.exec(res => {
      console.log('res3', res)
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  switchNav(event) {
    var windowWidth = wx.getSystemInfoSync().windowWidth
    console.log("windowWidth==>", windowWidth)
    let query = wx.createSelectorQuery();
    console.log("query==>", query)
    query.selectAll('#user-1').boundingClientRect(function(rect) {
      console.log('==============>', rect)
    }).exec();

    console.log('event====>', event)
    var cur = event.currentTarget.dataset.current;
    console.log('cur===>', cur)
    //每个tab选项宽度占1/5
    var singleNavWidth = (windowWidth / 5);
    //tab选项居中                            
    this.setData({
      // navScrollLeft: (cur - 2) * singleNavWidth
      navScrollLeft: singleNavWidth
    })
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },

  switchTab(e) {
    var cur = e.target.dataset.id;
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 4) * 65
    });
  }
})