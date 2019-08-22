<template>
    <div class="msite">
        <!--首页头部-->
        <HeaderTop  :title="address.address">
            <router-link to="/search" slot="left" class="header_search">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
            <router-link :to="userInfo._id ? '/userInfo' : '/login'"  slot="right" class="header_login">
                <span class="header_login_text" v-if="!userInfo._id">
                    登录|注册
                </span>
                <span class="header_login_text" v-else>
                   <i class="iconfont icon-person"></i>
                </span>
            </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
            <div class="swiper-container" v-if="foodType.length">
                <div class="swiper-wrapper">
                    <!-- 第一层遍历二维数组 -->
                    <div class="swiper-slide" v-for="( foodType, index) in foodTypeArr" :key="index">
                        <!-- 第二层遍历，对二维数组中的一维数组遍历 -->
                        <a href="javascript:" class="link_to_food" v-for="(category, index) in  foodType" :key="index">
                            <div class="food_container">
                                <img :src="baseImageUrl + category.image_url" alt="">
                            </div>
                            <span>{{category.title}}</span>
                        </a>
                    </div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <img src="./images/home_back.svg" alt="home_back" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
            <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
            </div>
            <ShopList></ShopList>
        </div>
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import ShopList from '../../components/ShopList/ShopList'
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                baseImageUrl: 'https://fuss10.elemecdn.com'
            }
        },
        computed: {
            ...mapState(['address', 'foodType', 'userInfo']),
            // 根据foodType一维数组生成一个2维数组 小数组中的元素个数最大是8
            foodTypeArr() {
                // 解构赋值
                const { foodType } = this;
                // 准备空的2维数组
                const arr = [];
                // 准备一个小数组(最大长度为8)
                let minArr = [];
                foodType.forEach(c => {
                    // 如果当前小数组已经满了, 创建一个新的
                    if (minArr.length === 8) {
                        minArr = []
                    }
                    // 如果minArr是空的, 将小数组保存到大数组中
                    if (minArr.length === 0) {
                        arr.push(minArr)
                    }
                    // 将当前分类保存到小数组中
                    minArr.push(c)
                });
                return arr
            },
        },
        mounted() {
            this.$store.dispatch('getTypeList');
            this.$store.dispatch('getShops')
        },
        watch: {
            foodType(value) {
                // foodType数组中有数据了, 在异步更新界面之前执行
                // 使用setTimeout可以实现效果, 但不是太好
                // setTimeout(() => {
                //     //创建一个Swiper实例对象，实现轮播
                //     new Swiper(".swiper-container", {
                //         loop: true, // 循环模式选项,可以循环轮播
                //         // 如果需要分页器
                //         pagination: {
                //             el: ".swiper-pagination"
                //         }
                //     });
                // }, 100);

                // 界面更新就立即创建Swiper对象
                this.$nextTick(() => {
                    //创建一个Swiper实例对象，实现轮播
                    new Swiper(".swiper-container", {
                        loop: true, // 循环模式选项,可以循环轮播
                        // 如果需要分页器
                        pagination: {
                            el: ".swiper-pagination"
                        }
                    });
                })
            }
        },
        components: {
            HeaderTop,
            ShopList
        },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite  //首页
        width 100%
        overflow hidden
        /*首页导航*/
        .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
                width 100%
                height 100%
                .swiper-wrapper
                    width 100%
                    height 100%
                    .swiper-slide
                        display flex
                        justify-content center
                        align-items flex-start
                        flex-wrap wrap
                        .link_to_food
                            width 25%
                            .food_container
                                display block
                                width 100%
                                text-align center
                                padding-bottom 10px
                                font-size 0
                                img
                                    display inline-block
                                    width 50px
                                    height 50px
                            span
                                display block
                                width 100%
                                text-align center
                                font-size 13px
                                color #666
                .swiper-pagination
                    >span.swiper-pagination-bullet-active
                            background #02a774
        /*首页附近商家*/
        .msite_shop_list
             top-border-1px(#e4e4e4)
             margin-top 10px
             background #fff
             .shop_header
                padding 10px 10px 0
                .shop_icon
                    margin-left 5px
                    color #999
                .shop_header_title
                    color #999
                    font-size 14px
                    line-height 20px

</style>
