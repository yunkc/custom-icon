<script setup lang="ts">
import PageHeader from './pages/Header.vue';
import PageBody from './pages/home/index.vue';
import PageFooter from './pages/Footer.vue';
</script>

<template>
    <page-header></page-header>

    <page-body></page-body>

    <page-footer></page-footer>
</template>

<style lang="less">
@import './assets/style/base.less';
</style>

<script lang="ts">
import { computed } from 'vue';
export default {
    data () {
        return {
            scroll: 0,
            bh: 300
        }
    },
    provide() {
        return {
            scroll: computed(() => this.scroll),
            bh: computed(() => this.bh),
        }
    },
    mounted() {
        const sh: number =
            document.documentElement.scrollHeight - window.innerHeight;
        const se: HTMLElement = document.body;
        let tk: number = 0;
        this.bh = (document.querySelector('.intro')! as HTMLElement).offsetHeight * .6;
        // 稀疏
        document.addEventListener('scroll', () => {
            tk && cancelAnimationFrame(tk);
            tk = requestAnimationFrame(() => {
                this.scroll = window.scrollY;
            });
        });
    },
};
</script>
