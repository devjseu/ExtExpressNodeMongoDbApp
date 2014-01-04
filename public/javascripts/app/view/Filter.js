Ext.define('DevJS.view.Filter', {
    extend: 'Ext.form.Panel',

    xtype: 'filter-form',
    title: 'Filter',

    border: false,
    padding: 10,

    initComponent: function () {
        var me = this;

        this.items = [
            {
                xtype: 'textfield',
                name: 'login',
                fieldLabel: 'By login',
                labelWidth: 50
            },
            {
                xtype: 'button',
                name: 'filter',
                text: 'getLogin',
                handler: function()
                {
                    me.fireEvent('getLogin', me);
                }
            }
        ]

        //parent
        this.callParent(arguments);
    }
});