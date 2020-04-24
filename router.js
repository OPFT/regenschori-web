import Vue from 'vue';
import Router from "vue-router";

import Search from "~/pages/search/Search";
import AboutSongBook from "~/pages/about/AboutSongBook";
import Song from "~/pages/song/Song";
import Login from "~/pages/account/Login";

Vue.use(Router)
 
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
        {path: '/', alias: '/search', component: Search},
        // {path: '/search', component: Search},
    
        {path: '/o-zpevniku', component: AboutSongBook},
        {path: '/pisen/:id/:slug', component: Song},
    
        {path: '/muj-ucet', component: Login}
    ]
  })
}