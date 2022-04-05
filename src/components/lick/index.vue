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

const like = ref(false);

// mark：增加比较舒适的点赞和狂赞动画..
</script>
<template>
    <input type="checkbox" id="like" v-model="like" class="implicit"/>
    <label for="like" class="active">
        <Icon v-if="like" name="like" :size="size" :color="color" />
        <Icon v-else name="like2" :size="size" />
    </label>
</template>