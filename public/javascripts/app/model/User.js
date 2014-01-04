Ext.define('DevJS.model.User', {
    extend: 'Ext.data.Model',

    proxy: {
        type: 'rest',
        url : '/users',
        reader: {
            type: 'json',
            root: 'User'
        }
    },

    fields: [
        {
            name: 'login'
        },
        {
            name: 'firstName'
        },
        {
            name: 'lastName'
        },
        {
            name: 'email'
        },
        {
            name: '_id',
            defaultValue: null
        }
    ]
});
