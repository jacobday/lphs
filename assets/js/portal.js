function slicerPortal(url) {
    window.open("portal.html", "_self");
    localStorage.setItem("source", url);
}



$(document).ready(function() {
    var source = localStorage.getItem("source");
        $(".iframe").html('<iframe src="' + source + '"></iframe>');
	$("iframe").on("load", function() {
		append();
	});
    });

function append() {
	var $frame_body = $("iframe").contents().find("body");

	$frame_body
    		.prepend("<style>body,h2,td{font-family:\"Open Sans\",sans-serif;font-size:17px;color:#3d3d3d;margin:0;background-color:rgba(0,0,0,0)!important;}a{font-family:\"Open Sans\",sans-serif;font-size:17px;color:#1f1f1f;margin:0;}.topnavbar{display:none;}body>table>tbody>tr>td>table:first-of-type{display:none;}.footer{display:none;}.leftnavcell{display:none;}.PageTitle{text-align:center;font-size:1.3em;padding:20px;}*{text-align:center;background-image:none!important;}</style>")
}
