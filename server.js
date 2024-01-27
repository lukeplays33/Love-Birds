/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
var fs = require('fs');
var sys = require('sys');

var app = express();
    app.use(express.logger());
    app.set("view options", {layout: false});
    app.use(express.static(__dirname + '/html'));

app.get('/', function(req, res){
    res.render('/html/index.html');
});

app.listen(8080);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);