<template>
    <div v-if="isAdmin">
    <div id="card-toevoegen">
        <i class="bi bi-plus-lg"></i>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            isAdmin: false
        }
    },
    methods: {
    navigateToAddLogo() {
      this.$router.push('/addlogo');
    },
    navigateTo(route) {
        this.$router.push({ path: `/${route}` });
        },
        checkUserRole() {
            const userData = localStorage.getItem('user');
            if (userData) {
                const userObject = JSON.parse(userData);
                this.isAdmin = userObject.role === 'admin';
            }
        }
  },
  mounted() {
        this.checkUserRole();
    }
}
</script>