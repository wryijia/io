// 头部导航栏背景颜色变换  函数
// 显示路由导航栏 弹窗

$('#header .header-menu').click(function() {
	$('#mask').addClass('show');
	$('#mask .menu-box').css('transform', 'translateX(0)');
})


// 点击弹窗阴影部分  弹窗消失
$('#mask').click(function() {
	$('#mask .menu-box').css('transform', 'translateX(101%)');
	let that = this;
	setTimeout(function() {
		$(that).removeClass('show');
	}, 500);
});

$('#mask li a').click(function() {
	$('#mask .menu-box').css('transform', 'translateX(101%)');
	let that = this;
	setTimeout(function() {
		$('#mask').removeClass('show');
		$(that).closest('li').removeClass('active')
	}, 500);
})



$('#mask .menu-box').click(function(event) {
	event.stopPropagation()
})



$('#mask .menu-box ul li').click(function() {
	if ($(this).hasClass('active')) {
		$(this).removeClass('active')
	} else {
		$(this).addClass('active')
	}
})




function headerChangeBg() {
	var scrollT = document.documentElement.scrollTop;
	var clientHeight = document.documentElement.clientHeight
	let headerBox = document.getElementById('header-nav')

	if (headerBox) {
		let boxH = headerBox.offsetHeight;
		if (scrollT > boxH) {
			$('#header-nav').addClass('active')
		} else {
			$('#header-nav').removeClass('active')
		}
	}

}


$(document).ready(function() {
	//编写代码

	var width = document.documentElement.clientWidth / 75;
width=width>2
	document.documentElement.style.fontSize = width + 'px';
	headerChangeBg()
	window.addEventListener('scroll', function(e) {
		headerChangeBg()
	})

});


// 获取3YData交流群的二维码 实时拉取
$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'http://cloudtest.3ydata.com/account/erWeiMa/find?type=weChatGroup',
		success: (res) => {
			// console.log(res, '获取交流群二维码图片成功了')
			if (res.code * 1 === 20000) {
				$('.group-code').attr('src', res.data.url)
			}
		},
		// contentType: "application/json",
	});
})












// 移动端

// rem转换

// 设置rem
var width = document.documentElement.clientWidth / 75;
if (width > 21.3333) {
	width = 21.3333
}
document.documentElement.style.fontSize = width + 'px';




window.addEventListener('resize', function() {
	var width = document.documentElement.clientWidth / 75;
	if (width > 21.3333) {
		width = 21.3333
	}
	document.documentElement.style.fontSize = width + 'px';
})

// console.log(width)

// 服务过的客户数据






// 判断是哪种设备的访问；
var isPc = true;
$(document).ready(function() {
	var userAgentInfo = navigator.userAgent; //获取游览器请求的用户代理头的值
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	]; //定义移动设备数组
	for (var v = 0; v < Agents.length; v++) {
		//判断是否是移动设备
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			isPc = false;
			break;
		}
	}
	// console.log(window.location.href);
	let url = window.location.href;
	let index = url.lastIndexOf('/');
	let str = url.substring(index + 1);
	let falg = str.indexOf('m-') >= 0 ? true : false;
	//   falg==访问的是移动端的网址；


	if (isPc) {
		// console.log('我是电脑');
		if (falg) {
			//如果是电脑端访问移动端网页 
			let url = window.location.href;
			let index = url.lastIndexOf('/');
			let newurl = url.substring(0, index + 1);
			let str = url.substring(index + 1);
			let newstr = str.substring(2) ? str.substring(2) : '/index.html'
			newurl += newstr;
			location.href = newurl;
		}
	} else {

		if (!falg) {
			// 如果是移动设备访问非移动端网页
			// console.log('移动端访问电脑端网页啦')
			let url = window.location.href;
			let index = url.lastIndexOf('/');
			let newurl = url.substring(0, index + 1);
			let str = url.substring(index + 1) ? url.substring(index + 1) : 'index.html';
			newurl = newurl + 'm-' + str;
			location.href = newurl;
		}
	}
})
