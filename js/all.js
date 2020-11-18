$(document).ready(function(){
    $('.Quiz').hide();
    $('.Quiz-Start a').on('click', function(e){
        e.preventDefault();
        $(this).parent().fadeOut(1000);
        $(this).parent().next().fadeIn(1000);
    });
    $('.select-Btn').each(function(){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.select-Btn').removeClass('btn-light').addClass('btn-outline-light');
            $(this).removeClass('btn-outline-light').addClass('btn-light');
        });
    });
    $('.confirm-Btn').on('click', function(e){
        e.preventDefault();
        var target = $('.select-Btn.btn-light');
        console.log(target.text());

        var Quiz = $(this).parent().parent();
        if(target.data('ans') == '1'){
            target.removeClass('btn-light').addClass('btn-success');
            Quiz.delay(500).fadeOut(1000);
            Quiz.next().delay(500).fadeIn(1000);
        }else if(target.data('ans') == '0'){
            target.removeClass('btn-light').addClass('btn-danger');
            Quiz.delay(500).fadeOut(1000);
            $('#Lose').delay(500).fadeIn(1000);
        }else if(target.data('ans') == '2'){
            target.removeClass('btn-light').addClass('btn-success');
            Quiz.delay(500).fadeOut(1000);
            $('#Win2').delay(500).fadeIn(1000);
        }else if(target.data('ans') == '3'){
            target.removeClass('btn-light').addClass('btn-success');
            Quiz.delay(500).fadeOut(1000);
            $('#Win3').delay(500).fadeIn(1000);
        }
    })
    $('#Lose a').on('click', function(e){
        e.preventDefault();
        var target1 = $('.select-Btn.btn-success');
        var target2 = $('.select-Btn.btn-danger');
        target1.removeClass('btn-success').addClass('btn-outline-light');;
        target2.removeClass('btn-danger').addClass('btn-outline-light');;
        $('#Lose').fadeOut(1000);
        $('.Quiz-Start').fadeIn(1000);
    })
    $('#Win2 a, #Win3 a').on('click', function(e){
        e.preventDefault();
        var target1 = $('.select-Btn.btn-success');
        var target2 = $('.select-Btn.btn-danger');
        target1.removeClass('btn-success').addClass('btn-outline-light');;
        target2.removeClass('btn-danger').addClass('btn-outline-light');;
        $('#Win2, #Win3').fadeOut(1000);
        $('.Quiz-Start').fadeIn(1000);
    })
});





