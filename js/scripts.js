include('js/jquery.easing.js');
include('js/jquery.backgroundpos.min.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/forms.js');
include('js/googleMap.js');
include('js/jquery.mousewheel.js');
include('js/uScroll.js');
include('js/jquery.color.js');
include('js/jquery.cycle.all.min.js');
include("js/preloadIMG.js");
include('js/MathUtils.js');
include('js/jquery.transform-0.9.3.min.js');
include('js/bg.js');

//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}
//--------global-------------
var isSplash = true;
var isFirst = true;

var spinner;
var mapSpinner;
var bgSpinner;

var MSIE = ($.browser.msie) && ($.browser.version <= 8)
//------DocReady-------------
$(document).ready(function(){ 
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
///////////////////////////////////////////////////////////////////

//$("body").css({'min-height':'568px'});
$("body").css({'min-height':'950px'});


///////////////////////////////////////////////////////////////////



     $('ul#menu').superfish({
          delay:       800,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  					var conText = $(this).find('.mText').text();
                       $(this).append("<div class='_area'></div><div class='_overPl'></div><div class='mTextOver'>"+conText+"</div>"); 
                       
  				})

  	 		}
        });
});
  
 //------WinLoad-------------  
$(window).load(function(){  
   
	var win=$(window)
   
   $("#galleryHolder").gallerySplash();
   
   
    //*************** SPLASH ******************//
	
	
   //*************** rollOver Splash items ******************//
   
	$('#splash_mov .pic_act').css({opacity:0});
	$('#splash_mov .info_0').css({opacity:0});
	
	$('#splash_mov a').hover(function(){
	  $(this).parent().find('.info_1').stop().animate({marginTop:109}, 250, 'easeOutSine');
	  $(this).parent().find('.info_0').stop().animate({opacity:1}, 550, 'easeOutSine');
	  if (!MSIE){
		$(this).parent().find('.pic_act').stop().animate({opacity:1}, 550, 'easeOutSine'); 
	  }else{
		$(this).parent().find('.pic_act').css({'opacity':1}); 
	  }
	}, function(){
	  $(this).parent().find('.info_1').stop().animate({marginTop:169}, 350, 'easeOutSine');
	  $(this).parent().find('.info_0').stop().animate({opacity:0}, 550, 'easeOutSine');
	  if (!MSIE){
		$(this).parent().find('.pic_act').stop().animate({opacity:0}, 550, 'easeOutSine');
	  }else{
		$(this).parent().find('.pic_act').css({'opacity':0}); 
	  }
	})
	
	//*************** end rollOver Splash items ******************//
	function showSplash(){
	
	$('.slog').css({opacity:0});
	$('.slog').stop().delay(400).animate({opacity:1}, 3500, 'easeOutSine'); 
        $('.hometext').css({ opacity: 0 });
        $('.hometext').stop().delay(400).animate({ opacity: 1 }, 3500, 'easeOutSine'); 
	
    setTimeout(function(){
        animation = true;
        var cnt = 0;
		
        var mult = 1;
		var st = 200;
		var st1 = 200;
        var elems = $('#splash_ell>li');
		var elems_tint =  $('#splash_ell_tint>li');
		//console.log(elems);
		
		elems.each(function(index,el){
            //if (parseInt((index+1)%2) == 0) {
                mult *= 1;
           // }
		   st = st+200;
			
            if (!MSIE){
                $(el).css({'left':windowW()*mult,'rotate':windowW()/4}).stop(true,true)
                .delay(st)
                .animate({'left': 0,'rotate':'0deg'},{duration:1200,easing:'easeOutQuad',complete:function(){
                    cnt++; if (cnt==elems.length){animation = false;}
                }
                });
            } else {
                $(el).css({'left':windowW()*mult}).stop(true,true)
                .delay(st)
                .animate({'left': 0},{duration:1200,easing:'easeOutQuad',complete:function(){
                    cnt++; if (cnt==elems.length){animation = false;}
                }
                });
            }
			
        });
		elems_tint.each(function(index,el){
            //if (parseInt((index+1)%2) == 0) {
                mult *= 1;
           // }
		   st1 = st1+200;
			
            if (!MSIE){
                $(el).css({'left':windowW()*mult}).stop(true,true)
                .delay(st1)
                .animate({'left': 0},{duration:1200,easing:'easeOutQuad',complete:function(){
                    cnt++; if (cnt==elems.length){animation = false;}
                }
                });
            } else {
                $(el).css({'left':windowW()*mult}).stop(true,true)
                .delay(st1)
                .animate({'left': 0},{duration:1200,easing:'easeOutQuad',complete:function(){
                    cnt++; if (cnt==elems.length){animation = false;}
                }
                });
            }
			
        });
        $('.splash_mov').css({'display':'block'});        
    },0);
}
function hideSplash(){

	$('.slog').stop().delay(0).animate({opacity:0}, 1200, 'easeOutSine'); 
    $('.hometext').stop().delay(0).animate({ opacity: 0 }, 1200, 'easeOutSine'); 

    animation = true;
    var mult = 1;
	var st = 100;
	var st1 = 100;
    var cnt = 0;
    var elems =  $('#splash_ell>li');
	var elems_tint =  $('#splash_ell_tint>li');
    elems.each(function(index,el){
       // if (parseInt((index+1)%2) == 0) {
            mult *= -1;
        //}
		
		st = st+100;
		
        if (!MSIE){
            $(el).stop(true,true).delay(st)
            .animate({'left':-windowW(),'rotate':-windowW()/4},
            {duration:1200,easing:'easeOutQuad'
            ,complete:function(){
                cnt++;
                if (cnt == elems.length){
                    animation = false;
                    $('.splash_mov').css({'display':'none'}); 
                }
            }});
        } else {
            $(el).stop(true,true).delay(st)
            .animate({'left':-windowW()}
            ,{duration:1200,easing:'easeOutQuad'
            ,complete:function(){
                cnt++;
                if (cnt == elems.length){
                    animation = false;
                    $('.splash_mov').css({'display':'none'}); 
                }
            }});
        }
        $(el).find('.with_ul').hide(); 
    });
	elems_tint.each(function(index,el){
       // if (parseInt((index+1)%2) == 0) {
            mult *= -1;
        //}
		
		st1 = st1+100;
		
        if (!MSIE){
            $(el).stop(true,true).delay(st1)
            .animate({'left':-windowW()},
            {duration:1200,easing:'easeOutQuad'
            ,complete:function(){
                cnt++;
                if (cnt == elems.length){
                    animation = false;
                    $('.splash_mov').css({'display':'none'}); 
                }
            }});
        } else {
            $(el).stop(true,true).delay(st1)
            .animate({'left':-windowW()}
            ,{duration:1200,easing:'easeOutQuad'
            ,complete:function(){
                cnt++;
                if (cnt == elems.length){
                    animation = false;
                    $('.splash_mov').css({'display':'none'}); 
                }
            }});
        }
        $(el).find('.with_ul').hide(); 
    });
}
function hideSplashQ(){

	$('.slog').css({opacity:0}); 
    $('.hometext').css({ opacity: 0 }); 

    $('.splash_mov').css({'display':'none'});
    var mult = 1;
    $('#splash_ell>li').each(function(index,el){
        if (parseInt((index+1)%2) == 0){
            mult *= -1;
        }
        if (!MSIE){
            $(el).css({'left':windowW()*mult});
        } else {
            $(el).css({'left':windowW()*mult});
        }
    });
	$('#splash_ell_tint>li').each(function(index,el){
        if (parseInt((index+1)%2) == 0){
            mult *= -1;
        }
        if (!MSIE){
            $(el).css({'left':windowW()*mult});
        } else {
            $(el).css({'left':windowW()*mult});
        }
    });
}
   
    //*************** END SPLASH ******************//
   
   
   //banner-------------------------------------------------
	
	$('.button_1 .img_act').css({opacity:0})
			$('.button_1 a').hover(function(){
				 if (!MSIE){
				$(this).find('.img_act').stop().animate({opacity:1});
				$(this).find('.img_act2').stop().animate({opacity:0});
			}else{
				$(this).find('.img_act2').css({'opacity':0}); 
				$(this).find('.img_act').css({'opacity':1}); 
				}
			}, function(){
				 if (!MSIE){
					$(this).find('.img_act').stop().animate({opacity:0})
					$(this).find('.img_act2').stop().animate({opacity:1})
				}else{
					$(this).find('.img_act2').css({'opacity':1}); 
					$(this).find('.img_act').css({'opacity':0}); 
					}
			})
    //end banner-------------------------------------------------
   
   
   //list_1-------------------------------------------------
	$('.list_1 > li > a').hover(function(){
    $(this).stop().animate({color:"#c0aeaa", marginLeft:5}, 300, "easeOutCubic")
	}, function(){;
    $(this).stop().animate({color:"#6c6b6b", marginLeft:0}, 300, "easeOutCubic");
	})   
    //end list-1-------------------------------------------------
	
	//link_2-------------------------------------------------
	$('.link_2 span').css({opacity:0});
	$('.link_2').hover(function(){
      $(this).find('span').stop(true).animate({opacity:1}, 550, 'easeOutSine'); 
	}, function(){
      $(this).find('span').stop(true).animate({opacity:0}, 550, 'easeOutSine'); 
	})
	//end link_2-------------------------------------------------
	
   	//slider coach----------------------------------------------
	 if ($(".slider1").length) {
        $('.slider1').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '.next1',
    		prev: '.prev1',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    var ind = 0;
    var len = $('.nav_item').length;
    $('.nav_item').bind('click',function(){
        ind = $(this).index()-0;
        $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
        $(this).addClass('active');
        $('.slider1').cycle(ind);
    });
	
	
	$('.prev1').bind('click',function(e){
        if (ind>-1){
            ind--;
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        }
		if (ind==-1){
            ind=(len-1)
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        }
		
    });
     $('.next1').bind('click',function(e){
	 
        if (ind<(len)){
            ind++;
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        }
		if (ind==(len)){
            ind = 0;
            $('.nav_item').each(function(index,elem){if (index!=(ind)){$(this).removeClass('active');}});
            $('.nav_item').eq(ind).addClass('active');
        }
    });
	
	//end slider coach----------------------------------------------	
   
	   
	var menuItems = $('#menu >li'); 
	var currentIm = 0;
	var lastIm = 0;

///////////////////////////////////////////////
    var navItems = $('.menu > ul >li');

  
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		
		preFu:function(_){
			_.li.css({left:"-1700px",'visibility':'visible'});
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({'visibility':'visible', left:'1700px'}).stop(true).delay(400).animate({left:"-29px"},800,'easeOutCubic');
               
				
				//console.log("_.n " + _.n);
				
			if (_.n == 0){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			if (_.pren == undefined){
                _.pren = -1;
                hideSplashQ();
            }
					
            }
			if(_.prev){
			     _.prev.stop(true).animate({left:'-1700px'},600,'easeInOutCubic',function(){_.prev.css({'visibility':'hidden'});} );
             }
		}
	})
    
    
	$('.submenu_1 a b').css({width:'0px'})
	$('.submenu_2 a span').css({width:'0px'})
    $('.submenu_1 a').hover(function()
    {
        $(this).find('b').css({width:'0px', left:'-23px'}).stop().animate({width:'203px'}, 300,'easeOutCubic');	
		$(this).find('span').css({width:'0px', left:'-23px'}).stop().animate({width:'203px'}, 300,'easeOutCubic');			
    }, function(){
        $(this).find('b').stop().animate({width:'0px', left:'180px'}, 300,'easeOutCubic');
		$(this).find('span').stop().animate({width:'0px', left:'180px'}, 300,'easeOutCubic');
    })
	
	nav.navs({
			useHash:true,
			defHash:'#!/splash',
             hoverIn:function(li){
                $(".mText", li).stop(true).animate({top:"60px"}, 600, 'easeOutCubic');
                $(".mTextOver", li).stop(true).delay(50).animate({top:"18px"}, 500, 'easeOutCubic');
                $("._overPl", li).stop(true).animate({bottom:"0px"}, 500, 'easeOutCubic');
				

                   // if(($.browser.msie) && ($.browser.version <= 8)){}else{}
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mText", li).stop(true).animate({top:"0px"}, 600, 'easeOutCubic');
                        $(".mTextOver", li).stop(true).delay(20).animate({top:"-100px"}, 400, 'easeOutCubic');
                        $("._overPl", li).stop(true).animate({bottom:"100px"}, 400, 'easeOutCubic');
						
                    } 
                } 
		})

		.navs(function(n){			
			$('#content').tabs(n);
		})
        
