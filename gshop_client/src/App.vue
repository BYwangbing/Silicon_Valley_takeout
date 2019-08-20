<template>
    <div id="app">
        <router-view></router-view>
<!--        底部-->
        <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    </div>
</template>

<script>
    import FooterGuide from './components/FooterGuide/FooterGuide'
    import { mapActions } from 'vuex'
    export default {
        // created () {
        //     // 异步获取 address
        //     this.$store.dispatch('getAddress')
        // },
        mounted() {
            this.getAddress()
        },
        methods: {
            ...mapActions(['getAddress'])
        },
        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>
