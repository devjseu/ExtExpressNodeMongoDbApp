Ext.define('DevJS.lib.form.field.VTypes', {

    pin: /(?!(.)\1\1).{3}/,
    digits: /[0-9]+$/,

    init: function () {
        var me = this;

        //pin number
        this.pinFn();
        //only digits
        this.digitsFn();
        //etc..
    },
    pinFn:function () {
        var me = this;

        Ext.apply(Ext.form.field.VTypes, {
            pin:function (val, field) {
                //check value
                return me.pin.test(val);
            },
            pinText: 'Characters cannot be identical'
        });
    },
    digitsFn:function () {
        var me = this;

        Ext.apply(Ext.form.field.VTypes, {
            digits:function (val, field) {
                //check value
                return me.digits.test(val);
            },
            digitsText: 'Only numbers are allowed'
        });
    }
});