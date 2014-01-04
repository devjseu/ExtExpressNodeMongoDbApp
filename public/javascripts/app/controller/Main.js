Ext.define('DevJS.controller.Main', {
    extend: 'Ext.app.Controller',

    views:[
        'Filter'
    ],

    init: function () {
        var me = this;

        this.control({
            'filter-form': {
                'getLogin': me.getLogin
            }
        });
    },
    getLogin: function(component){
        var button = component.down('button[name=filter]');

        console.log(button.prev('textfield[name=login]').getValue())
    }
});
