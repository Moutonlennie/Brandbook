<template>
    <div id="login-container">
        <div id="login">
            <img src="@/assets/logo.png" alt="Brandportal logo">
            <h3>Brandportal</h3>
            <h1>Login</h1>
            <form @submit.prevent="login">
            <div>
                <label for="username">Gebruikersnaam:</label><br>
                <input type="text" v-model="username" required>
            </div>
            <div>
                <label for="password">Wachtwoord:</label><br>
                <input type="password" v-model="password" required>
            </div>
            <button class="btn-card" type="submit">Login</button>
            </form>
            <div id="portalYappa">
                <p>Portal by Yappa</p>
                <img src="@/assets/YappaIcoonRed.png">
            </div>
        </div>
        <div id="login-afbeelding">
            <img src="@/assets/login_image.png" alt="Login afbeelding">
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
        login() {
    // Simulate login API call
    if (this.username === 'admin' && this.password === 'adminpassword') {
        localStorage.setItem('user', JSON.stringify({ username: this.username, role: 'admin' }));
        this.$router.push('/home');
    } else if (this.username === 'user' && this.password === 'userpassword') {
        localStorage.setItem('user', JSON.stringify({ username: this.username, role: 'user' }));
        this.$router.push('/home');
    } else {
        alert('Invalid credentials');
    }
}

    }
  };
  </script>
  
  <style scoped>
 .login {
    max-width: 300px;
    margin: auto;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  </style>
  