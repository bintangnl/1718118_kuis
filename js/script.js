function CariData() {

    $('#masak').html('');
    $.ajax({
        "url": "https://masak-apa.tomorisakura.vercel.app",
        "type": "get",
        "dataType": "json",
        "data": {
            
            "print": "key",
            "name": $('#text-cari').val()
        },
        success: function (masak) {
            console.log(masak);

        }
    })
}
