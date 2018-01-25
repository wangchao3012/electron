import Vue from 'vue'
import Router from 'vue-router'
// import trade_index from './components/trade/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      // component: require('@/components/trade/index').default,
      component: require('@/components/index5').default,
      children: [
        {
          path: '',
          component: require('@/components/trade/index').default,
          children: [
            {
              path: '',
              component: require('@/components/trade/credit/index').default,
              children: [
                {
                  path: '',
                  component: require('@/components/order/index').default,
                }, 
              ]
            },
            {
              path: 'ordinary',
              component: require('@/components/trade/ordinary/index').default,
            },
            {
              path: 'credit',
              component: require('@/components/trade/credit/index').default,
            },
          ]
        },
        
        {
          path: 'quotes',
          component: require('@/components/quotes/index').default,
           
        },
        {
          path: 'trade',
          component: require('@/components/trade/index').default,
          children: [
            {
              path: '',
              component: require('@/components/trade/credit/index').default,
              children: [
                {
                  path: '',
                  component: require('@/components/order/index').default,
                }, 
              ]
            },
            {
              path: 'ordinary',
              component: require('@/components/trade/ordinary/index').default,
            },
            {
              path: 'credit',
              component: require('@/components/trade/credit/index').default,
              children: [
                {
                  path: 'order',
                  component: require('@/components/order/index').default,
                }, 
              ]
            },
          ]
        }


      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
