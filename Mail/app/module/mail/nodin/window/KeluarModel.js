Ext.define('Docs.view.nodin.window.KeluarModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.nodin-window-keluar',
    stores:{
        filenodin: {
            pageSize:5,
            autoLoad:true,
            fields: [
                {name: 'id', type:'string'}, 
                {name: 'tu_surat_id', type:'string'},  
                {name: 'nama_file', type:'string'},  
                {name: 'stored', type:'string'},  
                {name: 'key', type:'string'},  
                {name: 'id_pengguna', type:'string'},  
                {name: 'lokasi', type:'string'},  
               
                {name: 'created_at', type:'date'},  
                {name: 'created_by', type:'string'},  
                {name: 'edited_at', type:'date'},  
                {name: 'edited_by', type:'string'},  
                {name: 'deleted_at', type:'date'},  
                {name: 'deleted_by', type:'string'}
            ],

            proxy: {
                type: 'rest',
                timeout: 20000000,
                extraParams:{
                    uniquecode:'{uniquecode}'
                },
                api: {
                        create  : serverURL+'notadinas/file',
                        update  : serverURL+'notadinas/file',
                        destroy : serverURL+'notadinas/file'
                },        
                url: serverURL+'notadinas/file.json',
                reader: {
                      type: 'json',
                      rootProperty: 'data',
                      totalProperty: 'total'
                },
                writer: {
                      //encode: true,
                      type: 'json',
                      rootProperty: 'data'
                }
            }
        }
    }

});
