<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
    defineProps<{
        color?: string;
        size?: string | number;
    }>(),
    {
        size: '1em',
        color: ''
    }
);

const lock = ref(false);
</script>
<template>
    <input type="checkbox" id="lock" v-model="lock" class="implicit"/>
    <label for="lock" class="active lock">
        <Icon name="lock-unlock" :size="size" :color="color" />
    </label>
</template>

<style lang="less">
@keyframes toLock {
    from {
        transform: translate(0, 0px);
    }
    to {
        transform: translate(0, 3px);
    }
}
@keyframes toUnLock {
    from {
        transform: translate(0, 3px);
    }
    to {
        transform: translate(0, 0);
    }
}
[id=lock]:checked~.lock svg path {
    will-change: transform;
    animation: toLock .3s cubic-bezier(0.5, -0.5, 0.25, 2);
    animation-fill-mode : forwards ; 
}
[id=lock]~.lock svg path {
    will-change: transform;
    animation: toUnLock .3s cubic-bezier(0.5, -0.5, 0.25, 2);
    animation-fill-mode : forwards ; 
}
</style>