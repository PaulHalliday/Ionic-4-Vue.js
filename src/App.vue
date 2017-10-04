<template>
  <ion-app>
    <ion-page class="show-page" ng-controller="RootCtrl">
      <ion-header>
        <ion-toolbar>
          <ion-title>Ionic 4 + Vue</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="content" padding>
          <ion-list>
            <ion-item v-for="user of users" v-bind:key="user.id">
              <ion-label full>{{user.name}}</ion-label>
            </ion-item>
          </ion-list>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  created() {
      axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
  }
}
</script>

<style>

</style>
