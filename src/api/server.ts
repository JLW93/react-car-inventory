let token = 'a53fc8a72ab5456b5751b161e2b58e4cd3271461371fe2cc'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://coffee-generated-chauffeur.glitch.me/api/cars`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async ( data: any = {} ) => {
        const response = await fetch(`https://coffee-generated-chauffeur.glitch.me/api/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to send data to the server')
        }

        return await response.json()
    },

    update: async ( id: string, data: any = {} ) => {
        const response = await fetch(`https://coffee-generated-chauffeur.glitch.me/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async ( id: string ) => {
        const response = await fetch(`https://coffee-generated-chauffeur.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return await response.json()
    },
}