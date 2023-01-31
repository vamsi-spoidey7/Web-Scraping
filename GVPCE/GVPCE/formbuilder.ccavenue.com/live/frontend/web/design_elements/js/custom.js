//eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if(e.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
}

const disableDevtools = callback => {
    const original = Object.getPrototypeOf;
  
    Object.getPrototypeOf = (...args) => {
      if (Error().stack.includes("getCompletions")) callback();
      return original(...args);
    };
  };
  
  disableDevtools(() => {
    console.error("devtools has been disabled");
    while (1);
  });

//console.log(window.devtools.isOpen);
//orientationElement.textContent = window.devtools.orientation ? window.devtools.orientation : '';
var interval = '';
// window.addEventListener('devtoolschange', event => {
//     if(event.detail.isOpen == true){
//         interval = setInterval(function(){ 
//             alert("Please close inspect element"); 
//         }, 1000);
//     }else{
//         clearInterval(interval);
//     }
// });

$('.select-style').select2({
	 minimumResultsForSearch: -1,
	 dropdownAutoWidth : true,
	 width: '100%',
}); 


function setupLabel() {
    if ($('.label_check input').length) {
        $('.label_check').each(function(){ 
            $(this).removeClass('c_on');
        });
        $('.label_check input:checked').each(function(){ 
            $(this).parent('label').addClass('c_on');
        });                
    };
    if ($('.label_radio input').length) {
        $('.label_radio').each(function(){ 
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function(){ 
            $(this).parent('label').addClass('r_on');
        });
    };
};
$(document).ready(function(){
    $('.label_check, .label_radio').click(function(){
        setupLabel();
    });
    setupLabel(); 
    $(".registerTab-nav li a").click(function(){
        var open_id = $(this).attr("id");
        if($("."+open_id).is(":visible"))
        {

        }
        else
        {
            $(".registerTab-nav li").removeClass("active");
            $(this).parent("li").addClass("active");
            $(".registerTab .tabDetail").hide();
            $(".registerTab ." + open_id).show();
        }
    });
});

function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode;
    // console.log($(obj).val().indexOf('.'));
    // if($(obj).val() && $(obj).val().indexOf('.') == -1){
    //    return false;
    // }

    if(charCode == 46)
        return true;

    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function blockSpecialChar(e) {
    var k = e.keyCode;
    return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8  || k == 32 || (k >= 48 && k <= 57));

}