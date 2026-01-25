const supabaseUrl = 'https://obwmxhzbpprllnngsitr.supabase.co';
const supabaseKey = 'sb_publishable_bm9xVJA_DBJ0Ulh25_rQsg_GGc7fXqC';
// Configuración de conexión
const _supabase = supabase.createClient('https://obwmxhzbpprllnngsitr.supabase.co', 'sb_publishable_bm9xVJA_DBJ0Ulh25_rQsg_GGc7fXqC');
    const packs = {
        pack1: [
             { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Biafra.svg/250px-Flag_of_Biafra.svg.png", opciones: ["Biafra", "Republic of Benin", "Malaui", "Kenya"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Bophuthatswana_%281972%E2%80%931994%29.svg/250px-Flag_of_Bophuthatswana_%281972%E2%80%931994%29.svg.png", opciones: ["Bophuthatswana", "South Africa", "Namibia", "Venda"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Kokbayraq_flag.svg/250px-Kokbayraq_flag.svg.png", opciones: ["East Turkestan", "Turkey", "Libya", "Republic of Hatay"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Flag_of_the_Basque_Country.svg/250px-Flag_of_the_Basque_Country.svg.png", opciones: ["Basque Country", "United Kingdom", "Seychelles", "Brittany"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_the_Kingdom_of_Tahiti.svg/250px-Flag_of_the_Kingdom_of_Tahiti.svg.png", opciones: ["Kingdom of Tahiti", "French Polynesia", "Tonga", "Hawaii"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Flag_of_East_Germany.svg/250px-Flag_of_East_Germany.svg.png", opciones: ["East Germany", "West Germany", "German Empire", "Soviet Union"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Heiliges_R%C3%B6misches_Reich_-_Reichssturmfahne_vor_1433_%28Nimbierter_Adler%29.svg/250px-Heiliges_R%C3%B6misches_Reich_-_Reichssturmfahne_vor_1433_%28Nimbierter_Adler%29.svg.png", opciones: ["Holy Roman Empire", "Austrian Empire", "Habsburg Monarchy", "German Confederation"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Italy_%281861-1946%29_crowned.svg/250px-Flag_of_Italy_%281861-1946%29_crowned.svg.png", opciones: ["Kingdom of Sardinia", "Kingdom of Italy", "Savoy", "Kingdom of Two Sicilies"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Spain_%281931%E2%80%931939%29.svg/250px-Flag_of_Spain_%281931%E2%80%931939%29.svg.png", opciones: ["Second Spanish Republic", "Spain", "First Spanish Republic", "Romania"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Flag_of_the_United_Arab_Republic_%281958%E2%80%931971%29%2C_Flag_of_Syria_%281980%E2%80%932024%29.svg/250px-Flag_of_the_United_Arab_Republic_%281958%E2%80%931971%29%2C_Flag_of_Syria_%281980%E2%80%932024%29.svg.png", opciones: ["United Arab Republic", "Syria", "Egypt", "Iraq"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kurdish_flag_%28Khoiboun%29.svg/250px-Kurdish_flag_%28Khoiboun%29.svg.png", opciones: ["Republic of Ararat", "Armenia", "Kurdistan", "Ethiopia"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/250px-Flag_of_Christmas_Island.svg.png", opciones: ["Christmas Island", "Cocos Islands", "Norfolk Island", "Solomon Islands"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/250px-Flag_of_Puerto_Rico.svg.png", opciones: ["Puerto Rico", "Cuba", "Chile", "Texas"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Brandenburg.svg/250px-Flag_of_Brandenburg.svg.png", opciones: ["Brandenburg", "Poland", "Monaco", "Prussia"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Kroaz_Du.svg/250px-Kroaz_Du.svg.png", opciones: ["Brittany", "Cornwall", "Isle of Man", "Basque Country"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Flag_of_Chechen_Republic_of_Ichkeria.svg/250px-Flag_of_Chechen_Republic_of_Ichkeria.svg.png", opciones: ["Chechen Rep. of Ichkeria", "Chechen Republic", "Tatarstan", "Dagestan"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Eastern_Rumelia.svg/250px-Flag_of_Eastern_Rumelia.svg.png", opciones: ["Eastern Rumelia", "Netherlands", "Ottoman Empire", "Principality of Bulgaria"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/250px-Flag_of_the_Soviet_Union.svg.png", opciones: ["URSS", "China", "Vietnam", "Commune of Paris"], correcta: 0 },
            { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Yugoslavia_%281918%E2%80%931941%29.svg/250px-Flag_of_Yugoslavia_%281918%E2%80%931941%29.svg.png", opciones: ["Kingdom of Yugoslavia", "SFR Yugoslavia", "Kingdom of Serbia", "Netherlands"], correcta: 0 }
        ],
        pack2: [
            // 1. Arrigorriaga
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Arrigorriaga_bandera.svg/120px-Arrigorriaga_bandera.svg.png", opciones: ["Arrigorriaga", "Arakaldo", "Etxebarri", "Arrankudiaga"], correcta: 0 },

// 2. Portugalete
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Portugalete_bandera.svg/120px-Portugalete_bandera.svg.png", opciones: ["Busturia", "Portugalete", "Sukarrieta", "Mendexa"], correcta: 1 },

// 3. Zalla
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Flag_of_Zalla.svg/120px-Flag_of_Zalla.svg.png", opciones: ["Amorebieta", "Gatika", "Zalla", "Mungia"], correcta: 2 },

// 4. Ibarrangelu
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ibarrangelu_bandera.svg/120px-Ibarrangelu_bandera.svg.png", opciones: ["Gernika-Lumo", "Aulesti", "Erandio", "Ibarrangelu"], correcta: 3 },

// 5. Derio
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bandera_de_Derio.svg/120px-Bandera_de_Derio.svg.png", opciones: ["Derio", "Getxo", "Sondika", "Lezama"], correcta: 0 },

// 6. Berango
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Bandera_de_Berango.svg/120px-Bandera_de_Berango.svg.png", opciones: ["Abadiño", "Berango", "Zeberio", "Bakio"], correcta: 1 },

// 7. Barrika
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Barrika_bandera.svg/120px-Barrika_bandera.svg.png", opciones: ["Iurreta", "Larrabetzu", "Barrika", "Kortezubi"], correcta: 2 },

// 8. Meñaca
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Menaka_bandera.svg/120px-Menaka_bandera.svg.png", opciones: ["Orduña", "Gueñes", "Areatza", "Meñaka"], correcta: 3 },

// 9. Mendeja
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mendexako_udal-ikurri%C3%B1a.svg/120px-Mendexako_udal-ikurri%C3%B1a.svg.png", opciones: ["Mendexa", "Mundaka", "Plentzia", "Lekeitio"], correcta: 0 },

// 10. Sestao
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Bandera_de_Sestao.svg/120px-Bandera_de_Sestao.svg.png", opciones: ["Barakaldo", "Sestao", "Ortuella", "Trapagaran"], correcta: 1 },

// 11. Balmaseda
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bandera_de_Balmaseda.svg/250px-Bandera_de_Balmaseda.svg.png", opciones: ["Muskiz", "Alonsotegi", "Balmaseda", "Abanto"], correcta: 2 },

// 12. Galdakao
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bandera_de_Galdakao.svg/120px-Bandera_de_Galdakao.svg.png", opciones: ["Elorrio", "Mallabia", "Berriz", "Galdakao"], correcta: 3 },

// 13. Forua
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Foruko_udal_ikurrina.svg/120px-Foruko_udal_ikurrina.svg.png", opciones: ["Forua", "Busturia", "Arantzazu", "Murueta"], correcta: 0 },

// 14. Zierbena
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Zierbenako_udal_ikurrina.svg/250px-Zierbenako_udal_ikurrina.svg.png", opciones: ["Lanestosa", "Zierbena", "Karrantza", "Turtzioz"], correcta: 1 },

// 15. Basauri
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Bandera_de_Basauri.svg/120px-Bandera_de_Basauri.svg.png", opciones: ["Leioa", "Erandio", "Basauri", "Zamudio"], correcta: 2 },

// 16. Bermeo
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bandera_de_Bermeo.svg/120px-Bandera_de_Bermeo.svg.png", opciones: ["Ondarroa", "Elantxobe", "Mundaka", "Bermeo"], correcta: 3 },

// 17. Ea
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bandera_de_Ea.svg/120px-Bandera_de_Ea.svg.png", opciones: ["Ea", "Bedaron", "Ispaster", "Amoroto"], correcta: 0 },

// 18. Ermua
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ermua_bandera.gif/120px-Ermua_bandera.gif", opciones: ["Durango", "Ermua", "Garai", "Izurtza"], correcta: 1 },

// 19. Gorliz
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gorliz_bandera.svg/120px-Gorliz_bandera.svg.png", opciones: ["Sopela", "Urduliz", "Gorliz", "Lemoiz"], correcta: 2 },

// 20. Ugao
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Ugao-Miraballes_%282022%E2%80%93%29.svg/120px-Flag_of_Ugao-Miraballes_%282022%E2%80%93%29.svg.png", opciones: ["Zeanuri", "Dima", "Igorre", "Ugao"], correcta: 3 },

// 21. Orozko
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Orozkoko_udal_ikurrina.svg/120px-Orozkoko_udal_ikurrina.svg.png", opciones: ["Orozko", "Markina-Xemein", "Etxebarria", "Gizaburuaga"], correcta: 0 }
         
        ],
    pack3: [  
  // BLOQUE: LOBOS Y ÁRBOLES
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Escudo_de_Loiu.svg/120px-Escudo_de_Loiu.svg.png", opciones: ["Sondika", "Gatika", "Loiu", "Marquina-Jeméin"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Escudo_de_Areatza_2007.svg/120px-Escudo_de_Areatza_2007.svg.png", opciones: ["Trucios-Turtzioz", "Balmaseda", "Munguía", "Areatza"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Escudo_de_Otxandio.svg/120px-Escudo_de_Otxandio.svg.png", opciones: ["Otxandio", "Munguía", "Dima", "Marquina-Jeméin"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Escudo_de_Berriz.svg/120px-Escudo_de_Berriz.svg.png", opciones: ["Izurtza", "Bérriz", "Garai", "Munguía"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Escudo_de_Izurtza.svg/120px-Escudo_de_Izurtza.svg.png", opciones: ["Bérriz", "Garai", "Izurtza", "Mañaria"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Escudo_de_Garai.svg/120px-Escudo_de_Garai.svg.png", opciones: ["Garai", "Bérriz", "Izurtza", "Mallabia"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Escudo_de_Mallabia.svg/120px-Escudo_de_Mallabia.svg.png", opciones: ["Garai", "Mallabia", "Ermua", "Zaldibar"], correcta: 1 },

  // BLOQUE: TORRES Y MURALLAS
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Escudo_de_Bilbao_%28ovalado%29.svg/120px-Escudo_de_Bilbao_%28ovalado%29.svg.png", opciones: ["Portugalete", "Bilbao", "Trapagaran", "Plentzia"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Escudo_de_Portugalete.svg/120px-Escudo_de_Portugalete.svg.png", opciones: ["Bilbao", "Ondarroa", "Portugalete", "Lekeitio"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Escudo_de_Ermua.svg/120px-Escudo_de_Ermua.svg.png", opciones: ["Zaldibar", "Durango", "Elorrio", "Ermua"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Escudo_de_Durango.svg/120px-Escudo_de_Durango.svg.png", opciones: ["Durango", "Ermua", "Elorrio", "Iurreta"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Escudo_de_Elorrio.svg/120px-Escudo_de_Elorrio.svg.png", opciones: ["Durango", "Elorrio", "Ermua", "Gordexola"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Escudo_de_Balmaseda.svg/120px-Escudo_de_Balmaseda.svg.png", opciones: ["Portugalete", "Areatza", "Balmaseda", "Bilbao"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Escudo_de_Lanestosa.svg/120px-Escudo_de_Lanestosa.svg.png", opciones: ["Balmaseda", "Karrantza", "Orduña", "Lanestosa"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Urdu%C3%B1ako_armarri_ofiziala.svg/120px-Urdu%C3%B1ako_armarri_ofiziala.svg.png", opciones: ["Orduña", "Lanestosa", "Balmaseda", "Bilbao"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Sestao.svg/120px-Escudo_de_Sestao.svg.png", opciones: ["Barakaldo", "Sestao", "Abanto-Zierbena", "Erandio"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Escudo_de_Barakaldo.svg/250px-Escudo_de_Barakaldo.svg.png", opciones: ["Sestao", "Erandio", "Barakaldo", "Bilbao"], correcta: 2 },

  // BLOQUE: COSTA Y MAR
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Escudo_de_Bermeo.svg/120px-Escudo_de_Bermeo.svg.png", opciones: ["Lekeitio", "Getaria", "Ondarroa", "Bermeo"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Escudo_de_Ondarroa_2000.svg/120px-Escudo_de_Ondarroa_2000.svg.png", opciones: ["Lekeitio", "Ondarroa", "Mutriku", "Bermeo"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Escudo_de_Plentzia.svg/120px-Escudo_de_Plentzia.svg.png", opciones: ["Mundaka", "Bakio", "Plentzia", "Bermeo"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Escudo_de_Mundaka.svg/120px-Escudo_de_Mundaka.svg.png", opciones: ["Plentzia", "Busturia", "Sukarrieta", "Mundaka"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Escudo_de_Sukarrieta.svg/120px-Escudo_de_Sukarrieta.svg.png", opciones: ["Sukarrieta", "Mundaka", "Busturia", "Murueta"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Escudo_de_Bakio.svg/120px-Escudo_de_Bakio.svg.png", opciones: ["Plentzia", "Bakio", "Gorliz", "Sopela"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Escudo_de_Gorliz.svg/120px-Escudo_de_Gorliz.svg.png", opciones: ["Bakio", "Sopela", "Gorliz", "Berango"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Escudo_de_Sopelana.svg/120px-Escudo_de_Sopelana.svg.png", opciones: ["Gorliz", "Berango", "Getxo", "Sopela"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Escudo_de_Getxo.svg/120px-Escudo_de_Getxo.svg.png", opciones: ["Getxo", "Sopela", "Leioa", "Erandio"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Escudo_de_Zierbena.svg/120px-Escudo_de_Zierbena.svg.png", opciones: ["Santurtzi", "Abanto-Zierbena", "Zierbena", "Muskiz"], correcta: 2 },

  // BLOQUE: PANELAS Y CRUCES
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Escudo_de_Galdakao.svg/120px-Escudo_de_Galdakao.svg.png", opciones: ["Morga", "Gordexola", "Zaratamo", "Galdakao"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Escudo_de_Morga.svg/120px-Escudo_de_Morga.svg.png", opciones: ["Morga", "Galdakao", "Muxika", "Arrieta"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Escudo_de_Gordexola.svg/120px-Escudo_de_Gordexola.svg.png", opciones: ["Galdakao", "Gordexola", "Artzentales", "Güeñes"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Escudo_de_Zaratamo.svg/120px-Escudo_de_Zaratamo.svg.png", opciones: ["Galdakao", "Zeberio", "Zaratamo", "Ugao-Miraballes"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Escudo_de_Gue%C3%B1es.svg/120px-Escudo_de_Gue%C3%B1es.svg.png", opciones: ["Gordexola", "Zalla", "Artzentales", "Güeñes"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Escudo_de_Zalla.svg/120px-Escudo_de_Zalla.svg.png", opciones: ["Zalla", "Güeñes", "Artzentales", "Balmaseda"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Escudo_de_Artzentales.svg/120px-Escudo_de_Artzentales.svg.png", opciones: ["Gordexola", "Artzentales", "Zalla", "Karrantza"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Escudo_de_Carranza.svg/120px-Escudo_de_Carranza.svg.png", opciones: ["Artzentales", "Lanestosa", "Karrantza", "Valle de Mena"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Escudo_de_Muxika.svg/120px-Escudo_de_Muxika.svg.png", opciones: ["Morga", "Arratzu", "Mendeja", "Muxika"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Escudo_de_Arrieta.svg/250px-Escudo_de_Arrieta.svg.png", opciones: ["Arrieta", "Morga", "Meñaka", "Busturia"], correcta: 0 },

  // BLOQUE: NATURALEZA Y PAISAJE
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Escudo_de_Ajangiz.svg/120px-Escudo_de_Ajangiz.svg.png", opciones: ["Gernika-Lumo", "Forua", "Ajangiz", "Arratzu"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Escudo_de_Forua.svg/120px-Escudo_de_Forua.svg.png", opciones: ["Ajangiz", "Murueta", "Kortezubi", "Forua"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Escudo_de_Kortezubi.svg/120px-Escudo_de_Kortezubi.svg.png", opciones: ["Kortezubi", "Forua", "Nabarniz", "Ereño"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Escudo_de_Nabarniz.svg/120px-Escudo_de_Nabarniz.svg.png", opciones: ["Kortezubi", "Nabarniz", "Ereño", "Mendeja"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Escudo_de_Ere%C3%B1o.svg/120px-Escudo_de_Ere%C3%B1o.svg.png", opciones: ["Nabarniz", "Kortezubi", "Ereño", "Gautegiz Arteaga"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Escudo_de_Murueta.svg/120px-Escudo_de_Murueta.svg.png", opciones: ["Gernika-Lumo", "Forua", "Gautegiz Arteaga", "Murueta"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Escudo_de_Ispaster.svg/120px-Escudo_de_Ispaster.svg.png", opciones: ["Ispaster", "Ea", "Mendeja", "Amoroto"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Escudo_de_Amoroto.svg/120px-Escudo_de_Amoroto.svg.png", opciones: ["Ispaster", "Amoroto", "Gizaburuaga", "Ea"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Escudo_de_Gizaburuaga.svg/120px-Escudo_de_Gizaburuaga.svg.png", opciones: ["Amoroto", "Aulesti", "Gizaburuaga", "Ziortza-Bolibar"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Escudo_de_Aulesti.svg/120px-Escudo_de_Aulesti.svg.png", opciones: ["Gizaburuaga", "Munitibar", "Ziortza-Bolibar", "Aulesti"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Escudo_de_Munitibar-Arbatzegi_Gerrikaitz.svg/120px-Escudo_de_Munitibar-Arbatzegi_Gerrikaitz.svg.png", opciones: ["Munitibar", "Aulesti", "Arbacegi", "Guerricaiz"], correcta: 0 },

  // BLOQUE: GRAN BILBAO Y VALLES
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Escudo_de_Erandio.svg/120px-Escudo_de_Erandio.svg.png", opciones: ["Leioa", "Erandio", "Barakaldo", "Sestao"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Escudo_de_Leioa.svg/250px-Escudo_de_Leioa.svg.png", opciones: ["Erandio", "Getxo", "Leioa", "Derio"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Escudo_de_Derio.svg/120px-Escudo_de_Derio.svg.png", opciones: ["Zamudio", "Sondika", "Loiu", "Derio"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Escudo_de_Zamudio.svg/250px-Escudo_de_Zamudio.svg.png", opciones: ["Zamudio", "Derio", "Lezama", "Sondika"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Escudo_de_Lezama.svg/120px-Escudo_de_Lezama.svg.png", opciones: ["Zamudio", "Lezama", "Larrabetzu", "Galdakao"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Escudo_de_Larrabetzu.svg/120px-Escudo_de_Larrabetzu.svg.png", opciones: ["Lezama", "Galdakao", "Larrabetzu", "Morga"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Escudo_de_Sondika.svg/120px-Escudo_de_Sondika.svg.png", opciones: ["Derio", "Erandio", "Loiu", "Sondika"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Escudo_de_Basauri.svg/120px-Escudo_de_Basauri.svg.png", opciones: ["Basauri", "Etxebarri", "Galdakao", "Arrankudiaga"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Escudo_de_Etxebarri.svg/120px-Escudo_de_Etxebarri.svg.png", opciones: ["Basauri", "Etxebarri", "Galdakao", "Ugao-Miraballes"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Escudo_de_Ugao_Miraballes.svg/120px-Escudo_de_Ugao_Miraballes.svg.png", opciones: ["Arrankudiaga", "Arrigorriaga", "Ugao-Miraballes", "Basauri"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Escudo_de_Arrigorriaga_%282001%29.svg/120px-Escudo_de_Arrigorriaga_%282001%29.svg.png", opciones: ["Ugao-Miraballes", "Zeberio", "Basauri", "Arrigorriaga"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Escudo_de_Zeberio.svg/120px-Escudo_de_Zeberio.svg.png", opciones: ["Zeberio", "Arrigorriaga", "Ugao-Miraballes", "Orozko"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Escudo_de_Arrankudiaga.svg/120px-Escudo_de_Arrankudiaga.svg.png", opciones: ["Ugao-Miraballes", "Arrankudiaga", "Orozko", "Lemoa"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Escudo_de_Orozko_2008.svg/250px-Escudo_de_Orozko_2008.svg.png", opciones: ["Arrankudiaga", "Arrigorriaga", "Orozko", "Lemoa"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Escudo_de_Lemoa.svg/120px-Escudo_de_Lemoa.svg.png", opciones: ["Igorre", "Arratia", "Amorebieta", "Lemoa"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Escudo_de_Igorre.svg/120px-Escudo_de_Igorre.svg.png", opciones: ["Igorre", "Lemoa", "Arratia", "Dima"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Escudo_de_Iurreta.svg/120px-Escudo_de_Iurreta.svg.png", opciones: ["Igorre", "Iurreta", "Amorebieta", "Lemoa"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo_de_Abadi%C3%B1o.svg/120px-Escudo_de_Abadi%C3%B1o.svg.png", opciones: ["Elorrio", "Berriz", "Durango", "Abadiño"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Escudo_de_Ma%C3%B1aria.svg/120px-Escudo_de_Ma%C3%B1aria.svg.png", opciones: ["Mañaria", "Izurtza", "Garai", "Dima"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Escudo_de_Ea.svg/120px-Escudo_de_Ea.svg.png", opciones: ["Ispaster", "Ea", "Elantxobe", "Bermeo"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Escudo_de_Elantxobe.svg/120px-Escudo_de_Elantxobe.svg.png", opciones: ["Ea", "Bermeo", "Elantxobe", "Mundaka"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Escudo_de_Errigoiti.svg/120px-Escudo_de_Errigoiti.svg.png", opciones: ["Arrieta", "Morga", "Meñaka", "Errigoiti"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Escudo_de_Me%C3%B1aka.svg/120px-Escudo_de_Me%C3%B1aka.svg.png", opciones: ["Meñaka", "Errigoiti", "Arrieta", "Fruiz"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Escudo_de_Fruiz.svg/120px-Escudo_de_Fruiz.svg.png", opciones: ["Meñaka", "Ugao", "Gamiz-Fika", "Arrieta"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Escudo_de_Gamiz_Fika.svg/120px-Escudo_de_Gamiz_Fika.svg.png", opciones: ["Fruiz", "Meñaka", "Gamiz-Fika", "Munguía"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Escudo_de_Lemoiz.svg/120px-Escudo_de_Lemoiz.svg.png", opciones: ["Gorliz", "Bakio", "Maruri", "Lemoiz"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Escudo_de_Maruri_Jatabe.svg/120px-Escudo_de_Maruri_Jatabe.svg.png", opciones: ["Maruri-Jatabe", "Gatika", "Laukiz", "Lemoiz"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Escudo_de_Laukiz.svg/120px-Escudo_de_Laukiz.svg.png", opciones: ["Maruri-Jatabe", "Laukiz", "Gatika", "Urduliz"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Escudo_de_Urduliz.svg/120px-Escudo_de_Urduliz.svg.png", opciones: ["Sopela", "Berango", "Urduliz", "Laukiz"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Escudo_de_Berango.svg/120px-Escudo_de_Berango.svg.png", opciones: ["Urduliz", "Sopela", "Getxo", "Berango"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Escudo_de_Trucios.svg/120px-Escudo_de_Trucios.svg.png", opciones: ["Trucios-Turtzioz", "Artzentales", "Galdames", "Muskiz"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Escudo_de_Galdames.svg/120px-Escudo_de_Galdames.svg.png", opciones: ["Muskiz", "Galdames", "Abanto-Zierbena", "Sopuerta"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_de_Sopuerta_%28Juntas_de_Avellaneda%29.svg/120px-Escudo_de_Sopuerta_%28Juntas_de_Avellaneda%29.svg.png", opciones: ["Galdames", "Muskiz", "Sopuerta", "Artzentales"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Escudo_de_Muskiz.svg/120px-Escudo_de_Muskiz.svg.png", opciones: ["Zierbena", "Galdames", "Sopuerta", "Muskiz"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Escudo_de_Abanto_Vizcaya.svg/120px-Escudo_de_Abanto_Vizcaya.svg.png", opciones: ["Abanto-Zierbena", "Muskiz", "Zierbena", "Ortuella"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Escudo_de_Ortuella.svg/120px-Escudo_de_Ortuella.svg.png", opciones: ["Trapagaran", "Ortuella", "Abanto-Zierbena", "Santurtzi"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo_de_Trapagaran.svg/120px-Escudo_de_Trapagaran.svg.png", opciones: ["Ortuella", "Sestao", "Valle de Trápaga", "Barakaldo"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Escudo_de_Arakaldo.svg/120px-Escudo_de_Arakaldo.svg.png", opciones: ["Arrankudiaga", "Orozko", "Zeberio", "Arakaldo"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Escudo_de_Arratzu.svg/120px-Escudo_de_Arratzu.svg.png", opciones: ["Arratzu", "Kortezubi", "Nabarniz", "Mendata"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Escudo_de_Mendata.svg/120px-Escudo_de_Mendata.svg.png", opciones: ["Arratzu", "Mendata", "Kortezubi", "Nabarniz"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bolibarko_armarria.png/120px-Bolibarko_armarria.png", opciones: ["Munitibar", "Arbacegi", "Ziortza-Bolibar", "Aulesti"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Escudo_de_Mendexa.svg/120px-Escudo_de_Mendexa.svg.png", opciones: ["Ispaster", "Amoroto", "Lekeitio", "Mendeja"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Escudo_de_Gautegiz_Arteaga.svg/120px-Escudo_de_Gautegiz_Arteaga.svg.png", opciones: ["Forua", "Murueta", "Gautegiz Arteaga", "Kortezubi"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Escudo_de_Busturia.svg/120px-Escudo_de_Busturia.svg.png", opciones: ["Sukarrieta", "Murueta", "Mundaka", "Busturia"], correcta: 3 }
    ],
        
    pack4: [
{ img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Escudo_de_%C3%81lava.svg/250px-Escudo_de_%C3%81lava.svg.png", opciones: ["Vizcaya", "Álava", "Guipúzcoa", "La Rioja"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Escudo_provincia_de_Albacete.svg/120px-Escudo_provincia_de_Albacete.svg.png", opciones: ["Albacete", "Cuenca", "Ávila", "Segovia"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Escut_de_la_Prov%C3%ADncia_d%27Alacant.svg/120px-Escut_de_la_Prov%C3%ADncia_d%27Alacant.svg.png", opciones: ["Baleares", "Castellón", "Alicante", "Valencia"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Escudo_de_la_Provincia_de_Almer%C3%ADa.svg/120px-Escudo_de_la_Provincia_de_Almer%C3%ADa.svg.png", opciones: ["Navarra", "Murcia", "Valladolid", "Almería"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Escudo_de_Asturias.svg/120px-Escudo_de_Asturias.svg.png", opciones: ["Asturias", "Tenerife", "Cantabria", "Guipúzcoa"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Escudo_de_la_provincia_de_%C3%81vila.svg/120px-Escudo_de_la_provincia_de_%C3%81vila.svg.png", opciones: ["Segovia", "Ávila", "Albacete", "Lugo"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Provincia_de_Badajoz_-_Escudo.svg/250px-Provincia_de_Badajoz_-_Escudo.svg.png", opciones: ["Cáceres", "Jaén", "Badajoz", "Sevilla"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Escut_de_Balears.svg/250px-Escut_de_Balears.svg.png", opciones: ["Barcelona", "Gerona", "Tarragona", "Baleares"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Escudo_de_la_provincia_de_Barcelona.svg/250px-Escudo_de_la_provincia_de_Barcelona.svg.png", opciones: ["Barcelona", "Tarragona", "Gerona", "Castellón"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Escudo_de_la_Provincia_de_Burgos.svg/120px-Escudo_de_la_Provincia_de_Burgos.svg.png", opciones: ["Toledo", "Burgos", "Soria", "Guadalajara"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Escudo_de_la_Diputaci%C3%B3n_de_C%C3%A1ceres.svg/120px-Escudo_de_la_Diputaci%C3%B3n_de_C%C3%A1ceres.svg.png", opciones: ["León", "Córdoba", "Cáceres", "Zaragoza"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Escudo_de_la_provincia_de_C%C3%A1diz.svg/250px-Escudo_de_la_provincia_de_C%C3%A1diz.svg.png", opciones: ["Ceuta", "Sevilla", "Melilla", "Cádiz"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Escudo_de_Cantabria.svg/120px-Escudo_de_Cantabria.svg.png", opciones: ["Cantabria", "Sevilla", "Asturias", "Cádiz"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Escut_de_la_Prov%C3%ADncia_de_Castell%C3%B3.svg/120px-Escut_de_la_Prov%C3%ADncia_de_Castell%C3%B3.svg.png", opciones: ["Valencia", "Castellón", "Lérida", "Alicante"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Escudo_de_Ceuta.svg/250px-Escudo_de_Ceuta.svg.png", opciones: ["Cádiz", "Melilla", "Ceuta", "Huelva"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Escudo_de_la_provincia_de_Ciudad_Real.svg/120px-Escudo_de_la_provincia_de_Ciudad_Real.svg.png", opciones: ["Ávila", "Segovia", "Toledo", "Ciudad Real"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Provincia_de_C%C3%B3rdoba_-_Escudo.svg/120px-Provincia_de_C%C3%B3rdoba_-_Escudo.svg.png", opciones: ["Córdoba", "León", "Zaragoza", "Cáceres"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Escudo_de_la_provincia_de_A_Coru%C3%B1a.svg/120px-Escudo_de_la_provincia_de_A_Coru%C3%B1a.svg.png", opciones: ["Pontevedra", "A Coruña", "Lugo", "Orense"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Escudo_de_la_Provincia_de_Cuenca.svg/250px-Escudo_de_la_Provincia_de_Cuenca.svg.png", opciones: ["Lugo", "Albacete", "Cuenca", "Ávila"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Escut_de_la_provincia_de_Girona.svg/250px-Escut_de_la_provincia_de_Girona.svg.png", opciones: ["Lérida", "Barcelona", "Tarragona", "Gerona"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Escudo_de_la_provincia_de_Granada_%28Espa%C3%B1a%29.svg/120px-Escudo_de_la_provincia_de_Granada_%28Espa%C3%B1a%29.svg.png", opciones: ["Granada", "Jaén", "Almería", "Murcia"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Escudo_de_la_provincia_de_Guadalajara.svg/120px-Escudo_de_la_provincia_de_Guadalajara.svg.png", opciones: ["Burgos", "Guadalajara", "Soria", "Toledo"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Escudo_de_Guipuzcoa.svg/250px-Escudo_de_Guipuzcoa.svg.png", opciones: ["Vizcaya", "Asturias", "Guipúzcoa", "Álava"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Escudo_Provincia_de_Huelva.svg/250px-Escudo_Provincia_de_Huelva.svg.png", opciones: ["Melilla", "Ceuta", "Cádiz", "Huelva"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Escudo_d%27a_probinzia_de_Uesca.svg/250px-Escudo_d%27a_probinzia_de_Uesca.svg.png", opciones: ["Huesca", "Teruel", "Zaragoza", "Baleares"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Escudo_de_la_provincia_de_Ja%C3%A9n.svg/120px-Escudo_de_la_provincia_de_Ja%C3%A9n.svg.png", opciones: ["Granada", "Jaén", "Ciudad Real", "Badajoz"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Escudo_de_Le%C3%B3n.svg/250px-Escudo_de_Le%C3%B3n.svg.png", opciones: ["Córdoba", "Cáceres", "León", "Zaragoza"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Escut_de_la_provincia_de_Lleida.svg/250px-Escut_de_la_provincia_de_Lleida.svg.png", opciones: ["Gerona", "Barcelona", "Tarragona", "Lérida"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Escudo_de_la_provincia_de_Lugo.svg/120px-Escudo_de_la_provincia_de_Lugo.svg.png", opciones: ["Lugo", "Cuenca", "Orense", "A Coruña"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Escudo_de_la_Comunidad_de_Madrid.svg/120px-Escudo_de_la_Comunidad_de_Madrid.svg.png", opciones: ["Soria", "Madrid", "La Rioja", "Álava"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Escudo_de_la_provincia_de_M%C3%A1laga.svg/250px-Escudo_de_la_provincia_de_M%C3%A1laga.svg.png", opciones: ["Almería", "Cádiz", "Málaga", "Melilla"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Escudo_de_Melilla.svg/250px-Escudo_de_Melilla.svg.png", opciones: ["Ceuta", "Cádiz", "Huelva", "Melilla"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Escudo-ca-murcia.svg/120px-Escudo-ca-murcia.svg.png", opciones: ["Almería", "Murcia", "Soria", "Albacete"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Escudo_de_Navarra_%28oficial%29.svg/120px-Escudo_de_Navarra_%28oficial%29.svg.png", opciones: ["Valladolid", "Navarra", "Almería", "Granada"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Provincia_de_Ourense_-_Escudo.svg/120px-Provincia_de_Ourense_-_Escudo.svg.png", opciones: ["Lugo", "Pontevedra", "Orense", "A Coruña"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Coat_of_Arms_of_Palencia_Province.svg/250px-Coat_of_Arms_of_Palencia_Province.svg.png", opciones: ["Valladolid", "Burgos", "Soria", "Palencia"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Provincia_de_Las_Palmas_-_Escudo.svg/120px-Provincia_de_Las_Palmas_-_Escudo.svg.png", opciones: ["Las Palmas", "Tenerife", "Canarias", "Baleares"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Escudo_de_la_provincia_de_Pontevedra.svg/250px-Escudo_de_la_provincia_de_Pontevedra.svg.png", opciones: ["A Coruña", "Pontevedra", "Lugo", "Orense"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Escudo_de_la_Comunidad_Autonoma_de_La_Rioja.svg/120px-Escudo_de_la_Comunidad_Autonoma_de_La_Rioja.svg.png", opciones: ["Madrid", "Álava", "La Rioja", "Soria"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Escudo_de_la_Provincia_de_Salamanca.svg/120px-Escudo_de_la_Provincia_de_Salamanca.svg.png", opciones: ["Zamora", "Burgos", "Palencia", "Salamanca"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Provincia_de_Santa_Cruz_de_Tenerife_-_Escudo.svg/120px-Provincia_de_Santa_Cruz_de_Tenerife_-_Escudo.svg.png", opciones: ["Sta. Cruz de Tenerife", "Las Palmas", "Asturias", "Canarias"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Escudo_de_la_provincia_de_Segovia.svg/250px-Escudo_de_la_provincia_de_Segovia.svg.png", opciones: ["Ávila", "Segovia", "Albacete", "Cuenca"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Escudo_de_la_provincia_de_Sevilla.svg/250px-Escudo_de_la_provincia_de_Sevilla.svg.png", opciones: ["Cantabria", "Badajoz", "Sevilla", "Granada"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Escudo_de_la_provincia_de_Soria2.svg/120px-Escudo_de_la_provincia_de_Soria2.svg.png", opciones: ["Guadalajara", "Burgos", "Segovia", "Soria"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Escudo_de_la_Provincia_de_Tarragona.svg/250px-Escudo_de_la_Provincia_de_Tarragona.svg.png", opciones: ["Tarragona", "Barcelona", "Gerona", "Lérida"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Escudo_de_la_Provincia_de_Teruel.svg/250px-Escudo_de_la_Provincia_de_Teruel.svg.png", opciones: ["Huesca", "Teruel", "Zaragoza", "Castellón"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Escudo_de_la_provincia_de_Toledo.svg/250px-Escudo_de_la_provincia_de_Toledo.svg.png", opciones: ["Burgos", "Cáceres", "Toledo", "Ciudad Real"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Escut_de_Val%C3%A8ncia.svg/250px-Escut_de_Val%C3%A8ncia.svg.png", opciones: ["Castellón", "Alicante", "Baleares", "Valencia"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Va-dip.svg/250px-Va-dip.svg.png", opciones: ["Valladolid", "Navarra", "Murcia", "Almería"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Escudo_de_Bizkaia_2007.svg/250px-Escudo_de_Bizkaia_2007.svg.png", opciones: ["Guipúzcoa", "Vizcaya", "Álava", "Cantabria"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Escudo_de_la_provincia_de_Zamora.svg/120px-Escudo_de_la_provincia_de_Zamora.svg.png", opciones: ["Salamanca", "Orense", "Zamora", "Pontevedra"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Escudo_d%27a_probinzia_de_Zaragoza.svg/120px-Escudo_d%27a_probinzia_de_Zaragoza.svg.png", opciones: ["León", "Córdoba", "Cáceres", "Zaragoza"], correcta: 3 }
],
        pack5: [
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bandera_de_la_ciudad_de_Madrid.svg/120px-Bandera_de_la_ciudad_de_Madrid.svg.png", opciones: ["Murcia", "Valladolid", "Madrid", "Alcorcón"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_Barcelona.svg/120px-Flag_of_Barcelona.svg.png", opciones: ["Barcelona", "L'Hospitalet", "Badalona", "Girona"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_the_Land_of_Valencia_%28official%29.svg/120px-Flag_of_the_Land_of_Valencia_%28official%29.svg.png", opciones: ["Torrent", "Valencia", "Castellón", "Zaragoza"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zaragoza_%28ciudad%29.svg/120px-Zaragoza_%28ciudad%29.svg.png", opciones: ["Jaén", "Córdoba", "Sevilla", "Cartagena"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zaragoza_%28ciudad%29.svg/120px-Zaragoza_%28ciudad%29.svg.png", opciones: ["Palma", "Zaragoza", "Lleida", "Huesca"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flag_of_M%C3%A1laga%2C_Spain.svg/120px-Flag_of_M%C3%A1laga%2C_Spain.svg.png", opciones: ["Granada", "Málaga", "Algeciras", "Las Palmas"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Murcia.svg/120px-Flag_of_Murcia.svg.png", opciones: ["Madrid", "Albacete", "Cartagena", "Murcia"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Mallorca.svg/120px-Flag_of_Mallorca.svg.png", opciones: ["Palma de Mallorca", "Zaragoza", "Tarragona", "Lorca"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Las_Palmas_de_Gran_Canaria.svg/120px-Flag_of_Las_Palmas_de_Gran_Canaria.svg.png", opciones: ["Telde", "Las Palmas de Gran Canaria", "Málaga", "S.C. Tenerife"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bandera_de_Bilbao.svg/120px-Bandera_de_Bilbao.svg.png", opciones: ["Logroño", "San Sebastián", "Bilbao", "Vitoria"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Bandera_d%27Alacant.svg/120px-Bandera_d%27Alacant.svg.png", opciones: ["Alicante", "San Sebastián", "S.C. Tenerife", "Elche"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_C%C3%B3rdoba%2C_Spain.svg/120px-Flag_of_C%C3%B3rdoba%2C_Spain.svg.png", opciones: ["Sevilla", "Córdoba", "Jaén", "Almería"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bandera_valladolid.svg/120px-Bandera_valladolid.svg.png", opciones: ["Madrid", "Móstoles", "Valladolid", "Alcalá de Henares"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vigo_bandera_2.png/120px-Vigo_bandera_2.png", opciones: ["Vigo", "A Coruña", "Santiago", "Pontevedra"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bandera_gijon.svg/120px-Bandera_gijon.svg.png", opciones: ["Gijón", "Oviedo", "Avilés", "Santander"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bandera_de_l%27Hospitalet_de_Llobregat.svg/120px-Bandera_de_l%27Hospitalet_de_Llobregat.svg.png", opciones: ["L'Hospitalet de Llobregat", "Barcelona", "Cornellà", "Badalona"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Vitoria.svg/120px-Flag_of_Vitoria.svg.png", opciones: ["Bilbao", "Logroño", "San Sebastián", "Vitoria-Gasteiz"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Flag_of_Elx.svg/120px-Flag_of_Elx.svg.png", opciones: ["Alicante", "Granada", "Elche", "Orihuela"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bandera_de_Granada_%28Granada%29.svg/120px-Bandera_de_Granada_%28Granada%29.svg.png", opciones: ["Granada", "Málaga", "Algeciras", "Elche"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_Terrassa%2C_Barcelona.svg/120px-Flag_of_Terrassa%2C_Barcelona.svg.png", opciones: ["Sabadell", "Terrassa", "Manresa", "Barcelona"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandera_Badalona.svg/120px-Bandera_Badalona.svg.png", opciones: ["Barcelona", "Girona", "Badalona", "Mataró"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Uvieu_flag.svg/120px-Uvieu_flag.svg.png", opciones: ["Gijón", "Avilés", "El Ejido", "Oviedo"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bandera_Cartagena.svg/120px-Bandera_Cartagena.svg.png", opciones: ["Murcia", "Sevilla", "Cartagena", "Almería"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Sabadell.svg/120px-Flag_of_Sabadell.svg.png", opciones: ["Terrassa", "Sabadell", "Sant Cugat", "Reus"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Flag_of_Jerez.svg/120px-Flag_of_Jerez.svg.png", opciones: ["Marbella", "Sanlúcar", "Jerez de la Frontera", "Cádiz"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/M%C3%B3stoles_%28bandera%29.svg/120px-M%C3%B3stoles_%28bandera%29.svg.png", opciones: ["Valladolid", "Móstoles", "Fuenlabrada", "Leganés"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Flag_Santa_Cruz_de_Tenerife_city.svg/120px-Flag_Santa_Cruz_de_Tenerife_city.svg.png", opciones: ["Santander", "Alicante", "Santa Cruz de Tenerife", "Arona"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bandera_Pamplona.svg/120px-Bandera_Pamplona.svg.png", opciones: ["Madrid", "Guadalajara", "Pamplona", "Burgos"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bandera_de_Almer%C3%ADa.svg/120px-Bandera_de_Almer%C3%ADa.svg.png", opciones: ["Almería", "Huelva", "Logroño", "Bilbao"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Alcal%C3%A1_de_Henares.svg/120px-Flag_of_Alcal%C3%A1_de_Henares.svg.png", opciones: ["Burgos", "Guadalajara", "Alcalá de Henares", "Parla"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Fuenlabrada.svg/120px-Flag_of_Fuenlabrada.svg.png", opciones: ["Fuenlabrada", "Getafe", "Móstoles", "Leganés"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bandera_de_Leganes.svg/120px-Bandera_de_Leganes.svg.png", opciones: ["Fuenlabrada", "Getafe", "Alcorcón", "Leganés"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bandera_de_San_Sebasti%C3%A1n.svg/120px-Bandera_de_San_Sebasti%C3%A1n.svg.png", opciones: ["Alicante", "Santander", "Bilbao", "San Sebastián"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Bandera_de_Getafe.svg/120px-Bandera_de_Getafe.svg.png", opciones: ["Leganés", "Getafe", "Fuenlabrada", "Parla"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bandera_de_la_ciudad_de_Burgos_%28Espa%C3%B1a%29.svg/120px-Bandera_de_la_ciudad_de_Burgos_%28Espa%C3%B1a%29.svg.png", opciones: ["Alcalá de Henares", "Valdemoro", "Burgos", "Valladolid"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Flag_of_Albacete_%28city%29_Spain.svg/120px-Flag_of_Albacete_%28city%29_Spain.svg.png", opciones: ["Murcia", "Albacete", "Linares", "Madrid"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bandera_de_Castell%C3%B3_de_la_Plana-2.svg/120px-Bandera_de_Castell%C3%B3_de_la_Plana-2.svg.png", opciones: ["Valencia", "Vila-real", "Alicante", "Castellón de la Plana"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Santander.svg/120px-Santander.svg.png", opciones: ["San Sebastián", "Santander", "S.C. Tenerife", "Alicante"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Alcorc%C3%B3n.svg/120px-Flag_of_Alcorc%C3%B3n.svg.png", opciones: ["Madrid", "Torrejón", "Alcorcón", "Jaén"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_San_Crist%C3%B3bal_de_la_Laguna.svg/120px-Flag_of_San_Crist%C3%B3bal_de_la_Laguna.svg.png", opciones: ["S.C. Tenerife", "Las Palmas", "San Cristóbal de La Laguna", "Arona"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Bandera_de_Logro%C3%B1o.svg/120px-Bandera_de_Logro%C3%B1o.svg.png", opciones: ["Bilbao", "Logroño", "Vitoria", "Almería"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Badajoz.svg/120px-Flag_of_Badajoz.svg.png", opciones: ["Málaga", "Granada", "Badajoz", "Mérida"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Marbella_Spain.svg/120px-Marbella_Spain.svg.png", opciones: ["Jerez", "Estepona", "Marbella", "Dos Hermanas"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bandera_de_Salamanca.svg/120px-Bandera_de_Salamanca.svg.png", opciones: ["Ávila", "Salamanca", "Palencia", "Madrid"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bandera_de_Huelva1.svg/120px-Bandera_de_Huelva1.svg.png", opciones: ["Almería", "Huelva", "Cádiz", "San Fernando"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Flag_of_Lleida.svg/120px-Flag_of_Lleida.svg.png", opciones: ["Zaragoza", "Lleida", "Girona", "Tarragona"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bandera_de_Tarragona.svg/120px-Bandera_de_Tarragona.svg.png", opciones: ["Lleida", "Reus", "Tarragona", "Girona"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_Dos_Hermanas_Spain.svg/120px-Flag_of_Dos_Hermanas_Spain.svg.png", opciones: ["Marbella", "Alcalá de Guadaíra", "Sevilla", "Dos Hermanas"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bandera_de_Parla_2017.svg/120px-Bandera_de_Parla_2017.svg.png", opciones: ["Getafe", "Alcalá de Henares", "Parla", "Fuenlabrada"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Bandera_de_Torrej%C3%B3n_de_Ardoz.svg/120px-Bandera_de_Torrej%C3%B3n_de_Ardoz.svg.png", opciones: ["Alcorcón", "Leganés", "Torrejón de Ardoz", "S. Fernando"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_Matar%C3%B3.svg/120px-Flag_of_Matar%C3%B3.svg.png", opciones: ["Badalona", "Girona", "Mataró", "Barcelona"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Algeciras.svg/120px-Flag_of_Algeciras.svg.png", opciones: ["Málaga", "Granada", "Sanlúcar", "Algeciras"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bandera_de_Le%C3%B3n_%28ciudad%29.svg/120px-Bandera_de_Le%C3%B3n_%28ciudad%29.svg.png", opciones: ["Oviedo", "León", "Salamanca", "Ponferrada"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_Alcobendas.svg/120px-Flag_of_Alcobendas.svg.png", opciones: ["S.S. de los Reyes", "Pozuelo", "Madrid", "Alcobendas"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Bandera_Santa_Coloma_de_Gramenet.png", opciones: ["Santa Coloma de Gramenet", "Badalona", "Hospitalet", "Sabadell"], correcta: 0 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bandera_de_Ja%C3%A9n.svg/120px-Bandera_de_Ja%C3%A9n.svg.png", opciones: ["Alcorcón", "Sevilla", "Córdoba", "Jaén"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bandera_de_C%C3%A1diz.svg/120px-Bandera_de_C%C3%A1diz.svg.png", opciones: ["Huelva", "Jerez", "Cádiz", "San Fernando"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Bandera_telde.svg/120px-Bandera_telde.svg.png", opciones: ["Las Palmas", "Santa Lucía", "Arona", "Telde"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Bandera_de_Roquetas_de_Mar.svg/120px-Bandera_de_Roquetas_de_Mar.svg.png", opciones: ["El Ejido", "Almería", "Roquetas de Mar", "Marbella"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Bandera_de_Orense.svg/120px-Bandera_de_Orense.svg.png", opciones: ["Lugo", "A Coruña", "Pontevedra", "Ourense"], correcta: 3 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Flag_of_Reus_%28Tarragona%29.svg/120px-Flag_of_Reus_%28Tarragona%29.svg.png", opciones: ["Tarragona", "Reus", "Sabadell", "Girona"], correcta: 1 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Bandera_de_Girona.svg/120px-Bandera_de_Girona.svg.png", opciones: ["Badalona", "Lleida", "Girona", "Barcelona"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Barakaldoko_ikurra_berria.svg/120px-Barakaldoko_ikurra_berria.svg.png", opciones: ["Sestao", "Getxo", "Barakaldo", "Bilbao"], correcta: 2 },
  { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Bandera_Pamplona.svg/120px-Bandera_Pamplona.svg.png", opciones: ["Vitoria-Gasteiz", "Pamplona", "Cádiz", "Castellón"], correcta: 1 }
            
        ],
        };
    
    Object.values(packs).forEach(pack => {
        while (pack.length < 25) {
            pack.push({...pack[Math.floor(Math.random() * pack.length)]});
        }
    });
    let packActual = ""
    let indiceActual = 0;
    let aciertos = 0;
    let preguntasMezcladas = [];
    let interactuable = true;
    let indiceCorrectoActual = 0;

function seleccionarPack(nombreDelPack) {
    packActual = nombreDelPack; // Guardamos el nombre globalmente
    startGame(nombreDelPack);   // Iniciamos el juego con ese pack
}

function startGame(packElegido) {
    // Aseguramos que packActual esté al día por si acaso
    packActual = packElegido; 

    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');

    // Usamos el packElegido para sacar las preguntas
    preguntasMezcladas = packs[packElegido].sort(() => Math.random() - 0.5).slice(0, 25);

    indiceActual = 0;
    aciertos = 0;

    renderQuestion();
}

    function renderQuestion() {
        interactuable = true;
        const data = preguntasMezcladas[indiceActual];

        let opcionesConEstado = data.opciones.map((opt, i) => ({ texto: opt, esCorrecta: i === data.correcta }));
        opcionesConEstado.sort(() => Math.random() - 0.5);
        indiceCorrectoActual = opcionesConEstado.findIndex(obj => obj.esCorrecta);

        document.getElementById('flag-img').src = data.img;
        document.getElementById('current-q').innerText = indiceActual + 1;
        document.getElementById('hits').innerText = aciertos;

        const container = document.getElementById('options-container');
        container.innerHTML = '';

        opcionesConEstado.forEach((obj, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = obj.texto;
            btn.onclick = () => checkAnswer(i, btn);
            container.appendChild(btn);
        });
    }

    function checkAnswer(elegida, btn) {
        if (!interactuable) return;
        interactuable = false;

        const botones = document.querySelectorAll('.option-btn');

        if (elegida === indiceCorrectoActual) {
            btn.classList.add('correct');
            aciertos++;
            document.getElementById('hits').innerText = aciertos;
        } else {
            btn.classList.add('wrong');
            botones[indiceCorrectoActual].classList.add('correct');
        }

        setTimeout(() => {
            indiceActual++;
            if (indiceActual < 25) {
                renderQuestion();
            } else {
                finishGame();
            }
        }, 2000);
    }

// Función para enviar la puntuación al terminar el juego
// Ahora recibe un tercer parámetro: el nombre del pack
async function guardarEnRankingOnline(nombre, puntos, nombrePack) {
    const { data, error } = await _supabase
        .from('ranking')
        .insert([{ 
            username: nombre, 
            score: puntos, 
            pack_name: nombrePack // Guardamos el pack correspondiente
        }]);

    if (error) {
        console.error("Error al guardar:", error);
    } else {
        console.log("Puntuación guardada en el pack: " + nombrePack);
        mostrarRankingActualizado(nombrePack); // Mostramos el ranking de ESE pack
    }
}

// Función para obtener los 10 mejores
async function mostrarRankingActualizado(nombrePack) {
    if (!nombrePack) return;

    // Diccionario para convertir el ID del pack en un nombre bonito
    const nombresBonitos = {
        'pack1': 'MUNDIAL',
        'pack2': 'BIZKAIA',
        'pack3': 'ARMARRI',
        'pack4': 'PROVINCIAS',
        'pack5': 'ESPAÑA 100K'
    };

    const { data: ranking, error } = await _supabase
        .from('ranking')
        .select('username, score')
        .eq('pack_name', nombrePack) 
        .order('score', { ascending: false })
        .limit(10);

    if (error) return;

    const lista = document.getElementById('lista-ranking');
    const titulo = document.querySelector('#ranking-container h3');
    
    // Si el nombre está en nuestro diccionario, lo usamos. Si no, usamos el original.
    const nombreVisual = nombresBonitos[nombrePack] || nombrePack.toUpperCase();
    if (titulo) titulo.innerText = `🏆 TOP 10 ${nombreVisual}`;
    
    lista.innerHTML = ranking.map((user, index) => 
        `<li><span>#${index + 1}</span> ${user.username} <b>${user.score} pts</b></li>`
    ).join('');
}
    async function cargarMejoresPorCategoria() {
    const packs = ['pack1', 'pack2', 'pack3', 'pack4','pack5'];

    for (const pack of packs) {
        const { data, error } = await _supabase
            .from('ranking')
            .select('username, score')
            .eq('pack_name', pack)
            .order('score', { ascending: false })
            .limit(1) // Solo el mejor
            .maybeSingle(); // Trae un solo objeto o null

        const contenedor = document.getElementById(`best-${pack}`);
        
        if (error) {
            console.error("Error:", error);
            if (contenedor) contenedor.innerText = "";
            continue;
        }

        if (data) {
            contenedor.innerHTML = `🏆 ${data.username}: <b>${data.score} pts</b>`;
        } else {
            contenedor.innerText = "Sin récords aún";
        }
    }
}

// Llamar a la función cuando cargue la página
function finishGame() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('end-screen').classList.add('active');
    
    document.getElementById('final-result').innerText = `Has conseguido ${aciertos} aciertos.`;
    
    // IMPORTANTE: Le pasamos el pack actual para que filtre bien
    mostrarRankingActualizado(packActual);
}

// Esta es la función que se activa al darle al botón nuevo
function enviarPuntuacion() {
    const nombre = document.getElementById('player-name').value;
    
    if (nombre) {
        // Usamos la variable global packActual que guardamos al principio
        guardarEnRankingOnline(nombre, aciertos, packActual); 
        document.getElementById('save-score-zone').style.display = 'none';
    }
}
    // Función para mostrar/ocultar el panel de escritura
function toggleAdmin() {
    const adminDiv = document.getElementById('admin-news');
    adminDiv.style.display = adminDiv.style.display === 'none' ? 'block' : 'none';
}

// Cargar noticias al iniciar
document.addEventListener('DOMContentLoaded', renderNews);

function addNews() {
    const input = document.getElementById('news-input');
    if (input.value.trim() === "") return;

    const news = JSON.parse(localStorage.getItem('game_news') || "[]");
    const newEntry = {
        id: Date.now(),
        text: input.value,
        date: new Date().toLocaleDateString()
    };

    news.unshift(newEntry); // Añade al principio
    localStorage.setItem('game_news', JSON.stringify(news));
    input.value = "";
    renderNews();
}

function deleteNews(id) {
    let news = JSON.parse(localStorage.getItem('game_news') || "[]");
    news = news.filter(item => item.id !== id);
    localStorage.setItem('game_news', JSON.stringify(news));
    renderNews();
}

const MI_CLAVE_MAESTRA = "1234"; // <--- CAMBIA ESTO POR TU CONTRASEÑA

async function renderNews() {
    const list = document.getElementById('news-list');
    
    // Cambiado: _supabase en lugar de supabase
    const { data: news, error } = await _supabase
        .from('noticias')
        .select('*')
        .order('fecha', { ascending: false });

    if (error) {
        console.error("Error en renderNews:", error);
        return;
    }

    const isAdmin = sessionStorage.getItem('esAdmin') === 'true';

    list.innerHTML = news.map(item => {
        const fechaFormateada = new Date(item.fecha).toLocaleDateString();
        return `
            <div class="news-item">
                <span class="news-date">${fechaFormateada}</span>
                <p>${item.texto}</p>
                ${isAdmin ? `<button class="delete-btn" onclick="deleteNews(${item.id})">🗑️</button>` : ''}
            </div>
        `;
    }).join('');
}

async function addNews() {
    const input = document.getElementById('news-input');
    const texto = input.value.trim();
    
    if (texto === "") return;

    // Cambiado: _supabase en lugar de supabase
    const { error } = await _supabase
        .from('noticias')
        .insert([{ texto: texto }]);

    if (error) {
        alert("Error al guardar: " + error.message);
    } else {
        input.value = "";
        renderNews();
    }
}

async function deleteNews(id) {
    if (!confirm("¿Borrar aviso?")) return;

    // Cambiado: _supabase en lugar de supabase
    const { error } = await _supabase
        .from('noticias')
        .delete()
        .eq('id', id);

    if (error) {
        alert("Error al borrar: " + error.message);
    } else {
        renderNews();
    }
}

// Iniciar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    cargarMejoresPorCategoria();
});
