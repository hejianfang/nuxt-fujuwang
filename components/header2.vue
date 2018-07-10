<template>
  <div class="header2">
      <div class="warp">
          <div class="left-warp">
              <a href="">首页</a>
              <a href="">二手房</a>
              <a href="">新房</a>
              <a href="">租房</a>
              <a href="">学区房</a>
              <a href="">小区</a>
              <a href="">经纪人</a>
              <a href="">百科</a>
              <span class="dif">
                <a href="" >在线委托</a>
                <div class="warp-di">
                     <p @click="yezhu">我是业主</p>
                    <p>帮我找房</p>
                </div>
              </span>
              <a href="">工具</a>
              <a href="">专题</a>
          </div>
          <div class="right-warp">
              <a href="">请登录</a>
              <span>|</span>
              <a href="">立即注册</a>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "header2",
        methods:{
         yezhu(){
             this.$router.push({ path: '/yezhu' })
         }
        }
    }
</script>

<style scoped lang="less">
.header2{
    width: 100%;
    height: 60px;
    background-color: #f4f4f4;
    .warp{
        width: 1100px;
        margin: 0 auto;
        line-height: 60px;
        clear: both;
        .left-warp{
            float: left;
            .dif{
                position: relative;
                .warp-di{
                    position: absolute;
                    line-height: 20px;
                    top: 39px;
                    right: 30px;
                    background-color: white;
                    display: none;
                    z-index: 9999;
                    p{
                        padding-top: 10px;
                    }
                }
                .warp-di p:hover{
                    color: #c30d23;
                    cursor: pointer;
                }
            }
            a{
                margin-right: 30px;
                padding-bottom: 20px;
            }
        }
        .left-warp a:hover{
            color: #c30d23;
            border-bottom: 2px solid #c30d23;
        }
        .left-warp .dif:hover .warp-di{
            display: block;
        }
        .right-warp{
            float: right;
            font-size: 14px;
            span{
                margin:0 10px;
            }
        }

    }
}
</style>