<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="navbar-left">
        <span class="menu-icon" @click="toggleSidebar"><i class="fas fa-bars"></i></span>
      </div>
      <div class="navbar-right">
        <span class="navbar-item"><i class="fas fa-bell"></i></span>
        <span class="navbar-item"><i class="fas fa-envelope"></i></span>
        <span class="navbar-item"><img src="https://via.placeholder.com/30" alt="User Avatar" class="avatar" /></span>
        <span class="navbar-item"><i class="fas fa-cog"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar');
    }
  }
};
</script>

<style scoped>
.navbar {
  height: 60px;
  width: 82%;
  background-color: #ffffff;
  position: fixed;
  top: 0;  
  margin: 0;  
  padding: 0;  
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
  transition: left 0.3s;
}

.sidebar-compact & {
  left: 30px; 
}
.navbar-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
}

.navbar-left .menu-icon {
  font-size: 1.5rem;
  cursor: pointer;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-item {
  margin-left: 20px;
  position: relative;
  cursor: pointer;
}

.navbar-item .badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 3px 7px;
  font-size: 0.75rem;
}

.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
