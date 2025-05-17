<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="big-box">
    <div class="box">
      <!-- 滑动盒子 -->
      <div class="pre-box" ref="preBoxRef">
        <h1>welcome</h1>
        <p>join us</p>
        <div class="img-box">
          <img
            :src="require('@/assets/login/一二01.jpeg')"
            alt=""
            ref="avatarRef"
          />
        </div>
      </div>
      <!-- 注册盒子 -->
      <div class="register-form">
        <!-- 标题 -->
        <div class="title-box">
          <h1>注册</h1>
        </div>
        <!-- 输入框盒子 -->
        <div style="display: flex; justify-content: center">
          <el-form
            ref="registerFormRef"
            :model="registerForm"
            :rules="rules"
            label-with="5px"
          >
            <el-form-item prop="username" label=" ">
              <el-input
                type="text"
                placeholder="用户名"
                v-model="registerForm.username"
                ><template #suffix>
                  <User style="width: 20px; height: 20px" /> </template
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" label=" ">
              <el-input
                type="password"
                placeholder="密码"
                v-model="registerForm.password"
                ><template #suffix>
                  <Lock style="width: 20px; height: 20px" /> </template
              ></el-input>
            </el-form-item>
            <el-form-item prop="confirmPassword" label=" ">
              <el-input
                type="password"
                placeholder="确认密码"
                v-model="registerForm.confirmPassword"
              >
                <template #suffix>
                  <Lock style="width: 20px; height: 20px" /> </template
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <!-- 按钮 -->
        <div class="btn-box">
          <button @click="register">注册</button>
          <p @click="mySwitch">已有账号？去登录</p>
        </div>
      </div>
      <!-- 登录 -->
      <div class="login-form">
        <div class="title-box">
          <h1>登录</h1>
        </div>
        <!-- 输入框盒子 -->
        <div style="display: flex; justify-content: center">
          <el-form
            ref="loginFormRef"
            :model="loginForm"
            :rules="rules"
            label-with="5px"
          >
            <el-form-item prop="username" label=" ">
              <el-input
                type="text"
                placeholder="用户名"
                v-model="registerForm.username"
                ><template #suffix>
                  <User style="width: 20px; height: 20px" /> </template
              ></el-input>
            </el-form-item>
            <el-form-item prop="password" label=" ">
              <el-input
                type="password"
                placeholder="密码"
                v-model="loginForm.password"
                ><template #suffix>
                  <Lock style="width: 20px; height: 20px" /> </template
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="btn-box">
          <button @click="login">登录</button>
          <p @click="mySwitch">没有账号？去注册</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { Lock, User } from "@element-plus/icons-vue";
const flag = ref(true);
const preBoxRef = ref(null);
const avatarRef = ref(null);
const mySwitch = () => {
  // const preBoxRef.value = document.querySelector(".pre-box");
  // const img = document.querySelector("#avatar");
  // document.querySelector不具备生命周期感知与响应式,在 DOM 尚未渲染前就执行，可能会拿不到元素（返回 null）。

  if (flag.value) {
    preBoxRef.value.style.transform = "translateX(100%)";
    preBoxRef.value.style.backgroundColor = "#c9e0ed";
    avatarRef.value.src = require("@/assets/login/布布01.jpeg");
  } else {
    preBoxRef.value.style.transform = "translateX(0%)";
    preBoxRef.value.style.backgroundColor = "#edd4dc";
    avatarRef.value.src = require("@/assets/login/一二01.jpeg");
  }
  flag.value = !flag.value;
};

const loginForm = reactive({
  username: "",
  password: "",
});
const registerForm = reactive({
  username: "",
  password: "",
  confirmPassword: "",
});

const loginFormRef = ref("");
const registerFormRef = ref("");
const rules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "长度应该在3~5个字符之间", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, message: "长度应该大于6", trigger: "blur" },
  ],
  confirmPassword: [
    { required: true, message: "请输入确认密码", trigger: "blur" },
    { min: 6, message: "长度应该大于6", trigger: "blur" },
  ],
});

const router = useRouter();

const login = () => {
  loginFormRef.value.validate((valid) => {
    if (valid) {
      // api.loginApi(loginForm).then(res => {
      //   console.log('login', res)
      //   if (res.status === 0) {
      //     ElMessage.success(res.message)
      //     window.sessionStorage.setItem('token', res.token)
      //     router.push('/home')
      //   }
      // }).catch(error => {
      //   console.log(error);
      // })
      ElMessage.success("登录成功");
      router.push("/home");
    } else {
      return;
    }
  });
};

