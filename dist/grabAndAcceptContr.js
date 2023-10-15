"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
let ContractURL = 'https://api.spacetraders.io/v2/my/contracts';
let acceptURL = '';
const Looker = (0, utils_1.createHeaders)();
const Accepter = (0, utils_1.createMethods)('POST');
fetch(ContractURL, {
    headers: Looker
})
    .then(response => response.json())
    .then(response => {
    console.log(response);
    acceptURL = `${ContractURL}/${response.data[0].id}/accept`;
    fetch(acceptURL, Accepter)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})
    .catch(err => console.error(err));
