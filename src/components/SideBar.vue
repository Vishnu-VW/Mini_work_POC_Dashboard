<template>
  <div class="sidebar">
    <div class="brand">
      <img src="@/assets/logo.png" alt="Lector Logo" class="logo" />
      <span class="brand-name">Lector.</span>
    </div>
    <div class="nav-container">
      <ul class="nav-list">
        <router-link
          to="/"
          class="nav-item"
          active-class="active"
          exact
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </li>
        </router-link>
        <router-link
          to="/widgets"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-th"></i>
            <span>Widgets</span>
          </li>
        </router-link>
        <router-link
          to="/ui-elements"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-laptop"></i>
            <span>UI Elements</span>
          </li>
        </router-link>
        <router-link
          to="/advanced-ui"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-star"></i>
            <span>Advanced UI</span>
          </li>
        </router-link>
        <router-link
          to="/form-elements"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-keyboard"></i>
            <span>Form Elements</span>
          </li>
        </router-link>
        <router-link
          to="/editors"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-edit"></i>
            <span>Editors</span>
          </li>
        </router-link>
        <router-link
          to="/charts"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-chart-bar"></i>
            <span>Charts</span>
          </li>
        </router-link>
        <router-link
          to="/tables"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-table"></i>
            <span>Tables</span>
          </li>
        </router-link>
        <router-link
          to="/popups"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-search"></i>
            <span>Popups</span>
          </li>
        </router-link>
        <router-link
          to="/notifications"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-bell"></i>
            <span>Notifications</span>
          </li>
        </router-link>
        <router-link
          to="/icons"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-icons"></i>
            <span>Icons</span>
          </li>
        </router-link>
        <router-link
          to="/maps"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-map-marker-alt"></i>
            <span>Maps</span>
          </li>
        </router-link>
        <router-link
          to="/user-pages"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-user"></i>
            <span>User Pages</span>
          </li>
        </router-link>
        <router-link
          to="/error-pages"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-exclamation-circle"></i>
            <span>Error Pages</span>
          </li>
        </router-link>
        <router-link
          to="/general-pages"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-file-alt"></i>
            <span>General Pages</span>
          </li>
        </router-link>
        <router-link
          to="/e-commerce"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-shopping-cart"></i>
            <span>E-Commerce</span>
          </li>
        </router-link>
        <router-link
          to="/email"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
          </li>
        </router-link>
        <router-link
          to="/calendar"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-calendar-alt"></i>
            <span>Calendar</span>
          </li>
        </router-link>
        <router-link
          to="/todo-list"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-list-ul"></i>
            <span>Todo List</span>
          </li>
        </router-link>
        <router-link
          to="/gallery"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-images"></i>
            <span>Gallery</span>
          </li>
        </router-link>
        <router-link
          to="/documentation"
          class="nav-item"
          active-class="active"
          v-slot="{ navigate }"
        >
          <li @click="navigate">
            <i class="fas fa-book"></i>
            <span>Documentation</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.sidebar {
  width: 230px;
  height: 100vh; 
  position: fixed; 
  top: 0;
  left: 0;
  background-color: #1a2238;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: 0; 
  overflow-y: auto; 
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  width: 30px;
  height: 30px;
  margin-right: 25px;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-container {
  flex-grow: 1; 
  overflow-y: auto; 
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0; 
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  color: #ffffff;
  position: relative;
}

.nav-item:hover {
  background-color: #2a3457;
}

.nav-item i {

  font-size: 1.4rem;
}

.nav-item span {
  font-size: 1.1rem;
  margin-left : 15px;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: #FF5F1F; 
}
</style>
