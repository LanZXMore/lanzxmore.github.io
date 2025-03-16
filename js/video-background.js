document.addEventListener('DOMContentLoaded', function() {
  // 获取配置参数
  const videoPath = 'https://image.lanzx.top/file/BQACAgUAAxkDAAMGZ9Zhq6QbRnORInWgtYv9gWh0cDIAAjoUAALP4rBWNCxDh9cLTSc2BA.mp4'; 
  
  // 设置循环播放变量，true表示循环播放，false表示不循环
  const enableLooping = false; // 在这里修改循环状态：true开启循环，false关闭循环
  
  // 创建视频元素
  const createVideoElement = () => {
    const video = document.createElement('video');
    video.id = 'bg-video';
    video.src = videoPath;
    video.muted = true;
    video.autoplay = true;
    video.loop = false; // 设置为false，我们将手动控制循环以添加过渡效果
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1';
    video.style.opacity = '1';
    video.style.transition = 'opacity 1.5s ease-in-out';
    // 增强视频适配性
    video.style.maxWidth = '100vw'; // 使用视口宽度单位
    video.style.overflow = 'hidden';
    
    return video;
  };
  
  // 仅在首页执行
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const pageHeader = document.getElementById('page-header');
    
    if (pageHeader) {
      // 保存原始背景图
      const originalBg = pageHeader.style.backgroundImage;
      
      // 增强页面头部容器的适配性
      pageHeader.style.overflow = 'hidden';
      pageHeader.style.position = 'relative';
      pageHeader.style.maxWidth = '100vw';
      pageHeader.style.width = '100%';
      pageHeader.style.boxSizing = 'border-box';
      
      // 创建并添加视频元素
      const video = createVideoElement();
      pageHeader.appendChild(video);
      
      // 视频加载完成后显示
      video.addEventListener('loadeddata', function() {
        video.style.opacity = '1';
        pageHeader.style.backgroundImage = 'none';
      });
      
      // 视频播放结束后的处理
      video.addEventListener('ended', function() {
        if (!enableLooping) {
          // 如果不循环，则淡出视频并显示背景图
          video.style.opacity = '0';
          pageHeader.style.backgroundImage = originalBg;
        } else {
          // 如果循环，添加渐变过渡效果
          video.style.opacity = '0.3'; // 先降低透明度
          
          // 创建一个过渡动画的计时器
          setTimeout(() => {
            video.currentTime = 0; // 重置视频到开始位置
            
            // 等待一小段时间后开始播放并淡入
            setTimeout(() => {
              video.play();
              video.style.opacity = '1'; // 淡入视频
            }, 300);
          }, 700); // 等待700毫秒以便完成淡出效果
        }
      });
    }
  }
  
  // 更全面地防止滚动条
  document.body.style.overflowX = 'hidden';
  document.documentElement.style.overflowX = 'hidden'; // 添加html元素的overflow控制
  
  // 添加全局样式以确保所有容器不会溢出
  const style = document.createElement('style');
  style.textContent = `
    body, html {
      width: flex;
      max-width: 100vw;
      overflow-x: hidden;
    }
    #page-header, #bg-video {
      max-width: 100vw;
      overflow: hidden;
    }
    .layout, #content-inner, .layout > div {
      max-width: 100vw;
      overflow-x: hidden;
    }
  `;
  document.head.appendChild(style);
  
  // 监听窗口大小变化，确保视频始终适配
  window.addEventListener('resize', function() {
    const video = document.getElementById('bg-video');
    const pageHeader = document.getElementById('page-header');
    
    if (video && pageHeader) {
      video.style.width = '100%';
      video.style.maxWidth = '100vw';
      pageHeader.style.maxWidth = '100vw';
    }
  });
});