<template>
  <div class="row">
    <div class="col s6 offset-s3" v-if="task">
      <h1>{{ task.title }}</h1>

      <form @submit.prevent="submitHandler">

        <div v-if="task.status === 'завершена'">
          <div class="input-field">
            <textarea id="description" class="materialize-textarea" v-model="description" disabled></textarea>
            <label for="description">Описание</label>
            <span class="character-counter" style="float: right; font-size: 12px">{{ description.length }}/2048</span>
          </div>

          <input type="text" ref="datepicker" class="datepicker" placeholder="Добавить дату" v-model="date" disabled>
        </div>

        <div v-else>
          <div class="input-field">
            <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
            <label for="description">Описание</label>
            <span class="character-counter" style="float: right; font-size: 12px">{{ description.length }}/2048</span>
          </div>

          <input type="text" ref="datepicker" class="datepicker" placeholder="Добавить дату" v-model="date">
        </div>

        <div v-if="task.status !== 'завершена'">
          <button type="submit" class="btn blue">Изменить</button>
          <button type="button" class="btn btn-update" @click="compliteTask">Завершить</button>
        </div>
        <button type="button" class="btn red" @click="deleteTask">Удалить</button>

      </form>
    </div>

    <p v-else>Задача не найдена</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    description: '',
    date: null
  }),
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask', {
        id: this.task.id,
        description: this.description,
        date: this.date.date
      })

      this.$router.push('/list')
    },
    compliteTask() {
      this.$store.dispatch('compliteTask', this.task.id)

      this.$router.push('/list')
    },
    deleteTask() {
      this.$store.dispatch('deleteTask', this.task.id)
      this.$router.push('/list')
    }
  },
  mounted() {
    this.description = this.task.description

    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    })

    setTimeout(() => {
      M.updateTextFields()
    }, 0)
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }
  },
  computed: {
    task() {
      return this.$store.getters.taskByID(+this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.btn-update {
  margin: 0 20px;
}
</style>