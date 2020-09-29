function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      console.log('update')
      val = newVal;
    },
  });
}
let keys = Object.keys(obj)
for (let i = 0; i < keys.length; i++) {
  defineReactive(obj, keys[i], obj[keys[i]])
}
let user = {name: 'wangyh'}
defineReactive(user, 'name', user.name)
user.name = '123124312'