//////////////////////////////////////////

   	var h_cont=605;
	function centrRepos() {
		var h=$(window).height();
		if (h>(h_cont+385)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=234;
			h_new=h_cont+385;
		}
		
            if(m_top > 155){
		          $('.center').stop().animate({paddingTop:m_top}, 800, 'easeOutExpo');
          }else{
            
            $('.center').stop().animate({paddingTop:"155px"}, 800, 'easeOutExpo');
          }
        
	}
	centrRepos();
	
	
	$('.scroll').uScroll({mousewheel:true,step: 100,lay:'outside'});
	
	$('.scroll-btns > a > img').hover(function(){
    		$(this).stop().animate({marginTop:"-29"}, 350, "easeOutExpo");						 
    	}, function(){
    		$(this).stop().animate({marginTop:"0"}, 350, "easeOutExpo");		 
    	})
	
	

	//follow-icons-------------	 
	$('.follow-icon a').hover(function(){
		$(this).find('.img_icon').stop().animate({paddingTop:'7px'})					 
	}, function(){
		$(this).find('.img_icon').stop().animate({paddingTop:'0px'})						 
	})
	//end follow-icons-------------
	

    ///////////Window resize///////
    
    function windowW() {
 return (($(window).width()>=parseInt($('body').css('minWidth')))?$(window).width():parseInt($('body').css('minWidth')));
}
    
	$(window).resize(function(){
        centrRepos();
         
        }
    );

    } //window function
) //window load