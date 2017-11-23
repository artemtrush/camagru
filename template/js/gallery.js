
const G = (function () {
    return {
        image_last: 0,
        ajax_router: '/template/js/ajax.router.php'
    };
}());

G.initialization = function () {
    G.getImages();
};

G.appendImage = function (path) {
    const container = document.getElementById('image_container');
    let img = document.createElement('img');
    img.src = path;
    container.appendChild(img);
};

G.getImages = function() {
    const button = document.getElementById('more_button');
    button.style.display = 'none';

    const request = new XMLHttpRequest();
    let params = 'model=gallery&function=getImages' +
                '&image_last=' + G.image_last +
                '&id=' + G.id;
    request.open('POST', G.ajax_router);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(params);

    request.onload = function()
    {
        let btn_enabled = true;
        if (!request.responseText.match(/.*false$/))
        {
            let array = JSON.parse(request.responseText);
            if (array[0] > 0)
                G.image_last = array[0];
            else
                btn_enabled = false;
            for (let i = 1; i < array.length; i++)
                G.appendImage(array[i].path);
        }
        else
        {
            console.log('getImages error');
        }
        if (btn_enabled)
            button.style.display = 'block';
    }
};