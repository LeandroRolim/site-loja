<template>
  <div>
    {{ product }}
    <v-card elevation="2" class="pa-4">
      <v-img :src="product.photo" height="200px"></v-img>
      <v-card-title>
        {{ product.name }}
      </v-card-title>
      <v-card-subtitle>
        {{ product.brand.name }}
      </v-card-subtitle>
      <v-card-text>
        <v-chip>
          {{ product.category.category }}
        </v-chip>
      </v-card-text>
      <v-card-actions>
        <span>
          Preço:
          {{
            parseFloat(product.price).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }}
        </span>
        <v-chip v-if="coupon" color="green">
          Desconto &nbsp;
          <span v-if="coupon.is_percentage">{{ coupon.value }}%</span>
          <span v-else>
            {{
              parseFloat(coupon.value).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })
            }}
          </span>
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn class="primary" disabled>Comprar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const product = (await $axios.$get(`/api/products/${params.id}`)).data
    return { product }
  },
  computed: {
    coupon() {
      return this.$store.state.coupon
    },
  },
}
</script>
