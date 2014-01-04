Ext.define('DevJS.view.users.Add', {
    extend: 'Ext.window.Window',
    alias: 'widget.usersAdd',

    height: 225,
    width: 369,
    resizable: false,
    title: 'Add user',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 20,
                    title: '',
                    defaults: { // defaults are applied to items, not the container
                        allowBlank: false,
                        allowOnlyWhitespace: false,
                        msgTarget: 'side',
                        xtype: 'textfield',
                        anchor: '100%'
                    },
                    items: [
                        {
                            fieldLabel: 'Login',
                            name: 'login',
                            minLength: 4
                        },
                        {
                            fieldLabel: 'First Name',
                            name: 'firstName'
                        },
                        {
                            fieldLabel: 'Last Name',
                            name: 'lastName'
                        },
                        {
                            fieldLabel: 'Email',
                            name: 'email',
                            vtype: 'email'
                        },
                        {
                            fieldLabel: 'PIN Number',
                            name: 'pin',
                            minLength: 4,
                            maxLength: 4,
                            vtype: ['pin', 'digits']
                        },
                        {
                            xtype: 'button',
                            anchor: 0,
                            itemId: 'save',
                            text: 'Save'
                        },
                        {
                            xtype: 'button',
                            anchor: 0,
                            itemId: 'cancel',
                            text: 'Cancel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});