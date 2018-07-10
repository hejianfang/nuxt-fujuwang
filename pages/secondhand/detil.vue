<template>
    <div>
        <header>
            <header2></header2>
            <header3></header3>
        </header>
        <div class="secondHousing_content">
            <div class="clearfix top">
               <div class="left">
                   <a href="">福居网></a>
                   <a href="">二手房></a>
                   <!--<a href="">{{used_detail.jibenxinxi.title}}</a>-->
               </div>
                <div class="right">
                    <a href="">关注此房源</a>
                    <a href="">分享此房源</a>
                </div>
            </div>
            <div class="benefit">
                <h1>电建二公司 出售</h1>
                <!--<h1>{{used_detail.jibenxinxi.title}}</h1>-->
            </div>
        </div>
    </div>

</template>

<script>
    import header2 from '~/components/header2'
    import MyFooter from '~/components/Footer.vue'
    import header3 from '~/components/header3.vue'
    import axios from '~/plugins/axios'
    import api from '~/myApi'
    export default {
        name: "detil",
        components:{
            header2,  MyFooter,header3
        },
        async asyncData(context) {
            // let  used_detail = await axios.get(api.paramToUrl(api.used_detail,{id:context.params.id}))
            return {
                // used_detail:used_detail.data.data
            }
        },
        mounted(){
            // console.log(this.used_detail);
        }
    }
</script>

<style scoped lang="less">
.secondHousing_content{
    width: 1100px;
    margin: 0 auto;
    .clearfix{
        overflow: hidden;
        color: #999;
        a{
            color: #999;
            margin-right: 10px;
            font-size: 14px;
        }
        .left{
            float: left;
        }
        .right{
            float: right;
        }
    }
    .benefit{
        margin-top: 36px;
        h1{
            font-weight: 500;
        }
    }
}
</style>