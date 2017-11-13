function taoBang(){
  var socotID = document.getElementById('soCot');
  var sodongID = document.getElementById('soDong');

  //Not A Number Nan
  if (isNaN(socotID.value) || isNaN(sodongID.value)) {
    alert("vui long nhap so nguyen!");
    return false;
  } else {
    // tao taotable
    /*<table>
        <tr>
          <td> </td>
          <td> </td>
        </tr>
      </table>
    */

    // lay the div de tao table
    var divID = document.getElementById('container');
    // lay so dong va so cot nguoi dung nhap vao
    var socot = parseInt(socotID.value);
    var sodong = parseInt(sodongID.value);

    //tao the taotabl
    var tagTable = document.createElement('table');
    tagTable.border = 1;

    for (i = 0; i < sodong; i++) {
      //tao the dong
      var tagTR = document.createElement("tr");
      tagTable.appendChild(tagTR);
      //Tao Cot
      for (j = 0; j < socot; j++) {
        var tagTD = document.createElement("td");
        var textNode = document.createTextNode(i + j);
        tagTD.appendChild(textNode);
        tagTR.appendChild(tagTD);
      }
    }
    divID.appendChild(tagTable);
    return true;
  }
}
