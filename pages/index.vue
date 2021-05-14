<template>
  <div>
    <v-row>
      <v-col
        v-for="product in products"
        :key="'product.' + product.id"
        cols="12"
        sm="12"
        md="6"
        xl="3"
      >
        <v-card elevation="2" class="pa-2">
          <v-img :src="product.photo" height="200px"></v-img>
          <v-card-title class="blue--text text--darken-4">
            {{ product.name }}
          </v-card-title>
          <v-card-subtitle>
            {{ product.brand.name }}
          </v-card-subtitle>
          <v-card-text>
            <v-chip>
              {{ product.category.category }}
            </v-chip>
            <v-chip>
              Preço:
              {{
                parseFloat(product.price).toLocaleString('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                })
              }}
            </v-chip>
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
          </v-card-text>
          <v-card-actions>
            <v-btn link text class="blue--text" :to="`/product/${product.id}`">
              Ver mais
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const products = (await $axios.$get('/api/products')).data
    return { products }
  },
  computed: {
    coupon() {
      return this.$store.state.coupon
    },
  },
}
</script>
