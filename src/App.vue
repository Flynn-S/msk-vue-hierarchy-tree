<template>
  <div className="user-tree">
    <h1>Hieracrhy Tree</h1>
    <ul>
      <li className="user-box" v-for="user in filteredUsers" :key="user.name">
        <h2 className="user">{{ user.name }}</h2>
        <ul className="reportee-box">
          <li
            className="reportees"
            v-for="reportee in user.reports"
            :key="reportee"
          >
            {{ report }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="module">
import User from "./User.js";

export default {
  name: "UserList",
  data() {
    return {
      users: [
        new User("Tim", ["Dom", "Inga"]),
        new User("Dom", ["Flynn"]),
        new User("Inga", ["Flynn"]),
        new User("Flynn"),
      ],
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => user.reports.length > 0);
    },
  },
};
</script>

<style scoped>
.user-tree {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 80vw;
  margin: 0 auto;
}

.user-box {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5%;
}

.user {
  padding: 5px 20px;
  border: 1px solid black;
}

.reportee-box {
  width: 100%;
  display: flex;
  margin: 5% 0;
  justify-content: space-between;
}

.reportees {
  border: 1px solid black;
  padding: 5px 20px;
  margin: 0 auto;
}
</style>
