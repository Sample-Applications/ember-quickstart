import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class SuppliersRoute extends Route {
    model() {
        return fetch('http://localhost:8000/api/suppliers')
        .then((response) => response.json())
        .then(function(data){
            console.log(data);
            return data;
        });
    }
}
