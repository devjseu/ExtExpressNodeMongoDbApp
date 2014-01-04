/**
 * DevJS App
 * @author lukasz.sudol <lukasz@devjs.eu>
 */

Ext.application({
    name: 'DevJS',
    appFolder: '/javascripts/app',

    requires: [
        'DevJS.lib.form.field.VTypes',
        'DevJS.lib.form.field.override.Text'
    ],

    views: [
        'users.List',
        'users.Add'
    ],

    controllers: [
        'Users'
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function(){
        Ext.create('DevJS.lib.form.field.VTypes').init();
    },

    autoCreateViewport: true
});

