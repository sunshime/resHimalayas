import tabList from '../../api/tabbar.js'


Page({
  data: {
    tabCur: 0,
    mainCur: 0,
    verticalNavTop: 0,
    tabList: tabList,
    contentList:[1,1,1,1,1,1,1,1,1,1,1],
    load: true
  },
  onLoad() {
    // wx.showLoading({
    //   title: '加载中...',
    //   mask: true
    // });

  },
  onReady() {
    // wx.hideLoading()
  },

  // 切换左边菜单
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      mainCur: e.currentTarget.dataset.id,
      // 实现左边自动滑动到某个位置 4表示自动滑动到 第五项 （4为索引值）
      verticalNavTop: (e.currentTarget.dataset.id - 2) * 60
    })
    // console.log('verticalNavTop===>', this.data.verticalNavTop)
  },

  // 滑动右边对应左边菜单切换
  VerticalMain(e) {
    console.log('e===>', e)
    let that = this;
    let contentList = this.data.contentList;
    let tabWidth = 0;

    for (let i = 0; i < contentList.length; i++) {
      let view = wx.createSelectorQuery().select("#main-" + i);
      console.log("view===>", view)
      view.fields({
        size: true
      }, data => {
        console.log("data===>", data)

        contentList[i].left = tabWidth;
        tabWidth = tabWidth + data.width;
        contentList[i].right = tabWidth;

      }).exec();
    }
    that.setData({
      contentList: contentList
    })

    console.log(this.data.contentList)

    let scrollLeft = e.detail.scrollLeft + 30;
    for (let i = 0; i < contentList.length; i++) {
      if (scrollLeft > contentList[i].left && scrollLeft < contentList[i].right) {
        that.setData({
          verticalNavTop: (i - 4) * 50,
          tabCur: i
        })
        return false
      }
    }
  }
})