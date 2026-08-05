const CACHE_NAME = 'hightech-ps-cache-v1';

// قائمة الملفات التي سيتم حفظها في كاش البلايستيشن
const filesToCache = [
  './',
  './index.html',
  './logo.png',
  // أضف مسارات ملفات الثغرات والـ Payloads الخاصة بك هنا:
  './payloads/505/goldhen.bin',
  './payloads/672/goldhen.bin',
  './payloads/900/goldhen_2.4b16.bin',
  './payloads/1100/pppwn_goldhen.bin'
];

// تثبيت ملفات الكاش
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('جاري تحميل ملفات HIGH TECH PS للكاش...');
      return cache.addAll(filesToCache);
    })
  );
});

// قراءة الملفات من الكاش عند عدم وجود إنترنت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});