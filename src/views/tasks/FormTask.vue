<template>
  <div>
    <div v-if="rotaTarefa" class="row justify-content-around">
      <div class="col-5">
        <div class="row">
          <label for="tiulo">
            <span class="d-flex justify-content-between">
              <b>Title</b>
              <small v-if="small4()" class="text-danger"
                >Preenchimento obrigatório!</small
              >
            </span>
            <input
              id="titulo"
              type="text"
              class="form-control"
              v-model="title"
              placeholder="Add title"
            />
          </label>
        </div>
      </div>
      <div class="col-5">
        <div class="row">
          <label for="status">
            <span class="d-flex justify-content-between">
              <p class="mb-0"><b>Status</b></p>
              <small v-if="small5()" class="text-danger"
                >Preenchimento obrigatório!</small
              >
            </span>
            <select id="select" class="custom-select w-100" v-model="status">
              <option selected disabled value="Select">Select</option>
              <option selected value="ToDo">ToDo</option>
              <option value="WiP">WiP</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div v-if="rotaTarefa" class="row justify-content-around mw-100">
      <div class="col-11">
        <div class="row">
          <label class="my-5" for="description">
            <span class="d-flex justify-content-between">
              <b>Description</b>
              <small v-if="small6()" class="text-danger"
                >Preenchimento obrigatório!</small
              >
            </span>
            <textarea
              class="form-control"
              id="description"
              v-model="description"
              rows="3"
              placeholder="Add descripion..."
            >
            </textarea>
          </label>
        </div>
      </div>
    </div>
    <div v-if="rotaTarefa" class="row justify-content-around mt-5 mw-100">
      <div class="col-5">
        <button
          @click="cancelar2()"
          id="cancelar2"
          type="button"
          class="btn btn-light border border-secondary"
        >
          <router-link class="text-secondary text-decoration-none" to="/"
            >Cancelar
          </router-link>
        </button>
      </div>
      <div class="col-5 d-flex justify-content-end">
        <button
          v-if="disabled2()"
          type="button"
          disabled
          class="btn btn-light border border-primary"
        >
          <router-link
            class="text-primary text-decoration-none"
            to="/logado"
            >Adicionar
          </router-link>
        </button>
        <button
          v-else
          @click="click"
          type="button"
          class="btn btn-light border border-primary"
        >
          <a class="text-primary text-decoration-none" href="/logado">
            Adicionar
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormTask",
  data() {
    return {
      title: "",
      status: "Select",
      description: "",
    };
  },
  computed: {
    rotaTarefa() {
      return this.$route.name === "logado";
    },
  },
  methods: {
    cancelar2() {
      this.title = "";
      this.status = "Select";
      this.description = "";
    },
    disabled2() {
      return (
        this.title === "" || this.status === "Select" || this.description === ""
      );
    },
    small4() {
      return this.title === "";
    },
    small5() {
      return this.status === "Select";
    },
    small6() {
      return this.description === "";
    },
    salvarTask() {
      let dadosTarefa = new Array();
      if (localStorage.hasOwnProperty("dadosTarefa")) {
        dadosTarefa = JSON.parse(localStorage.getItem("dadosTarefa"));
      }
      const dadosSalvar = {
        id: Math.floor(Math.random() * 1000),
        title: this.title,
        description: this.description,
        status: this.status,
      };
      dadosTarefa.push(dadosSalvar);
      localStorage.setItem("dadosTarefa", JSON.stringify(dadosTarefa));
    },
    limparForm() {
      this.title = "";
      this.status = "Select";
      this.description = "";
    },
    click() {
      this.salvarTask();
      this.limparForm();
    },
  },
};
</script>


<style scoped>
#select {
  height: 80%;
}
</style>