// components/my-event/my-event.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCounters() {
      this.triggerEvent("addCounters", { name: "Tom", age: 3 }, {})
    }
  }
})
