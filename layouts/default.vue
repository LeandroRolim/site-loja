<template>
  <v-app dark>
    <v-app-bar fixed app class="primary" dark>
      <v-toolbar-title>Loja de demonstração</v-toolbar-title>
      <v-spacer />
      <v-text-field
        v-model="code"
        label="cupom"
        hide-details
        prepend-icon="mdi-cards"
      ></v-text-field>
      <v-btn outlined class="ml-4" @click="validate">validar</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>Loja de demonstração&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    code: '',
  }),
  methods: {
    async validate() {
      const coupon = (await this.$axios.$get(`/api/coupons?code=${this.code}`))
        .data
      if (coupon.length === 0) {
        alert('coupon nâo encontrado')
      } else {
        this.$store.commit('setCoupon', coupon[0])
      }
    },
  },
}
</script>
