Ext.define('DevJS.view.users.List', {
    extend: 'Ext.grid.Panel',

    xtype: 'usersList',
    title: 'Moduł użytkowników',

    viewConfig: {
        enableTextSelection: true,
        stripeRows: true
    },

    store: 'Users',

    initComponent: function () {
        var me = this,
            rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2
        }),
            rowMenu = Ext.create('Ext.menu.Menu', {
            height: 58,
            width: 140,
            items: [{
                text: 'Edit',
                iconCls: 'button-edit'
            }, {
                text: 'Remove',
                iconCls: 'button-remove',
                handler: function(){
                    me.fireEvent('removeRow', this);
                }
            }]
        });

        this.listeners = {
            itemcontextmenu: function(view, record, item, index, e){
                e.stopEvent();
                rowMenu.showAt(e.getXY());
            }
        };

        this.plugins = [rowEditing];
        this.selType = 'rowmodel';

        this.dockedItems = [
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'add',
                        text: 'Add user'
                    },
                    {
                        xtype: 'container',
                        flex: 1
                    }
                ]
            },
            {
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                width: 360,
                displayInfo: true,
                store: 'Users'
            }
        ];

        this.columns = [
            { text: 'Id', dataIndex: '_id', hidden: true },
            {
                text: 'Login',
                dataIndex: 'login',
                editor: {
                    allowBlank: false
                }
            },
            {
                xtype: 'actioncolumn',
                menuText: 'Password',
                flex: 0.1,
                items: [
                    {
                        handler: function(view, rowIndex, colIndex, item, e, record, row) {
                            //open window to generate password and send via mail
                        },
                        iconCls: 'button-edit',
                        tooltip: 'Edit User Password'
                    }
                ],
                text: 'Password'
            },
            {
                text: 'Email',
                dataIndex: 'email',
                flex: .5,
                editor: {
                    allowBlank: false
                }
            },
            {
                text: 'First Name',
                dataIndex: 'firstName',
                flex: .5,
                editor: {
                    allowBlank: false
                }
            },
            {
                text: 'Surname',
                dataIndex: 'lastName',
                flex: .5,
                editor: {
                    allowBlank: false
                }
            },
            {
                xtype: 'actioncolumn',
                width: 50,
                items: [
                    {
                        iconCls: 'button-edit',
                        tooltip: 'Edit',
                        handler: function (grid, rowIndex, colIndex) {
                            this.up('grid').fireEvent('editRow', grid, rowIndex, colIndex);
                        }
                    },
                    {
                        iconCls: 'button-remove',
                        tooltip: 'Remove',
                        handler: function (grid, rowIndex, colIndex) {
                            this.up('grid').fireEvent('removeRow', grid, rowIndex, colIndex);
                        }
                    }
                ]
            }
        ];

        //parent
        this.callParent(arguments);
    }
});