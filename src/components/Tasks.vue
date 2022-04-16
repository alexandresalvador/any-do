<template>
  <div>
    <div class="tasks" style="width: 18rem">
      <div class="tasks-body">
        <h5 class="tasks-title">
          {{lista.name}}
          </h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tarefas',
  props: {
    lista: {
      type: Object,
      require: true,
    },
  },
};
</script>