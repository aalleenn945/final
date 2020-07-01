$(() => {
    // 當文件ready後執行
    $('.1-0-a').on('click', () =>{
        $('#1-0-a').fadeIn('slow');
      })

    $('.1-1').on('click', () =>{
        $('#1-1').fadeIn('slow');
      })

    $('.1-1-a').on('click', () =>{
        $('#1-1-a').fadeIn('slow');
        $('#1-1-b').fadeOut('slow');
      })
      
    $('.1-1-b').on('click', () =>{
        $('#1-1-b').fadeIn('slow');
        $('#1-1-a').fadeOut('slow');
      })

    $('.1-2').on('click', () =>{
        $('#1-2').fadeIn('slow');
      })

    $('.1-2-a').on('click', () =>{
        $('#1-2-a').fadeIn('slow');
        $('#1-2-b').fadeOut('slow');
      })
      
    $('.1-2-b').on('click', () =>{
        $('#1-2-b').fadeIn('slow');
        $('#1-2-a').fadeOut('slow');

      })

    $('.1-2-back').on('click', () =>{
        $('#1-2-a').fadeOut('slow');
      })

    $('.1-3').on('click', () =>{
        $('#1-3').fadeIn('slow');
      })

    $('.1-3-a').on('click', () =>{
        $('#1-3-a').fadeIn('slow');
        $('#1-3-b').fadeOut('slow');
      })
      
    $('.1-3-b').on('click', () =>{
        $('#1-3-b').fadeIn('slow');
        $('#1-3-a').fadeOut('slow');
      })
      
    $('.1-3-back').on('click', () =>{
        $('#1-3-b').fadeOut('slow');
      })

    $('.1-4').on('click', () =>{
        $('#1-4').fadeIn('slow');
      })

    $('.1-4-a').on('click', () =>{
        $('#1-4-a').fadeIn('slow');
        $('#1-4-b').fadeOut('slow');
      })
      
    $('.1-4-b').on('click', () =>{
        $('#1-4-b').fadeIn('slow');
        $('#1-4-a').fadeOut('slow');
      })

    $('.2-0').on('click', () =>{
        $('#2-0').fadeIn('slow');
        $('#2-1').fadeIn('slow');
      })

    $('.2-1-a').on('click', () =>{
        $('#2-1-a').fadeIn('slow');
        $('#2-1-b').fadeOut('slow');
      })
      
    $('.2-1-b').on('click', () =>{
        $('#2-1-b').fadeIn('slow');
        $('#2-1-a').fadeOut('slow');
      })

    $('.2-1-back').on('click', () =>{
        $('#2-1-a').fadeOut('slow');
      })

    $('.2-2').on('click', () =>{
        $('#2-2').fadeIn('slow');
      })

    $('.2-2-a').on('click', () =>{
        $('#2-2-a').fadeIn('slow');
        $('#2-2-b').fadeOut('slow');
      })
      
    $('.2-2-b').on('click', () =>{
        $('#2-2-b').fadeIn('slow');
        $('#2-2-a').fadeOut('slow');
      })

    $('.2-2-back').on('click', () =>{
        $('#2-2-a').fadeOut('slow');
      })

    $('.2-3').on('click', () =>{
        $('#2-3').fadeIn('slow');
      })

    $('.2-3-a').on('click', () =>{
        $('#2-3-a').fadeIn('slow');
        $('#2-3-b').fadeOut('slow');
      })
      
    $('.2-3-b').on('click', () =>{
        $('#2-3-b').fadeIn('slow');
        $('#2-3-a').fadeOut('slow');
      })

    $('.end').on('click', () =>{
        $('#end').fadeIn('slow');
      })

})

