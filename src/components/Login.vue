<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-form v-on:submit.prevent="onSubmit">
            <b-form-group id="exampleInputGroup1"
                          label="User" label-for="exampleInput1">
              <b-form-input id="exampleInput1"
                            type="text" v-model="form.name" required
                            placeholder="Enter user name"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                          label="Password" label-for="exampleInput2">
              <b-form-input id="exampleInput2"
                            type="password" v-model="form.pwd" required
                            placeholder="Enter password"></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="secondary">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'login',
  data () {
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      alert(JSON.stringify(this.form))
      const requestJson = {
        dataFilters: [{
          gridRange: {
            sheetId: 0
          }
        }]
      }
      Vue.http.post('https://sheets.googleapis.com/v4/spreadsheets/1i0V39YqQGsw8977NHII2d4gr1flz650F6_bXU-1dq28:getByDataFilter?alt=json&key=AIzaSyDeJNaIbYFROU3cW8GUr3ZSpcYY1otSyi0', requestJson)
      this.$emit('increment')
    }
  }
}
</script>
