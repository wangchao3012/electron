import Vue from 'vue'
import Router from 'vue-router'
// import trade_index from './components/trade/index'
import order_index from '../page/trade/general/order/index'
// const order_index = () => import('../page/trade/general/order/index')

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/page/index').default,
      children: [
        {
          path: '/trade',
          component: require('@/page/trade/index').default,
          children: [
            {
              path: '/trade/general',
              component: require('@/page/trade/general/index').default,
              children: [

                {
                  path: '/trade/general/order',
                  component: order_index,
                },
                // {
                //   path: '/trade/general/order',
                //   component: require('@/page/trade/general/order/index').default,
                // },
                {
                  path: '/trade/general/withdrawal',
                  component: require('@/page/trade/general/withdrawal/index').default,
                },
                {
                  path: '/trade/general/entrust',
                  component: require('@/page/trade/general/entrust/index').default,
                },
                {
                  path: '/trade/general/moneyposition',
                  component: require('@/page/trade/general/moneyposition/index').default,
                },
                {
                  path: '/trade/general/fundtransfer',
                  component: require('@/page/trade/general/fundtransfer/index').default,
                },
                {
                  path: '/trade/general/dealquery',
                  component: require('@/page/trade/general/dealquery/index').default,
                },
                {
                  path: '/trade/general/currentquote',
                  component: require('@/page/trade/general/currentquote/index').default, 
                },
                {
                  path: '/trade/general/funding',
                  component: require('@/page/trade/general/funding/index').default, 
                },
                {
                  path: '/trade/general/gradingfund',
                  component: require('@/page/trade/general/gradingfund/index').default, 
                },
                {
                  path: '/trade/general/newstockbuy',
                  component: require('@/page/trade/general/newstockbuy/index').default, 
                },
                {
                  path: '/trade/general/etf-list',
                  component: require('@/page/trade/general/etf-list/index').default, 
                }, 
                {
                  path: '/trade/general/etf-stockblue',
                  component: require('@/page/trade/general/etf-stockblue/index').default, 
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

router.beforeEach((to, from, next) => {
  //  设置默认跳转路由
  if (to.path == '/' || to.path == '/trade' || to.path == '/trade/general') {
    next('/trade/general/order')
  }
  else {
    next()
  }
})
export default router;