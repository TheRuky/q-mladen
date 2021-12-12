<template>
  <div>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="'/posts/' + post.id">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import { getPosts } from '@/services/posts.service';
import { Post } from "@/interfaces/post";

const posts = ref<Post[]>([]);

onBeforeMount(async () => {
  posts.value = await getPosts();
});
</script>
