// $(document).ready(function() {
//   $('#loadAjax').click(function() {
//     $.ajax({
//       type: 'GET',
//       url: "http://sv.myclass.vn/api/movie/getmovie",
//       cache: 'false',
//       success: function(ketqua) {
//         console.log(ketqua);
//         var content = "";
//         //var lstCauHoi = $(dataxml).find("Cauhoi");
//         for (var i = 0; i < ketqua.length; i++) {
//           content += '<div class="movie col-4"><div class="card"><img class="card-img-top" src="http://sv.myclass.vn/images/movies/' + ketqua[i].Image;
//           content += '" alt="' + ketqua[i].Title + '"> <div class="card-body"><h4 class="card-title">' + ketqua[i].Title;
//           content += '</h4> <p class="card-text">' + ketqua[i].Description + '</p> <a href="#" class="btn btn-primary text-center" data-toggle="modal" data-target="#Trailer">Xem Trailer</a></div></div></div>';
//         }
//         $("#movies").html(content);
//       },
//       error: function(parsejson, textStatus, errorThrown) {
//         $('body').append(
//           "parsejson status: " + parsejson.status + '</br>' +
//           "errorStatus: " + textStatus + '</br>' +
//           "errorThrown: " + errorThrown);
//       }
//     });
//   });

//   $('#trailer').click(function() {
//     $.ajax({
//       type: 'GET',
//       url: "http://sv.myclass.vn/api/movie/getmovie",
//       cache: 'false',
//       success: function(ketqua) {
//         console.log(ketqua);
//         var content = "";
//         //var lstCauHoi = $(dataxml).find("Cauhoi");
//         for (var i = 0; i < ketqua.length; i++) {
//           $('#exampleModalLabel').text(ketqua[i].Title);
//           $("#youtubeVid")[0].src += "&autoplay=1";
//           ketqua[i].preventDefault();
//         }
//         $("#movies").html(content);
//       },
//       error: function(parsejson, textStatus, errorThrown) {
//         $('body').append(
//           "parsejson status: " + parsejson.status + '</br>' +
//           "errorStatus: " + textStatus + '</br>' +
//           "errorThrown: " + errorThrown);
//       }
//     });
//   });
// });

$("#loadAjax").click(function () {
            $.ajax({
                type: 'GET',
                url: 'http://sv.myclass.vn/api/movie/getmovie',
                cache: 'false',
                success: function (result) {
                    var content = "";
                    var modal = "";
                    for (var i = 0; i < result.length; i++) {
                        content += '<div class="movie col-4"><div class="card"><img class="card-img-top" src="http://sv.myclass.vn/images/movies/' + result[i].Image;
                        content += '" alt="' + result[i].Title + '"><div class="card-body"><h4 class="card-title">' + result[i].Title;
                        content += '</h4><p class="card-text">' + result[i].Description + "</p>";
                        content += '<a href="#" class="trailer btn btn-primary text-center" data-toggle="modal" data-target="#' + result[i].ID + '">Xem Trailer</a></div></div></div>';
                        modal += '<div class="modal fade" id="' + result[i].ID + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-lg" role = "document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + result[i].Title + '</h5></div>';
                        modal += '<div class="modal-body"><figure><iframe id="trailer" width="560" height="315" src="' + result[i].TrailerURI + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></figure></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>';
                    }
                    $("#movies").html(content);
                    $("#modal").html(modal);
                },
                error: function (parsedJson, textStatus, errorThrown) {
                    $('body').append(
                        "parsedJson status: " + parsedJson.status + "<br>" +
                        "errorStatus: " + textStatus + "<br>" +
                        "errorThrown: " + errorThrown
                    );
                },
            });
    });
