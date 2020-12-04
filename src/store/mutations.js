import { ADD_CARTCOUNT, ADD_CARTLIST, CHANGE_UID, ADD_TO_CART } from "./mutations_type";

export default {
  slideCountChange(state, num) {
    state.slideCount += num;
  },
  [ADD_CARTCOUNT](state, payload) {
    payload.count += 1;
  },
  [ADD_CARTLIST](state, payload) {
    state.cartList.push(payload);
  },
  [CHANGE_UID](state, payload) {
    state.uid = payload;
  }
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload);
  },
};
