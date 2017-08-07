window.onload=function(){
		var apply=document.getElementById('apply'),
		tzk=document.getElementById('tzk'),
		close=document.getElementById('close'),
		sub=tzk.querySelector('.sub');
		
	apply.onclick=function(){
		tzk.setAttribute('style','display: block');
	}
	close.onclick=function(){
		tzk.setAttribute('style','display: none');
	}
	sub.onclick=function(){
		tzk.setAttribute('style','display: none');
	}
//	报名脚本结束
	var container=document.getElementById('container'),
			example=document.getElementById('example'),
			
			box1=container.querySelector('.c_ctn2');
		example.onclick=function(){
			var box=container.querySelector('.c_ctn2').getAttribute('style');
			if(box==='display: none;'){
				box1.setAttribute('style','display: block;')
//				console.log(box);
//				console.log(box1);
			}else if(box==='display: block;'){
				box1.setAttribute('style','display: none;')
			}		
		}

	var btn = $('.c_ctn2a li');
    $(btn).on('click', function() {
        var i = $(btn).index(this);
        $(".c_ctn2 table,.c_ctn2a li").each(function(index, elem) {
            $(elem).removeClass('table1');
            $(elem).removeClass('aa1');
        });
        $(this).attr('class', 'aa1');
        $('.c_ctn2 table').eq(i).attr('class', 'table1');
    });	
   //	查看榜单结束	 
    var btn1 = $('.ul_title li');
    $(btn1).on('click', function() {
        var i = $(btn1).index(this);
        $(".menu2>div,.ul_title li").each(function(index, elem) {
            $(elem).removeClass('show');
            $(elem).removeClass('title_li');
        });
        $(this).attr('class', 'title_li');
        $('.menu2>div').eq(i).attr('class', 'show');
    });	
	// 官方公告完成 
	$('.kf').delay(2000).fadeIn(8000);
}