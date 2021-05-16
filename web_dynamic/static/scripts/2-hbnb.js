document.addEvetListener('DOMContentLoaded', (event) => {
    const amenityIDlist = [];
    const amenityDict = {};
    $('input:checkbox').click(function () {
      if ($(this).is(':checked')) {
        amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
        amenityIDlist = Object.keys(amenityDict);
        const vals = Object.values(amenityDict);
        $('DIV.amenities h4').append(vals);
      } else {
        delete amenityDict[$(this). attr('data-id')];
      }
    });
    $.ajax({
      type: 'Get',
      url: 'http://0.0.0.0:5001/api/v1/status/',
      success: function (data) {
        if (data.status === 'OK') {
          $('DIV#api_status').addClass('available');
        } else {
          $('DIV#api_status').removeClass('available');
        }
      }
    });
});