<template>
  <div id="home">
    <Header />
    <div class="container-fluid px-4">
      <h4 class="text-primary border-bottom border-primary pb-1 mt-5 mb-5">
        Tasks
      </h4>
      <div class="row justify-content-around">
        <div id="formt" class="col-8 pt-5">
          <FormTask />
        </div>
        <div class="col-4">
          <div class="row justify-content-center mb-5">
            <div class="col-11 pt-4">
              <h4>Checklist</h4>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-11">
              <table class="table table-bordered">
                <thead class="text-center">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody v-for="tarefa in tarefa" :key="tarefa.id">
                  <Tasks :tarefa="tarefa" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import FormTask from "@/views/tasks/FormTask.vue";
import Form from "@/components/Form.vue";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "Logado",
  props: {
    tarefa: {
      type: Array,
      required: true,
    },
  },
  components: {
    Header,
    FormTask,
    Form,
    Tasks,
  },
};
</script>
<style scoped>
#formt {
  border-right: 2px solid #a9bed1;
}
</style>
