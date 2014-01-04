Ext.define('DevJS.lib.form.field.override.Text', {
    override: 'Ext.form.field.Text',

    getErrors: function(value) {
        var me = this,
            errors = me.callSuper(arguments),
            validator = me.validator,
            vtype = me.vtype,
            vtypes = Ext.form.field.VTypes,
            regex = me.regex,
            format = Ext.String.format,
            msg, trimmed, isBlank;

        value = value || me.processRawValue(me.getRawValue());

        if (Ext.isFunction(validator)) {
            msg = validator.call(me, value);
            if (msg !== true) {
                errors.push(msg);
            }
        }

        trimmed = me.allowOnlyWhitespace ? value : Ext.String.trim(value);

        if (trimmed.length < 1 || (value === me.emptyText && me.valueContainsPlaceholder)) {
            if (!me.allowBlank) {
                errors.push(me.blankText);
            }
            // If we are not configured to validate blank values, there cannot be any additional errors
            if (!me.validateBlank) {
                return errors;
            }
            isBlank = true;
        }

        // If a blank value has been allowed through, then exempt it dfrom the minLength check.
        // It must be allowed to hit the vtype validation.
        if (!isBlank && value.length < me.minLength) {
            errors.push(format(me.minLengthText, me.minLength));
        }

        if (value.length > me.maxLength) {
            errors.push(format(me.maxLengthText, me.maxLength));
        }

        switch(typeof vtype)
        {
            case 'string':
                if (!vtypes[vtype](value, me)) {
                    errors.push(me.vtypeText || vtypes[vtype +'Text']);
                }
                break;
            case 'object':
                Ext.Array.each(vtype, function(v){
                    if (!vtypes[v](value, me)) {
                        errors.push(me.vtypeText || vtypes[v +'Text']);
                    }
                });
                break;
        }

        if (regex && !regex.test(value)) {
            errors.push(me.regexText || me.invalidText);
        }

        return errors;
    }
});