// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCounter() {
      this.setData({
        counter: this.data.counter += 5
      })
    }
  },
  // 引用用外部样式
  externalClass: [],
  // 属性和数据的监听
  observers: {
    counter: (newVal) => {

    }
  },
  // 监听页面生命周期
  pageLifetimes: {
    show() {
// 监听页面显示
    },
    hide() {
// 监听页面隐藏
    },
    resize() {
// 监听尺寸改变
    }
  },

  // 组件生命周期
  lefetimes: {
    created() {
      // 组件被创建
    },
    attched() {
      // 组件被创建到页面
    },
    ready() {
      // 组件被渲染完成
    },
    movied() {
      // 组件被移动到节点另一位置
    },
    detached() {
      // 组件被移除
    }
  }
})
