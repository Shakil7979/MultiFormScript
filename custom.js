
var fromVal  = 0;

$(document).on('click','.sign_up_contiue',function(event){ 
    event.preventDefault(); 
    if(fromVal == 0){
        $('.sign_up_page1').hide();
        $('.sign_up_page2').show(); 
        fromVal = 1;  
    }
    else if (fromVal == 1){
        $('.sign_up_page2').hide();
        $('.sign_up_page3').show(); 
        fromVal = 2; 
    }
    else if (fromVal == 2){  
        var genderCheck  =  $("input[name='emotion']:checked").val();  
        $('.sign_up_page3').hide();
        if(genderCheck == 'male'){ 
            $('.sign_up_male').show();
        }else{ 
            $('.sign_up_female').show();
        } 
        fromVal = 3; 
    } 
});

$(document).on('click','.sign_up_prev',function(event){
    event.preventDefault();  
    if (fromVal == 3){
        $('.sign_up_page3').show();
        $('.sign_up_male').hide(); 
        $('.sign_up_female').hide(); 
        fromVal = 2; 
    }
    else if (fromVal == 2){
        $('.sign_up_page2').show();
        $('.sign_up_page3').hide(); 
        fromVal = 1; 
    }
    else if (fromVal == 1){
        $('.sign_up_page1').show();
        $('.sign_up_page2').hide();

        fromVal = 0;
 
    }
    else if (fromVal == 0){
        $('.sign_up_page1').show(); 
 
    }

    return false;
});
