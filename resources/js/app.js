import './bootstrap';

import Alpine from 'alpinejs';

import { createApp } from "vue";

import VideoChat from "./components/VideoChat.vue";

const app = createApp({});

window.Alpine = Alpine;

app.component("video-chat", VideoChat);

app.mount("#app");

Alpine.start();