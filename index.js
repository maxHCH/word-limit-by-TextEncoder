const { createApp } = Vue

createApp({
  data() {
    return {
      inputValue: '',
      maxLen: 30
    }
  },
  computed: {
    inputValueHandler:{
      get() {
        return this.inputValue
      },
      set(v) {
        this.inputValue = v
        this.checkValueLength()
      }
    },
    stringLength(){
      return new TextEncoder().encode(this.inputValue).length
    },
    isTooLong(){
      return this.stringLength >= this.maxLen
    }
  },
  methods: {
    checkValueLength(){
      this.isTooLong && this.sliceText()
    },
    sliceText(){
      const sliced = new TextEncoder().encode(this.inputValue).slice(0,this.maxLen)
      const resolve = new TextDecoder('utf-8').decode(sliced).replace(/\uFFFD/g,'')
      this.inputValue = resolve
    }
  }
}).mount('#app')