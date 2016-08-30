$(function() {
	//i从零开始，
	var i = 0;
	/*为第一个小圆点添加样式*/
	$(".banner .num li").first().addClass("on");
	/*克隆*/
	var clone = $(".banner .img li").first().clone();
	/*粘贴到最后*/
	$(".banner .img").append(clone);

	/*获取图片数量*/
	/*把这个代码移到后面才能计算复制粘贴后的长度*/
	var length = $(".banner .img li").length;


	/*当鼠标移到小圆点*/
	$(".num li").hover(function() {
		//定格在当前页，鼠标移走后，恢复轮播
		var index = $(this).index(); //获得当前小圆点 index //获得当前元素的索引值
		i = index; //修复bug,匹配按钮
		$(".img").stop().animate({
			left: -index * 500
		}, 600); //第几个小圆点就停在第几幅 index
		$(this).addClass("on").siblings().removeClass("on"); //当前添加on,同级删除on
	})

	/*自动轮播*/
	var t = setInterval(moveL, 2000) //

	/*对banner定时器的操作//当鼠标在小圆点上时*/
	$(".banner").hover(function() {
		clearInterval(t)
	}, function() {
		t = setInterval(moveL, 2000)
	})



	/*点击左边按钮*/
	$(".prev").click(function() {
		moveL()
	})


	/*点击右边按钮*/
	$(".next").click(function() {
		moveR()
	})



	/*点击左边按钮*/
	/*点击向左按钮，图片向右，小圆点向左*/
	function moveL() {
		i--; //点击一次向右一张	
		if (i == -1) { //当在第一张时点击向左按钮
			//alert(i);
			//left:-(5-1)*500; -4*500=-2000;
			$(".banner .img").css({
				left: -(length - 1) * 500
			}); //无缝轮播关键代码	
			i = length - 2; //拉到第四张 下标为3
			//alert(i);
		}
		$(".banner .img").stop().animate({
			left: -i * 500
		}, 600);
		$(".num li").eq(i).addClass("on").siblings().removeClass("on"); /*高亮小圆点*/
	}



	/*点击右边按钮*/
	/*点击向右按钮，图片向左，小圆点向右*/
	function moveR() {
		i++;
		if (i == length) {
			$(".banner .img").css({
				left: 0
			}); //迅速拉回第一个
			i = 1;
		}
		$(".banner .img").stop().animate({
			left: -i * 500
		}, 600); //向左移动		
		if (i == length - 1) { //解决小圆点bug
			$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on"); //高亮第一个小圆点
		} else {
			$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on"); //高亮当前小圆点
		}
	}

})



/*<!-- 
点击左边按钮
点击右边按钮
小圆点高亮
复制粘贴第一张
无缝
当鼠标移入小圆点
自动轮播
 -->*/