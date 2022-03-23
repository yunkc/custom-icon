<script setup lang="ts">
import { ref } from 'vue';
import Bannner from './layers/Banner.vue';
import Search from './layers/Search.vue';
import IconList from './layers/IconList.vue';

const keyword = ref('');

const onSearch = (key:string)=>{
    keyword.value = key;
}
</script>

<template>
    <main>
        <bannner></bannner>

        <search @change="onSearch"></search>

        <icon-list :keyword="keyword"></icon-list>
    </main>
</template>

<style lang="less">
main {
    padding: var(--page-header-height) 0 0;
    margin: 0 var(--page-padding);
}
</style>