document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$('.carousel').carousel({
    interval: 2000, // 轮播图切换间隔时间，单位毫秒
    pause: 'hover', // 鼠标悬停时暂停自动播放
    wrap: true, // 循环播放
    keyboard: true // 允许键盘左右键控制
});

window.onscroll = function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // 到达页面底部时加载更多内容
        loadMoreContent(); // 实现这个函数来添加内容
    }
};

function loadMoreContent() {
    // 在这里添加动态加载内容的逻辑
}

// 当YouTube IFrame API准备好之后，这个函数会被调用
function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: '8u0weA61oP0', // 您要播放的YouTube视频的ID
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 当视频播放器准备好后，这个函数会被调用
function onPlayerReady(event) {
    // 例如，您可以在这里自动播放视频
    // event.target.playVideo();
}

// 当视频播放器的状态改变时，这个函数会被调用
function onPlayerStateChange(event) {
    // 您可以在这里响应不同的播放器状态，比如播放结束
}

