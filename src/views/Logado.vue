<template>
  <div id="home">
    <Header />
   <div class="container">
    <div class="col">
      <h4>Tasks</h4>
      <hr />
      <br />
      <div class="container">
        <div class="formulario">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Title</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="add title"
              v-model="inputTitle"
            />
          </div>
         <div class="col-6 mt-3">
          <label for="status">Status</label>
          <select class="form-select" aria-label="Default select example" v-model="inputSelect" id="status">
            <option value="ToDo"> ToDo </option>
            <option value="WIP"> WIP </option>
            <option value="Done"> Done </option>
          </select>
        </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Description</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="add description..."
              v-model="inputDescription"
            ></textarea>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary">
          <a href="" class="text-light text-decoration-none"> Cancelar </a>
          </button>
          <a href="" @click.stop.prevent="addTask()" id="salvarTask" class="btn btn-primary"
              > Adicionar
         </a>
        </div>
        <br />
        <hr />
        <br />
        <div class="container mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> ID</th>
                <th scope="col"> Title</th>
                <th scope="col"> Description</th>
                <th scope="col"> Status</th>
                <th scope="col"> Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>*</th>
                <td>{{title}}</td>
                <td>{{description}}</td>
                <td>{{status}}</td>
                <td class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                 <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                 </svg></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
import Form from "@/components/Form.vue";
export default {
  name: "home-page",
  components: {
    Header,
    Tasks,
    Form,
  },
   methods: {
    addTask() {
      const title = this.inputTitle;
      this.title = title;
      const status = this.inputSelect;
      this.status = status;
      const description = this.inputDescription;
      this.description = description;
    },
  },
  data() {
    return {
      title: "",
      status: "",
      description: "",
      inputTitle: "",
      inputSelect: "",
      inputDescription: "",
    };
  },
};
</script>