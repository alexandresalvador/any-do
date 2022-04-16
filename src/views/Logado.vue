<template>
  <div id="home">
    <Header />

    <div class="col">
      <h3>Tasks</h3>
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
            />
          </div>
          <select class="form-select" aria-label="Default select example">
            <label for="">Status</label>
            <option value="1">ToDo</option>
            <option value="2">WIP</option>
            <option value="3">Done</option>
          </select>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Description</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="add description..."
            ></textarea>
          </div>
        </div>

        <div class="d-flex justify-content-between">
          <button type="button" class="btn btn-secondary">
            <router-link class="text-light text-decoration-none" to="">
              Cancelar
            </router-link>
          </button>
          <button id="buttonSalvar" type="submit" class="btn btn-primary">
            Adicionar
          </button>
        </div>
        <hr />
        <br />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "home-page",
  components: {
    Header,
    Tasks,
  },
  data() {},
};
</script>