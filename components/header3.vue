<template>
    <div class="header1">
        <div class="daohang">
            <div class="daohangleft">
                <nuxt-link to="#"><img src="../assets/img/logo.png"></nuxt-link>
                <span class="input" @click="show = true">
                    <span>{{value}}</span>
                    <i class="iconfont icon-jiantou1"></i>
                </span>
            </div>
            <div class="daohangright">
                <a href="*" class="active">在售</a>
                <a href="secondhead" target="_blank">小区</a>
                <a href="*">地图找房</a>
                <a href="*">计算器</a>
                <a href="*">去估价</a>
            </div>
        </div>
        <div class="quxian" v-show="show" @click="show = false">
            <ul @click.stop="show = true">
                <h3 class="item-qu">选择区县</h3>
                <li class="item-shi">呼和浩特</li>
                <li @click="change(0)"><span>H</span>回民区</li>
                <li @click="change(1)"><span>J</span>金桥开发区</li>
                <li @click="change(2)"><span>R</span>如意开发区</li>
                <li @click="change(3)"><span>S</span>赛罕区</li>
                <li @click="change(4)"><span>X</span>新城区</li>
                <li @click="change(5)"><span>Y</span>玉泉区</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header3",
        data(){
            return{
                show:false,
                value:'呼和浩特市',
                index:0
            }
        },
        methods:{
            change(e){
                this.index=e
                switch (e) {
                    case 0:
                        this.value='回民区'
                        break
                    case 1:
                        this.value='金桥开发区'
                        break
                    case 2:
                        this.value='如意开发区'
                        break
                    case 3:
                        this.value='赛罕区'
                        break
                    case 4:
                        this.value='新城区'
                        break
                    default:
                        this.value='玉泉区'
                        break
                }
            }

        },
        mounted() {

        }
    }

</script>

<style scoped lang="less">
    .header1{
        width:1100px;
        height: 100px;
        margin: 0 auto;
    }
    .daohang{
        height: 80px;
        float: left;
    }
    .daohangleft{
        float: left;
        line-height: 60px;
        a img{
            vertical-align: middle;
        }
        .input {
            display: inline-block;
            border: 1px solid #777;
            border-radius: 15px;
            padding: 4px 10px;
            margin-left: 10px;
            vertical-align: middle;
            height: 20px;
            line-height: 20px;
        }
    }
    .daohangright{
        float: right;
        padding-top: 20px;
        padding-left: 80px;
        .weituo{
            /*display: flex;*/
            display: none;
        }
        a{
            text-decoration: none;
            margin:14px;
            padding-bottom:42px;
        }:hover{
             color: red;
         }
    }
    .quxian{
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0,0,0,.3);
        ul{
            position: fixed;
            top: 0;
            left:0;
            right: 0;
            bottom: 0;
            margin:auto;
            width: 600px;
            height: 270px;
            background-color: white;
            padding: 30px 30px 30px;
            .item-qu{
                border-bottom: 1px solid #aaa;
                padding-bottom: 10px;
            }
            .item-shi{
                padding: 20px 0 20px 0;
            }
            li{
                padding: 3px 0;
                span{
                    margin-right: 5px;
                    color: #7f828b;
                }
            }
        }
        li:hover{
            color: red;
            cursor: pointer;
        }
    }

</style>
