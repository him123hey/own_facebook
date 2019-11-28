$(document).ready(function(){
    database.collection("HW03").get().then((data) =>{
        console.log(data);
        var result = "";
        data.forEach(element => {
            result +=`
    
            <div class="card  mt-5 shadow-lg">
                <div class="card-header">
                    <img src="${element.data().profile}" class="img-fluid rounded-circle" width="50" height="50" style="border-radius:50%">
                    ${element.data().name}
                    <button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#myModal${element.id}">View</button>

                    <!-- The Modal -->
                    <div class="modal" id="myModal${element.id}">
                    <div class="modal-dialog">
                    <div class="modal-content">
      
                    <!-- Modal Header -->
                    <div class="modal-header">
                        <img src="${element.data().profile}" class="img-fluid rounded-circle" width="50" height="50" style="border-radius:50%">
                        ${element.data().name}
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
        
                    <!-- Modal body -->
                    <div class="modal-body">
                        <img src="${element.data().post}" class="img-fluid img-thumbnail">
                    </div>
        
                    <!-- Modal footer -->
                       <p class="m-3"> ${element.data().text}</p>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
        
                    </div>
                    </div>
                    </div>
                <div class="card-body">
                    <img src="${element.data().post}" class="img-fluid img-thumbnail">
                    ${element.data().text}
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger float-right" id="delete" type="button" onclick="deleteUser('${element.id}')">Delete</button>
                </div>
            </div>
           

            `
        });
        $("#result").append(result);
    });
    $('#add').on('click', function(){
        var name = $("#name").val();
        var profile = $("#profile").val();
        var post = $("#post").val();
        var text = $("#text").val();

        database.collection("HW03").add({
            name:name,
            profile:profile,
            post:post,
            text:text,
        });
        $("#name").val("");
        $("#profile").val("");
        $("#post").val("");
        $("#text").val("");
    });
});
function deleteUser(id) {
    database.collection('HW03').doc(id).delete();
}