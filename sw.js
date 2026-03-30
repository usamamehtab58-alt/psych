// PSYCHE-OS Service Worker
// Deploy this file at the root of your Vercel project (same level as index.html)

self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
    self.registration.showNotification(e.data.title, {
      body: e.data.body,
      icon: e.data.icon || '',
      badge: e.data.icon || '',
      tag: 'psycheos-grade',
      renotify: true,
      requireInteraction: false,
      silent: false,
      data: { url: e.data.url || '/' }
    });
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(e.notification.data.url || '/'));
});
