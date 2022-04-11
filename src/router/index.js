import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import authLogin from '../components/auth/authLogin.vue'
import userDashboard from '../views/user/userDashboard'
import userProfile from '../views/user/userProfile'
import userTransactions from '../views/user/userTransactions'
import marketPlace from '../views/user/marketPlace'
import Activity from '../views/user/Activity'
import help from '../views/helpAndSupport/helpSupport'
import activeNetwork from '../views/Memebers/activeNetwork'
import waithingList from '../views/Memebers/waithingList'
import fourth_generation from '../views/Memebers/4thGeneration'
import charityDonation from '../views/Giftings/charityDonation'
import allUsers from '../views/Giftings/allUsers'
import harvest from '../views/Giftings/harvest'
import seed from '../views/Giftings/seed'
import approvedSeeds from '../views/Giftings/seedsCom/approvedSeeds'
import rejectedSeeds from '../views/Giftings/seedsCom/RejectedSeeds'
import pendingSeeds from '../views/Giftings/seedsCom/penndingSeeds'
import editSeed from '../views/Giftings/seedsCom/editSeed'
import userapp from '../views/user'

import otherAndDel_messages from '../views/helpAndSupport/viewMessage/otherAndDel_message'
import Email_viewMessages from '../views/helpAndSupport/viewMessage/Email_viewMessage'
import swapShowMessage from '../views/helpAndSupport/viewMessage/swapShowMessage'

import forgetPassword from  '../views/user/forgetPassword'
Vue.use(VueRouter)

const routes = [
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: forgetPassword
  },
  {
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem('token');
      if (user !== null) {
        next("/app/dashboard")
      } else {
        next()
      }
    },
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem('token');
      if (user !== null) {
        next("/app/dashboard")
      } else {
        next()
      }
    },
    path: '/login',
    name: 'login',
    component: authLogin
  },
  {
    path: '/app',
    name: 'app',
    component: userapp,
    beforeEnter: (to, from, next) => {
      let user = localStorage.getItem('token');
      if (user !== null) {
        next()
      } else {
        next("/")
      }
    },
    children: [{
        path: 'dashboard',
        name: 'dashboard',
        component: userDashboard
      },
      {
        path: 'transactions',
        name: 'transactions',
        component: userTransactions
      },
      {
        path: 'marketPlace',
        name: 'marketPlace',
        component: marketPlace
      },
      {
        path: 'allUsers',
        name: 'allUsers',
        component: allUsers
      },
      {
        path: 'activity',
        name: 'Activity',
        component: Activity
      },
      {
        path: 'help',
        name: 'help',
        component: help,
//         otherAndDel_messages
// Email_viewMessages
// swapShowMessage
      //   children: [
      // ]
      },
      {
        path: ':id/OtherMessage',
        name: 'other',
        component: otherAndDel_messages
      },{
        path: ':id/EPMessage',
        name: 'changeEmail',
        component: Email_viewMessages
      },{
        path: ':id/swapMessage',
        name: 'swap',
        component: swapShowMessage
      },
    
      {
        path: 'activeNetwork',
        name: 'activeNetwork',
        component: activeNetwork
      },
      {
        path: 'waithingList',
        name: 'waithingList',
        component: waithingList
      },
      {
        path: '4thGeneration',
        name: '4thGeneration',
        component: fourth_generation
      },
      {
        path: 'charityDonation',
        name: 'charityDonation',
        component: charityDonation
      },
      {
        path: 'seed',
        name: 'seed',
        component: seed,
        children:[{
          path: 'pennding',
          name: 'penddingSeeds',
          component:pendingSeeds
        },
        {
          path: 'approved',
          name: 'approvedSeeds',
          component:approvedSeeds
        },
        {
          path: 'rejected',
          name: 'rejectedSeeds',
          component:rejectedSeeds
        },
         
        ]
      },
      {
        path: ':id/editSeed',
        name: 'editSeed',
        component: editSeed
      },
      {
        path: 'harvest',
        name: 'harvest',
        component: harvest
      },
      {
        path: 'profile',
        name: 'profile',
        component: userProfile
      },
    ]

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router