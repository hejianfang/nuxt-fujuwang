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
            <p>福居网>百科</p>
            <div class="inpt">
                <input type="text" placeholder="搜索"><span>搜索</span>
            </div>
        </div>
        <div class="float">
            <div class="float-left">
              <h1>百科分类</h1>
                <div class="ershouhouse">
                    <h3>二手房</h3>
                    <a href="">买房风险</a>
                    <a href="">入住/交接</a>
                    <a href="">缴税/过户</a>
                    <a href="">全款/贷款</a>
                    <a href="">签约/定房</a>
                    <a href="">看房/选房</a>
                    <a href="">准备买房</a>
                </div>
                <div class="ershouhouse">
                    <h3>新房</h3>
                    <a href="">认购新房</a>
                    <a href="">看房/选房</a>
                    <a href="">活动</a>
                    <a href="">签约/定房</a>
                    <a href="">收房/验房</a>
                    <a href="">装修/入住</a>
                    <a href="">房产活动</a>
                    <a href="">网签数据</a>
                </div>
                <div class="ershouhouse">
                    <h3>购房宝典</h3>
                    <a href="">房产政策</a>
                    <a href="">购房建议</a>
                    <a href="">法律纠纷</a>
                </div>
                <div class="ershouhouse">
                    <h3>租房</h3>
                    <a href="">注意事项</a>
                    <a href="">租房风险</a>
                </div>
                <div class="ershouhouse">
                    <h3>换房</h3>
                    <a href="">准备换房</a>
                    <a href="">换房风险</a>
                    <a href="">缴税/过户</a>
                </div>
            </div>
            <div class="float-right">
                <h1>买房风险</h1>
                <ul>
                    <li v-for="item in EncyList">
                        <img :src="'http://www.fooju.cn'+item.picurl">
                        <div class="li-right">
                            <p>{{item.title}}</p>
                            <p>{{item.introduce}}</p>
                            <p>{{item.add_time }}</p>
                        </div>
                    </li>
                </ul>
            </div>
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
    import axios from '~/plugins/axios'
    import api from '~/myApi'
    export default {
        name: "zhuanti",
        components:{
            header2,MyFooter
        },
        async asyncData() {
            let EncyList = await axios.get(api.paramToUrl(api.EncyEncyList,{page_num:1,page_size:10,cat2:3}))
            return {
                EncyList:EncyList.data.data
            }
        },
        mounted(){
            console.log(this.EncyList);
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
        margin-bottom: 80px;
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
    .float{
        width: 1100px;
        margin: 0 auto;
        overflow: hidden;
        .float-left{
            width: 300px;
            float: left;
            h1{
                border-bottom: 1px solid #ccc;
                padding: 20px 0;
                margin-bottom: 20px;
            }
            .ershouhouse{
                margin-bottom: 20px;
                a{
                    display: inline-block;
                    margin:8px 0;
                    font-size: 14px;
                    width: 100px;
                }
                a:hover{
                 color: #c30d23;
                                 }
            }
        }
        .float-right{
            float: left;
            width: 700px;
            margin-left: 100px;
            h1{
                border-bottom: 1px solid #ccc;
                padding: 20px 0;
                margin-bottom: 20px;
            }
            ul{
                li{
                    display: inline-block;
                    img{
                        float: left;
                        width: 280px;
                        height: 210px;
                        margin: 20px 20px 20px 0;
                        cursor: pointer;
                    }
                    .li-right{
                        float: left;
                        margin-top: 20px;
                        width: 390px;
                        p{
                            margin-bottom: 20px;
                        }
                    }
                    .li-right p:first-child{
                        font-size: 20px;
                        color: #333;
                        cursor: pointer;
                    }
                    .li-right p:nth-child(2){
                        font-size: 14px;
                    }
                    .li-right p:nth-child(3){
                        font-size: 14px;
                        color: #999;
                    }
                }
            }
        }
    }
</style>