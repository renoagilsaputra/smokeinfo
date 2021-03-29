function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#img-preview').attr('src', e.target.result);
            $('#img-preview').attr('height','150px');
        }
        reader.readAsDataURL(input.files[0]);
    }
}
 $("#form-file").change(function() {
    readURL(this);
});
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#img-preview2').attr('src', e.target.result);
            $('#img-preview2').attr('height','150px');
        }
        reader.readAsDataURL(input.files[0]);
    }
}
 $("#form-file2").change(function() {
    readURL2(this);
});

$('.delete-confirm').on('click', function (event) {
    event.preventDefault();
    const url = $(this).attr('href');

    Swal.fire({
        title: 'Apakah kamu yakin?',
        text: "Hapus data ini!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus aja!'
      }).then((result) => {
        if (result.value) {
            window.location.href = url;
        }
      })
});

CKEDITOR.replace('ckeditor');

function printContent(e) {
    let printContents = document.getElementById(e).innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
	window.print();
	document.body.innerHTML = originalContents;
}
