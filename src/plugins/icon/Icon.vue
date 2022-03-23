<template>
    <component
        :is="iconName"
        :class="{ loading: props.name == 'loading' }"
        :width="size"
        :height="size"
    ></component>
</template>
<style scoped lang="less">
svg {
    overflow: hidden;
    display: inline-block;
    &.loading {
        position: static;
        margin: 0 0.5em;
        will-change: transform;
        animation: loadingCircle 1s infinite steps(60);
    }
}
@keyframes loadingCircle {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
<script setup lang="ts">
import { icons } from '@/plugins/icon';
import {
    ref,
    computed,
    useSlots,
    useAttrs,
    onMounted,
    watch,
    toRefs,
} from 'vue';
// props
const props = withDefaults(
    defineProps<{
        name: string;
        color?: string;
        size?: string | number;
    }>(),
    {
        size: '1em',
    }
);
const iconSize = computed(() => {
    return typeof props.size === 'number' ? props.size + 'px' : props.size;
});
// 图标名称
const iconName: any = computed(() => {
    return 'icon-' + props.name;
});
// 图标样式
const style: any = computed(() => {
    return {
        fontSize: iconSize.value,
        '--fill-color': props.color || '',
        color: props.color || '',
    };
});
onMounted(() => {
    if(icons.indexOf(props.name) === -1) console.warn(props.name + '.svg not found!!')
})
</script>
