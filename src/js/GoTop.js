// 对requestAnimationFrame做兼容性处理
var _requestAnimationFrame = requestAnimationFrame || webkitRequestAnimationFrame,
    _cancelAnimationFrame = cancelAnimationFrame || webkitCancelAnimationFrame;
// 缓冲运动
function moving() {
    var me = this;
    if (window.scrollY <= 8) {
        window.scrollTo(0, 0);
        this.scrollAnimation && _cancelAnimationFrame(this.scrollAnimation);
        return;
    } else {
        var speed = Math.ceil(window.scrollY - window.scrollY / 8);
        window.scrollTo(0, speed);
        this.scrollAnimation = _requestAnimationFrame(function() {
            moving();
        });
    }
}

function GoTop(height) {
    var gotop = document.getElementById('go-top'),
        me = this;
    if (!gotop) {
        gotop = document.createElement('span');
        gotop.className = 'go-top';
        gotop.innerHTML = '\u9876\u90e8'; // 顶部
        document.body.appendChild(gotop);
    };
    gotop.addEventListener('click', function() {
        navigator.userAgent.match(/android/i) ? window.scrollTo(0, 0) : moving();
        gotop.classList.remove('visible');
    });
    window.addEventListener('scroll', function() {
        gotop.classList[window.scrollY > height ? 'add' : 'remove']('visible');
    });
}

export default GoTop;