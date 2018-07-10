<template>
    <div>
        <header>
            <header2></header2>
        </header>
        <div class="wrap">
            <div class="wrap-wrp">
               <span><a href="/"><img src="../assets/img/logo.png"></a></span>
                <a href="">百科</a>
                <a href="">专题</a>
            </div>
        </div>
        <div class="hand-conent">
            <p>福居网>专题</p>
            <div class="inpt">
                <input type="text" placeholder="搜索"><span>搜索</span>
            </div>
        </div>
        <div class="hot">
            <h1>热门</h1>
          <div class="hot-left">
              <img src="../assets/img/zhuanti1.jpg">
          </div>
            <div class="hot-right">
                <img src="../assets/img/zhuanti2.jpg">
            </div>
        </div>
        <div class="huodong">
            <div class="huodong-head">
                <span>活动</span> <a href="">更多 ></a>
            </div>
                <ul>
                    <li>
                        <span>10月28日</span><span>2017-10-27</span>
                    </li>
                </ul>
        </div>
        <div class="huodong">
            <div class="huodong-head">
                <span>楼盘</span> <a href="">更多 ></a>
            </div>
            <ul>
                <li>
                    <span>10月28日</span><span>2017-10-27</span>
                </li>
            </ul>
        </div>
        <div class="huodong">
            <div class="huodong-head">
                <span>二手房</span> <a href="">更多 ></a>
            </div>
            <ul>
                <li>
                    <span>10月28日</span><span>2017-10-27</span>
                </li>
            </ul>
        </div>
        <footer>
            <MyFooter>
            </MyFooter>
        </footer>
    </div>
</template>

<script>
    import header2 from '~/components/header2'
    import MyFooter from '~/components/Footer.vue'
    export default {
        name: "zhuanti",
        components:{
            header2,MyFooter
        }
    }
</script>

<style scoped lang="less">
    .wrap{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 40px;
        .wrap-wrp{
                width: 1100px;
                margin: 0 auto;
                height: 80px;
                padding-top: 20px;
                a{
                    margin-right: 50px;
                    vertical-align: middle;
                }}
            .wrap-wrp a:first-child{
                display: inline-block;
            }
            .wrap-wrp a:hover{
                color: #c30d23;
            }
            }
    .hand-conent{
        width: 1100px;
        margin: 0 auto;
        p{
            color: #aaa;
            font-size: 14px;
            margin-top: 20px;
        }
        .inpt{
            margin-top: 40px;
            input{
                width: 760px;
                height: 60px;
                background-color: #f4f4f4;
                outline: none;
                border: none;
                padding-left: 10px;
            }
            span{
                display: inline-block;
                width: 160px;
                height: 60px;
                background-color:#c30d23 ;
                text-align: center;
                line-height: 60px;
                color: white;
                cursor: pointer;
            }}}
    .hot{
        h1{
            font-weight: 300;
            margin-bottom: 20px;
        }
        width: 1100px;
        margin: 80px auto;
        height: 474px;
        .hot-left{
            float: left;
            height: 410px;
            width: 550px;
            img{
                height: 100%;
                cursor: pointer;
            }
        }
        .hot-right{
            float: left;
            height: 200px;
            img{
                height: 100%;
                cursor: pointer;
            }
        }
    }
    .huodong{
        width: 1100px;
        margin: 0 auto;
        margin-bottom: 40px;
        .huodong-head{
            border-bottom: 1px solid #ccc;
            padding-bottom: 15px;
            span{
                font-size: 26px;
                font-weight: 300;
            }
            a{
                float: right;
            }
        }
       ul{
           li{
               color: #555;
               padding: 8px 0;
           }
           li span:last-child{
               float: right;
           }
       }
    }
</style>