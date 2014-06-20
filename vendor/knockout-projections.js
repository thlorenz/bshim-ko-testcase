/*! Knockout projections plugin - version 1.1.0-pre
------------------------------------------------------------------------------
Copyright (c) Microsoft Corporation
All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
------------------------------------------------------------------------------
*/

(function(global, undefined) {
    'use strict';

    /* SNIP */

    // Determines which module loading scenario we're in, grabs dependencies, and attaches to KO
    function prepareExports() {
        if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
            // Node.js case - load KO synchronously
            var ko = require('knockout');
            ko.projections = true
            module.exports = ko;
        } else if (typeof define === 'function' && define.amd) {
            define(['knockout'], attachToKo);
        } else if ('ko' in global) {
            // Non-module case - attach to the global instance
            attachToKo(global.ko);
        }
    }

    prepareExports();

})(this);
