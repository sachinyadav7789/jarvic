document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-grid');
    // Replace this placeholder data with actual fetching logic later
    const videos = [
        { title: 'Sample Video 1', channel: 'Channel A', views: '1M views', thumbnail: 'https://via.placeholder.com/300x150' },
        { title: 'Sample Video 2', channel: 'Channel B', views: '500K views', thumbnail: 'https://via.placeholder.com/300x150' },
        { title: 'Sample Video 3', channel: 'Channel C', views: '10M views', thumbnail: 'https://via.placeholder.com/300x150' },
        { title: 'Sample Video 4', channel: 'Channel D', views: '200K views', thumbnail: 'https://via.placeholder.com/300x150' },
    ];

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('video-card');
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" style="width:100%;">
            <div class="video-info">
                <h3>${video.title}</h3>
                <p>${video.channel}</p>
                <p>${video.views}</p>
            </div>
        `;
        videoGrid.appendChild(videoCard);
    });
});
