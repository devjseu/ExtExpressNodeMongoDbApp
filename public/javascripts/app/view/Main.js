Ext.define('DevJS.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.Panel',
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;

        this.items = [
            {
                region: 'west',
                xtype: 'panel',
                title: 'Menu',
                width: 150
            },
            {
                region: 'center',
                xtype: 'tabpanel',
                items: [
                    {
                        xtype: 'users-list'
                    }
                ]
            }
        ]

        //parent
        this.callParent(arguments);
    }
});