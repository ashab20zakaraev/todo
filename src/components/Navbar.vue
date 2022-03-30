<template>
  <nav class="light-blue darken-3">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Todos</router-link>

      <ul id="nav-mobile" class="right hide-on-med-and-down">

        <li>
          <router-link to="/create">Создать задачу</router-link>
        </li>

        <li>
          <router-link to="/list">Список задач</router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-wrapper {
  padding: 0 30px;
}
</style>