import VuexRouterSync from 'vuex-router-sync'
import store from '@/store'
import router from '@/router'

VuexRouterSync.sync(store, router)
