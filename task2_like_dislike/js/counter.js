
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        document.getElementById('like').addEventListener("click",function(){
        var count = document.getElementById('likeCounter').innerHTML;
        count = count || 0;
        count++;
        document.getElementById('likeCounter').innerHTML = count;
        });
        
        document.getElementById('dislike').addEventListener("click",function(){
        var count = document.getElementById('dislikeCounter').innerHTML;
        count = count || 0;
        count++;
        document.getElementById('dislikeCounter').innerHTML = count;
        });
    }
};

