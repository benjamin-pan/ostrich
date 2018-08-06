import Vue from 'vue'

Vue.mixin({
  methods: {
    storage (use = 'local', pre = '') {
      let storage
      switch (use) {
        case 'session':
        case 'sessionStorage':
          storage = window.sessionStorage
          break
        default:
          storage = window.localStorage
      }
      const get = (key) => {
        return key ? storage.getItem(`${pre}${key}`) : ''
      }
      const set = (key, value) => {
        if (value) {
          storage.setItem(`${pre}${key}`, value)
        } else {
          storage.removeItem(`${pre}${key}`)
        }
      }
      const sets = (objs = []) => {
        if (objs.length > 0) {
          for (let i in objs) {
            let key = objs[i].key
            let value = objs[i].value
            if (value) {
              storage.setItem(`${pre}${key}`, value)
            } else {
              storage.removeItem(`${pre}${key}`)
            }
          }
        }
      }
      const remove = (key) => {
        if (key) {
          storage.removeItem(`${pre}${key}`)
        } else {
          console.warn()
        }
      }
      const removes = (keys = []) => {
        if (keys.length > 0) {
          for (let i in keys) {
            let key = keys[i]
            storage.removeItem(`${pre}${key}`)
          }
        }
      }
      const clear = () => {
        storage.clear()
      }
      return {get, set, sets, remove, removes, clear}
    }
  }
})
