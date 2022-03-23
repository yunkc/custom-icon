<script setup lang="ts">
import { Btn } from '@/components/';
</script>

<template>
    <div v-if="lists.length" class="icon-list">
        <btn v-for="item in lists" :icon="item" @click="copyIconCode(item)">{{
            item
        }}</btn>
    </div>
    <h3 class="not-found" v-else>No results found for “{{keyword}}”</h3>
</template>

<script lang="ts">
import { icons } from '@/plugins/icon';
export default {
    props: {
        keyword: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            lists: [] as string[],
        };
    },
    created () {
        (this as any).lists = icons;
    },
    methods: {
        copyIconCode(name: string) {
            if (name) {
                const code: string = `<Icon name="${name}" size="16" />`;
                const copy: HTMLInputElement = document.createElement('input');
                copy.setAttribute('readonly', 'readonly');
                copy.setAttribute('value', code);
                document.body.appendChild(copy);
                copy.select();
                document.execCommand('copy');
                document.body.removeChild(copy);
                (this as any).$msg({ text: code + ' is copy!', type: 'success' });
            }
        },
    },
    watch: {
        keyword: {
            handler(val: any, old: any) {
                (this as any).lists = icons.filter((item) => item.indexOf(val) !== -1);
            },
        },
    },
};
</script>

<style lang="less">
.icon-list {
    margin: 1.25rem 0 1.25rem 0;
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    input {
        position: absolute;
        width: 100%;
        // opacity: 0;
    }
}
h3.not-found {
    text-align: center;
    padding: 5rem 0;
}
</style>
