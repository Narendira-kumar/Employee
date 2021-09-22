<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Employee</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addEmployee">
                    <div class="form-group">
                        <label>Emplooyee Name:</label>
                        <input type="text" class="form-control" v-model="employee.employeeName"/>
                    </div>
                    <div class="form-group">
                        <label>employee Id:</label>
                        <input type="text" class="form-control" v-model="employee.employeeId"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Employee"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'AddEmployee'
  },
  data() {
      return {
          employee: {}
      }
  },
  methods: {
      addEmployee() {
           let uri = 'http://localhost:7000/employees/add';
            this.axios.post(uri, this.employee).then((response) => {
                  this.$router.push({name: 'Index'});
                });
        }
    }
}
</script>