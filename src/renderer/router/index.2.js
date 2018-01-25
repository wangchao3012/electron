import Vue from 'vue'
import Router from 'vue-router'
// import trade_index from './components/trade/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/page/index').default,
      children: [
        {
          path: '',
          component: require('@/page/trade/index').default,
          children: [
            {
              path: '',
              component: require('@/page/trade/general/index').default,
              children: [
                {
                  path: '',
                  component: require('@/page/trade/general/order/index').default,
                },
              ]
            },
          ]
        },
        { 
          path: '/trade',
          component: require('@/page/trade/index').default,
          children: [ 
            {
              path: '',
              component: require('@/page/trade/general/index').default,
            },
            {
              path: '/trade/general',
              component: require('@/page/trade/general/index').default,
              children: [ 
                {
                  path: '',
                  component: require('@/page/trade/general/order/index').default, 
                },
                {
                  path: '/trade/general/order',
                  component: require('@/page/trade/general/order/index').default, 
                },
                {
                  path: '/trade/general/withdrawal',
                  component: require('@/page/trade/general/withdrawal/index').default, 
                },
                {
                  path: '/trade/general/entrust',
                  component: require('@/page/trade/general/entrust/index').default, 
                },
                
              ]
            },
            {
              path: '/trade/ETF',
              component: require('@/page/trade/ETF/index').default, 
            },
            {
              path: '/trade/fund',
              component: require('@/page/trade/fund/index').default, 
            },
            {
              path: '/trade/other',
              component: require('@/page/trade/other/index').default, 
            },
          ]
        }, 
        {
          path: '/quotes',
          component: require('@/page/quotes/index').default,
          children: [ 
            {
              path: '/quotes/hs',
              component: require('@/page/quotes/hs').default,
            },
          ]
        },

      ]
    }, 
    {
      path: '*',
      redirect: '/'
    }
    , 
  ]
})
