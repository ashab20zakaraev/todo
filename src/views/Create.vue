<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Создать задачу</h1>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input id="title" type="text" class="validate" autocomplete="off" v-model="title">
          <label for="title">Заголовок</label>
        </div>

        <div class="input-field">
          <textarea id="description" class="materialize-textarea" v-model="description"></textarea>
          <label for="description">Описание</label>
          <span class="character-counter" style="float: right; font-size: 12px">{{ description.length }}/2048</span>
        </div>

        <input type="text" ref="datepicker" class="datepicker" placeholder="Добавить дату" v-model="date">

        <button type="submit" class="btn">Добавить</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Create',
  data: () => ({
    title: '',
    description: '',
    date: null
  }),
  methods: {
    submitHandler() {
      if (this.title === '') {
        alert('Поле Заголовок не может быть пустым')
      } else if (this.description === '') {
        alert('Поле Описание не может быть пустым')
      } else {
        const task = {
          id: Date.now(),
          title: this.title.trim(),
          description: this.description.trim(),
          date: this.date.date,
          status: 'активна'
        }

        this.$store.dispatch('createTask', task)

        this.title = this.description = ''
      }
    }
  },
  mounted() {
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }
  }
}
</script>
