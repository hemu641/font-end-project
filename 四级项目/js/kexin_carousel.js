// 自动轮播功能实现
class Carousel {
    constructor() {
        this.track = document.querySelector('.cheng_carousel-track');
        this.items = document.querySelectorAll('.cheng_carousel-item');
        this.dots = document.querySelectorAll('.cheng_pagination-dot');
        this.currentIndex = 0;
        this.itemWidth = this.items[0].offsetWidth;
        this.totalItems = this.items.length;
        this.isTransitioning = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 3秒自动切换
        
        this.init();
    }
    
    init() {
        // 初始化轮播
        this.updatePagination();
        this.startAutoPlay();
        
        // 监听窗口大小变化，更新itemWidth
        window.addEventListener('resize', () => {
            this.itemWidth = this.items[0].offsetWidth;
            this.goToIndex(this.currentIndex);
        });
    }
    
    // 开始自动播放
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.next();
        }, this.autoPlayDelay);
    }
    
    // 停止自动播放
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
    // 切换到下一张
    next() {
        if (this.isTransitioning) return;
        
        this.currentIndex++;
        this.isTransitioning = true;
        
        // 应用过渡效果
        this.track.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
        
        // 监听过渡结束事件
        this.track.addEventListener('transitionend', () => {
            // 如果是最后一张（第七张，重复的第一张），无缝切换到真正的第一张
            if (this.currentIndex === this.totalItems - 1) {
                this.track.style.transition = 'none';
                this.currentIndex = 0;
                this.track.style.transform = `translateX(0)`;
                
                // 强制回流，重新触发过渡
                this.track.offsetHeight;
                this.track.style.transition = 'transform 0.5s ease-in-out';
            }
            
            this.updatePagination();
            this.isTransitioning = false;
        }, { once: true });
    }
    
    // 切换到指定索引
    goToIndex(index) {
        if (this.isTransitioning || index < 0 || index >= this.totalItems - 1) return;
        
        this.currentIndex = index;
        this.track.style.transform = `translateX(-${this.currentIndex * this.itemWidth}px)`;
        this.updatePagination();
    }
    
    // 更新分页指示器
    updatePagination() {
        // 直接使用currentIndex作为显示索引，因为现在有6个轮播项和6个分页点
        const displayIndex = this.currentIndex;
        
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === displayIndex);
        });
    }
}

// 页面加载完成后初始化轮播
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
});