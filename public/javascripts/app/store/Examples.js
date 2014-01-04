Ext.define('DevJS.store.Examples', {
    extend : 'Ext.data.Store',
    requires : [
        'DevJS.model.Example'
    ],
    model : 'DevJS.model.Example',
    storeId : "Examples",
    autoLoad : true,
    autoSync: true,
    proxy : {
        type : 'direct',
        api : {
            //crud here
        },
        reader : {
            type : 'json',
            root: 'Example'
        }
    }
});