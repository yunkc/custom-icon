<template>
    <transition name="slid">
        <div class="msg" v-if="show">
            <svg t="1647527600267" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4121" xmlns:xlink="http://www.w3.org/1999/xlink" width="1em" height="1em" data-v-45c6bb92="" data-v-5a8dd545=""><defs></defs><path d="M512 76.8c-236.8 0-435.2 192-435.2 435.2s192 435.2 435.2 435.2 435.2-192 435.2-435.2S748.8 76.8 512 76.8z m249.6 320L480 704c-12.8 12.8-38.4 12.8-51.2 0L288 556.8c-12.8-12.8-12.8-38.4 0-51.2 12.8-12.8 38.4-12.8 51.2 0l115.2 115.2L704 339.2c12.8-12.8 38.4-12.8 51.2 0 25.6 12.8 25.6 38.4 6.4 57.6z" fill="#68D279" p-id="4122"></path><path d="M710.4 339.2l-256 281.6-115.2-115.2c-12.8-12.8-38.4-12.8-51.2 0-12.8 12.8-12.8 38.4 0 51.2l147.2 140.8c12.8 12.8 38.4 12.8 51.2 0L768 390.4c12.8-12.8 12.8-38.4 0-51.2-19.2-12.8-44.8-12.8-57.6 0z" fill="#FFFFFF" p-id="4123"></path></svg>
            <span>{{text}}</span>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
    type?: 'info' | 'warning' | 'error' | 'success';
    text?: string;
}
const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    text: ''
});

const show = ref(false)

onMounted(()=>{
    show.value = true;
})
</script>

<style scoped lang="less">
.slid{
    &-enter{
        &-from {
            transform: translateY(-4.5rem);
            opacity: 0;
        }
        &-active {
            transition: all .25s;
        }
        &-to {
            transform: none;
            opacity: 1;
        }
    }
}
.msg {
    position: fixed;
    top: 4.5rem;
    left: 1rem;
    right: 1rem;
    z-index: 8088;
    margin: 0 auto;
    max-width: 32rem;
    min-height: 50px;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    color: var(--color-text);
    background: var(--color-background-light);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    * {
        vertical-align: middle;
    }
    svg{
        margin-right: .75rem;
    }
}
</style>