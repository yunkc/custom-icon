<script setup lang="ts">
import { ref } from 'vue';
import Icon from "@/plugins/icon/Icon.vue";
import Lick from "@/components/lick/index.vue";
import Lock from "@/components/lock/index.vue";
import Live from "@/components/live/index.vue";
</script>

<template>
  <div class="intro">
    <h1>Simple use of custom icons in your project.</h1>
    <p>
      Open-source project and some refined icons.<br />
      We need to simple use svg icons, while keeping it nice-looking, so make this -
      <a href="https://github.com/yunkc/custom-icon" target="_black">git star!</a>
    </p>
    <div class="eg">
      <ul class="list">
        <li><p class="ttl">Sample:</p></li>
        <li><Icon name="emoji" color="#f60" size="1.25em" /></li>
        <li><Icon name="at-sign" size="24" /></li>
        <li><Icon name="google" size="1em" /></li>
        <li><Icon name="collect" size="1.2em" class="active"/></li>
        <li><Live size="48" color="red" /></li>
        <li><Lick size="24"/></li>
        <li><Icon name="loading" size="1.25em" color="lime" /></li>
        <li><Lock size="1.25em"/></li>
      </ul>
    </div>
    <div class="flex">
      <a class="btn" href="#" mark="批量微调工具待开发..">
        <icon name="custom" size="24" />
        <span>Finetune</span>
      </a>
      <a class="btn" href="https://github.com/yunkc/custom-icon" target="_black">
        <icon name="github" size="24" />
        <span>Github</span>
      </a>
    </div>
  </div>
</template>

<style lang="less">
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  text-align: center;
  font-size: 1.25em;
  p {
    margin: 0 0 1.25rem 0;
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
      padding: 0.5em 1.25rem;
      text-decoration: none;
      white-space: nowrap;
      font-weight: 500;
      border-radius: var(--border-radius);
      color: var(--color-text-dark);
      background: var(--color-button-background);
      transition: background-color 0.1s ease-out, color 0.1s ease-out;
      user-select: none;
      &:hover {
        background: var(--color-button-background-hover);
      }
      &:active {
        background: var(--color-button-background-active);
      }
      &:last-of-type {
        margin-left: 1rem;
      }
      & > :first-child:not(last-of-type) {
        margin-right: 0.5rem;
      }
    }
  }
  .eg {
    margin-bottom: 1.25rem;
    // * {display: flex;}
    ul.list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      li {
        display: flex;
        &:first-of-type {
          flex-basis: 100%;
        }
        &:not(:first-of-type) {
          min-width: 3rem;
          min-height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        p.ttl {
          color: #999;
          font-size: 0.8em;
          margin: 0;
          text-align: center;
          width: 100%;
        }
        .active{
          display: flex;
          cursor: pointer;
          * { pointer-events: none; }
          &:hover{
            color: #f60;
          }
          &:active{
            color: inherit;
          }
        }
      }
    }
  }
}

</style>
