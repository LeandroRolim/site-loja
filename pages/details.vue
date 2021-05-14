<template>
  <div>
    {{ product }}
  </div>
</template>

<script>
export default {
  data: () => ({
    product: {},
  }),
  computed: {
    coupon() {
      return this.$store.state.coupon
    },
  },
  created() {
    this.loadProduct()
  },
  methods: {
    async loadProduct() {
      this.product = (await this.$axios.$get('/api/products/1')).data
    },
  },
}
</script>
