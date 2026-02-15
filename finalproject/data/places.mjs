export const places = [
    {
        name: "El Cadillal",
        address: "Tafí Viejo, Tucuman",
        images: [
            {
                img: "el-cadillal.webp",
                imgDesc: "Open-air Theater in El Cadillal"
            },
            {
                img: "beach-cadillal.webp",
                imgDesc: "People in the Cadillal beach"
            },
            {
                img: "boat-trip-cadillal.webp",
                imgDesc: "Boat navigating in the lake"
            },
            {
                img: "chairlift-cadillal.webp",
                imgDesc: "A chairlift in the cadillal"
            },
            {
                img: "kayak-cadillal.webp",
                imgDesc: "People in kayak in the lake"
            }
        ],
        description: "El Cadillal is a tourist village located next to the Celestino Gelsi Dam, surrounded by nature and calm waters, ideal for water sports such as kayaking, windsurfing, and fishing. In addition to its beaches and outdoor activities, it features an Archaeological Museum displaying artifacts from pre-Hispanic cultures, as well as recreational attractions like boat rides, chairlifts, and hiking trails. It is an excellent destination for relaxing, enjoying sports, and tasting local cuisine.",
        activities: [
            {
                "id": 1,
                "name": "Dique Celestino Gelsi",
                "category": "nature",
                "description": "Scenic lake area perfect for walking, sunsets, swimming, and picnics.",
                "address": "Ruta Provincial 347, El Cadillal",
                "features": ["swimming", "picnic", "walking"]
            },
            {
                "id": 2,
                "name": "Aerosillas Cerro Médici",
                "category": "viewpoint",
                "description": "Chairlift ride offering panoramic views of the lake and surrounding hills.",
                "address": "Puerto Argentino Complex, El Cadillal",
                "features": ["chairlift", "photography"]
            },
            {
                "id": 3,
                "name": "Reserva Aguas Chiquitas",
                "category": "adventure",
                "description": "Natural reserve with waterfalls and hiking trails through native forest.",
                "address": "Near El Cadillal",
                "features": ["hiking", "waterfall", "nature"]
            },
            {
                "id": 4,
                "name": "Boat Rides on the Lake",
                "category": "water-activity",
                "description": "Enjoy guided boat tours across the calm waters of the lake with scenic views of the surrounding hills.",
                "address": "Puerto Argentino, El Cadillal",
                "features": ["boat tour", "lake views", "relaxing"]
            },
            {
                "id": 5,
                "name": "Kayak & Canoeing",
                "category": "water-activity",
                "description": "Rent a kayak or canoe and paddle through the peaceful bays of Dique Celestino Gelsi.",
                "address": "Lakefront area, El Cadillal",
                "features": ["kayaking", "canoeing", "water sports"]
            },
            {
                "id": 6,
                "name": "Anfiteatro El Cadillal",
                "category": "culture",
                "description": "Open-air amphitheater hosting live music, cultural events, and seasonal performances.",
                "address": "Puerto Argentino Complex, El Cadillal",
                "features": ["live music", "events", "cultural shows"]
            },
            {
                "id": 7,
                "name": "Cycling Around the Dique",
                "category": "outdoor",
                "description": "Scenic cycling routes around the lake and nearby hills, ideal for road and mountain biking.",
                "address": "Perimeter roads and trails, El Cadillal",
                "features": ["cycling", "mountain biking", "scenic routes"]
            }
        ],
        lat: -26.634976050352588,
        long: -65.20716562267306,
        location: `src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9699.771607200817!2d-65.20472372752869!3d-26.636044737032012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sar!4v1770742557384!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Tafí del Valle",
        address: "Tafí del Valle Department, Tucuman",
        images: [
            {
                img: "tafi-del-valle-tucuman.webp",
                imgDesc: "Mountains in Tafí del Valle"
            },
            {
                img: "river-tafi-del-valle.webp",
                imgDesc: "People in a river in Tafí del Valle"
            },
            {
                img: "snow-tafi-del-valle.webp",
                imgDesc: "Snowed house in Tafí del Valle"
            },
            {
                img: "tambosofia-tafi-del-valle.webp",
                imgDesc: "Tambo la Sofia market in Tafí del Valle"
            },
            {
                img: "watchtower-tafi-del-valle.webp",
                imgDesc: "Iconic watchtower in Tafí del Valle"
            }
        ],
        description: "Tafí del Valle is a landmark destination in the Calchaquí Valleys, known for its mountain landscapes, green valleys, rivers, and scenic routes. Located at around 2,000 meters above sea level, it offers activities such as hiking, horseback riding, kayaking at La Angostura Dam, visits to historic ranches, and tours of artisan workshops. The area blends nature, history, and traditional culture in a peaceful and picturesque setting.",
        activities: [
            {
                "id": 1,
                "name": "Kayak at La Angostura",
                "category": "water-activity",
                "description": "Kayaking and water activities on the scenic La Angostura reservoir.",
                "address": "Dique La Angostura, Tafí del Valle",
                "features": ["kayaking", "water sports"]
            },
            {
                "id": 2,
                "name": "Ruta del Artesano",
                "category": "cultural",
                "description": "Explore artisan workshops and learn local crafts like textiles, ceramics, and leatherwork.",
                "address": "Various artisan workshops, Tafí del Valle",
                "features": ["artisan route", "crafts", "local culture"]
            },
            {
                "id": 3,
                "name": "Museo Arqueológico Los Menhires",
                "category": "historical",
                "description": "Visit the outdoor archaeological site with ancient monolithic stones representing early cultures.",
                "address": "El Mollar, near Tafí del Valle",
                "features": ["archaeology", "walking tour", "history"]
            },
            {
                "id": 4,
                "name": "Museo y Capilla Jesuítica de La Banda",
                "category": "historical",
                "description": "Discover the Jesuit estancia and chapel with historical exhibits dating back to the 18th century.",
                "address": "La Banda, near Tafí del Valle",
                "features": ["museum", "historical site", "architecture"]
            },
            {
                "name": "Tambo La Sofía",
                "category": "Rural Tourism / Dairy Experience",
                "description": "A traditional dairy farm where visitors can learn about milk production, artisanal cheese making, and enjoy tastings of regional products. A great family-friendly experience that showcases the agricultural heritage of Tafí del Valle.",
                "address": "Ruta Provincial 307, Tafí del Valle, Tucumán, Argentina"
            }

        ],
        lat: -26.852002071101374,
        long: -65.70862413449395,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23026.273563480794!2d-65.72492294529684!3d-26.852126145707008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94221877e80d28cf%3A0x7cf806901072e845!2sTaf%C3%AD%20del%20Valle%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1770742334206!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "La Casa Histórica",
        address: "Congreso de Tucumán 141, San Miguel de Tucumán, Tucumán",
        images: [
            {
                img: "casa-historica-tucuman.webp",
                imgDesc: "Front of the Casa Histórica"
            },
            {
                img: "artifacts-casa-historica.webp",
                imgDesc: "Religious artifacts in the Casa Historica"
            },
            {
                img: "dances-casa-historica.webp",
                imgDesc: "People performing traditional dance in Casa Historica"
            },
            {
                img: "inside-casa-historica.webp",
                imgDesc: "Galleries in the museum Casa Historica"
            },
            {
                img: "main-hall-casa-historica.webp",
                imgDesc: "Independence Hall of the Casa Historica"
            }
        ],
        description: "La Casa Histórica is a National Monument and historical museum where Argentina’s Independence was declared on July 9, 1816. It preserves the Hall of the Oath, where the original independence declaration was signed, along with a collection of objects from the colonial period and the independence movement. In addition to its historical exhibits, the museum offers interactive displays and often hosts nighttime light and sound shows that recount this pivotal moment in Argentine history.",
        activities: [
            {
                "id": 1,
                "name": "Tour Museo Casa Histórica",
                "category": "historical",
                "description": "Visit the museum where Argentina's independence was declared and explore exhibits on colonial and independence history.",
                "address": "Congreso de Tucumán 141, San Miguel de Tucumán",
                "features": ["guided tours", "history", "independence"]
            },
            {
                "id": 2,
                "name": "Salón de la Jura",
                "category": "historical",
                "description": "See the original Independence Act and period artifacts in the iconic Salón de la Jura.",
                "address": "Casa Histórica de la Independencia, San Miguel de Tucumán",
                "features": ["exhibits", "artifacts", "independence history"]
            },
            {
                "id": 3,
                "name": "Luces y Sonidos de la Independencia",
                "category": "cultural",
                "description": "Experience the night light and sound show that narrates the declaration of independence (seasonal).",
                "address": "Casa Histórica de la Independencia, San Miguel de Tucumán",
                "features": ["night show", "audiovisual", "cultural experience"]
            },
            {
                "id": 4,
                "name": "Interactive History Exhibits",
                "category": "educational",
                "description": "Interactive exhibits and learning spaces ideal for families and history lovers.",
                "address": "Casa Histórica de la Independencia, San Miguel de Tucumán",
                "features": ["interactive", "family activities", "education"]
            }
        ],
        lat: -26.833110417141825,
        long: -65.2038376874849,
        location: `src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d508.89923044915224!2d-65.20379249097707!3d-26.833066868331464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sar!4v1770742685075!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "San Javier Hill",
        address: "San Javier, Tucumán",
        images: [
            { 
                img: "cerro-san-javier.webp", 
                imgDesc: "View from San Javier Hill" 
            },
            {
                img: "parachute-san-javier.webp",
                imgDesc: "People wearing up a parachute going to jump"
            },
            {
                img: "puente-san-javier.webp",
                imgDesc: "Bridge in the mountain"
            },
            {
                img: "hiking-san-javier.webp",
                imgDesc: "People hiking the mountain"
            },
            {
                img: "waterfall-san-javier.webp",
                imgDesc: "Waterfall in the mountain"
            }
        ],
        description: "A popular spot for panoramic views of San Miguel de Tucumán, hiking, and paragliding.",
        activities: [
            { 
                id: 1, 
                name: "Hiking Trails", 
                category: "nature", 
                description: "Scenic trails through the Yungas forest.", 
                address: "San Javier", 
                features: ["hiking", "nature"] 
            },
            { 
                id: 2, name: "Paragliding", 
                category: "adventure", 
                description: "Take off from the hill for a thrilling flight.", 
                address: "San Javier", 
                features: ["paragliding", "adventure"] 
            }
        ],
        lat: -26.776, 
        long: -65.338,
        location: `src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3628.1839519404307!2d-65.35903477891104!3d-26.79673786814334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sar!4v1771130521007!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Quilmes Ruins",
        address: "Ruinas de Quilmes, Tucumán",
        images: [
            { 
                img: "ruinas-de-quilmes.webp", 
                imgDesc: "Ancient Quilmes Ruins" 
            },
            {
                img: "ruinas-quilmes-view.webp",
                imgDesc: ""
            }
        ],
        description: "Archaeological site of the Quilmes people, with stone structures and a museum.",
        activities: [
            { 
                id: 1, 
                name: "Guided Tour", 
                category: "historical", 
                description: "Learn about the Quilmes culture.", 
                address: "Ruinas de Quilmes", 
                features: ["history", "guided tour"] 
            }
        ],
        lat: -26.577, 
        long: -65.933,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.078210949809!2d-66.04240046305817!3d-26.464444523758505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941f5752db679b3f%3A0x395698eea4a21a3a!2sQuilmes%20Ruins!5e1!3m2!1sen!2sar!4v1771127095764!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Amaicha del Valle",
        address: "Amaicha del Valle, Tucumán",
        images: [
            { 
                img: "amaicha-del-valle.webp", 
                imgDesc: "Amaicha del Valle landscape" 
            },
            {
                img: "amaiche-del-valle-fountain.webp",
                imgDesc: "Old fountain in the town"
            }
        ],
        description: "A valley town known for its indigenous culture, crafts, and the Pachamama Museum.",
        activities: [
            { 
                id: 1, 
                name: "Pachamama Museum", 
                category: "cultural", 
                description: "Museum dedicated to Andean culture.", 
                address: "Amaicha del Valle", 
                features: ["museum", "culture"] 
            }
        ],
        lat: -26.614, long: -65.918,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11539.377033765535!2d-65.9340148176009!3d-26.593034990096378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9421fef0310d54d7%3A0xfbdeb478b776ca9c!2sAmaicha%20del%20Valle%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1771127152695!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Aconquija National Park",
        address: "Aconquija, Tucumán",
        images: [
            { 
                img: "parque-nacional-aconquija.webp", 
                imgDesc: "Mountains in Aconquija National Park" 
            },
            {
                img: "parque-nacional-aconquija-hiking.webp",
                imgDesc: "Hiking in Aconquija mountains"
            },
            {
                img: "parque-nacional-aconquija-river.webp",
                imgDesc: "River in Aconquija Park"
            },
            {
                img: "parque-nacional-aconquija-snowed.webp",
                imgDesc: "Snowed mountains"
            }
        ],
        description: "Protected area with mountains, forests, and diverse wildlife.",
        activities: [
            { 
                id: 1, 
                name: "Wildlife Watching", 
                category: "nature", 
                description: "Spot native animals and birds.",
                address: "Aconquija", 
                features: ["wildlife", "nature"] 
            }
        ],
        lat: -27.033, 
        long: -65.833,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.9892819430265!2d-65.86738756284667!3d-27.29288335724157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30d8eee33fb5%3A0xd528f8357930b302!2sParque%20Nacional%20Aconquija!5e1!3m2!1sen!2sar!4v1771127231687!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Horco Molle Reserve",
        address: "Yerba Buena, Tucumán",
        images: [
            { 
                img: "reserva-horco-molle-entrance.webp", 
                imgDesc: "Horco Molle Nature Reserve Entrance" 
            },
            {
                img: "reserva-horco-molle-ocelot.webp",
                imgDesc: "Ocelot in Horco Molle"
            },
            {
                img: "reserva-horco-molle-tapir.webp",
                imgDesc: "Tapir in Horco Molle"
            }
        ],
        description: "Nature reserve with native flora and fauna, and a small zoo.",
        activities: [
            { 
                id: 1, 
                name: "Nature Walks", 
                category: "nature", 
                description: "Guided walks to learn about local species.", 
                address: "Horco Molle", 
                features: ["nature", "education"] 
            }
        ],
        lat: -26.816, 
        long: -65.316,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1018.1563327774811!2d-65.31686765602086!3d-26.793214330817598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94224293e33f8a8d%3A0x6491fd02bc697bf2!2sReserva%20Experimental%20Horco%20Molle!5e1!3m2!1sen!2sar!4v1771127329420!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Famaillá",
        address: "Famaillá, Tucumán",
        images: [
            { 
                img: "famailla-jesus-apostles.webp", 
                imgDesc: "Famaillá Statues of Jesus and the Apostles" 
            },
            {
                img: "famailla-cabildo.webp",
                imgDesc: "Representation of the Cabildo"
            },
            {
                img: "famailla-acuatic-park.webp",
                imgDesc: "Acuatic park in Famailla"
            }
        ],
        description: "Known as the National Capital of the Empanada, with an annual festival.",
        activities: [
            { 
                id: 1, 
                name: "Empanada Festival", 
                category: "cultural", 
                description: "Taste the best empanadas in Argentina.", 
                address: "Famaillá", 
                features: ["food", "festival"] 
            }
        ],
        lat: -27.053, 
        long: -65.406,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22986.248067061635!2d-65.42066363853364!3d-27.048182821946586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422495f856e7667%3A0x5db3a97c9858f934!2sFamaill%C3%A1%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1771127395801!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Yerba Buena",
        address: "Yerba Buena, Tucumán",
        images: [
            { 
                img: "yerba-buena.webp", 
                imgDesc: "Yerba Buena welcome sign"
            },
            {
                img: "yerba-buena-view",
                imgDesc: "City of Yerba Buena"
            },
            {
                img: "yerba-buena-shopping.webp",
                imgDesc: "Yerba Buena Shopping"
            }
        ],
        description: "A modern city with shopping, dining, and nightlife at the foot of the mountains.",
        activities: [
            { 
                id: 1, 
                name: "Shopping", 
                category: "urban",
                description: "Boutiques and malls.", 
                address: "Yerba Buena", 
                features: ["shopping", "dining"] 
            }
        ],
        lat: -26.816, 
        long: -65.283,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46068.30721655718!2d-65.33664379657887!3d-26.813371107132525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422433a2ee1bffb%3A0xc5d4083eee0d98b1!2sYerba%20Buena%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1771127497163!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Villa Nougués",
        address: "Villa Nougués, Tucumán",
        images: [
            { 
                img: "villa-nougues-chapel.webp", 
                mgDesc: "Villa Nougués gardens" 
            },
            {
                img: "villa-nougues-waterfall.webp",
                imgDesc: "Waterfall in Villa Nougués"
            }
        ],
        description: "A picturesque mountain village with English-style houses and lush gardens.",
        activities: [
            { 
                id: 1, 
                name: "Garden Walks", 
                category: "nature", 
                description: "Stroll through beautiful gardens.", 
                address: "Villa Nougués", 
                features: ["gardens", "scenery"] 
            }
        ],
        lat: -26.866, 
        long: -65.333,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017.6382772730201!2d-65.38175618647242!3d-26.85088714023513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94224161bbdff96b%3A0x65e52818d6fa89d!2sVilla%20Nougues!5e1!3m2!1sen!2sar!4v1771127682417!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Raco",
        address: "Raco, Tucumán",
        images: [
            { 
                img: "raco.webp", 
                imgDesc: "Raco countryside" 
            },
            {
                img: "raco-structure.webp",
                imgDesc: "Old structure in Raco"
            }
        ],
        description: "A rural area ideal for horseback riding and relaxing in nature.",
        activities: [
            { 
                id: 1, 
                name: "Horseback Riding", 
                category: "adventure", 
                description: "Explore the countryside on horseback.", 
                address: "Raco", 
                features: ["horseback riding", "nature"] 
            }
        ],
        lat: -26.733, 
        long: -65.366,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11534.779493424352!2d-65.38869456756657!3d-26.63859889729876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94226d7746396d1b%3A0x1bed2cc9847ba503!2sRaco%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1771127814907!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "El Mollar",
        address: "El Mollar, Tucumán",
        images: [
            { 
                img: "el-mollar-landscape.webp", 
                imgDesc: "El Mollar landscape" 
            },
            {
                img: "el-mollar-old-structure.webp",
                imgDesc: "El Mollar monolith"
            },
            {
                img: "el-mollar-dock.webp",
                imgDesc: "Dock in El Mollar"
            }
        ],
        description: "Famous for its menhirs (ancient stone monoliths) and beautiful valley scenery.",
        activities: [
            { 
                id: 1, 
                name: "Menhirs Park", 
                category: "historical", 
                description: "See the ancient menhirs.", 
                address: "El Mollar", 
                features: ["history", "scenery"] 
            }
        ],
        lat: -26.900, long: -65.716,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46015.43358941167!2d-65.75366209498586!3d-26.943186775131615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9422246326b4c937%3A0xbbabdb935703ee59!2sEl%20Mollar%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1771127914273!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Simoca",
        address: "Simoca, Tucumán",
        images: [
            { 
                img: "simoca-entrance.webp", 
                imgDesc: "Simoca entrance" 
            },
            {
                img: "simoca-fountain.webp",
                imgDesc: "Fountain in Simoca"
            },
            {
                img: "simoca-traditional-dance.webp",
                imgDesc: "Traditional dance in a festival"
            }
        ],
        description: "Known for its traditional market and folk festivals.",
        activities: [
            { 
                id: 1, 
                name: "Simoca Market", 
                category: "cultural", 
                description: "Experience local food and crafts.", 
                address: "Simoca", 
                features: ["market", "culture"] 
            }
        ],
        lat: -27.266, 
        long: -65.350,
        location: `src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11470.872694942667!2d-65.36915316708982!3d-27.2646388975803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423b118cd6d457b%3A0xd938c3af02f94ae9!2sSimoca%2C%20Tucum%C3%A1n%20Province!5e1!3m2!1sen!2sar!4v1771128052434!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Cascada Los Pizarros",
        address: "Los Pizarros, Tucumán",
        images: [
            { 
                img: "cascada-los-pizarros.webp", 
                imgDesc: "Waterfall at Los Pizarros" 
            },
            {
                img: "cascada-los-pizarros-view.webp",
                imgDesc: "Tall waterfall at Los Pizarros"
            }
        ],
        description: "A beautiful waterfall surrounded by lush vegetation, perfect for hiking.",
        activities: [
            { 
                id: 1, 
                name: "Hiking to the Waterfall", 
                category: "nature", 
                description: "Trail to the scenic waterfall.", 
                address: "Los Pizarros", 
                features: ["hiking", "waterfall"] 
            }
        ],
        lat: -26.900, 
        long: -65.800,
        location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.356758527896!2d-65.69373476273016!3d-27.740049475755598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423fab8645987a1%3A0xfbd1582b51bba68e!2sCascada%20Los%20Pizarro!5e1!3m2!1sen!2sar!4v1771128229862!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    },
    {
        name: "Parque 9 de Julio",
        address: "San Miguel de Tucumán, Tucumán",
        images: [
            { 
                img: "parque-9-de-julio.webp",
                imgDesc: "Central park in San Miguel de Tucumán" 
            },
            {
                img: "parque-9-de-julio-rosedal.webp",
                imgDesc: "El Rosedal 9 de Julio Park"
            },
            {
                img: "parque-9-de-julio-sculpture.webp",
                imgDesc: "Sculpture in the park"
            },
            {
                img: "parque-9-de-julio.webp-watch",
                imgDesc: "Great watch in the park"
            },
            {
                img: "parque-9-de-julio-circuit.webp",
                imgDesc: "Racetrack in 9 de Julio Park"
            }
        ],
        description: "The main city park, with gardens, museums, and a lake for paddle boats.",
        activities: [
            { 
                id: 1, 
                name: 
                "Paddle Boats", 
                category: "recreation", 
                description: "Rent a paddle boat on the lake.", 
                address: "Parque 9 de Julio", 
                features: ["boating", "recreation"] 
            }
        ],
        lat: -26.824, 
        long: -65.209,
        location: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7581775797894!2d-65.19154978989185!3d-26.83348378979921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225f001284729f%3A0xc0f84f79560e0c22!2sParque%209%20de%20julio!5e1!3m2!1sen!2sar!4v1771128363024!5m2!1sen!2sar" 
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"`
    }
]