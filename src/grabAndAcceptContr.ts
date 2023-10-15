import { createHeaders, createMethods } from './utils';

let ContractURL: string = 'https://api.spacetraders.io/v2/my/contracts';
let acceptURL: string = '';


const Looker: Options = createHeaders();

const Accepter: Options = createMethods('POST');

fetch(ContractURL, Looker)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        acceptURL = `${ContractURL}/${response.data[0].id}/accept`;
        fetch(acceptURL, Accepter)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
