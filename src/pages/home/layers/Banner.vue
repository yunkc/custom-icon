<script setup lang="ts">
</script>

<template>
    <div class="intro">
        <h1>Simple use of custom icons in your project.</h1>
        <p>
            Open-source project and some refined icons.<br/>
            We need to simple use icons, while keeping it nice-looking, so make this -  <a href="https://github.com/yunkc" target="_black">join us!</a>
        </p>
        <div class="flex" >
            <a class="btn" href="#" mark="批量微调工具待开发..">
                <icon name="custom" size="24"/>
                <span>Finetune</span>
            </a>
            <a class="btn" href="https://github.com/yunkc/custom-icon" target="_black">
                <icon name="github" size="24"/>
                <span>Github</span>
            </a>
        </div>
    </div>
</template>

<style lang="less">
.intro{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    text-align: center;
    font-size: 1.25em;
    p {
        margin: 0 0 3rem 0;
    }
    .flex {
        display: flex;
        justify-content: center;
        margin-bottom: 3rem;
        .btn {
            border: none;
            cursor: pointer;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            outline: transparent;
            padding: .5em 1.25rem;
            text-decoration: none;
            white-space: nowrap;
            font-weight: 500;
            border-radius: var(--border-radius);
            color: var(--color-text-dark);
            background: var(--color-button-background);
            transition: background-color .1s ease-out,color .1s ease-out;
            user-select: none;
            &:hover {
                background: var(--color-button-background-hover);
            }
            &:active {
                background: var(--color-button-background-active);
            }
            &:last-of-type {
                margin-left: 1rem
            }
            &>:first-child:not(last-of-type){
                margin-right: .5rem;
            }

        }
    }
}
</style>