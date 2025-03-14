// document.addEventListener('DOMContentLoaded', () => {
//     const video = document.getElementById('main-video');
//     if (!video) return;
  
//     // 移动端检测
//     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
//     if (isMobile && hexo_config.video.mobile_fallback) {
//       video.parentElement.remove();
//       return;
//     }
  
//     // 延迟加载
//     if (hexo_config.video.lazy_load) {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersectionRatio > 0) {
//             const sources = video.querySelectorAll('source');
//             sources.forEach(source => {
//               if (source.dataset.src) {
//                 source.src = source.dataset.src;
//               }
//             });
//             video.load();
//             observer.unobserve(video);
//           }
//         });
//       });
//       observer.observe(video);
//     }
  
//     // 播放控制
//     const playVideo = () => {
//       video.play().catch(() => {
//         video.muted = true;
//         video.play();
//       });
//     };
  
//     // 首次交互后播放
//     document.addEventListener('click', playVideo, { once: true });
//     document.addEventListener('scroll', playVideo, { once: true });
//   });