import { createHeaders, createMethods, HeadersType, MethodsType } from './utils';
import { Trait, DataObject } from './types';
let base: string = 'https://api.spacetraders.io/v2';
let responseJSON: any = {};
const Looker: HeadersType = createHeaders();

fetch(`${base}/my/agent`, { headers: Looker })
    .then(response => response.json())
    .then(response => {
        //console.log(response)
        const hq = response.data.headquarters;
        const acceptURL = `${base}/systems/${hq.slice(0, hq.lastIndexOf('-'))}/waypoints`;
        //console.log(acceptURL)
        fetch(acceptURL, { headers: Looker })
            .then(response => response.json())
            .then(response => { 
                responseJSON = response;
                responseJSON.data.forEach((object: DataObject) => {
                    if (object.traits) {
                        object.traits.forEach((trait: Trait) => {
                            if (trait.name === "Shipyard") {
                                shipyards.push(object);
                            }
                        })
                    }
                })
                console.log(shipyards);
                
            })
            .catch(err => console.error(err));
    })
    .catch(err => console.error(err));

let shipyards: DataObject[] = [];


