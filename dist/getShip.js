"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
let base = 'https://api.spacetraders.io/v2';
let responseJSON = {};
const Looker = (0, utils_1.createHeaders)();
function getLocation() {
    fetch(`${base}/my/agent`, { headers: Looker })
        .then(response => response.json())
        .then(response => {
        //console.log(response)
        const hq = response.data.headquarters;
        const acceptURL = `${base}/systems/${hq.slice(0, hq.lastIndexOf('-'))}/waypoints`;
        findShipyard(acceptURL);
    })
        .catch(err => console.error(err));
}
//console.log(acceptURL)
function findShipyard(acceptURL) {
    fetch(acceptURL, { headers: Looker })
        .then(response => response.json())
        .then(response => {
        responseJSON = response;
        responseJSON.data.forEach((object) => {
            if (object.traits) {
                object.traits.forEach((trait) => {
                    if (trait.name === "Shipyard") {
                        shipyards.push(object);
                    }
                });
            }
        });
        console.log(shipyards);
    })
        .catch(err => console.error(err));
}
let shipyards = [];
getLocation();
