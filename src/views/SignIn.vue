<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
          is-blur="blur blur-rounded my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content main-content-bg">
    <section>
      <div class="page-header min-vh-75">
        <div class="container">
          <div class="row">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-6 d-flex flex-column">
              <div class="mt-8 card card-plain">
                <div class="pb-0 card-header text-start">
                  <h3 class="font-weight-bolder text-success text-gradient">
                    Welcome back
                  </h3>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form
                    method="post"
                    action="javascript:void(0)"
                    @submit="login"
                    role="form"
                    class="text-start"
                  >
                    <label>Email</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      required
                      v-model="user.email"
                    />
                    <label>Password</label>
                    <input
                      class="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                      v-model="user.password"
                    />
                    <vsud-switch id="rememberMe" name="rememberMe" checked>
                      Remember me
                    </vsud-switch>
                    <div v-if="loading" class="d-flex justify-content-center">
                      <div class="spinner-border  text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    <div
                      class="
                        text-center
                        d-flex
                        align-items-center
                        justify-content-center
                      "
                    >
                      <vsud-button
                        class="my-4 mb-2"
                        variant="gradient"
                        color="success"
                        full-width
                        >Sign in
                      </vsud-button>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <p class="mx-auto mb-4 text-sm">
                    Don't have an account?
                    <router-link
                      :to="{ name: 'Sign Up' }"
                      class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div
                class="
                  top-0
                  oblique
                  position-absolute
                  h-100
                  d-md-block d-none
                  me-n8
                "
              >
                <div
                  class="
                    bg-cover
                    oblique-image
                    position-absolute
                    fixed-top
                    ms-auto
                    h-100
                    z-index-0
                    ms-n6
                  "
                  :style="{
                    backgroundImage:
                      'url(' +
                      require('@/assets/img/curved-images/curved9.jpg') +
                      ')',
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudSwitch from "@/components/VsudSwitch.vue";
import VsudButton from "@/components/VsudButton.vue";
const body = document.getElementsByTagName("body")[0];
import { mapMutations } from "vuex";
import { authService } from "../services/auth.service";
import router from "../router";

export default {
  name: "SignIn",
  components: {
    Navbar,
    AppFooter,
    VsudSwitch,
    VsudButton,
  },
  created() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.toggleEveryDisplay();
    this.toggleHideConfig();
    body.classList.add("bg-gray-100");
  },
  methods: {
    ...mapMutations(["toggleEveryDisplay", "toggleHideConfig"]),
    login() {
      this.loading = true;
      authService
        .login(this.user)
        .then((response) => {
          console.log(response);
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
          }
          router.push({ name: "Dashboard" });

          return response.data;
        })
        .catch(({ response: { data } }) => {
          console.log(data);
        })
        .finally(() => {          this.loading = false;});
    },
  },
  data() {
    return {
      loading: false,
      user: {
        email: "roo@email.com",
        password: "root",
      },
    };
  },
};
</script>
