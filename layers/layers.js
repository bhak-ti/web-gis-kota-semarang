var wms_layers = [];
var format_ADM_KEC_KOTA_SEMARANG_250K_0 = new ol.format.GeoJSON();
var features_ADM_KEC_KOTA_SEMARANG_250K_0 = format_ADM_KEC_KOTA_SEMARANG_250K_0.readFeatures(json_ADM_KEC_KOTA_SEMARANG_250K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADM_KEC_KOTA_SEMARANG_250K_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ADM_KEC_KOTA_SEMARANG_250K_0.addFeatures(features_ADM_KEC_KOTA_SEMARANG_250K_0);var lyr_ADM_KEC_KOTA_SEMARANG_250K_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADM_KEC_KOTA_SEMARANG_250K_0, 
                style: style_ADM_KEC_KOTA_SEMARANG_250K_0,
    title: 'ADM_KEC_KOTA_SEMARANG_250K<br />\
    <img src="styles/legend/ADM_KEC_KOTA_SEMARANG_250K_0_0.png" />  300.0000 - 780.0000 <br />\
    <img src="styles/legend/ADM_KEC_KOTA_SEMARANG_250K_0_1.png" />  780.0000 - 1260.0000 <br />\
    <img src="styles/legend/ADM_KEC_KOTA_SEMARANG_250K_0_2.png" />  1260.0000 - 1740.0000 <br />\
    <img src="styles/legend/ADM_KEC_KOTA_SEMARANG_250K_0_3.png" />  1740.0000 - 2220.0000 <br />\
    <img src="styles/legend/ADM_KEC_KOTA_SEMARANG_250K_0_4.png" />  2220.0000 - 2700.0000 <br />'
        });

lyr_ADM_KEC_KOTA_SEMARANG_250K_0.setVisible(true);
var layersList = [lyr_ADM_KEC_KOTA_SEMARANG_250K_0];
lyr_ADM_KEC_KOTA_SEMARANG_250K_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'KODE_DAGRI': 'KODE_DAGRI', 'jml': 'jml', });
lyr_ADM_KEC_KOTA_SEMARANG_250K_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_DAGRI': 'TextEdit', 'jml': 'TextEdit', });
lyr_ADM_KEC_KOTA_SEMARANG_250K_0.set('fieldLabels', {'PROVINSI': 'inline label', 'KABUPATEN': 'inline label', 'KECAMATAN': 'inline label', 'KODE_DAGRI': 'inline label', 'jml': 'inline label', });
lyr_ADM_KEC_KOTA_SEMARANG_250K_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});