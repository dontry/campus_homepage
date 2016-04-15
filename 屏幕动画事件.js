 var shijian;
        var div1t;
        function funq(divs){
            if(divs=="div3")
            {
                return;

            }
            else
            {
                $('.'+divs+' div .uls li').click(function(){
                    clearInterval(shijian);
                    var a=$(this).index();
                    $(this).addClass('curv').siblings('li').removeClass('curv');
                    $('.'+divs+' div div ul').eq(a).show().siblings('ul').hide();
                    divs1(divs);
                })
            }
        }
        function divs1(divss1){

            var indexs=$('.'+divss1).children("div").children("ul").children(".curv").index();

            $('.'+divss1).children("div").children("ul").eq(indexs).show().siblings('ul').hide();
            var as=$('.'+divss1).attr('class');
            function fun(div,indexs){
                var aa=$('.'+div+' div div ul').eq(indexs).children('.cur1').index();
                var index1=$('.'+div+' div div ul').eq(indexs).children('li').length;
                var fun11=function fun1(){


                    if(aa<index1)
                    {

                        aa=aa+1;
                        if($('.'+div+' div div ul').eq(indexs).children('li').eq(aa-1).children('img').length>1)
                        {
                            $('.'+div+' div div ul').eq(indexs).children('li').eq(aa-1).children('.img1').show();
                            $('.'+div+' div div ul').eq(indexs).children('li').eq(aa-1).children('.img1').animate({left:'-=20px',top:'-=20px',height:'40px',width:'40px'},700,function(){
                                $(this).hide()
                                $('.'+div+' div div ul').eq(indexs).children('li').eq(aa).fadeIn(1000).siblings().fadeOut(1000);
                            });
                            $('.'+div+' div div ul').eq(indexs).children('li').eq(aa-1).children('.img1').animate({left:'+=20px',top:'+=20px',height:'0px',width:'0px'});
                            $('.'+div+' div div ul').eq(indexs).children('li').eq(aa).addClass('cur1').siblings().removeClass("cur1");
                        }
                        else
                        {
                            $('.'+div+' div div ul').eq(indexs).children('li').eq(aa).fadeIn(1000).siblings().fadeOut(1000);
                            $('.'+div+' div div ul').eq(indexs).children('li').eq(aa).addClass('cur1').siblings().removeClass("cur1");
                        }
                    }
                    else
                    {
                        aa=0;
                        $('.'+div+' div div ul').eq(indexs).children('li').eq(aa).fadeIn(1000).siblings().fadeOut(1000);
                        $('.'+div+' div div ul').eq(indexs).children('li').eq(aa).addClass('cur1').siblings().removeClass("cur1");

                    }
                }
                shijian=setInterval(fun11,2000);
            }
            fun(as,indexs);
        }