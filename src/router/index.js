import Vue from 'vue';
import Router from 'vue-router';
//index
const index = () => import('../page/index');
const design = () => import('../page/design');
const customized = () => import('../page/customized');
const about = () => import('../page/about');
const contact = () => import('../page/contact');
const pixelpainting = () => import('../page/pixelpainting');
const sculpture = () => import('../page/sculpture');
const casepage = () => import('../page/case');
// //admin
// const admin = () => import('../components/admin');

Vue.use(Router);

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: index
    },
    {
      path: '/design',
      name: 'design',
      component: design
    },
    {
      path: '/customized',
      name: 'customized',
      component: customized
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/pixelpainting',
      name: 'pixelpainting',
      component: pixelpainting
    },
    {
      path: '/sculpture',
      name: 'sculpture',
      component: sculpture
    },
    {
      path: '/case',
      name: 'case',
      component: casepage
    }
    // //后台
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   meta: {
    //     requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
    //   },
    //   component: admin
    // },
  ]
});
export default router;


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化 */
//   if (to.meta.requireAuth) {
//     let nowloginstatus = localStorage.getItem('isAdminLogin');
//     nowloginstatus = JSON.parse(nowloginstatus);
//     if (nowloginstatus) {
//       next()
//     } else {
//       next({ path: '/adminlogin' })
//     }
//   } else {
//     next()
//   };
//   let nowloginstatus = localStorage.getItem("isLogin");
//   nowloginstatus = JSON.parse(nowloginstatus);
//   let tokenarr = localStorage.getItem("token");
//   if (to.name == 'login') {
//     if (nowloginstatus) {
//       next({ path: '/home' });
//     }
//   }
//   if (to.meta.require) {
//     if (nowloginstatus) {
//       tokenarr = JSON.parse(tokenarr);
//       let nowtime = Date.parse(new Date()) / 1000;
//       let nowtokne = parseInt(tokenarr.tokenExpired) - parseInt(nowtime); //判断是否过期
//       if (tokenarr && nowtokne < 0) {
//         this.$message.error("您的登录已经过期，请重新登录！");
//         next({ path: '/login' })
//       }
//     } else {
//       next({ path: '/login' })
//     }
//   } else {
//     next()
//   };
//   next();
// });
