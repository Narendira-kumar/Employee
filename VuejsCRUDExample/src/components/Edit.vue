<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Employee</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateEmployee">
                    <div class="form-group">
                        <label>Employee Name:</label>
                        <input type="text" class="form-control" v-model="employee.employeeName"/>
                    </div>
                    <div class="form-group">
                        <label>Employee Id:</label>
                        <input type="text" class="form-control" v-model="employee.employeeId" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Employee"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                employee:{}
            }
        },

        created: function(){
            this.getEmployee();
        },

        methods: {
            getEmployee()
            {
              let uri = 'http://localhost:7000/employees/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.employee = response.data;
                });
            },

            updateEmployee()
            {
              let uri = 'http://localhost:7000/employees/update/' + this.$route.params.id;
                this.axios.post(uri, this.employee).then((response) => {
                  this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>
