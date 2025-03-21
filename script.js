const sceneryImages = document.querySelectorAll('.scenery-item img');
sceneryImages.forEach((img) => {
    img.addEventListener('click', () => {
        alert('您点击了一张自然风光图片！');
    });
});