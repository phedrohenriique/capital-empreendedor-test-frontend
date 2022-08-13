type DatabaseProps = {
    users: {
        name: string,
        email: string,
        isActive: boolean,
        phone : string,
        revenue: number,
        agreedTerms: boolean
    }[]
    opportunities: {}
}

export const database: DatabaseProps = {
    users: [
        {
            name: "Cliente 1",
            email: "cliente1@example.com",
            isActive: true,
            phone: "(19) 99999-9999",
            revenue: 1000000,
            agreedTerms: true
        },
        {
            name: "Cliente 2",
            email: "cliente1@example.com",
            isActive: true,
            phone: "(19) 99999-9999",
            revenue: 1000000,
            agreedTerms: true
        },
        {
            name: "Cliente 3",
            email: "cliente1@example.com",
            isActive: true,
            phone: "(19) 99999-9999",
            revenue: 1000000,
            agreedTerms: true
        },
        {
            name: "Cliente 4",
            email: "cliente1@example.com",
            isActive: true,
            phone: "(19) 99999-9999",
            revenue: 1000000,
            agreedTerms: true
        },
        {
            name: "Cliente 5",
            email: "cliente1@example.com",
            isActive: true,
            phone: "(19) 99999-9999",
            revenue: 1000000,
            agreedTerms: true
        }
    ],
    "opportunities": {
        "cliente1@example.com": {
            "opportunities": [
                {
                    "name": "Institution 1",
                    "limit": 50000,
                    "interest": 0.045,
                    "term": 60,
                    "isActive": true
                },
                {
                    "name": "Instituição 3",
                    "limit": 100000,
                    "interest": 0.035,
                    "term": 24,
                    "isActive": true
                }
            ]
        },
        "cliente2@example.com": {
            "opportunities": []
        },
        "cliente3@example.com": {
            "opportunities": [
                {
                    "name": "Instituição 2",
                    "limit": 30000,
                    "interest": 0.05,
                    "term": 36,
                    "isActive": true
                },
                {
                    "name": "Instituição 3",
                    "limit": 75000,
                    "interest": 0.053,
                    "term": 48,
                    "isActive": false
                }
            ]
        },
        "cliente4@example.com": {
            "opportunities": [
                {
                    "name": "Instituição 1",
                    "limit": 5000000,
                    "interest": 0.047,
                    "term": 60,
                    "isActive": true
                },
                {
                    "name": "Instituição 2",
                    "limit": 2000000,
                    "interest": 0.04,
                    "term": 36,
                    "isActive": true
                },
                {
                    "name": "Instituição 3",
                    "limit": 500000,
                    "interest": 0.025,
                    "term": 24,
                    "isActive": false
                }
            ]
        },
        "cliente5@example.com": {
            "opportunities": []
        }
    }
}