<template>
  <tr>
    <td class="text-center">
      <router-link class="text-decoration-none" v-bind:to="url()">
        {{ tarefa.id }}
      </router-link>
    </td>
    <td>{{ tarefa.title }}</td>
    <td>{{ tarefa.description }}</td>
    <td class="text-center">
      <span
        v-if="tarefa.status === 'ToDo'"
        class="badge badge-primary bg-primary"
      >
        {{ tarefa.status }}
      </span>
      <span
        v-else-if="tarefa.status === 'WiP'"
        class="badge badge-warning bg-warning text-dark"
        >{{ tarefa.status }}</span
      >
      <span v-else class="badge badge-success bg-success">{{
        tarefa.status
      }}</span>
    </td>
    
    <td class="text-center">
      <button type="button" class="btn text-danger p-0 border-0">
      </button>
    </td>
  </tr>
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
   methods: {
    url() {
      return "/tarefa/" + this.tarefa.id;
    },
  },
};
</script>