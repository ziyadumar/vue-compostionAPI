import { reactive } from "vue";

const state = reactive({
  counter: 0
})

const methods = {
  hello(){
    return "hello";
  }
}

export default {
  state,
  methods
}