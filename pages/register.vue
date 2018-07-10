<template>
    <div v-black>
        <header>
         <div class="warp">
             <a href="/"><img src="../assets/img/logo.png"></a>
             <a href="/"><span>返回福居网首页 <i class="iconfont icon-jiantou"></i></span></a>
         </div>
        </header>
        <div class="container">
          <div class="container-warp">
              <div class="conent">
                  <div class="h1"><h1>创建账号</h1><a href="login">已有账号，立即登录</a></div>
                  <div class="tel"><i class="iconfont icon-shouji"></i><input type="tel" placeholder="请输入手机号" ></div>
                  <div class="tell">
                      <div class="tel1"><i class="iconfont icon-mima"></i><input type="tel" placeholder="请输入短信验证码" ></div>
                      <button class="btn">获取验证码</button>
                  </div>
                  <div class="tel"><i class="iconfont icon-mima"></i><input type="password" placeholder="请输入6-18位密码" ></div>
                  <div class="tel"><i class="iconfont icon-nicheng"></i><input type="text" placeholder="请输入昵称" ></div>
                  <button class="btn-zhuce">立即注册</button>
                  <div class="foot">
                      <p>点击立即注册，则表示您阅读并同意遵守</p>
                      <span><a href="http://www.fooju.cn/registrationProtocol.html">福居网平台服务协议</a></span>
                  </div>
              </div>
          </div>
            <footer>
                <p>北京福居网网络科技有限公司| Copyright © 2013-2017 FOOJU Corporation, All Rights Reserved 福居网 版权所有| 京ICP备13012924号-1</p>
            </footer>
        </div>

    </div>

</template>

<script>
    export default {
        name: "register",
        methods:{
        }
    }
</script>

<style scoped lang="less">
header{
    width: 100%;
  .warp{
      width: 1100px;
      margin: 25px auto;
      height: 50px;
      }
    .warp a:nth-child(2){
        display: inline-block;
        float: right;
        margin-top: 10px;
    }
  }
.container{
    background-color: rgb(242,242,242);
    .container-warp{
        width: 620px;
        height: 540px;
        margin: 0 auto;
        background-color: white;
        z-index: 999;
        margin-bottom: 20px;
        .conent{
            width: 360px;
            margin: 0 auto;
            padding-top: 30px;
            .h1{
                overflow: hidden;
                margin-bottom: 30px;
                h1{
                    font-weight: 500;
                    float: left;
                }
                a{
                    display: inline-block;
                    margin-top: 10px;
                    float: right;
                    color: rgb(255,153,0);
                }
            }
            .tel{
                border: 1px solid #aaa;
                width: 360px;
                height: 54px;
                line-height: 54px;
                overflow: hidden;
                margin-bottom: 15px;
                i{
                   float: left;
                }
                input{
                    float:left;
                    height: 54px;
                    border: none;
                    outline: none;
                }
            }
            .tell{
               position: relative;
               .btn{
                   position: absolute;
                   right: 0;
                   top: 0;
                   height: 54px;
                   width: 100px;
                   background-color: white;
               }
             .tel1{
                border: 1px solid #aaa;
                width: 250px;
                height: 54px;
                line-height: 54px;
                overflow: hidden;
                margin-bottom: 15px;
                i{
                    float: left;
                }
                input{
                    float:left;
                    height: 54px;
                    border: none;
                    outline: none;

                }
            }
           }
            .btn-zhuce{
                display: inline-block;
                width: 360px;
                height: 54px;
                background-color: rgb(195,13,35);
                color: #fff;
                font-size: 16px;
            }
        }
    }
}
</style>