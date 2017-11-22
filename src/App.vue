<template>
  <v-app light>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title class="white--text">Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>

    <v-navigation-drawer class="pink lighten-2" app absolute light overflow v-model="drawer">
      <v-list>
        <v-list-tile-avatar>
          <img src="https://randomuser.me/api/portraits/men/85.jpg"/>
        </v-list-tile-avatar>
      </v-list>  
    </v-navigation-drawer>
    
    
    <v-content>
      <v-container fluid>
        <v-btn color = "primary"> 
          Hello
        </v-btn>
      </v-container>
    </v-content>

    <v-footer :fixed="true" app>
      <span>&copy; H2O</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Vuetify.js'
      }
    }
  }
</script>