const register = () => {
  registerFormRef.value.validate((valid) => {
    if (valid) {
      // api.registerApi(registerForm).then(res => {
      //   if (res.status === 0) {
      //     ElMessage.success(res.message)
      //   }
      // }).catch(error => {
      //   console.log(error);
      // })
      ElMessage.success("注册成功");
    } else {
      return;
    }
  });
};
</script>

<style lang="scss" scoped>
input {
  outline: none;
}
// h1 {
//   display: flex;
//   justify-content: center;
// }
// p {
//   display: flex;
//   justify-content: center;
// }
.big-box {
  // height: 100vh;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  /* 溢出隐藏 */
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  /* 渐变方向从左到右 */
  background: linear-gradient(to right, rgb(247, 209, 215), rgb(191, 227, 241));
  .box {
    // display: flex;
    // align-items: center;
    width: 1050px;
    height: 600px;
    display: flex;
    /* 相对定位 */
    position: relative;
    z-index: 2;
    margin: auto;
    /* 设置圆角 */
    border-radius: 8px;
    /* 设置边框 */
    border: 1px solid rgba(255, 255, 255, 0.6);
    /* 设置盒子阴影 */
    box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
    .pre-box {
      // background-color: pink;
      // height: 400px;
      // width: 300px;
      // padding: 50px;
      /* 宽度为大盒子的一半 */
      width: 50%;
      height: 100%;
      /* 绝对定位 */
      position: absolute;
      /* 距离大盒子左侧为0 */
      left: 0;
      /* 距离大盒子顶部为0 */
      top: 0;
      z-index: 99;
      border-radius: 4px;
      background-color: #edd4dc;
      box-shadow: 2px 1px 19px rgba(0, 0, 0, 0.1);
      /* 动画过渡，先加速再减速 */
      transition: 0.5s ease-in-out;
    }
    /* 滑动盒子的标题 */
    .pre-box h1 {
      margin-top: 150px;
      text-align: center;
      /* 文字间距 */
      letter-spacing: 5px;
      color: white;
      /* 禁止选中 */
      user-select: none;
      /* 文字阴影 */
      text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
    }

    /* 滑动盒子的文字 */
    .pre-box p {
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin: 20px 0;
      /* 禁止选中 */
      user-select: none;
      font-weight: bold;
      color: white;
      text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
    }

    /* 图片盒子 */
    .img-box {
      width: 200px;
      height: 200px;
      margin: 20px auto;
      /* 设置为圆形 */
      border-radius: 50%;
      /* 设置用户禁止选中 */
      user-select: none;
      overflow: hidden;
      box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
    }

    /* 图片 */
    .img-box img {
      width: 100%;
      transition: 0.5s;
    }
    .login-form,
    .register-form {
      // background-color: rgb(87, 173, 243);
      // height: 400px;
      // width: 300px;
      // padding: 50px;
      flex: 1;
      height: 100%;
      .title-box {
        // display: flex;
        // justify-content: center;
        height: 300px;
        line-height: 500px;
      }
      /* 标题 */
      .title-box h1 {
        text-align: center;
        color: white;
        /* 禁止选中 */
        user-select: none;
        letter-spacing: 5px;
        text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.1);
      }
      // .input-box {
      //   margin-top: 30px;
      //   display: flex;
      //   flex-direction: column;
      // }
      /* 输入框盒子 */
      .el-form {
        display: flex;
        /* 纵向布局 */
        flex-direction: column;
        /* 水平居中 */
        align-items: center;
        width: 320px;
        .el-form-item {
          width: 75%;
        }
        /* 输入框 */
        input {
          /* width: 60%; */
          height: 40px;
          margin-bottom: 20px;
          text-indent: 10px;
          border: 1px solid #fff;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 120px;
          /* 增加磨砂质感 */
          backdrop-filter: blur(10px);
        }

        input:focus {
          /* 光标颜色 */
          color: #b0cfe9;
        }
        /* 聚焦时隐藏文字 */
        input:focus::placeholder {
          opacity: 0;
        }
      }

      .btn-box {
        margin-top: 30px;
        display: flex;
        justify-content: center;
      }
      /* 按钮 */
      button {
        width: 100px;
        height: 30px;
        margin: 0 7px;
        line-height: 30px;
        border: none;
        border-radius: 4px;
        background-color: #69b3f0;
        color: white;
      }

      /* 按钮悬停时 */
      button:hover {
        /* 鼠标小手 */
        cursor: pointer;
        /* 透明度 */
        opacity: 0.8;
      }
      /* 按钮文字 */
      .btn-box p {
        height: 30px;
        line-height: 30px;
        /* 禁止选中 */
        user-select: none;
        font-size: 14px;
        color: white;
      }

      .btn-box p:hover {
        cursor: pointer;
        border-bottom: 1px solid white;
      }
    }
  }
}
</style>
