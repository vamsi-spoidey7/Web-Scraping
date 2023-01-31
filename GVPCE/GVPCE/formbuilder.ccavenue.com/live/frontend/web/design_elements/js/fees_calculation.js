(function( $ ) {
    "use strict";
    
    $(function() {
        $(document.body).delegate('[type="checkbox"][readonly="readonly"]', 'click', function(e) {
            e.preventDefault();
            return false;
        });
        $(document.body).delegate('[type="radio"][readonly="readonly"]', 'click', function(e) {
            e.preventDefault();
            return false;
        });
        $(".amount_calculation").bind("change keyup",function(){
            calculateFinalTotal();
        });

        /**
         * calculate final total of payment fields configure in form
         * @created by Mehul Jethloja
         */
        function calculateFinalTotal(){
            var final_total = 0;
            $("#final_total").val(final_total);
            //if(is_payment_configuration == 1)
            //{
                var field_name = {};
                var is_overide_fields = {};
                $(".amount_calculation").each(function(index){
                    
                    if(this.type == 'select-one'){
                        var svalue = $('option:selected', $(this)).attr('data-value');
                        if(checkPaymentConfigureFields(this.name) == false){
                            if($.isNumeric(svalue))
                                final_total = parseFloat(final_total) + parseFloat(svalue);
                        }
                        else{
                            var tmp = [];
                            tmp['label'] = $('option:selected', $(this)).text().toLowerCase();
                            tmp['value'] = svalue;
                            field_name[this.name] = tmp;
                        }
                    }
                    else if(this.type == 'number'){
                        if(checkPaymentConfigureFields(this.name) == false){
                            if(this.value && $.isNumeric(this.value)){
                                final_total = parseFloat(final_total) + parseFloat(this.value);
                            }
                        }
                    }
                    else if(this.type == 'radio'){
                        if($(this).prop('checked') == true){
                            var svalue = $(this).attr('data-value');
                            if(checkPaymentConfigureFields(this.name) == false){
                                if($.isNumeric(svalue))
                                    final_total = parseFloat(final_total) + parseFloat(svalue);
                            }else{
                                var tmp = [];
                                tmp['label'] = $(this).val().toLowerCase();
                                tmp['value'] = svalue;
                                field_name[this.name] = tmp;
                            }
                        }
                    }
                    else if(this.type == 'checkbox'){
                        if($(this).prop('checked') == true){
                            var name = $(this).attr('data-attr-field-name');
                            // check selected field has been payment configure field or not
                            if(checkPaymentConfigureFields(name) == false){
                                if($.isNumeric($(this).attr('data-value'))){
                                    final_total = parseFloat(final_total) + parseFloat($(this).attr('data-value'));
                                }
                            }
                            // else{ // checkbox senario
                            //     var tmp = [];
                            
                            //     tmp['label'] = $(this).val().replace($(this).attr('data-attr-value')+"__","").toLowerCase();
                            //     tmp['value'] = $(this).attr('data-attr-value');  
                                
                            //     field_name[name].push(tmp);
                            // }
                        }
                    }
                });
                
                if(field_name){
                    $.each(payment_configuration,function(pindex,pvalue){
                        var p_field1 = strReplace(pvalue.form_field);
                        var p_field2 = strReplace(pvalue.c_form_field);
                        
                        var condition = pvalue.condition;
                        var test = checkPaymentOperatorField(field_name,pvalue,true);
                        var test1 = checkPaymentOperatorField(field_name,pvalue,false);
                        switch (condition) {
                            case "and":
                                if(test == true && test1 == true){
                                    final_total = final_total + parseFloat(pvalue.amount);
                                    is_overide_fields[p_field1] = p_field1;
                                    is_overide_fields[p_field2] = p_field2;
                                    //field_name.pop(value.p_field1);
                                    return false;
                                }
                                break;
                            case "or":
                                if(test == true || test1 == true){
                                    final_total = final_total + parseFloat(pvalue.amount);
                                    is_overide_fields[p_field1] = p_field1;
                                    is_overide_fields[p_field2] = p_field2;
                                    //field_name.pop(value.p_field1);
                                    return false;
                                }
                                break;
                        
                            default:
                                break;
                        }
                        
                        
                    });
                    
                    if(Object.keys(is_overide_fields).length > 0){

                    }else{
                        var field_total = calculateFieldsAmount(field_name);
                        if($.isNumeric(field_total))
                            final_total += parseFloat(field_total); 
                            
                    }
                }
                
            //}else{
                // calculate fields
            //}
            var paid_amount = $("#paid_amount").val();
            // if(paid_amount != '' && $.isNumeric(paid_amount))
            // {
            //     final_total = final_total - parseFloat(paid_amount);
            // }
            final_total = parseFloat(final_total);
            $("#final_total").val(final_total);
            if($("#form_type").val() == 1){
                $("#final_total").attr('max',final_total);
            }
            if(final_total == 0){
                //$("#pay_now").hide();
            }else{
                //$("#pay_now").show();
            }
        }

        /**
         * calculate fields of amounts after apply pyament configuration rules
         * @param {*} field_name 
         * @created by Mehul Jethloja
         */
        function calculateFieldsAmount(field_name){
            var field_total = 0;
            $.each(field_name,function(index,value){
                if(value.label == undefined){
                    // checkbox senario
                    // $.each(value,function(index1,value1){
                    //     console.log(value1.label);
                    // });
                }
                else{
                    field_total = field_total + parseFloat(value.value);
                }
            });
            return field_total;
        }

        /**
         * check payment operator field is match or not
         * @param {*} field_name 
         * @param {*} pvalue 
         * @param {*} is_first 
         * @created by Mehul Jethloja
         */
        function checkPaymentOperatorField(field_name,pvalue,is_first){
            var condition = pvalue.condition;
            if(is_first == true){
                var p_field1 = strReplace(pvalue.form_field);
                var p_value1 = pvalue.form_field_value.toLowerCase();
                var p_operator1 = pvalue.operator;
            }else{
                var p_field1 = strReplace(pvalue.c_form_field);
                var p_value1 = pvalue.c_form_field_value.toLowerCase();
                var p_operator1 = pvalue.c_operator;
            }
            var is_operator = false;
            
            $.each(field_name,function(index,value){
                
                // value is mulitdemintion array
                if(p_field1 == index){
                    if(value.label == undefined){
                        $.each(value,function(index1,value1){
                            //is_operator = checkPaymentOperator(p_operator1,p_value1,value1);
                            //console.log(is_operator);
                        });
                    }
                    else{
                        switch (p_operator1) {
                            case "=":
                                if(p_value1 == value.label){
                                    is_operator = true;
                                }
                                break;
                            case "!=":
                                if(p_value1 != value.label){
                                    is_operator = true;
                                }
                                break;
                        
                            default:
                                is_operator = false;
                                break;
                        }
                    }
                }
            });
            return is_operator;
        }
        
        function checkPaymentOperator(p_operator1,p_value1,value){
            var is_operator = false;
            switch (p_operator1) {
                case "=":
                    if(p_value1 == value.label){
                        is_operator = true;
                    }
                    break;
            
                default:
                    is_operator = false;
                    break;
            }
            return is_operator;
        }

        /**
         * string replace - with _ (use in companre field name)
         * @param {*} fieldName 
         * @created by Mehul Jethloja
         */
        function strReplace(fieldName){
            return fieldName.replace(/-/gi,"_");
        }

        /**
         * check field is payment configuration or not
         * @param {*} field_name 
         * @created by Mehul Jethloja
         */
        function checkPaymentConfigureFields(field_name){
            if(payment_configuration_fields.length > 0){
                if($.inArray(field_name,payment_configuration_fields) != -1){
                    return true;
                }
            }
            return false;
        }
        calculateFinalTotal();
        var min = $("#final_total").attr('min');
        if(parseFloat(min) >= parseFloat($("#final_total").val())){
            $("#final_total").attr('min',$("#final_total").val());    
        }
        if(parseFloat($("#final_total").val()) > 0){
            $("#final_total").attr('max',$("#final_total").val());
        }
    });
}(jQuery)); 