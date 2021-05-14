export const state = () => ({
  coupon: null,
})

export const mutations = {
  setCoupon(state, payload) {
    state.coupon = payload
  },
}
