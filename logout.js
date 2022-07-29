let logout = document.getElementById("logout").addEventListener('click', function(){
    swal({
    title: "APA ANDA YAKIN INGIN LOG OUT?",
    text: "Anda Akan Kembali Ke Halaman Log In",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("ANDA TELAH KEMBALI KE HALAMAN LOG IN", {
        icon: "success",
      }).then(function() {
        window.location.href="index.html"
      })
    } else {
      swal("ANDA BATAL KE HALAMAN LOG IN");
    }
  });
})