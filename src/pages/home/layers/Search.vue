<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import { icons } from '@/plugins/icon';
const emit = defineEmits(['change', ]);
const scroll = inject('scroll');

const placeholder = `Search ${icons.length} icons (Press "/" to focus)`;
const search = ref<HTMLInputElement>(null!);
const style = ref('')

onMounted(() => {
    // 快捷检索
    document.onkeyup = function (evt: KeyboardEvent) {
        if (evt.key === '/' &&  search.value !== document.activeElement) {
            evt.preventDefault();
            search.value && search.value.focus();
        }
    };
});

const onInput = (evt:Event)=>{
    const {value} = evt.target as HTMLInputElement;
    emit('change', value);
}
</script>

<template>
    <div class="search" :data-style="style">
        <icon class="icon-search" name="search" size="20" />
        <input ref="search" type="search" :placeholder="placeholder" value="" @input="onInput"/>
    </div>
</template>

<script lang="ts">
export default {
    watch:{
        scroll(val:any, old:any){
            const search = (this as any).search;
            const num:number = search.getBoundingClientRect().top;
            if(num<60) {
                (this as any).style = 'indent';
            }
            else {
                (this as any).style = ''
            }
        }
    },
}
</script>

<style lang="less">
.search {
    display: flex;
    position: sticky;
    top: 0.76rem;
    z-index: 6;
    transition: padding-left 0.15s ease-out;
    .icon,
    svg {
        position: absolute;
        margin: 10px;
    }
    input {
        box-sizing: border-box;
        flex: 1;
        outline: transparent solid 2px;
        appearance: none;
        padding: 0 1rem 0 2.5rem;
        height: 2.5rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--color-border);
        background-color: var(--color-input-background);
        
        transition: background-color 0.1s ease-out, color 0.1s ease-out,
            border-color 0.1s ease-out, box-shadow 0.35s ease-out;
        &:hover {
            border-color: var(--color-border-hover);
            background-color: var(--color-input-background-hover);
        }
        &:focus {
            border-color: var(--color-active);
            box-shadow: var(--color-active) 0px 0px 0px 1px;
        }
    }
    &[data-style="indent"] {
        padding-left: 3.75rem;
        @media (max-width: 32em) {
            padding-left: 3.5rem;
        }
    }
}
</style>
