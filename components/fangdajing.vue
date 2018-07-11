<template>
    <div class="img-container" v-scale>
        <div class="smallImg _left-box">
            <img src="../assets/img/二手1.png">
            <div class="scale _scale"></div>
        </div>
        <div class="bigImg _right-box">
            <img src="../assets/img/二手1.png" class="_right-pic">
        </div>
    </div>
</template>

<script>
    export default {
        name: "fangdajing",
        directives: {
            scale: {
                inserted(el, binding, vnode) {
                    let leftBox = el.querySelector("._left-box");
                    let scale = el.querySelector("._scale");
                    let rightBox = el.querySelector("._right-box");
                    let rightPic = el.querySelector("._right-pic");
                    let mouseX = 0
                    let mouseY = 0
                    rightBox.style.display = "none"
                    function mouseIn(ev) {
                        scale.style.display = "block";
                        leftBox.addEventListener("mousemove", mouseMove);
                        leftBox.addEventListener("mouseleave", mouseOut);
                        rightBox.style.display = "block"
                    }

                    el._mouseIn = mouseIn;

                    function mouseMove(ev) {
                        ev = ev || event;
                        mouseX = ev.clientX - el.offsetLeft;
                        mouseY = ev.clientY - el.offsetTop;
                        let scaleLeft = 0;
                        let scaleTop = 0;
                        if (mouseX > leftBox.offsetWidth - scale.offsetWidth / 2) {
                            scaleLeft = leftBox.offsetWidth - scale.offsetWidth;
                            scale.style.left = scaleLeft + "px";
                        }
                        else if (mouseX < scale.offsetWidth / 2) {
                            scaleLeft = 0;
                            scale.style.left = 0;
                        }
                        else {
                            scaleLeft = mouseX - scale.offsetWidth / 2;
                            scale.style.left = scaleLeft + 'px';
                        }
                        if (mouseY > leftBox.offsetHeight - scale.offsetHeight / 2) {
                            scaleTop = leftBox.offsetHeight - scale.offsetHeight;
                            scale.style.top = scaleTop + 'px';
                        }
                        else if (mouseY < scale.offsetHeight / 2) {
                            scaleTop = 0;
                            scale.style.top = scaleTop + 'px';
                        }
                        else {
                            scaleTop = mouseY - scale.offsetHeight / 2;
                            scale.style.top = scaleTop + 'px';
                        }
                        rightPic.style.transform = `translate(${-scaleLeft * 2.5}px,${-scaleTop * 2.5}px)`

                    }

                    function mouseOut() {
                        scale.style.display = "none";
                        rightBox.style.display = "none"
                        leftBox.removeEventListener("mousemove", mouseMove);
                    }

                    leftBox.addEventListener("mouseenter", mouseIn)
                },
                unbind(el) {
                    let leftBox = el.querySelector("._left-box");
                    leftBox.removeEventListener("mouseenter", el._mouseIn)
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .img-container {
        width: 1100px;
        margin: 0 auto;
        position: relative;
        min-height: 100vh;
        .smallImg {
            position: absolute;
            left: 0px;
            top: 50px;
            width: 592px;
            height: 442px;
            img {
                display: block;
                width: 592px;
                height: 442px;
            }
            .scale {
                position: absolute;
                left: 0px;
                top: 0;
                width: 237px;
                height: 217px;
                background: rgba(0, 0, 0, .3);
            }
        }
        .bigImg {
            overflow: hidden;
            position: absolute;
            left: 600px;
            top: 50px;
            width: 592px;
            height: 542px;
            border: 1px solid #000;
            img {
                display: block;
                width: 1480px;
                height: 1105px;
                transform: translate(0, 0);
            }
        }
    }

</style>