<template>
  <div id="home">
    <Header />
    <div class="container-fluid px-4">
      <div
        class="
          border-bottom border-primary
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <h2 class="text-primary pb-1 mt-5">Tasks</h2>
        <span>
          <button v-if="mostrar()" type="button" class="btn btn-primary">
            <router-link
              class="text-light text-decoration-none"
              to="/logado"
              >Adicionar
            </router-link>
          </button>
        </span>
      </div>
      <div v-if="esconder()" class="py-5">
        <div class="form-check py-1" v-for="lista in listas" :key="lista.id">
          <input
            class="form-check-input"
            type="checkbox"
            id="defaultCheck1"
            value=""
          />
          <label class="form-check-label" for="default">
            {{ lista.name }}
          </label>
        </div>
      </div>
      <div v-show="mostrar()" class="row justify-content-center mt-5 pt-5">
        <div class="col-11">
          <table class="table table-bordered">
            <thead class="text-center">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody v-for="tarefa in tarefa" :key="tarefa.id">
              <Tasks :tarefa="tarefa" />
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="esconder()">
        <button
          v-if="disabled()"
          disabled
          type="button"
          class="btn border border-primary"
        >
          <a class="navbar-brand text-primary m-0"> Adicionar </a>
        </button>
        <button v-else type="button" class="btn border border-primary">
          <router-link class="navbar-brand text-primary m-0" to="/conta">
            Adicionar
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import FormTask from "@/views/tasks/FormTask.vue";
export default {
  name: "home-page",
  props: {
    tarefa: {
      type: Array,
      required: true,
    },
  },
  components: {
    Header,
    Tasks,
    FormTask,
  },
  data() {
    return {
      listas: [
        {
          id: 1,
          name: "- Supermercado, fazer compras... ",
        },
        {
          id: 2,
          name: "- Casa, arrumar mudança",
        },
        {
          id: 3,
          name: "- Computador, organizar SO",
        },
      ],
    };
  },
  methods: {
    disabled() {
      if (localStorage.hasOwnProperty("dadosUsuario")) {
        return true;
      } else return false;
    },
    esconder() {
      if (localStorage.hasOwnProperty("dadosTarefa")) {
        return false;
      } else return true;
    },
    mostrar() {
      if (localStorage.hasOwnProperty("dadosTarefa")) {
        return true;
      } else return false;
    },
    beforeMount() {
      this.disabled();
      this.esconder();
      this.mostrar();
    },
  },
};
</script>

<style>
H3 {
  padding-top: 40px;
}

.btn {
  margin: 40px;
}
</style>