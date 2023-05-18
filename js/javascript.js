//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//gameList Btn
$(function(){
    $('.gameList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var n = $(this).index();

        $(".gameBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.loginWindow').addClass('display');
    })

    $('.signupBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.registerWindow').addClass('display');
    })

    $('.loginWindow .forget').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetWindow').addClass('display');
    })

    $('.registerBtn,.ruleWindow .back').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.registerWindow').addClass('display');
    })

    $('.registerWindow .isCheck p').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })

    $(".applyList .applyBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
    $(".applyList .checkBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.eventWindow').addClass('display');
    })

    $(".changePhoneBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.phoneWindow').addClass('display');
    })
    $(".changePwdBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $(".vipWrap .topBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkPoint').addClass('display');
    })

    $(".searchContent .opAcc").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.accWindow').addClass('display');
    })
    $(".searchContent .opPlat").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.platWindow').addClass('display');
    })

    $(".cardContent button").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo2').addClass('display');
    })

    $(".transWrap .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $(".forActive .check,.forHistory .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.bettingDetail').addClass('display');
    })

    $(".bettingWrap .recordBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.pointWindow').addClass('display');
    })
})
//請先登入
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}

//register choose
$(function(){
    $('.jumpWindow .choose .line').click(function(){
        $('.line').removeClass('display');
        $('.weChat').addClass('display');
    })

    $('.jumpWindow .choose .weChat').click(function(){
        $('.line').addClass('display');
        $('.weChat').removeClass('display');
    })
})

//news切換
$(function(){
    $('.jumpWindow.news .typeList li').click(function(){
        $($(this).children()).addClass('active');
        $($(this).siblings().children()).removeClass('active');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(1)').click(function(){
        $('.jumpWindow.news .normal').addClass('display');
        $('.jumpWindow.news .normal').siblings().removeClass('display');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(2)').click(function(){
        $('.jumpWindow.news .hot').addClass('display');
        $('.jumpWindow.news .hot').siblings().removeClass('display');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(3)').click(function(){
        $('.jumpWindow.news .deposit').addClass('display');
        $('.jumpWindow.news .deposit').siblings().removeClass('display');
    })
})

//realLogin
$(function(){
    $('.realLogin').click(function(){
        $('.jumpWindow,.loginBtn').removeClass('display');
        $('.filter,.news,.alLogin').addClass('display');
        $('.memberArea .loginArea.display').removeClass('display');
        $('.operate').addClass("login");
        
        $('.gameBox.liveBox li').attr('onclick',"callLive()");
        $('.gameBox.sportBox li').attr('onclick',"callSport()");
        $('.gameBox.lotteryBox li').attr('onclick',"callLottery()");

        $('.gameBox.hotBox li').attr('onclick',"window.location.href='./html/slotPage.html'");
        $('.gameBox.slotBox li').attr('onclick',"window.location.href='./html/slotPage.html'");
        $(".gameBox.fishBox li").attr('onclick',"window.location.href='./html/fishPage.html'");
        $(".gameBox.boardBox li").attr('onclick',"window.location.href='./html/boardPage.html'");

        $('.operate button:eq(0)').attr('onclick',"window.location.href='./html/deposit.html'");
        $('.operate button:eq(1)').attr('onclick',"window.location.href='./html/transfer.html'");
        $('.operate button:eq(2)').attr('onclick',"window.location.href='./html/withdrawal.html'");
        $('.operate button:eq(3)').attr('onclick',"window.location.href='./html/vip.html'");

        $('footer li:nth-of-type(2)').attr('onclick',"window.location.href='./html/event.html'");
        $('footer li:nth-of-type(3)').attr('onclick',"window.location.href='./html/wallet.html'");
        $('footer li:nth-of-type(4)').attr('onclick',"window.location.href='./html/help_often_contact.html'");
        $('footer li:nth-of-type(5)').attr('onclick',"window.location.href='./html/member.html'");
    })
})
function callSport() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.sport').addClass('display');
}
function callLive() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.live').addClass('display');
}
function callFish() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.fish').addClass('display');
}
function callLottery() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.lottery').addClass('display');
}
function callBoard() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.board').addClass('display');
}
function callSlot() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.slot').addClass('display');
}

//slotPage .gameBox .love
$(function(){
    $('.slotWrap .gameBox .love').click(function(){
        $(this).toggleClass('active');
    })
})
//slotPage .slotHeader切換
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//walletWrap btnBox
$(function(){
    $('.walletWrap .btnBox button:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forActive').addClass('display');
        $('.walletList .forActive').siblings().removeClass('display');
    })

    $('.walletWrap .btnBox button:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forHistory').addClass('display');
        $('.walletList .forHistory').siblings().removeClass('display');
    })

    $('.walletWrap .btnBox button:nth-of-type(3)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forPlatform').addClass('display');
        $('.walletList .forPlatform').siblings().removeClass('display');
    })
})
//walletWrap openBtn
$(function(){
    $('.walletWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//member opLang
$(function(){
    $('.memberWrap .opLang').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.langWindow').addClass('display');
    })

    $('.langWindow li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.lang_tw').addClass('active');
        $('.lang_ch').removeClass('active');
        $('.filter').removeClass('display');
    })
    $('.langWindow li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.lang_tw').removeClass('active');
        $('.lang_ch').addClass('active');
        $('.filter').removeClass('display');
    })
})

