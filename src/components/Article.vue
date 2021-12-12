<template>
  <article v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <hr>
    <h3>Comments:</h3>
    <div v-if="!comments?.length">No comments.</div>
    <ul v-if="comments?.length">
      <li v-for="comment in comments" :key="comment.id">
        <h4>{{ comment.name }} ({{ comment.email }})</h4>
        <p>{{ comment.body }}</p>
        <hr>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { Post } from "@/interfaces/post";
import { Comment } from "@/interfaces/comment";

defineProps<{
  post: Post,
  comments: Comment[],
}>();
</script>
