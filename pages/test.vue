<template>
    <div>
        <!--<header>-->
            <!--<header2></header2>-->
        <!--</header>-->
        <!--<div class="banner" v-banner style="overflow: hidden;">-->
            <!--<div v-swiper:mySwiper="swiperOption"  id="banner" >-->
                <!--<div class="swiper-wrapper" style="height: 100%;">-->
                    <!--<div class="swiper-slide"style="height: 100%;overflow: hidden;">-->
                        <!--<img src="../assets/img/lunbo.jpg" class="my-pic">-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<rightBox></rightBox>-->
        <my-box>
            <template>
                <div>
                    <div class="form">
                        <span class="span">区域</span>
                        <div class="form1">
                            <el-checkbox>不限</el-checkbox>
                            <el-checkbox>金桥开发区</el-checkbox>
                            <el-checkbox>如意开发区</el-checkbox>
                            <el-checkbox>玉泉区</el-checkbox>
                            <el-checkbox>回民区</el-checkbox>
                            <el-checkbox>赛罕区</el-checkbox>
                            <el-checkbox>新城区</el-checkbox>
                        </div>
                    </div>
                    <div class="form ">
                        <span class="span">价格</span>
                        <el-checkbox-group class="form1" v-model="formData.totalprice">
                            <el-checkbox v-for="item in price" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
                            <span><input type="text"></span>
                            <span>-</span>
                            <span><input type="text"></span>
                            <span>万</span>
                            <span><button>确定</button></span>
                        </el-checkbox-group>
                    </div>
                    <div class="form ">
                        <span class="span">户型</span>
                        <el-checkbox-group class="form1" v-model="formData.hhouse">
                            <el-checkbox v-for="item in house" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                </div>
            </template>
            <template slot="middle">
                <div class="form ">
                    <span class="span">类型</span>
                    <el-checkbox-group class="form1" v-model="formData.fenlei">
                        <el-checkbox v-for="item in leixing" :key="item.id" :label="item.id">{{item.title}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </template>
            <template slot="foot">
                <div class="form-bottom">
                    <span>筛选分类</span>
                    <span><img src="../assets/img/u2831.png"> 清除全部</span>
                </div>
            </template>
        </my-box>
    </div>
</template>

<script>

     import rightBox from '~/components/rightbox'
     import header2 from '~/components/header2'
     import myBox from '~/components/my-box'
    export default {
        name: "banner",
         components: {
            rightBox,
             header2,
             myBox
         },
        data() {
            return {
                swiperOption: {
                    autoplay: true
                },
                formData:{
                    totalprice: [],
                    hhouse:[],
                    fenlei:[],
                },
                price:[
                    {
                        title: "不限",
                        id: 0
                    },
                    {
                        title: "30万以下",
                        id: 1
                    },
                    {
                        title: "30-40万",
                        id: 2
                    },
                    {
                        title: "40-50万",
                        id: 3
                    },
                    {
                        title: "50万以上",
                        id: 4
                    }
                ],
                house:[
                    {title: "一室", id: 0},
                    {title: "两室", id: 1},
                    {title: "三室", id: 2},
                    {title: "四室", id: 3},
                    {title: "五室", id: 4}
                ],
                leixing:[{title: '平层', id: 0},
                    {title: '复式', id: 1},
                    {title: '跃层', id: 2}],
            }
        },
        directives: {
            banner: {
                inserted(el,binding,vnode) {
                    function setBannerHeight() {
                        let bannerHeight = (document.documentElement.clientHeight || document.body.clientHeight)- 100;
                        let bannerWidth = document.documentElement.clientWidth || document.body.clientWidth;
                        el.style.height = bannerHeight + 'px';

                        let bannerRate = bannerWidth/bannerHeight;
                        let imgArr = el.querySelectorAll('img');
                        imgArr.forEach(item => {
                            let imgHeight = item.offsetHeight;
                            let imgWidth = item.offsetWidth;
                            let imgRate = imgWidth/imgHeight;

                            if(bannerRate>imgRate){
                                item.style.width = bannerWidth + "px";
                                item.style.height = "auto";
                                item.style.marginTop = -(item.offsetHeight - bannerHeight)/2 + 'px';
                            }
                            else {
                                item.style.height = bannerHeight + "px";
                                item.style.width = "auto";
                                item.style.marginLeft = -(item.offsetWidth - bannerWidth)/2 + 'px';
                            }

                        })
                    }
                    setBannerHeight();
                    window.onresize = setBannerHeight
                }
                ,unbind(el) {
                    window.onresize = null;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .form{
      margin-bottom: 15px;
    .span{
        vertical-align: top;
    }
    .form1{
        display: inline-block;
        margin-left: 40px;
        width: 50%;
        text-align: left;
    span{
        color: #999;
        margin-right: 4px;
    input{
        width: 56px;
        height: 16px;
        color: #999;
        font-size: 14px;
        border: 1px solid #ccc;
        padding: 1px;
    }
    button{
        width: 55px;
        height: 25px;
        color: white;
        background-color: #c30d23;
        outline: none;
        border: none;
        margin-left: 10px;
    }
    }
    }
    }
</style>
