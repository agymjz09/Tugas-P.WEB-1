    let Nsepeda = document.getElementById("A");
    let Jsepeda = document.getElementById("B");
    let pabrikan = document.getElementById("C");
    let stok = document.getElementById("D");
    let jual = document.getElementById("E");
    let produksi = document.getElementById("F");
    let submit = document.getElementById("submit").addEventListener('click', function(){
        if (Nsepeda.value == '' && Jsepeda.value == '' && pabrikan.value == '' && stok.value == '' && jual.value == '' && produksi.value == ''){
            swal("Opps", "Data Tidak Boleh Kosong", "error")
        }
        else if (Nsepeda.value == ''){
            swal("Opps", "Nama Sepeda Masih Kosong", "error")
        }
        else if (Jsepeda.value == ''){
            swal("Opps", "Jenis Sepeda Masih Kosong", "error")
        }
        else if (pabrikan.value == ''){
            swal("Opps", "Pabrikan Masih Kosong", "error")
        }
        else if (stok.value == ''){
            swal("Opps", "Stok Masih Kosong", "error")
        }
        else if (jual.value == ''){
            swal("Opps", "Jual Masih Kosong", "error")
        }
        else if (produksi.value == ''){
            swal("Opps", "Tahun Produksi Masih Kosong", "error")
        }
        
        else {
            swal("Save", "Data Tersimpan", "success").then(function() {
                window.location.href = 'form.html';
            });
        }
    })

    