Ext.define('DevJS.controller.Users', {
    extend: 'Ext.app.Controller',

    views:[
        'users.List',
        'users.Add'
    ],

    stores:[
        'Users'
    ],

    refs: [
        {
            ref: 'UsersList',
            selector: 'usersList'
        },
        {
            ref: 'UsersAdd',
            selector: 'usersAdd'
        }
    ],

    init: function () {
        var me = this;

        this.control({
            'usersList > toolbar > button#add': {
                click: me.onUsersAddClick
            },
            'usersList':{
                removeRow: me.removeRow
            },
            'usersAdd > form > button#save': {
                click: me.onUsersAddSaveClick
            },
            'usersAdd > form > button#cancel': {
                click: me.onUsersAddCancelClick
            }
        });
    },
    removeRow: function(grid, rowIndex, colIndex){
        //ask user about removing
        Ext.Msg.confirm('Confirm', 'Remove?', function(button) {
            if (button === 'yes') {
                grid.getStore().removeAt(rowIndex);
            }
        });
    },
    onUsersAddCancelClick: function(button, e, eOpts) {
        this.getUsersAdd().destroy();
    },
    onUsersAddSaveClick: function(){
        var me = this, form = me.getUsersAdd().down('form').getForm(), rec;

        if(form.isValid())
        {
            form.updateRecord();
            rec = form.getRecord();
            me.getUsersList().getStore().add(rec);

            me.getUsersAdd().destroy();
        }
    },
    onUsersAddClick: function(){
        var me = this, window = Ext.widget('usersAdd');

        window.show();
        window.down('form').getForm().loadRecord(new DevJS.model.User());
    }
});