//help
function backToPage(){
    $("header .helpPage").removeClass("display");
    $("header .helpPage:eq(0)").addClass("display");

    $(".helpInner").removeClass("display");
    $(".helpWrap").addClass("display");
}
$(function(){
    $(".helpInner li:not(.csq3)").click(function(){
        $(this).toggleClass("active");
    })

    $(".helpBody li:eq(0)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q1").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q1").addClass("display");
    })

    $(".helpBody li:eq(1)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q2").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q2").addClass("display");
    })

    $(".helpBody li:eq(2)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q3").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q3").addClass("display");
    })

    $(".helpBody li:eq(3)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q4").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q4").addClass("display");
    })

    $(".helpBody li:eq(4)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q5").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q5").addClass("display");
    })

    $(".helpBody li:eq(5)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q6").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q6").addClass("display");
    })
    
    $(".helpBody li:eq(6)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q7").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q7").addClass("display");
    })

    $(".helpBody li:eq(7)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q8").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q8").addClass("display");
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".eventApplyType li:eq(0)").click(function(){
        $(".applyRecord,.applyList").removeClass("display");
        $(".applyList.choose").addClass("display");
    })
    $(".eventApplyType li:eq(1)").click(function(){
        $(".applyRecord,.applyList").removeClass("display");
        $(".applyList.already").addClass("display");
    })
    $(".eventApplyType li:eq(2)").click(function(){
        $(".applyList").removeClass("display");
        $(".applyRecord").addClass("display");
    })

    $(".applyRecord .bigBtn button").click(function(){
        $(".reviewBody .noData").removeClass("display");
        $(".reviewBody .recordBox").addClass("display");
    })

    $(".applyRecord .btnBox button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".reviewBody .noData").addClass("display");
        $(".reviewBody .recordBox").removeClass("display");
    })
})

//個人資料頁
$(function(){
    $(".memberInfo .chBtn").click(function(){
        $(".memberInfo form ul li:not(:nth-of-type(2)) input")
        .toggleClass("active")
        .css("pointer-events","auto");

        $(".memberInfo form ul li:nth-of-type(2)")
        .toggleClass("active");

        $('button').toggleClass("display");
    })
})

//vip
$(function(){
    $(".checkPoint button").click(function(){
        $($(this).prev().children()).toggleClass("display");
    })
})

//mail
$(function(){
    $("header .editBtn").click(function(){
        $(".editBox,.detailBtn.edit").addClass("display");
        $(".editBtn").removeClass("display");
        $(".mailBox").addClass("editing");
    })
    $("header .detailBtn.edit").click(function(){
        $(".editBox,.detailBtn.edit").removeClass("display");
        $(".editBtn").addClass("display");
        $(".mailBox").removeClass("editing");
    })

    $(".topList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".topList li:eq(0)").click(function(){
        $(".mailBody.normal").addClass("display");
        $(".mailBody.post").removeClass("display");
        $("header .editBtn").addClass("display");
    })
    $(".topList li:eq(1)").click(function(){
        $(".mailBody.normal").removeClass("display");
        $(".mailBody.post").addClass("display");
        $("header .editBtn").removeClass("display");
    })


    $(".mailBody .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active"); 
    })
    $(".mailBody.normal .subClass li:eq(0)").click(function(){
        $(".mailBox.system").addClass("display");
        $(".mailBox.personal").removeClass("display");
    })
    $(".mailBody.normal .subClass li:eq(1)").click(function(){
        $(".mailBox.system").removeClass("display");
        $(".mailBox.personal").addClass("display");
    })
    $(".mailBody.post .subClass li:eq(0)").click(function(){
        $(".mailBox.hot").addClass("display");
        $(".mailBox.hot").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(1)").click(function(){
        $(".mailBox.nor").addClass("display");
        $(".mailBox.nor").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(2)").click(function(){
        $(".mailBox.dep").addClass("display");
        $(".mailBox.dep").siblings().removeClass("display");
    })
})

//bettingRecord + dealRecord
$(function(){
    $(".searchContent .check").click(function(){
        $(this)
        .closest('.searchContent')
        .addClass('active');
        $(".noData").removeClass("display");
        $(".recordBox").addClass("display");
    })

    $(".searchContent .date button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".noData").addClass("display");
        $(".recordBox").removeClass("display");
    })
})

//betRecord
$(function(){
    $('.bettingWrap .list .recordBox ul').click(function(){
        $(this)
        .toggleClass('active')
        .parents()
        .toggleClass('active');
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".depList li:eq(0)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.card").addClass("display");
    })
    $(".depList li:eq(1)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.atm").addClass("display");
    })
    $(".depList li:eq(2)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.shop").addClass("display");
    })

    $(".depContent.card .check").click(function(){
        $(".depList,.depContent").removeClass("display");
        $(".depContent.already").addClass("display");
    })
    $(".depContent.already .change").click(function(){
        $(".depContent").removeClass("display");
        $(".depList,.depContent.card").addClass("display");
    })
})

//transWrap
$(function(){
    $(".transWrap .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".transWrap .subClass li:eq(0)").click(function(){
        $(".transWrap .forActive").addClass("display");
        $(".transWrap .forPlatform").removeClass("display");
    })
    $(".transWrap .subClass li:eq(1)").click(function(){
        $(".transWrap .forActive").removeClass("display");
        $(".transWrap .forPlatform").addClass("display");
    })

    $('.transWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//withWrap
$(function(){
    $(".withWrap .walletBox .check").click(function(){
        $(".walletDetail").toggleClass("active");
    })

    $('.withWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})