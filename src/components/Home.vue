<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col v-for="item in itemlist" v-bind:key="item.name">
          <b-card v-bind:title="item.name"
                  v-bind:img-src="item.url"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="m-2">
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <b-button variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'home',
  data () {
    return {
      itemlist: []
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData: function () {
      let self = this
      return Vue.http.get('https://sheets.googleapis.com/v4/spreadsheets/1i0V39YqQGsw8977NHII2d4gr1flz650F6_bXU-1dq28/values/items?key=AIzaSyDeJNaIbYFROU3cW8GUr3ZSpcYY1otSyi0')
      .then((res) => {
        self.itemlist = res.data.values.map((value) => {
          return {
            name: value[0],
            url: value[1]
          }
        })
      })
    }
  }
}
</script>
