<template>
  <div class="recent-activities">
    <h2>Recent Activities</h2>
    <div class="activity-list">
      <div v-for="activity in activities" :key="activity.id" class="activity-item">
        <div class="activity-time">{{ activity.time }}</div>
        <div class="activity-icon" :class="activity.iconClass"></div>
        <div class="activity-details">
          <div class="activity-title">{{ activity.title }}</div>
          <div class="activity-user">{{ activity.user }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentActivities",
  data() {
    return {
      activities: [
        { id: 1, time: "42 Mins Ago", iconClass: "icon-task-updated", title: "Task Updated", user: "Nikolai" },
        { id: 2, time: "1 day Ago", iconClass: "icon-deal-added", title: "Deal Added", user: "Panshi" },
        { id: 3, time: "42 Mins Ago", iconClass: "icon-published-article", title: "Published Article", user: "Rasel" },
        { id: 4, time: "1 day Ago", iconClass: "icon-dock-updated", title: "Dock Updated", user: "Reshmi" },
        { id: 5, time: "1 day Ago", iconClass: "icon-replied-comment", title: "Replied Comment", user: "Jenathon" }
      ]
    };
  }
};
</script>

<style scoped>
.recent-activities {
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
}

.recent-activities h2 {
  font-size: 18px;
  margin-bottom: 16px;
  text-align: center;
  font-weight: bold;
}

.activity-list {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 10px;
}

.activity-list::before {
  content: '';
  position: absolute;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 2px;
 
}

.activity-item {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
}

.activity-time {
  font-size: 12px;
  color: #888;
  width: 70px;
}

.activity-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.icon-task-updated {
  background-color: #6c63ff;
}

.icon-deal-added {
  background-color: #ff6b6b;
}

.icon-published-article {
  background-color: #42a5f5;
}

.icon-dock-updated {
  background-color: #ffca28;
}

.icon-replied-comment {
  background-color: #66bb6a;
}

.activity-details {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
}

.activity-title {
  font-size: 14px;
  font-weight: bold;
}

.activity-user {
  font-size: 12px;
  color: #555;
}
</style>
