//function arda


function arda(){

    $(".button").click(function(){
        
        var name = $('.name').val()
        var email = $('.email').val()
        var phone = $('.phone').val()

        if(name,email,phone < 1) {
            
            var hide = $('#form').find('.error').removeClass('hide')
            setTimeout(function(){

                hide.addClass('hide')

            },3000 )
            return false
        } else {

            var show = $('#form').find('.success').removeClass('hide')
            setTimeout(function(){

                hide.addClass('hide')

            },5000)

        }


        

    })

}

arda()


// modal image for portfolio

function modal(){

    var openImage1 = $('.search-blur1')
    var openImage2 = $('.search-blur2')
    var openImage3 = $('.search-blur3')
    var openImage4 = $('.search-blur4')
    var openImage5 = $('.search-blur5')
    var openImage6 = $('.search-blur6')
    var openImage7 = $(".search-blur7")
    var openImage8 = $(".search-blur8")
    var openImage9 = $(".search-blur9")
    var openImage10 = $(".search-blur10")
    var openImage11 = $(".search-blur11")
    var openImage12 = $(".search-blur12")


    var closeImage = $('.close')



    openImage1.click(function(){

        $('#mymodal').css('display','block')

    })
    openImage2.click(function(){

        $('#mymodal1').css('display','block')

    })
    openImage3.click(function(){

        $('#mymodal2').css('display','block')

    })
    openImage4.click(function(){

        $('#mymodal3').css('display','block')

    })
    openImage5.click(function(){

        $('#mymodal4').css('display','block')

    })
    openImage6.click(function(){

        $('#mymodal5').css('display','block')

    })

    openImage7.click(function(){

        $('#mymodal6').css('display','block')

    })

    openImage8.click(function(){

        $('#mymodal7').css('display','block')

    })

    openImage9.click(function(){

        $('#mymodal8').css('display','block')

    })

    openImage10.click(function(){

        $('#mymodal9').css('display','block')

    })

    openImage11.click(function(){

        $('#mymodal10').css('display','block')

    })

    openImage12.click(function(){

        $('#mymodal11').css('display','block')

    })


    closeImage.click(function(){

        $('.modal').css('display','none')

    })
    
}

modal();


// magnify show beginn!!!!
