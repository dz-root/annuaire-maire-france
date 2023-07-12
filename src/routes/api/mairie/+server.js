import { json } from "@sveltejs/kit";

export async function GET( params ){
    let departement = params.url.searchParams.get('departement')
    let data = await getData( departement )

    return new Response(JSON.stringify(data),{
        headers:{
            'content-type' : 'application/json'
        }
    })
}

async function getData( departement ){
    if (departement !== ''){
        const url = `https://etablissements-publics.api.gouv.fr/v3/departements/${departement}/mairie`
        let res = await fetch(url);

        return res.json()
    }
}
