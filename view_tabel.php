<?php
//panggil file koneksi.php yang sudah anda buat
include "koneksi.php";
?>
<!doctype html public "-//W3C//DTD HTML 4.0 //EN">
<html>
<head>
       <title>data</title>
</head>
<body>
<h1 align="center"> Detail Data Tabel</h1>
<a href="index.php"><h3 align="left">kembali</h3></a>
    <table border="1" width="800" align="center">
       <thead>
       <tr>
           <th>Provinsi</th>
           <th>Kabupaten</th>
           <th>Kode Dagri</th>
           <th>Kecamatan</th>
           <th>Jumlah</th>
           <th>OPSI</th>
       </tr>
       </thead>

       <tbody>
<?php
//ambil data dari tb_produk dan tb_kategori  di database
$ambil = $conn->query("SELECT *FROM kepadatan"  );
$pecah=$ambil->fetch_assoc();
while($a=mysqli_fetch_array($ambil)){
    ?>
       <tr>
           <td><?php echo $a['provinsi'];?></td>
           <td><?php echo $a['kabupaten'];?></td>
           <td><?php echo $a['kodedagri'];?></td>
           <td><?php echo $a['kecamatan'];?></td>
           <td><?php echo $a['jml'];?></td>
           <td>
          <a href="edit.php?id=<?php echo $a['kodedagri'];?>" title="EDIT"><button>Edit</button>
        </td>
       </tr>
<?php
}
?>
</tbody>

</table>
<p align="center">Menampilkan data penduduk</p>
</body>
</html>