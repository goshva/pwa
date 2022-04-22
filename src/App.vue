<template>
<v-app>
  <v-navigation-drawer v-model="drawer" app clipped>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="home" link :to="{ path: '/' }"></v-list-item>
      <v-list-item prepend-icon="mdi-arrow-up" title="Top" value="top" link :to="{ path: '/top' }"></v-list-item>
      <v-list-item prepend-icon="mdi-heart" title="Favourites" value="fav" link :to="{ path: '/fav' }"></v-list-item>
      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users" value="users"></v-list-item>
        </template>
        <v-list-item prepend-icon="mdi-information-outline" title="User1" value="user1" link :to="{ path: '/user' }"></v-list-item>
        <v-list-item prepend-icon="mdi-information-outline" title="User2" value="user2" link :to="{ path: '/user2' }"></v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-information-outline" title="About" value="about" link :to="{ path: '/about' }"></v-list-item>
      <v-list-item prepend-icon="mdi-lifebuoy" title="Help" value="help" link :to="{ path: '/help' }"></v-list-item>
      <v-list-item prepend-icon="mdi-account-cog-outline" title="Settings" value="set" link :to="{ path: '/settings' }"></v-list-item>
      <v-list-item prepend-icon="mdi-cellphone-link" title="Install" value="in" link :to="{ path: '/install' }"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar app clipped-left dense elevation="0" color="primary">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-switch
      v-model="admin"
      label="admin"
      color="red"
      inset
      hide-details
    ></v-switch>
    <v-checkbox
      v-model="login"
      label="login"
      color="success"
      inset
      hide-details
    ></v-checkbox>
    <v-btn :to="{path: '/not'}" icon>
      <v-badge content="2" color="error">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
    <v-btn :to="{path: '/share'}" icon>
      <v-icon>mdi-share-variant-outline</v-icon>
    </v-btn>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <v-row dense v-if="login">
        <v-col
          v-for="item in items"
          :key="item.id"
          :cols="item.flex"
        >
          <v-card>
            <v-img :src="item.img" cover></v-img>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="secondary" rounded="pill" variant="contained-text">Explore</v-btn>
              <v-spacer></v-spacer>
              <v-btn :icon="show[item.id] ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show[item.id] = !show[item.id]"></v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show[item.id]">
                <v-divider></v-divider>
                <v-card-text>{{ item.txt }}</v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</v-app>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup () {
    const items = [
      {
        id: 1,
        flex: 12,
        img: 'https://picsum.photos/1920/250?sig=1',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        subtitle: 'Vivamus auctor elit eu tortor venenatis, quis fermentum nulla rutrum',
        txt: 'Fusce venenatis purus in nibh aliquet, et elementum nibh fermentum. Nulla at ultrices nunc. Quisque nulla ipsum, porta eu aliquam ut, lacinia vitae mi. Nulla pulvinar malesuada ante at bibendum. Vivamus ac bibendum dui. Vestibulum diam quam, gravida nec magna at, pulvinar vehicula lacus. Sed leo lacus, placerat sit amet velit id, pellentesque cursus ex.'

      },
      {
        id: 2,
        flex: 6,
        img: 'https://picsum.photos/1920/500?sig=2',
        title: 'Vivamus faucibus mi quis vehicula aliquet',
        subtitle: 'Donec tempus a odio vel hendrerit',
        txt: 'Phasellus quis nisl vel ipsum rutrum tristique vel vitae leo. Praesent mollis porta massa. Vivamus convallis efficitur ligula, ut consectetur mauris sodales vel. Maecenas eu ex pulvinar, sollicitudin sem ut, consectetur neque. In mauris mauris, facilisis sed feugiat ut, consectetur accumsan dolor. Suspendisse in justo semper, iaculis turpis vel, accumsan urna. Ut pellentesque convallis ex sed elementum. Integer mattis egestas lacus condimentum vulputate.'

      },
      {
        id: 3,
        flex: 6,
        img: 'https://picsum.photos/1920/500?sig=3',
        title: 'Vestibulum id ex non ligula dapibus imperdiet a vitae dui',
        subtitle: 'Sed pellentesque, purus at hendrerit auctor, metus ex interdum sem, et aliquam enim sapien vitae dolor',
        txt: 'Nulla tincidunt blandit sem sit amet porttitor. Morbi quis sapien congue, blandit nunc ac, dictum libero. Quisque vitae nunc a turpis efficitur finibus id vel velit. Vestibulum vitae dignissim elit. In a imperdiet sem. Vestibulum sed gravida elit, sed consequat dolor. Nulla scelerisque elit libero, ut rutrum tortor fringilla ut. Etiam nisl ligula, aliquam eget egestas non, malesuada et eros. Aenean varius nisi eu justo efficitur, in efficitur felis laoreet. Nullam ultricies pellentesque ex ut faucibus.'

      }
      ,
      {
        id: 4,
        flex: 4,
        img: 'https://picsum.photos/1920/700?sig=4',
        title: 'Vivamus faucibus mi quis vehicula aliquet',
        subtitle: 'Donec tempus a odio vel hendrerit',
        txt: 'Phasellus quis nisl vel ipsum rutrum tristique vel vitae leo. Praesent mollis porta massa. Vivamus convallis efficitur ligula, ut consectetur mauris sodales vel. Maecenas eu ex pulvinar, sollicitudin sem ut, consectetur neque. In mauris mauris, facilisis sed feugiat ut, consectetur accumsan dolor. Suspendisse in justo semper, iaculis turpis vel, accumsan urna. Ut pellentesque convallis ex sed elementum. Integer mattis egestas lacus condimentum vulputate.'

      },
      {
        id: 5,
        flex: 4,
        img: 'https://picsum.photos/1920/700?sig=5',
        title: 'Vestibulum id ex non ligula dapibus imperdiet a vitae dui',
        subtitle: 'Sed pellentesque, purus at hendrerit auctor, metus ex interdum sem, et aliquam enim sapien vitae dolor',
        txt: 'Nulla tincidunt blandit sem sit amet porttitor. Morbi quis sapien congue, blandit nunc ac, dictum libero. Quisque vitae nunc a turpis efficitur finibus id vel velit. Vestibulum vitae dignissim elit. In a imperdiet sem. Vestibulum sed gravida elit, sed consequat dolor. Nulla scelerisque elit libero, ut rutrum tortor fringilla ut. Etiam nisl ligula, aliquam eget egestas non, malesuada et eros. Aenean varius nisi eu justo efficitur, in efficitur felis laoreet. Nullam ultricies pellentesque ex ut faucibus.'

      },
      {
        id: 6,
        flex: 4,
        img: 'https://picsum.photos/1920/700?sig=6',
        title: 'Vestibulum id ex non ligula dapibus imperdiet a vitae dui',
        subtitle: 'Sed pellentesque, purus at hendrerit auctor, metus ex interdum sem, et aliquam enim sapien vitae dolor',
        txt: 'Nulla tincidunt blandit sem sit amet porttitor. Morbi quis sapien congue, blandit nunc ac, dictum libero. Quisque vitae nunc a turpis efficitur finibus id vel velit. Vestibulum vitae dignissim elit. In a imperdiet sem. Vestibulum sed gravida elit, sed consequat dolor. Nulla scelerisque elit libero, ut rutrum tortor fringilla ut. Etiam nisl ligula, aliquam eget egestas non, malesuada et eros. Aenean varius nisi eu justo efficitur, in efficitur felis laoreet. Nullam ultricies pellentesque ex ut faucibus.'

      }
    ]
    const drawer = ref(null)
    const show = ref([])
    const admin = ref(false)
    const login = ref(true)
    const sh = id => { show[id] = !show[id] }
    return {
      items,
      drawer,
      show,
      admin,
      login,
      sh
    }
  }
}
</script>

<style>
  .v-card {margin-bottom: 2vh}
</style>
