$( document ).ready(function() {
    var cnt = 0;
    $(".item1").click(function (){
        clickAnimation(".item1", cnt++)
    });
    $(".item2").click(function (){
        clickAnimation(".item2", cnt++)
    });
});

function clickAnimation (item, cnt){
    $(item).append(
        "<span class='cnt"+cnt+"'>+1</span>"
    );
    setTimeout(function() {
        $(".cnt"+cnt).remove();
    }, 1000);
}
