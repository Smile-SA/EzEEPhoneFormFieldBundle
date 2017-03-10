(function(global, doc) {
    'use strict';

    document.addEventListener("DOMContentLoaded", function(event) {
        var phonePrefixes = doc.querySelectorAll('.ezform-phone_prefix');
        phonePrefixes.forEach(function (phonePrefix) {
            phonePrefix.addEventListener('change', function(event) {
                var phoneID = phonePrefix.getAttribute('data-id'),
                    phoneInput = doc.querySelector('#' + phoneID),
                    phoneValue = phoneInput.value.trim();

                if (typeof phoneValue != undefined && phoneValue != '') {
                    var splited = phoneValue.split(' ');
                    if (splited.length > 1) {
                        phoneValue = splited[1];
                    }
                } else {
                    phoneValue = '';
                }
                phoneInput.value = '+' + phonePrefix.value + ' ' + phoneValue;
            }, false);
        });
    });
})(window, document);
