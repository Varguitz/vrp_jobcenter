/*
██╗░░░██╗░█████╗░██████╗░░██████╗░██╗░░░██╗██╗████████╗███████╗
██║░░░██║██╔══██╗██╔══██╗██╔════╝░██║░░░██║██║╚══██╔══╝╚════██║
╚██╗░██╔╝███████║██████╔╝██║░░██╗░██║░░░██║██║░░░██║░░░░░███╔═╝
░╚████╔╝░██╔══██║██╔══██╗██║░░╚██╗██║░░░██║██║░░░██║░░░██╔══╝░░
░░╚██╔╝░░██║░░██║██║░░██║╚██████╔╝╚██████╔╝██║░░░██║░░░███████╗
░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░░╚═════╝░╚═╝░░░╚═╝░░░╚══════╝
Made to vRPex by Varguitz#6151
*/
var configs = {
    theme: {
        "primary_color": "#0cc7c4",
        "secondary_color": "#0cc7c4"
    },
    jobs: [
        // Whitelisted jobs
        {
            "title": "Policia",
            "shortDescription": "Ingreso a la Policia",
            "description": "Para ser Policia debes completar un formulario via discord, canal #ingreso-policia e ingresa tus datos y espera para una prueba oral",
            "group": "Policia",
            "whitelisted": true,
            "iconName": "police.jpg",
            requirements: ["Leer Normativas Basicas", "Leer Normativas Policiales", "+15 años"]
        },
        {
            "title": "Cruz Roja",
            "shortDescription": "Ingreso a la Cruz Roja",
            "description": "Para ser Medico debes completar un formulario via discord, canal #ingreso-medico e ingresa tus datos y espera para una prueba oral",
            "group": "Paramedico",
            "whitelisted": true,
            "iconName": "police.jpg",
            requirements: ["Leer Normativas Basicas", "Leer Normativas Cruz Roja", "+15 años"]
        },
        {
            "title": "Abogado",
            "shortDescription": "Trabaja defendiendo a los ciudadanos",
            "description": "Defiende a los ciudadanos de la ciudad",
            "group": "Abogado",
            "whitelisted": true,
            "iconName": "police.jpg",
            requirements: ["Leer Normativas Basicas", "Hacer examen por discord", "+15 años"]
        },
        // Unwhitelisted jobs
        {
            "title": "Mecanico",
            "shortDescription": "Repara vehiculos",
            "description": "Repara vehiculos y turbinas",
            "group": "mecanico",
            "whitelisted": false,
            "iconName": "police.jpg",
            requirements: ["Ninguna"]
        },
        {
            "title": "Camionero",
            "shortDescription": "Transporta material",
            "description": "Trabaja transportando material por todo Los Santos",
            "group": "Camionero",
            "whitelisted": false,
            "iconName": "police.jpg",
            requirements: ["Ninguna"]
        },
        {
            "title": "Vagabundo",
            "shortDescription": "Ser un vagabundo",
            "description": "Rascate los huevos y cobrando un sueldo de Carlos Alvarado",
            "group": "Vagabundo",
            "whitelisted": false,
            "iconName": "police.jpg",
            requirements: ["Ninguna"]
        },
        {
            "title": "Taxista",
            "shortDescription": "Taxista",
            "description": "Agarra tu taxi y empieza a trabajar llevando gente",
            "group": "taxista",
            "whitelisted": false,
            "iconName": "taxi.png",
            requirements: ["Ninguna"]
        }
    ]
}