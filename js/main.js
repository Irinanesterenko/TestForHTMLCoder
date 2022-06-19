jQuery(function() { 
    $('.menu_1,.menu_2,.menu_3').select2();
    $('#test_table').DataTable({
        "pagingType": "full_numbers_no_ellipses",
        "searching": false,
        "lengthMenu": false,
        "lengthChange": false,
        "orderClasses": false,
        "info": false,
        lengthMenu: [ [5, 10, 15, "All"]],
        pageLength: 9,
        columnDefs: [
                { targets: [2, 3], orderable: true},
                { targets: '_all', orderable: false }
            ],
    });

    $( "tr" ).removeClass( "odd" );
         
    $(".menu_1").select2({
        placeholder: "Bulk actions",
        allowClear: true
    });    
    $(".menu_2").select2({
        placeholder: "Select a category",
        allowClear: true
    });  


    $(".menu_3").select2({
        placeholder: "Filter by stock status",
        allowClear: true
    });  
     
});


