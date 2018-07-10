<template>
    <div v-trans>
        <div class="head">
            <slot>
            </slot>
        </div>
        <div class="middle">
            <div class="hig" id="hig">
                <slot name="middle">
                </slot>
            </div>
        </div>
        <div class="foot">
            <slot name="foot">
            </slot>
        </div>
        <div class="form-bottomm">
            <span v-show="!isshow" id="btn1" @click = handle(true)>更多选项 <i class="iconfont icon-jiantou1"></i> </span>
            <span v-show="isshow" id="btn2"  @click = handle(false)>收起选项 <i class="iconfont icon-jiantou1"></i> </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-box",
        data() {
            return {
                isshow: false
            }
        },
        directives: {
            trans: {
                inserted(el, biding, vnode) {
                    let btn1 = el.querySelector('#btn1')
                    let btn2 = el.querySelector('#btn2')
                    let middle = el.querySelector('#hig')
                    btn1.onclick = function () {
                        middle.style.height = 'auto'
                        let targetHeight = getComputedStyle(middle).height;
                        middle.style.height = 0;
                        middle.offsetHeight;
                        middle.style.height = targetHeight;
                    }
                    btn2.onclick = function () {
                        middle.style.height = 0;
                    }
                }
            }
        },
        methods: {
            handle(a) {
               this.isshow = a
            }
        },

    }
</script>

<style scoped lang="less">
    .middle {
        .hig {
            height: 0;
            overflow: hidden;
            transition: height ease 0.5s;
        }
    }

    .form-bottom {
        margin-bottom: 40px;
        span {
            margin-right: 20px;
        }
        :last-child {
            img {
                vertical-align: middle;
            }
            cursor: pointer;
            font-size: 14px;
        }
    }

    .form-bottomm {
        text-align: center;
        color: #ccc;
        cursor: pointer;
        margin-bottom: 40px;
    }


</style>