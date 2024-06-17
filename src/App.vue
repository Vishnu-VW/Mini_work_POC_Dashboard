<template>
  <div id="app" :class="{'sidebar-compact': isSidebarCompact}">
    <SideBar />
     <div class="content-wrapper">
      <NavBar @toggleSidebar="toggleSidebar" />
      <div class="main-content">
        
         <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
    NavBar
   
  },
  data() {
    return {
      isSidebarCompact: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCompact = !this.isSidebarCompact;
    }
  }
};
</script>

<style>
#app {
  display: flex;
}
.sidebar-compact .sidebar {
  width: 70px;
}

.sidebar-compact .content-wrapper {
  margin-left: 70px;
}

.content-wrapper {
  margin-left: 230px;
  width: calc(100% - 230px); /* Ensure the content-wrapper takes the remaining width */
  display: flex;
  flex-direction: column;
}
.main-content { 
  flex: 1;  
 display: flex;
 flex-direction: column;
  
}

@import "~@fortawesome/fontawesome-free/css/all.css";
</style>
