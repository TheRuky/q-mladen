<template>
  <div>
    <p>Rendering post with id: {{ id }}</p>
    <Article v-if="post" :post="post" :comments="comments"></Article>
  </div>
</template>

<script setup lang="ts">
import Article  from '@/components/Article.vue';
import { Post } from "@/interfaces/post";
import { Comment } from "@/interfaces/comment";
import { ref } from "@vue/reactivity";
import { onBeforeMount } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { getComments, getPost } from "@/services/posts.service";

const route = useRoute();
const id: string = route.params.id as string;
const post = ref<Post | null>(null);
const comments = ref<Comment[]>([]);

onBeforeMount(async () => {
  const [postData, commentData] = await Promise.all([
    getPost(id),
    getComments(id),
  ]);

  post.value = postData;
  comments.value = commentData;
});
</script>
