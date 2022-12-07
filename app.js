var card_svg = `<abbr title="view">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
</svg>
</abbr>
<abbr title="download">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
</svg>
</abbr>
<abbr title="edit">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
</svg>
</abbr>`;
//document.querySelector('.card-svg').innerHTML =card_svg;
/*var jason_data_link = 'app/assets/jasonlist.json';
function data_fetch(data_link){
    fetch(data_link).then(response => {
       return response.json();
    })
    .then(jsondata => {
        return jsondata;
    })
    .then(function(data){
        console.log(data.product.length);
        for (const key in data.product) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                console.log(element);
            }
        }
    })
    .catch(function(err){
        console.log(err);
    });
}
data_fetch(jason_data_link); */
document.querySelector('.card-play-js').addEventListener('click',link_out);
function link_out(e){
    var data_id = e.target.getAttribute('data-id');
    console.log(data_id);
    switch(data_id){
        case "editor":
            var target_Link = e.target.getAttribute('data-link');
            if(target_Link != null){
                console.log(target_Link);
                var obj = {
                   "url":target_Link
                };
                var obj_atob = JSON.stringify(obj);
                window.localStorage.setItem("ifram_link",obj_atob);
                var link_a = document.createElement("a");
                link_a.setAttribute("href",'/public/editor/index.html');
                link_a.setAttribute("target","_blank");
                link_a.click();
                /*window.history.pushState({},' ',target_Link);
                window.location.replace('/public/editor/index.html'); */
            }else{
                console.log("that is null");
            }
            break;
        default:
            console.log("that is null");
        break;
    }
}

