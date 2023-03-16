workbox.core.setCacheNameDetails({prefix: "proyecto-coffeBahia-vue"});

self.precacheManifest = [].concat(self.precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
    new RegExp(/https:\/\/vue-teal-zeta\.vercel\.app\//),
    new workbox.strategies.NetworkFirst()
);