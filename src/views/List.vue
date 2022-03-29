<template>
  <div>
    <h1>Список задач</h1>

    <div class="input__select">
      <select ref="select" v-model="filter">
        <option value="" disabled selected>Выберите статус</option>
        <option value="активна">Активная</option>
        <option value="завершена">Завершенная</option>
        <option value="просрочена">Просроченная</option>
      </select>
      <label>Фильтр статусов</label>
    </div>

    <button v-if="filter" type="button" class="btn btn-small red darken-4" @click="filter = null">Сброс фильтра</button>

    <hr>
    <table v-if="tasks.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Заголовок</th>
          <th>Дата</th>
          <th>Описание</th>
          <th>Статус</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>

        <tr
          v-for="(task, idx) of displayTasks"
          :key="task.id"
        >
          <td>{{ idx + 1 }}</td>
          <td>{{ task.title }}</td>
          <td>{{ new Date(task.date).toLocaleString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'}) }}</td>
          <td class="td_description"><div class="text">{{ task.description }}</div></td>
          <td style="font-weight: bold">{{ task.status }}</td>
          <td>
            <router-link :to="'/task/' + task.id" class="btn btn-small">Открыть</router-link>
          </td>
        </tr>

      </tbody>

    </table>

    <p v-else>Список задач пуст</p>

  </div>
</template>

<script>
export default {
  data: () => ({
    filter: null
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }

        return t.status === this.filter
      })
    }
  },
  mounted() {
    M.FormSelect.init(this.$refs.select)
  },
  destroyed() {
    if (this.filter) {
      this.filter.destroy()
    }
  }
}
</script>

<style scoped>
.td_description {
  max-width: 250px;
}
.text {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.input__select {
  max-width: 400px;
}
</style>


