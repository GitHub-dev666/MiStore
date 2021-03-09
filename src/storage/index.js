/** sessionStorage封装 */
const StorageKey = 'MiMall'
export default {
  // 设置sessionStorage
  setItem (key, value) {
    // 第一次先创建MiMall对象，来存储管理整个域名的sessionStorage
    if (!sessionStorage.getItem(StorageKey)) {
      sessionStorage.setItem(StorageKey, '{}')
      // 然后添加sessionStorage到其属性上
      const val = this.getItem()
      val[key] = value
      sessionStorage.setItem(StorageKey, JSON.stringify(val))
    } else { // 已经有MiMall对象存在，直接添加sessionStorage到其属性上
      const val = this.getItem()
      val[key] = value
      sessionStorage.setItem(StorageKey, JSON.stringify(val))
    }
  },
  // 通过Storage.getItem('user')获取sessionStorage，存在返回对应值，不存在返回空对象
  getItem (key) {
    if (!key) {
      const val = JSON.parse(sessionStorage.getItem(StorageKey)) || {}
      return val
    } else {
      const val = JSON.parse(sessionStorage.getItem(StorageKey))[key] || {}
      return val
    }
  },
  // 删除MiMall对象中的属性key
  clear (key) {
    const val = this.getItem()
    if (val[key]) {
      delete val[key]
      sessionStorage.setItem(StorageKey, JSON.stringify(val))
    }
  }
}
