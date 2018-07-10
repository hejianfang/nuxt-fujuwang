<template>
   <div class="login">
       <div class="wrap">
           <h1>登录</h1><span>没有账号，立即注册</span>
           <input type="tel" name="tel" value="请输入手机号">
           <input type="password" name="password" value="请输入密码">
           <button>登录</button>
           <p>忘记密码？</p>
           <div class="anther">
               <a href="/"><img src="../assets/img/u336.png">
               <p>qq登录</p>
               </a>
               <a href="/"><img src="../assets/img/u326.png">
                   <p>微信登录</p>
               </a>
               <a href="/"><img src="../assets/img/u331.png">
                   <p>微博登录</p>
               </a>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>