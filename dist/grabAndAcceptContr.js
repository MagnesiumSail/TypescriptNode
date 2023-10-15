"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
let ContractURL = 'https://api.spacetraders.io/v2/my/contracts';
let acceptURL = '';
dotenv_1.default.config();
let Token = process.env.SPACETRADERS_API_TOKEN;
const Looker = {
    headers: {
        'ContentType': 'application/json',
        'Authorization': `Bearer ${Token}`,
    },
};
const Accepter = {
    method: 'POST',
    headers: {
        'ContentType': 'application/json',
        'Authorization': `Bearer ${Token}`,
    }
};
fetch(ContractURL, Looker)
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
