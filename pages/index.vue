<template>
    <div>
        <header>
            <header1></header1>
        </header>
            <div class="banner" v-banner style="overflow: hidden;">
                <div v-swiper:mySwiper="swiperOption"  id="banner" >
                    <div class="swiper-wrapper" style="height: 100%;">
                        <div class="swiper-slide"style="height: 100%;overflow: hidden;" v-for="banner in banners">
                            <img :src="'http://www.fooju.cn/'+banner.picurl" class="my-pic">
                        </div>
                    </div>
                </div>
                <div class="search">
                    <div class="neirong">
                        <div class="navgite">
                            <span @click="click(1)" :class="index==1?'active':''">找二手房</span>
                            <span @click="click(2)" :class="index==2?'active':''">找新房</span>
                            <span @click="click(3)" :class="index==3?'active':''">找租房</span>
                            <span @click="click(4)" :class="index==4?'active':''">找学区房</span>
                            <span @click="click(5)" :class="index==5?'active':''">找小区</span>
                        </div>
                        <div class="input">
                            <input type="text" :placeholder='holder'>
                            <span class="kuer">搜索</span>
                            <span class="kuer kuai" v-show="index<=3"><i class="iconfont icon-04f"></i>地图找房</span>
                        </div>
                        <div class="slow">
                            <img src="../assets/img/fujuslow.png">
                            <div class="slow-box" id="slow" v-for="(item,index) in product" v-if="index<1">
                                <span>{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="containe">
            <div class="conent">
                <a href="*" class="conent1">
                    <img src="../assets/img/store.png">
                    <p>查门店</p>
                    <p>查优质门店</p>
                </a>
                <a href="*" class="conent1">
                    <img src="../assets/img/entrust.png">
                    <p>在线委托</p>
                    <p>有问题我们帮你</p>
                </a>
                <a href="*" class="conent1">
                    <img src="../assets/img/mapBlue.png">
                    <p>地图找房</p>
                    <p>地图找房</p>
                </a>
                <a href="*" class="conent1">
                    <img src="../assets/img/encyclopedias.png">
                    <p>福居百科</p>
                    <p>看百科了解更多</p>
                </a>
            </div>
            <div class="conentdown">
                <a href="*" class="cont">
                    <img src="../assets/img/3.png">
                    <p>真房源，假一赔百</p>
                </a>
                <a href="*" class="cont2">
                    <img src="../assets/img/2.png">
                    <p>青城率先取消二手房贷款高额代办费</p>
                </a>
                <a href="*" class="cont3">
                    <img src="../assets/img/1.png">
                    <p>六大安全保障</p>
                </a>
            </div>
            <div class="newhouse">
                <div class="morehouse">
                    <h1>精品新房</h1>
                    <span>更多新房<i class="iconfont icon-jiantou"></i></span>
                </div>
                <p>在这里为您寻觅一个新家</p>
                <div class="pic">
                    <div class="picture" v-for="(item,index) in productData.new" v-if="index<3">
                        <div class="img-wrap"><a href="#"><img :src="'http://www.fooju.cn/'+item.pic"></a></div>
                        <p>{{item.title}}<span>{{item.average_price}}元/平</span></p>
                    </div>
                    <!--<div class="picture">-->
                        <!--<div class="img-wrap"><a href="#"><img src="../assets/img/newhouse2.jpg"></a></div>-->
                        <!--<p>盛世国际<span>8800元/平</span></p>-->
                    <!--</div>-->
                    <!--<div class="picture">-->
                        <!--<div class="img-wrap"><a href="#"><img src="../assets/img/newhouse3.jpg"></a></div>-->
                        <!--<p>荷塘月色<span>8500元/平</span></p>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="newhouse">
                <div class="morehouse">
                    <h1>二手优品</h1>
                    <span>更多二手房<i class="iconfont icon-jiantou"></i></span>
                </div>
                <p>生活因为宽广，才会不断延伸</p>
                <div class="pic">
                    <div class="picture" v-for="(item,index) in productData.used" v-if="index<3">
                        <div class="img-wrap"><nuxt-link :to="{name:'secondhand-detil',params:{id:item.id}}">
                            <img :src="'http://www.fooju.cn/'+item.pic">
                        </nuxt-link></div>
                        <h5>{{item.title}}</h5>
                        <h6>{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫 {{item.built_area}}㎡</h6>
                    </div>
                    <!--<div class="picture">-->
                        <!--<div class="img-wrap"><a href="#"><img src="../assets/img/er2.png"></a></div>-->
                        <!--<h5>御景园北区 出售</h5>-->
                        <!--<h6>2室2厅1卫 112.00㎡ </h6>-->
                    <!--</div>-->
                    <!--<div class="picture">-->
                        <!--<div class="img-wrap"><a href="#"><img src="../assets/img/er3.png"></a></div>-->
                        <!--<h5>审计厅家属楼 不唯一</h5>-->
                        <!--<h6>2室1厅1卫 61.00㎡</h6>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="newhouse">
                <div class="morehouse">
                    <h1>精品租房</h1>
                    <span>更多租房<i class="iconfont icon-jiantou"></i></span>
                </div>
                <p>与其坐等，不如坐享繁华</p>
                <div class="pic">
                    <div class="picture" v-for="(item,index) in productData.retal" v-if="index<3">
                        <div class="img-wrap"><a href="#"><img :src="'http://www.fooju.cn/'+item.pic"></a></div>
                        <h5>{{item.title}}</h5>
                        <h6>{{item.bedroom}}室{{item.livingroom}}厅{{item.wc}}卫 {{item.built_area}}㎡
                            <div class="price">{{item.rent}}元/月</div>
                        </h6>
                    </div>
                    <!--<div class="picture">-->
                        <!--<div class="img-wrap"><a href="#"><img src="../assets/img/pin2.png"></a></div>-->
                        <!--<h5>学府花园精装 出售</h5>-->
                        <!--<h6>3室22厅2卫 148.00㎡-->
                            <!--<div class="price">2500元/月</div>-->
                        <!--</h6>-->
                    <!--</div>-->
                    <!--<div class="picture">-->
                        <!--<div class="img-wrap"><a href="#"><img src="../assets/img/pin3.png"></a></div>-->
                        <!--<h5>京能蓝色理想 精装修</h5>-->
                        <!--<h6>2室2厅1卫 97.00㎡-->
                            <!--<div class="price">2600元/月</div>-->
                        <!--</h6>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
        <rightBox></rightBox>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import axios from '~/plugins/axios'
    import header1 from '~/components/header1.vue'
    import MyFooter from '~/components/Footer.vue'
    import rightBox from '~/components/rightbox.vue'
    import api from '~/myApi'
    export default {
        components: {
            header1,
            MyFooter,
            rightBox
        },
        async asyncData() {
            let bannerData = await axios.get(api.paramToUrl(api.adLists,{type: 0,position:0}))
            let  productData = await axios.get(api.paramToUrl(api.productRecommend, {plat:2,page_num:1,page_size: 3}))
            let  product = await axios.get(api.paramToUrl(api.encyTop, {page_num:0,page_size:10}))

            return {
                banners:bannerData.data.data,
                productData:productData.data,
                product:product.data.datas[0]
            }
        },
        head() {
            return {
                title: 'Users'
            }
        },
        data() {
            return {
                swiperOption: {
                    autoplay: true
                },
                holder: '输入小区名查找二手房',
                index: 1,
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
                        let imgArr = el.querySelectorAll('.my-pic');
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
        },
        methods: {
            click(a) {
                this.index = a
                switch (a) {
                    case 1:
                        this.holder = '输入小区名查找二手房'
                        break
                    case 2:
                        this.holder = '输入楼盘名进行搜索'
                        break
                    case 3:
                        this.holder = '输入小区名可以查找出租的房屋'
                        break
                    case 4:
                        this.holder = '输入小区名搜索学区房'
                        break
                    default:
                        this.holder = '找小区要输入小区名'
                        break
                }
            },
        }
    }
</script>
<style scoped lang="less">
    .banner {
        position: relative;
        margin-bottom: 20px;
    }
    .banner .search {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 99;
    }
    .banner .search .neirong {
        position: absolute;
        bottom: 5%;
        left: 15%;
        .navgite {
            color: white;
            font-size: 16px;
            span {
                display: inline-block;
                padding: 10px 10px;
                height: 26px;
                position: relative;
            }
            span:hover {
                font-weight: 800;
                cursor: pointer;
            }
            span.active {
                font-weight: 800;
            }
            span.active:after {
                content: '';
                width: 0;
                height: 0;
                border: 10px solid transparent;
                border-bottom-color: white;
                position: absolute;
                bottom: -2px;
                left: 50%;
                transform: translate(-50%, 0);
                /*z-index: 9999;*/
            }
        }
        .input {
            input {
                height: 50px;
                width: 500px;
                /*border-radius-top-left: 5px;*/
                /*border-radius-bottom-left: 5px;*/
            }
            .kuer {
                color: white;
                display: inline-block;
                width: 150px;
                height: 54px;
                text-align: center;
                background-color: #c90000;
                vertical-align: top;
                line-height: 54px;
                margin-right: 10px;
                cursor: pointer;
            }
            .kuai {
                background-color: purple;
            }
        }
        .slow {
            margin-top: 100px;
            .slow-box {
                display: inline-block;
                height: 30px;
                vertical-align: top;
                padding-left: 10px;
                overflow: hidden;
                span {
                    color: white;
                    display: block;
                    height: 30px;
                    line-height: 30px;
                }
            }
        }
    }
    .containe {
        width: 1100px;
        margin: 0 auto;
    }
    .conent {
        overflow: hidden;
        .conent1 {
            float: left;
            margin: 0 80px;
        }
    }
    .conentdown {
        margin: 30px 0;
        overflow: hidden;
        text-align: center;
        .cont, .cont2 {
            float: left;
            position: relative;
            margin-right: 95px;
            p {
                position: absolute;
                top: 150px;
                left: 0;
                right: 0;
                margin: auto;
                color: white;
                font-size: 25px;
                z-index: 1;
            }
        }
        .cont3 {
            float: right;
            position: relative;
            p {
                position: absolute;
                top: 150px;
                left: 0;
                right: 0;
                margin: auto;
                color: white;
                font-size: 25px;
                z-index: 1;
            }
        }
    }
    .newhouse {
        margin-bottom: 30px;
        p {
            text-align: left;
            margin: 5px 0;
        }
        .morehouse {
            overflow: hidden;
            h1 {
                float: left;
            }
            span {
                float: right;
            }
        }
        .picture {
            position: relative;
            display: inline-block;
            h5 {
                text-align: left;
                font-weight: 500;
                margin: 5px 0;
            }
            h6 {
                text-align: left;
                font-weight: 500;
                color: #777;
                .price {
                    float: right;
                    color: rgb(195, 13, 35);
                }
            }
            p {
                position: absolute;
                bottom: 5px;
                left: 5px;
                color: white;
                width: 330px;
                span {
                    float: right;
                }
            }
            .img-wrap {
                width: 342px;
                height: 257px;
                overflow: hidden;
                a img {
                    width: 100%;
                    height: 100%;
                }
                :hover {
                    transform: scale(1.1);
                    transition-duration: 0.5s;
                }
            }
        }
        .pic .picture:nth-child(2) {
            margin: 0 37px;
        }
    }
</style>
