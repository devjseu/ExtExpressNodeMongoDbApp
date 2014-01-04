Ext.define('DevJS.store.Users', {
    extend: 'Ext.data.Store',
    model: 'DevJS.model.User',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});