/**
 * Roamero — Complete World Countries & Cities Dataset
 * 195 countries with top tourist destinations
 * Data curated from GeoNames (CC-BY 4.0) and Natural Earth (Public Domain)
 */

export const COUNTRIES = [
  // ============================================
  // AFRICA (54 countries)
  // ============================================
  {
    id: 'DZ', name: 'Algeria', continent: 'Africa', lat: 28.0339, lng: 1.6596, emoji: '🇩🇿',
    description: 'The largest country in Africa, known for its Saharan landscapes and Roman ruins.',
    cities: [
      { id: 'dz-algiers', name: 'Algiers', lat: 36.7538, lng: 3.0588, description: 'The White City on the Mediterranean' },
      { id: 'dz-oran', name: 'Oran', lat: 35.6969, lng: -0.6331, description: 'Algeria\'s second city with Spanish-influenced architecture' },
      { id: 'dz-constantine', name: 'Constantine', lat: 36.365, lng: 6.6147, description: 'City of Bridges spanning dramatic gorges' },
      { id: 'dz-annaba', name: 'Annaba', lat: 36.9, lng: 7.7667, description: 'Coastal city with beautiful beaches' },
      { id: 'dz-ghardaia', name: 'Ghardaia', lat: 32.4912, lng: 3.6737, description: 'UNESCO M\'zab Valley with ancient architecture' },
      { id: 'dz-tlemcen', name: 'Tlemcen', lat: 34.8828, lng: -1.3167, description: 'City of art and history' },
      { id: 'dz-setif', name: 'Setif', lat: 36.19, lng: 5.4078, description: 'Highland city with Roman ruins at Djemila' },
      { id: 'dz-batna', name: 'Batna', lat: 35.555, lng: 6.1742, description: 'Gateway to Timgad Roman ruins' },
      { id: 'dz-bejaia', name: 'Bejaia', lat: 36.7509, lng: 5.0567, description: 'Coastal city surrounded by mountains' },
      { id: 'dz-tamanrasset', name: 'Tamanrasset', lat: 22.785, lng: 5.5228, description: 'Gateway to the Hoggar Mountains' },
    ]
  },
  {
    id: 'AO', name: 'Angola', continent: 'Africa', lat: -11.2027, lng: 17.8739, emoji: '🇦🇴',
    description: 'A vast Southern African nation with diverse wildlife and Atlantic beaches.',
    cities: [
      { id: 'ao-luanda', name: 'Luanda', lat: -8.8399, lng: 13.2894, description: 'Vibrant capital on the Atlantic coast' },
      { id: 'ao-benguela', name: 'Benguela', lat: -12.5763, lng: 13.4055, description: 'Historic coastal city' },
      { id: 'ao-huambo', name: 'Huambo', lat: -12.7761, lng: 15.7394, description: 'Highland city with pleasant climate' },
      { id: 'ao-lubango', name: 'Lubango', lat: -14.9167, lng: 13.5, description: 'City near the Tundavala Gap' },
      { id: 'ao-cabinda', name: 'Cabinda', lat: -5.55, lng: 12.2, description: 'Oil-rich enclave province' },
    ]
  },
  {
    id: 'BJ', name: 'Benin', continent: 'Africa', lat: 9.3077, lng: 2.3158, emoji: '🇧🇯',
    description: 'Birthplace of Voodoo and the historic Kingdom of Dahomey.',
    cities: [
      { id: 'bj-cotonou', name: 'Cotonou', lat: 6.3703, lng: 2.3912, description: 'Economic capital and largest city' },
      { id: 'bj-porto-novo', name: 'Porto-Novo', lat: 6.4969, lng: 2.6289, description: 'Official capital with colonial heritage' },
      { id: 'bj-abomey', name: 'Abomey', lat: 7.1828, lng: 1.9914, description: 'UNESCO World Heritage royal palaces' },
      { id: 'bj-ouidah', name: 'Ouidah', lat: 6.3631, lng: 2.0856, description: 'Historic slave trade port and Voodoo center' },
      { id: 'bj-parakou', name: 'Parakou', lat: 9.3372, lng: 2.6303, description: 'Northern commercial hub' },
    ]
  },
  {
    id: 'BW', name: 'Botswana', continent: 'Africa', lat: -22.3285, lng: 24.6849, emoji: '🇧🇼',
    description: 'Home to the Okavango Delta and incredible African wildlife.',
    cities: [
      { id: 'bw-gaborone', name: 'Gaborone', lat: -24.6282, lng: 25.9231, description: 'Modern capital city' },
      { id: 'bw-maun', name: 'Maun', lat: -19.9833, lng: 23.4167, description: 'Gateway to the Okavango Delta' },
      { id: 'bw-kasane', name: 'Kasane', lat: -17.7833, lng: 25.15, description: 'Gateway to Chobe National Park' },
      { id: 'bw-francistown', name: 'Francistown', lat: -21.1667, lng: 27.5, description: 'Second largest city' },
      { id: 'bw-nata', name: 'Nata', lat: -20.2, lng: 26.2333, description: 'Gateway to Makgadikgadi Pans' },
    ]
  },
  {
    id: 'BF', name: 'Burkina Faso', continent: 'Africa', lat: 12.3714, lng: -1.5197, emoji: '🇧🇫',
    description: 'Land of upright people, known for arts, culture, and film festivals.',
    cities: [
      { id: 'bf-ouagadougou', name: 'Ouagadougou', lat: 12.3714, lng: -1.5197, description: 'Capital and cultural center' },
      { id: 'bf-bobo-dioulasso', name: 'Bobo-Dioulasso', lat: 11.1771, lng: -4.2979, description: 'Musical capital of West Africa' },
      { id: 'bf-banfora', name: 'Banfora', lat: 10.6333, lng: -4.7667, description: 'Near the Cascades de Karfiguéla' },
    ]
  },
  {
    id: 'BI', name: 'Burundi', continent: 'Africa', lat: -3.3731, lng: 29.9189, emoji: '🇧🇮',
    description: 'Heart of Africa with Lake Tanganyika and lush highlands.',
    cities: [
      { id: 'bi-bujumbura', name: 'Bujumbura', lat: -3.3822, lng: 29.3644, description: 'Former capital on Lake Tanganyika' },
      { id: 'bi-gitega', name: 'Gitega', lat: -3.4264, lng: 29.9306, description: 'New political capital in the highlands' },
    ]
  },
  {
    id: 'CV', name: 'Cabo Verde', continent: 'Africa', lat: 16.5388, lng: -23.0418, emoji: '🇨🇻',
    description: 'Volcanic island archipelago with stunning beaches and Creole culture.',
    cities: [
      { id: 'cv-praia', name: 'Praia', lat: 14.9331, lng: -23.5133, description: 'Capital city on Santiago island' },
      { id: 'cv-mindelo', name: 'Mindelo', lat: 16.8842, lng: -24.9975, description: 'Cultural capital with vibrant music scene' },
      { id: 'cv-sal', name: 'Santa Maria', lat: 16.5967, lng: -22.9, description: 'Beach resort town on Sal island' },
    ]
  },
  {
    id: 'CM', name: 'Cameroon', continent: 'Africa', lat: 7.3697, lng: 12.3547, emoji: '🇨🇲',
    description: 'Africa in miniature — diverse landscapes from beaches to deserts.',
    cities: [
      { id: 'cm-douala', name: 'Douala', lat: 4.0511, lng: 9.7679, description: 'Economic capital and largest city' },
      { id: 'cm-yaounde', name: 'Yaoundé', lat: 3.848, lng: 11.5021, description: 'Political capital in the hills' },
      { id: 'cm-limbe', name: 'Limbe', lat: 4.0167, lng: 9.2, description: 'Coastal town at the foot of Mount Cameroon' },
      { id: 'cm-kribi', name: 'Kribi', lat: 2.95, lng: 9.9167, description: 'Beach town with the Lobe Waterfalls' },
      { id: 'cm-bamenda', name: 'Bamenda', lat: 5.9597, lng: 10.1456, description: 'Highland city in the Grasslands' },
    ]
  },
  {
    id: 'CF', name: 'Central African Republic', continent: 'Africa', lat: 6.6111, lng: 20.9394, emoji: '🇨🇫',
    description: 'Wild heart of Africa with dense rainforests and unique wildlife.',
    cities: [
      { id: 'cf-bangui', name: 'Bangui', lat: 4.3947, lng: 18.5582, description: 'Capital on the Ubangi River' },
      { id: 'cf-bimbo', name: 'Bimbo', lat: 4.2569, lng: 18.5153, description: 'Suburb city near the capital' },
    ]
  },
  {
    id: 'TD', name: 'Chad', continent: 'Africa', lat: 15.4542, lng: 18.7322, emoji: '🇹🇩',
    description: 'From Saharan dunes to Lake Chad, a land of contrasts.',
    cities: [
      { id: 'td-ndjamena', name: "N'Djamena", lat: 12.1348, lng: 15.0557, description: 'Capital at the confluence of two rivers' },
      { id: 'td-abeche', name: 'Abéché', lat: 13.8292, lng: 20.8325, description: 'Eastern city near Ouaddaï highlands' },
    ]
  },
  {
    id: 'KM', name: 'Comoros', continent: 'Africa', lat: -11.6455, lng: 43.3333, emoji: '🇰🇲',
    description: 'Perfumed islands in the Indian Ocean between Madagascar and Mozambique.',
    cities: [
      { id: 'km-moroni', name: 'Moroni', lat: -11.7022, lng: 43.2551, description: 'Capital on Grande Comore island' },
    ]
  },
  {
    id: 'CG', name: 'Congo', continent: 'Africa', lat: -0.228, lng: 15.8277, emoji: '🇨🇬',
    description: 'Republic of the Congo with dense rainforests and the mighty Congo River.',
    cities: [
      { id: 'cg-brazzaville', name: 'Brazzaville', lat: -4.2634, lng: 15.2429, description: 'Capital facing Kinshasa across the river' },
      { id: 'cg-pointe-noire', name: 'Pointe-Noire', lat: -4.7692, lng: 11.8664, description: 'Port city on the Atlantic' },
    ]
  },
  {
    id: 'CD', name: 'DR Congo', continent: 'Africa', lat: -4.0383, lng: 21.7587, emoji: '🇨🇩',
    description: 'Vast central African nation with incredible biodiversity and the Congo River.',
    cities: [
      { id: 'cd-kinshasa', name: 'Kinshasa', lat: -4.4419, lng: 15.2663, description: 'Mega-city capital with vibrant music scene' },
      { id: 'cd-lubumbashi', name: 'Lubumbashi', lat: -11.6647, lng: 27.4794, description: 'Mining capital in the south' },
      { id: 'cd-goma', name: 'Goma', lat: -1.6794, lng: 29.2386, description: 'City by Lake Kivu and Nyiragongo volcano' },
      { id: 'cd-bukavu', name: 'Bukavu', lat: -2.5083, lng: 28.8608, description: 'Scenic city on Lake Kivu shores' },
      { id: 'cd-kisangani', name: 'Kisangani', lat: 0.5153, lng: 25.19, description: 'City at the heart of the Congo basin' },
    ]
  },
  {
    id: 'CI', name: "Côte d'Ivoire", continent: 'Africa', lat: 7.54, lng: -5.5471, emoji: '🇨🇮',
    description: 'West African nation known for cocoa, culture, and vibrant cities.',
    cities: [
      { id: 'ci-abidjan', name: 'Abidjan', lat: 5.3599, lng: -4.0083, description: 'Economic capital — the Paris of West Africa' },
      { id: 'ci-yamoussoukro', name: 'Yamoussoukro', lat: 6.8276, lng: -5.2893, description: 'Political capital with the grand Basilica' },
      { id: 'ci-grand-bassam', name: 'Grand-Bassam', lat: 5.2, lng: -3.7333, description: 'UNESCO World Heritage colonial town' },
      { id: 'ci-san-pedro', name: 'San-Pédro', lat: 4.7392, lng: -6.6361, description: 'Port city with beautiful coastline' },
      { id: 'ci-man', name: 'Man', lat: 7.4125, lng: -7.5539, description: 'City of 18 mountains' },
    ]
  },
  {
    id: 'DJ', name: 'Djibouti', continent: 'Africa', lat: 11.8251, lng: 42.5903, emoji: '🇩🇯',
    description: 'Strategic Horn of Africa nation with otherworldly landscapes.',
    cities: [
      { id: 'dj-djibouti', name: 'Djibouti City', lat: 11.588, lng: 43.145, description: 'Capital and port city' },
      { id: 'dj-lac-assal', name: 'Lac Assal', lat: 11.55, lng: 42.4, description: 'Lowest point in Africa — surreal salt lake' },
    ]
  },
  {
    id: 'EG', name: 'Egypt', continent: 'Africa', lat: 26.8206, lng: 30.8025, emoji: '🇪🇬',
    description: 'Land of pharaohs, pyramids, and the Nile — cradle of civilization.',
    cities: [
      { id: 'eg-cairo', name: 'Cairo', lat: 30.0444, lng: 31.2357, description: 'Sprawling capital home to the Pyramids of Giza' },
      { id: 'eg-luxor', name: 'Luxor', lat: 25.6872, lng: 32.6396, description: 'World\'s greatest open-air museum' },
      { id: 'eg-alexandria', name: 'Alexandria', lat: 31.2001, lng: 29.9187, description: 'Mediterranean pearl founded by Alexander' },
      { id: 'eg-aswan', name: 'Aswan', lat: 24.0889, lng: 32.8998, description: 'Gateway to Abu Simbel and Nubia' },
      { id: 'eg-sharm', name: 'Sharm El Sheikh', lat: 27.9158, lng: 34.33, description: 'Red Sea resort with world-class diving' },
      { id: 'eg-hurghada', name: 'Hurghada', lat: 27.2579, lng: 33.8116, description: 'Beach resort on the Red Sea' },
      { id: 'eg-dahab', name: 'Dahab', lat: 28.5, lng: 34.5167, description: 'Bohemian Sinai beach town' },
      { id: 'eg-siwa', name: 'Siwa Oasis', lat: 29.2033, lng: 25.5194, description: 'Remote desert oasis with ancient temples' },
      { id: 'eg-giza', name: 'Giza', lat: 30.0131, lng: 31.2089, description: 'Home of the Great Pyramids and Sphinx' },
      { id: 'eg-marsa-alam', name: 'Marsa Alam', lat: 25.0667, lng: 34.9, description: 'Pristine Red Sea diving destination' },
    ]
  },
  {
    id: 'GQ', name: 'Equatorial Guinea', continent: 'Africa', lat: 1.6508, lng: 10.2679, emoji: '🇬🇶',
    description: 'Oil-rich nation with lush islands and mainland rainforest.',
    cities: [
      { id: 'gq-malabo', name: 'Malabo', lat: 3.7504, lng: 8.7371, description: 'Capital on Bioko Island' },
      { id: 'gq-bata', name: 'Bata', lat: 1.8639, lng: 9.7658, description: 'Largest city on the mainland' },
    ]
  },
  {
    id: 'ER', name: 'Eritrea', continent: 'Africa', lat: 15.1794, lng: 39.7823, emoji: '🇪🇷',
    description: 'Red Sea nation with Italian-influenced architecture and ancient history.',
    cities: [
      { id: 'er-asmara', name: 'Asmara', lat: 15.3229, lng: 38.9251, description: 'UNESCO Art Deco capital at 2300m elevation' },
      { id: 'er-massawa', name: 'Massawa', lat: 15.6119, lng: 39.4653, description: 'Ancient Red Sea port city' },
    ]
  },
  {
    id: 'SZ', name: 'Eswatini', continent: 'Africa', lat: -26.5225, lng: 31.4659, emoji: '🇸🇿',
    description: 'Small kingdom known for wildlife reserves and vibrant cultural festivals.',
    cities: [
      { id: 'sz-mbabane', name: 'Mbabane', lat: -26.3054, lng: 31.1367, description: 'Administrative capital in the highlands' },
      { id: 'sz-manzini', name: 'Manzini', lat: -26.4986, lng: 31.3806, description: 'Largest city and commercial hub' },
    ]
  },
  {
    id: 'ET', name: 'Ethiopia', continent: 'Africa', lat: 9.145, lng: 40.4897, emoji: '🇪🇹',
    description: 'Ancient civilization, rock-hewn churches, and the birthplace of coffee.',
    cities: [
      { id: 'et-addis-ababa', name: 'Addis Ababa', lat: 9.0245, lng: 38.7468, description: 'Capital of Africa and seat of the AU' },
      { id: 'et-lalibela', name: 'Lalibela', lat: 12.0319, lng: 39.0472, description: 'UNESCO rock-hewn churches — New Jerusalem' },
      { id: 'et-gondar', name: 'Gondar', lat: 12.6, lng: 37.4667, description: 'Camelot of Africa with medieval castles' },
      { id: 'et-axum', name: 'Axum', lat: 14.121, lng: 38.7468, description: 'Ancient kingdom with obelisks and legends' },
      { id: 'et-harar', name: 'Harar', lat: 9.3131, lng: 42.1253, description: 'Walled city — fourth holy city of Islam' },
      { id: 'et-bahir-dar', name: 'Bahir Dar', lat: 11.5936, lng: 37.3908, description: 'Gateway to Lake Tana and Blue Nile Falls' },
      { id: 'et-simien', name: 'Simien Mountains', lat: 13.2667, lng: 38.4, description: 'Dramatic peaks and endemic wildlife' },
      { id: 'et-omo', name: 'Omo Valley', lat: 5.5, lng: 36.5, description: 'Home to diverse indigenous tribes' },
    ]
  },
  {
    id: 'GA', name: 'Gabon', continent: 'Africa', lat: -0.8037, lng: 11.6094, emoji: '🇬🇦',
    description: 'Equatorial nation with pristine rainforests and Atlantic beaches.',
    cities: [
      { id: 'ga-libreville', name: 'Libreville', lat: 0.3924, lng: 9.4536, description: 'Capital on the Gabon Estuary' },
      { id: 'ga-lope', name: 'Lopé', lat: -0.2, lng: 11.6, description: 'Gateway to Lopé National Park' },
    ]
  },
  {
    id: 'GM', name: 'Gambia', continent: 'Africa', lat: 13.4432, lng: -15.3101, emoji: '🇬🇲',
    description: 'The smiling coast of Africa — smallest mainland African country.',
    cities: [
      { id: 'gm-banjul', name: 'Banjul', lat: 13.4549, lng: -16.5790, description: 'Capital on an island in the river mouth' },
      { id: 'gm-serekunda', name: 'Serekunda', lat: 13.4381, lng: -16.6781, description: 'Largest city and commercial center' },
    ]
  },
  {
    id: 'GH', name: 'Ghana', continent: 'Africa', lat: 7.9465, lng: -1.0232, emoji: '🇬🇭',
    description: 'Gold Coast nation with castles, cocoa, and warm hospitality.',
    cities: [
      { id: 'gh-accra', name: 'Accra', lat: 5.6037, lng: -0.187, description: 'Vibrant capital with bustling markets' },
      { id: 'gh-kumasi', name: 'Kumasi', lat: 6.6885, lng: -1.6244, description: 'Heart of the Ashanti Kingdom' },
      { id: 'gh-cape-coast', name: 'Cape Coast', lat: 5.1036, lng: -1.2467, description: 'Historic slave trade castles on the coast' },
      { id: 'gh-tamale', name: 'Tamale', lat: 9.4034, lng: -0.8424, description: 'Northern capital and gateway to Mole' },
      { id: 'gh-elmina', name: 'Elmina', lat: 5.0847, lng: -1.3508, description: 'Oldest European building in sub-Saharan Africa' },
    ]
  },
  {
    id: 'GN', name: 'Guinea', continent: 'Africa', lat: 9.9456, lng: -9.6966, emoji: '🇬🇳',
    description: 'West African nation with highlands, waterfalls, and rich culture.',
    cities: [
      { id: 'gn-conakry', name: 'Conakry', lat: 9.6412, lng: -13.5784, description: 'Capital on the Atlantic peninsula' },
      { id: 'gn-kindia', name: 'Kindia', lat: 10.0608, lng: -12.8664, description: 'Gateway to Fouta Djallon highlands' },
    ]
  },
  {
    id: 'GW', name: 'Guinea-Bissau', continent: 'Africa', lat: 11.8037, lng: -15.1804, emoji: '🇬🇼',
    description: 'Small West African nation with the Bijagós archipelago.',
    cities: [
      { id: 'gw-bissau', name: 'Bissau', lat: 11.8636, lng: -15.5977, description: 'Capital with colorful colonial architecture' },
    ]
  },
  {
    id: 'KE', name: 'Kenya', continent: 'Africa', lat: -0.0236, lng: 37.9062, emoji: '🇰🇪',
    description: 'East African safari paradise with the Great Rift Valley and Indian Ocean coast.',
    cities: [
      { id: 'ke-nairobi', name: 'Nairobi', lat: -1.2921, lng: 36.8219, description: 'Capital with a national park inside the city' },
      { id: 'ke-mombasa', name: 'Mombasa', lat: -4.0435, lng: 39.6682, description: 'Historic Swahili port on the Indian Ocean' },
      { id: 'ke-masai-mara', name: 'Masai Mara', lat: -1.5, lng: 35.1, description: 'World-famous safari and Great Migration' },
      { id: 'ke-lamu', name: 'Lamu', lat: -2.2717, lng: 40.9022, description: 'UNESCO Swahili island town' },
      { id: 'ke-nakuru', name: 'Nakuru', lat: -0.3031, lng: 36.08, description: 'Lake Nakuru with flamingos and rhinos' },
      { id: 'ke-diani', name: 'Diani Beach', lat: -4.3167, lng: 39.5833, description: 'Pristine white-sand beach paradise' },
      { id: 'ke-amboseli', name: 'Amboseli', lat: -2.6528, lng: 37.2606, description: 'Elephants with Kilimanjaro backdrop' },
      { id: 'ke-malindi', name: 'Malindi', lat: -3.2194, lng: 40.1169, description: 'Coastal resort town with Italian flair' },
    ]
  },
  {
    id: 'LS', name: 'Lesotho', continent: 'Africa', lat: -29.6099, lng: 28.2336, emoji: '🇱🇸',
    description: 'Mountain kingdom entirely above 1000m — the roof of Africa.',
    cities: [
      { id: 'ls-maseru', name: 'Maseru', lat: -29.3167, lng: 27.4833, description: 'Capital on the Caledon River border' },
    ]
  },
  {
    id: 'LR', name: 'Liberia', continent: 'Africa', lat: 6.4281, lng: -9.4295, emoji: '🇱🇷',
    description: 'Founded by freed American slaves with lush rainforests and beaches.',
    cities: [
      { id: 'lr-monrovia', name: 'Monrovia', lat: 6.2907, lng: -10.7605, description: 'Capital named after US President Monroe' },
    ]
  },
  {
    id: 'LY', name: 'Libya', continent: 'Africa', lat: 26.3351, lng: 17.2283, emoji: '🇱🇾',
    description: 'North African nation with stunning Roman and Greek ruins in the desert.',
    cities: [
      { id: 'ly-tripoli', name: 'Tripoli', lat: 32.8872, lng: 13.1913, description: 'Capital and Mediterranean port city' },
      { id: 'ly-leptis-magna', name: 'Leptis Magna', lat: 32.6383, lng: 14.2917, description: 'Spectacular Roman ruins on the coast' },
      { id: 'ly-benghazi', name: 'Benghazi', lat: 32.12, lng: 20.0867, description: 'Second largest city in eastern Libya' },
    ]
  },
  {
    id: 'MG', name: 'Madagascar', continent: 'Africa', lat: -18.7669, lng: 46.8691, emoji: '🇲🇬',
    description: 'Island of lemurs, baobabs, and otherworldly biodiversity.',
    cities: [
      { id: 'mg-antananarivo', name: 'Antananarivo', lat: -18.8792, lng: 47.5079, description: 'Hilltop capital with French colonial charm' },
      { id: 'mg-nosy-be', name: 'Nosy Be', lat: -13.3333, lng: 48.2667, description: 'Tropical island paradise with turquoise waters' },
      { id: 'mg-morondava', name: 'Morondava', lat: -20.2833, lng: 44.2833, description: 'Gateway to the Avenue of the Baobabs' },
      { id: 'mg-antsirabe', name: 'Antsirabe', lat: -19.8653, lng: 47.0333, description: 'City of water with thermal springs' },
      { id: 'mg-isalo', name: 'Isalo', lat: -22.3833, lng: 45.3833, description: 'Stunning sandstone canyon national park' },
    ]
  },
  {
    id: 'MW', name: 'Malawi', continent: 'Africa', lat: -13.2543, lng: 34.3015, emoji: '🇲🇼',
    description: 'The warm heart of Africa with the great Lake Malawi.',
    cities: [
      { id: 'mw-lilongwe', name: 'Lilongwe', lat: -13.9626, lng: 33.7741, description: 'Capital in the central region' },
      { id: 'mw-blantyre', name: 'Blantyre', lat: -15.7861, lng: 35.0058, description: 'Commercial capital and largest city' },
      { id: 'mw-cape-maclear', name: 'Cape Maclear', lat: -14.0167, lng: 34.8333, description: 'Lake Malawi beach paradise' },
    ]
  },
  {
    id: 'ML', name: 'Mali', continent: 'Africa', lat: 17.5707, lng: -3.9962, emoji: '🇲🇱',
    description: 'Land of Timbuktu, ancient mosques, and Saharan trading routes.',
    cities: [
      { id: 'ml-bamako', name: 'Bamako', lat: 12.6392, lng: -8.0029, description: 'Capital on the Niger River' },
      { id: 'ml-timbuktu', name: 'Timbuktu', lat: 16.7735, lng: -3.0074, description: 'Legendary city of gold and learning' },
      { id: 'ml-djenne', name: 'Djenné', lat: 13.9053, lng: -4.5561, description: 'UNESCO city with the Great Mosque of mud' },
      { id: 'ml-dogon', name: 'Bandiagara (Dogon Country)', lat: 14.35, lng: -3.6167, description: 'UNESCO Dogon cliff dwellings' },
    ]
  },
  {
    id: 'MR', name: 'Mauritania', continent: 'Africa', lat: 21.0079, lng: -10.9408, emoji: '🇲🇷',
    description: 'Saharan nation with ancient caravan cities and the Richat Structure.',
    cities: [
      { id: 'mr-nouakchott', name: 'Nouakchott', lat: 18.0735, lng: -15.9582, description: 'Capital on the Atlantic coast' },
      { id: 'mr-chinguetti', name: 'Chinguetti', lat: 20.4611, lng: -12.3633, description: 'Ancient desert library city' },
    ]
  },
  {
    id: 'MU', name: 'Mauritius', continent: 'Africa', lat: -20.3484, lng: 57.5522, emoji: '🇲🇺',
    description: 'Indian Ocean paradise with turquoise lagoons and multicultural charm.',
    cities: [
      { id: 'mu-port-louis', name: 'Port Louis', lat: -20.1609, lng: 57.5012, description: 'Capital with vibrant waterfront' },
      { id: 'mu-grand-baie', name: 'Grand Baie', lat: -20.0133, lng: 57.5806, description: 'Beach resort and nightlife hub' },
      { id: 'mu-chamarel', name: 'Chamarel', lat: -20.4378, lng: 57.3819, description: 'Seven-colored earth and waterfalls' },
    ]
  },
  {
    id: 'MA', name: 'Morocco', continent: 'Africa', lat: 31.7917, lng: -7.0926, emoji: '🇲🇦',
    description: 'Gateway to Africa with imperial cities, souks, and the Sahara.',
    cities: [
      { id: 'ma-marrakech', name: 'Marrakech', lat: 31.6295, lng: -7.9811, description: 'Red City with Jemaa el-Fnaa square' },
      { id: 'ma-fez', name: 'Fez', lat: 34.0181, lng: -5.0078, description: 'World\'s largest car-free urban area' },
      { id: 'ma-chefchaouen', name: 'Chefchaouen', lat: 35.1688, lng: -5.2636, description: 'The Blue Pearl of Morocco' },
      { id: 'ma-casablanca', name: 'Casablanca', lat: 33.5731, lng: -7.5898, description: 'Largest city with the Hassan II Mosque' },
      { id: 'ma-essaouira', name: 'Essaouira', lat: 31.5085, lng: -9.7595, description: 'Windy coastal town with a vibrant art scene' },
      { id: 'ma-merzouga', name: 'Merzouga', lat: 31.0802, lng: -4.0135, description: 'Gateway to Erg Chebbi Sahara dunes' },
      { id: 'ma-rabat', name: 'Rabat', lat: 34.0209, lng: -6.8416, description: 'Capital with the Kasbah of the Udayas' },
      { id: 'ma-tangier', name: 'Tangier', lat: 35.7595, lng: -5.8340, description: 'Gateway between Europe and Africa' },
      { id: 'ma-ouarzazate', name: 'Ouarzazate', lat: 30.9203, lng: -6.8935, description: 'Hollywood of Morocco — Aït Benhaddou nearby' },
      { id: 'ma-agadir', name: 'Agadir', lat: 30.4278, lng: -9.5981, description: 'Beach resort on the Atlantic' },
    ]
  },
  {
    id: 'MZ', name: 'Mozambique', continent: 'Africa', lat: -18.6657, lng: 35.5296, emoji: '🇲🇿',
    description: 'Indian Ocean coastline with pristine archipelagos and coral reefs.',
    cities: [
      { id: 'mz-maputo', name: 'Maputo', lat: -25.9692, lng: 32.5732, description: 'Capital with Portuguese colonial architecture' },
      { id: 'mz-inhambane', name: 'Inhambane', lat: -23.865, lng: 35.3833, description: 'Historic coastal town with dhow sailing' },
      { id: 'mz-vilankulo', name: 'Vilankulo', lat: -22.0, lng: 35.3167, description: 'Gateway to the Bazaruto Archipelago' },
      { id: 'mz-ilha-moz', name: 'Ilha de Moçambique', lat: -15.0347, lng: 40.7358, description: 'UNESCO island with ancient forts' },
      { id: 'mz-tofo', name: 'Tofo Beach', lat: -23.75, lng: 35.55, description: 'World-class diving with whale sharks' },
    ]
  },
  {
    id: 'NA', name: 'Namibia', continent: 'Africa', lat: -22.9576, lng: 18.4904, emoji: '🇳🇦',
    description: 'Stark desert beauty — from Sossusvlei dunes to the Skeleton Coast.',
    cities: [
      { id: 'na-windhoek', name: 'Windhoek', lat: -22.5609, lng: 17.0658, description: 'Capital with German colonial heritage' },
      { id: 'na-sossusvlei', name: 'Sossusvlei', lat: -24.7275, lng: 15.3439, description: 'Iconic red sand dunes in the Namib' },
      { id: 'na-swakopmund', name: 'Swakopmund', lat: -22.6792, lng: 14.5264, description: 'Adventure town on the Skeleton Coast' },
      { id: 'na-etosha', name: 'Etosha', lat: -18.8556, lng: 16.3278, description: 'Premier wildlife sanctuary with salt pans' },
      { id: 'na-fish-river', name: 'Fish River Canyon', lat: -27.6, lng: 17.55, description: 'Second largest canyon in the world' },
    ]
  },
  {
    id: 'NE', name: 'Niger', continent: 'Africa', lat: 17.6078, lng: 8.0817, emoji: '🇳🇪',
    description: 'Saharan nation with ancient sultanates and the Air Mountains.',
    cities: [
      { id: 'ne-niamey', name: 'Niamey', lat: 13.5116, lng: 2.1254, description: 'Capital on the Niger River' },
      { id: 'ne-agadez', name: 'Agadez', lat: 16.9736, lng: 7.9911, description: 'UNESCO Saharan trading city with grand mosque' },
    ]
  },
  {
    id: 'NG', name: 'Nigeria', continent: 'Africa', lat: 9.082, lng: 8.6753, emoji: '🇳🇬',
    description: 'Africa\'s most populous nation and cultural powerhouse.',
    cities: [
      { id: 'ng-lagos', name: 'Lagos', lat: 6.5244, lng: 3.3792, description: 'Mega-city of Afrobeats and Nollywood' },
      { id: 'ng-abuja', name: 'Abuja', lat: 9.0765, lng: 7.3986, description: 'Purpose-built capital with Aso Rock' },
      { id: 'ng-kano', name: 'Kano', lat: 12.0022, lng: 8.5919, description: 'Ancient trading city with dye pits' },
      { id: 'ng-ibadan', name: 'Ibadan', lat: 7.3775, lng: 3.9470, description: 'Historic city of brown roofs' },
      { id: 'ng-calabar', name: 'Calabar', lat: 4.9517, lng: 8.322, description: 'Festival city on the Cross River' },
      { id: 'ng-benin-city', name: 'Benin City', lat: 6.335, lng: 5.6037, description: 'Ancient Benin Kingdom capital' },
    ]
  },
  {
    id: 'RW', name: 'Rwanda', continent: 'Africa', lat: -1.9403, lng: 29.8739, emoji: '🇷🇼',
    description: 'Land of a thousand hills with mountain gorillas and remarkable renewal.',
    cities: [
      { id: 'rw-kigali', name: 'Kigali', lat: -1.9706, lng: 30.1044, description: 'Cleanest capital in Africa' },
      { id: 'rw-volcanoes', name: 'Volcanoes NP', lat: -1.45, lng: 29.55, description: 'Mountain gorilla trekking sanctuary' },
      { id: 'rw-nyungwe', name: 'Nyungwe', lat: -2.5, lng: 29.25, description: 'Ancient montane rainforest with chimps' },
      { id: 'rw-kibuye', name: 'Karongi (Kibuye)', lat: -2.0667, lng: 29.35, description: 'Scenic town on Lake Kivu' },
    ]
  },
  {
    id: 'ST', name: 'São Tomé and Príncipe', continent: 'Africa', lat: 0.1864, lng: 6.6131, emoji: '🇸🇹',
    description: 'Tiny equatorial island nation with volcanic peaks and cocoa plantations.',
    cities: [
      { id: 'st-sao-tome', name: 'São Tomé', lat: 0.3365, lng: 6.7311, description: 'Capital with colonial plantation heritage' },
    ]
  },
  {
    id: 'SN', name: 'Senegal', continent: 'Africa', lat: 14.4974, lng: -14.4524, emoji: '🇸🇳',
    description: 'Westernmost African nation with vibrant culture and Teranga hospitality.',
    cities: [
      { id: 'sn-dakar', name: 'Dakar', lat: 14.7167, lng: -17.4677, description: 'Lively capital on the Cape Verde Peninsula' },
      { id: 'sn-saint-louis', name: 'Saint-Louis', lat: 16.0326, lng: -16.4892, description: 'UNESCO colonial island city' },
      { id: 'sn-goree', name: 'Gorée Island', lat: 14.6675, lng: -17.3978, description: 'Historic slave trade island memorial' },
      { id: 'sn-casamance', name: 'Ziguinchor (Casamance)', lat: 12.5833, lng: -16.2719, description: 'Lush southern region with river cruises' },
      { id: 'sn-saly', name: 'Saly', lat: 14.4489, lng: -17.0147, description: 'Popular beach resort town' },
    ]
  },
  {
    id: 'SC', name: 'Seychelles', continent: 'Africa', lat: -4.6796, lng: 55.492, emoji: '🇸🇨',
    description: 'Indian Ocean paradise with granite islands and turquoise waters.',
    cities: [
      { id: 'sc-victoria', name: 'Victoria', lat: -4.6191, lng: 55.4513, description: 'One of the world\'s smallest capitals' },
      { id: 'sc-la-digue', name: 'La Digue', lat: -4.3667, lng: 55.8333, description: 'Iconic Anse Source d\'Argent beach' },
      { id: 'sc-praslin', name: 'Praslin', lat: -4.3167, lng: 55.7333, description: 'Home to the Vallée de Mai UNESCO site' },
    ]
  },
  {
    id: 'SL', name: 'Sierra Leone', continent: 'Africa', lat: 8.4606, lng: -11.7799, emoji: '🇸🇱',
    description: 'West African coast with beautiful beaches and lush rainforests.',
    cities: [
      { id: 'sl-freetown', name: 'Freetown', lat: 8.484, lng: -13.2299, description: 'Capital on a mountainous peninsula' },
      { id: 'sl-tokeh', name: 'Tokeh Beach', lat: 8.2, lng: -13.25, description: 'Stunning white-sand beach' },
    ]
  },
  {
    id: 'SO', name: 'Somalia', continent: 'Africa', lat: 5.1521, lng: 46.1996, emoji: '🇸🇴',
    description: 'Horn of Africa nation with the longest coastline on the continent.',
    cities: [
      { id: 'so-mogadishu', name: 'Mogadishu', lat: 2.0469, lng: 45.3182, description: 'Capital on the Indian Ocean coast' },
      { id: 'so-hargeisa', name: 'Hargeisa', lat: 9.56, lng: 44.065, description: 'Capital of Somaliland with ancient cave art' },
    ]
  },
  {
    id: 'ZA', name: 'South Africa', continent: 'Africa', lat: -30.5595, lng: 22.9375, emoji: '🇿🇦',
    description: 'Rainbow nation with safaris, wine lands, and dramatic coastlines.',
    cities: [
      { id: 'za-cape-town', name: 'Cape Town', lat: -33.9249, lng: 18.4241, description: 'Mother City with Table Mountain' },
      { id: 'za-johannesburg', name: 'Johannesburg', lat: -26.2041, lng: 28.0473, description: 'City of Gold — largest in southern Africa' },
      { id: 'za-kruger', name: 'Kruger NP', lat: -23.9884, lng: 31.5547, description: 'Iconic Big Five safari destination' },
      { id: 'za-durban', name: 'Durban', lat: -29.8587, lng: 31.0218, description: 'Surf city with Indian-influenced culture' },
      { id: 'za-stellenbosch', name: 'Stellenbosch', lat: -33.9321, lng: 18.8602, description: 'Heart of South Africa\'s wine country' },
      { id: 'za-garden-route', name: 'Garden Route', lat: -33.9, lng: 22.4, description: 'Scenic coastal road along the Indian Ocean' },
      { id: 'za-pretoria', name: 'Pretoria', lat: -25.7479, lng: 28.2293, description: 'Administrative capital — Jacaranda City' },
      { id: 'za-hermanus', name: 'Hermanus', lat: -34.4187, lng: 19.2345, description: 'World\'s best land-based whale watching' },
      { id: 'za-drakensberg', name: 'Drakensberg', lat: -29.1, lng: 29.45, description: 'Dragon Mountains with spectacular hiking' },
      { id: 'za-knysna', name: 'Knysna', lat: -34.0356, lng: 23.0488, description: 'Lagoon town on the Garden Route' },
    ]
  },
  {
    id: 'SS', name: 'South Sudan', continent: 'Africa', lat: 6.877, lng: 31.307, emoji: '🇸🇸',
    description: 'World\'s newest country with vast wetlands and diverse wildlife.',
    cities: [
      { id: 'ss-juba', name: 'Juba', lat: 4.8594, lng: 31.5713, description: 'Capital on the White Nile' },
    ]
  },
  {
    id: 'SD', name: 'Sudan', continent: 'Africa', lat: 12.8628, lng: 30.2176, emoji: '🇸🇩',
    description: 'Ancient Nubian civilization with more pyramids than Egypt.',
    cities: [
      { id: 'sd-khartoum', name: 'Khartoum', lat: 15.5007, lng: 32.5599, description: 'Capital at the confluence of the two Niles' },
      { id: 'sd-meroe', name: 'Meroë', lat: 16.9386, lng: 33.7489, description: 'UNESCO Nubian pyramids in the desert' },
      { id: 'sd-port-sudan', name: 'Port Sudan', lat: 19.6158, lng: 37.2164, description: 'Red Sea port with coral reef diving' },
    ]
  },
  {
    id: 'TZ', name: 'Tanzania', continent: 'Africa', lat: -6.369, lng: 34.8888, emoji: '🇹🇿',
    description: 'Home to Kilimanjaro, the Serengeti, and the spice island of Zanzibar.',
    cities: [
      { id: 'tz-dar-es-salaam', name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083, description: 'Largest city and former capital' },
      { id: 'tz-zanzibar', name: 'Zanzibar', lat: -6.1659, lng: 39.2026, description: 'Spice island with Stone Town heritage' },
      { id: 'tz-serengeti', name: 'Serengeti', lat: -2.3333, lng: 34.8333, description: 'Endless plains of the Great Migration' },
      { id: 'tz-kilimanjaro', name: 'Kilimanjaro', lat: -3.0674, lng: 37.3556, description: 'Africa\'s highest peak — Roof of Africa' },
      { id: 'tz-ngorongoro', name: 'Ngorongoro Crater', lat: -3.2, lng: 35.5, description: 'World\'s largest intact volcanic caldera' },
      { id: 'tz-arusha', name: 'Arusha', lat: -3.3869, lng: 36.6830, description: 'Safari capital of East Africa' },
      { id: 'tz-dodoma', name: 'Dodoma', lat: -6.1722, lng: 35.7395, description: 'Capital in the central highlands' },
      { id: 'tz-lake-manyara', name: 'Lake Manyara', lat: -3.6, lng: 35.85, description: 'Tree-climbing lions and flamingos' },
    ]
  },
  {
    id: 'TG', name: 'Togo', continent: 'Africa', lat: 8.6195, lng: 0.8248, emoji: '🇹🇬',
    description: 'Narrow West African nation with palm-lined beaches and voodoo markets.',
    cities: [
      { id: 'tg-lome', name: 'Lomé', lat: 6.1256, lng: 1.2254, description: 'Capital with a famous fetish market' },
      { id: 'tg-kpalime', name: 'Kpalimé', lat: 6.9, lng: 0.6333, description: 'Mountain town with coffee and cocoa' },
    ]
  },
  {
    id: 'TN', name: 'Tunisia', continent: 'Africa', lat: 33.8869, lng: 9.5375, emoji: '🇹🇳',
    description: 'Mediterranean gem with Carthage ruins, Star Wars sets, and Saharan oases.',
    cities: [
      { id: 'tn-tunis', name: 'Tunis', lat: 36.8065, lng: 10.1815, description: 'Capital with the ancient Medina' },
      { id: 'tn-carthage', name: 'Carthage', lat: 36.8526, lng: 10.3233, description: 'UNESCO ruins of the Punic civilization' },
      { id: 'tn-sidi-bou-said', name: 'Sidi Bou Said', lat: 36.8687, lng: 10.3474, description: 'Blue and white cliffside village' },
      { id: 'tn-djerba', name: 'Djerba', lat: 33.8076, lng: 10.8451, description: 'Island of dreams with ancient synagogue' },
      { id: 'tn-tozeur', name: 'Tozeur', lat: 33.9197, lng: 8.1336, description: 'Desert oasis and Star Wars filming location' },
      { id: 'tn-sousse', name: 'Sousse', lat: 35.8254, lng: 10.636, description: 'Pearl of the Sahel with golden beaches' },
    ]
  },
  {
    id: 'UG', name: 'Uganda', continent: 'Africa', lat: 1.3733, lng: 32.2903, emoji: '🇺🇬',
    description: 'Pearl of Africa with gorilla trekking, the Nile source, and lush landscapes.',
    cities: [
      { id: 'ug-kampala', name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Capital built on seven hills' },
      { id: 'ug-bwindi', name: 'Bwindi', lat: -1.0, lng: 29.6, description: 'Impenetrable forest — gorilla trekking paradise' },
      { id: 'ug-jinja', name: 'Jinja', lat: 0.4244, lng: 33.2041, description: 'Source of the Nile and adventure sports capital' },
      { id: 'ug-entebbe', name: 'Entebbe', lat: 0.0512, lng: 32.4637, description: 'Lakeside city with botanical gardens' },
      { id: 'ug-murchison', name: 'Murchison Falls', lat: 2.28, lng: 31.68, description: 'Dramatic waterfalls on the Nile' },
    ]
  },
  {
    id: 'ZM', name: 'Zambia', continent: 'Africa', lat: -13.1339, lng: 27.8493, emoji: '🇿🇲',
    description: 'Home to Victoria Falls and some of Africa\'s best walking safaris.',
    cities: [
      { id: 'zm-lusaka', name: 'Lusaka', lat: -15.3875, lng: 28.3228, description: 'Capital and commercial hub' },
      { id: 'zm-victoria-falls', name: 'Livingstone', lat: -17.8419, lng: 25.8544, description: 'Victoria Falls — the smoke that thunders' },
      { id: 'zm-south-luangwa', name: 'South Luangwa', lat: -13.1, lng: 31.75, description: 'Premier walking safari destination' },
      { id: 'zm-lower-zambezi', name: 'Lower Zambezi', lat: -15.3, lng: 29.55, description: 'Canoeing safaris on the Zambezi' },
    ]
  },
  {
    id: 'ZW', name: 'Zimbabwe', continent: 'Africa', lat: -19.0154, lng: 29.1549, emoji: '🇿🇼',
    description: 'Ancient ruins, Victoria Falls, and world-class wildlife.',
    cities: [
      { id: 'zw-harare', name: 'Harare', lat: -17.8292, lng: 31.0522, description: 'Capital with jacaranda-lined avenues' },
      { id: 'zw-victoria-falls', name: 'Victoria Falls', lat: -17.9243, lng: 25.8572, description: 'One of the Seven Natural Wonders' },
      { id: 'zw-great-zimbabwe', name: 'Great Zimbabwe', lat: -20.2683, lng: 30.9338, description: 'Ruins of the medieval Shona kingdom' },
      { id: 'zw-hwange', name: 'Hwange NP', lat: -18.4, lng: 26.5, description: 'Largest game reserve with huge elephant herds' },
      { id: 'zw-bulawayo', name: 'Bulawayo', lat: -20.15, lng: 28.58, description: 'City of Kings near Matobo Hills' },
    ]
  },

  // ============================================
  // ASIA (48 countries)
  // ============================================
  {
    id: 'AF', name: 'Afghanistan', continent: 'Asia', lat: 33.9391, lng: 67.7100, emoji: '🇦🇫',
    description: 'Crossroads of Central Asia with ancient Buddhist sites and rugged mountains.',
    cities: [
      { id: 'af-kabul', name: 'Kabul', lat: 34.5553, lng: 69.2075, description: 'Capital in a mountain valley' },
      { id: 'af-herat', name: 'Herat', lat: 34.3529, lng: 62.2043, description: 'Ancient Silk Road city' },
      { id: 'af-mazar', name: 'Mazar-i-Sharif', lat: 36.7069, lng: 67.1147, description: 'Blue Mosque and northern hub' },
      { id: 'af-bamyan', name: 'Bamyan', lat: 34.8211, lng: 67.8264, description: 'Valley of the giant Buddha niches' },
    ]
  },
  {
    id: 'AM', name: 'Armenia', continent: 'Asia', lat: 40.0691, lng: 45.0382, emoji: '🇦🇲',
    description: 'Ancient Christian nation with monasteries perched among dramatic mountains.',
    cities: [
      { id: 'am-yerevan', name: 'Yerevan', lat: 40.1792, lng: 44.4991, description: 'Pink City capital with Ararat views' },
      { id: 'am-dilijan', name: 'Dilijan', lat: 40.7425, lng: 44.8622, description: 'The Little Switzerland of Armenia' },
      { id: 'am-geghard', name: 'Geghard', lat: 40.1403, lng: 44.8175, description: 'UNESCO monastery carved from rock' },
      { id: 'am-lake-sevan', name: 'Lake Sevan', lat: 40.5567, lng: 45.0167, description: 'Jewel of Armenia — high-altitude lake' },
    ]
  },
  {
    id: 'AZ', name: 'Azerbaijan', continent: 'Asia', lat: 40.1431, lng: 47.5769, emoji: '🇦🇿',
    description: 'Land of fire on the Caspian Sea, blending ancient and ultra-modern.',
    cities: [
      { id: 'az-baku', name: 'Baku', lat: 40.4093, lng: 49.8671, description: 'Futuristic capital with the Flame Towers' },
      { id: 'az-sheki', name: 'Sheki', lat: 41.1919, lng: 47.1706, description: 'Silk Road city with the Khan\'s Palace' },
      { id: 'az-gobustan', name: 'Gobustan', lat: 40.0894, lng: 49.3831, description: 'UNESCO rock art and mud volcanoes' },
    ]
  },
  {
    id: 'BH', name: 'Bahrain', continent: 'Asia', lat: 25.9304, lng: 50.6378, emoji: '🇧🇭',
    description: 'Island kingdom in the Persian Gulf with ancient Dilmun civilization.',
    cities: [
      { id: 'bh-manama', name: 'Manama', lat: 26.2285, lng: 50.5860, description: 'Capital with the Bahrain World Trade Center' },
      { id: 'bh-muharraq', name: 'Muharraq', lat: 26.2572, lng: 50.6119, description: 'UNESCO Pearling Trail heritage' },
    ]
  },
  {
    id: 'BD', name: 'Bangladesh', continent: 'Asia', lat: 23.685, lng: 90.3563, emoji: '🇧🇩',
    description: 'Delta nation with the Sundarbans mangrove forest and vibrant culture.',
    cities: [
      { id: 'bd-dhaka', name: 'Dhaka', lat: 23.8103, lng: 90.4125, description: 'Bustling capital — city of rickshaws' },
      { id: 'bd-cox-bazar', name: "Cox's Bazar", lat: 21.4272, lng: 92.0058, description: 'World\'s longest natural sea beach' },
      { id: 'bd-sylhet', name: 'Sylhet', lat: 24.8949, lng: 91.8687, description: 'Tea garden region with rolling hills' },
      { id: 'bd-sundarbans', name: 'Sundarbans', lat: 21.9497, lng: 89.1833, description: 'UNESCO mangrove forest — home of Bengal tigers' },
      { id: 'bd-chittagong', name: 'Chittagong', lat: 22.3569, lng: 91.7832, description: 'Port city with hill tracts' },
    ]
  },
  {
    id: 'BT', name: 'Bhutan', continent: 'Asia', lat: 27.5142, lng: 90.4336, emoji: '🇧🇹',
    description: 'Last Shangri-La measuring Gross National Happiness amid Himalayan peaks.',
    cities: [
      { id: 'bt-thimphu', name: 'Thimphu', lat: 27.4728, lng: 89.6390, description: 'Capital without traffic lights' },
      { id: 'bt-paro', name: 'Paro', lat: 27.4286, lng: 89.4164, description: 'Home of the Tiger\'s Nest Monastery' },
      { id: 'bt-punakha', name: 'Punakha', lat: 27.591, lng: 89.8713, description: 'Ancient capital with a stunning dzong' },
    ]
  },
  {
    id: 'BN', name: 'Brunei', continent: 'Asia', lat: 4.5353, lng: 114.7277, emoji: '🇧🇳',
    description: 'Tiny oil-rich sultanate on Borneo with rainforests and golden mosques.',
    cities: [
      { id: 'bn-bsb', name: 'Bandar Seri Begawan', lat: 4.9431, lng: 114.9453, description: 'Capital with the golden Omar Ali mosque' },
    ]
  },
  {
    id: 'KH', name: 'Cambodia', continent: 'Asia', lat: 12.5657, lng: 104.9910, emoji: '🇰🇭',
    description: 'Kingdom of the Khmer empire with the magnificent temples of Angkor.',
    cities: [
      { id: 'kh-phnom-penh', name: 'Phnom Penh', lat: 11.5564, lng: 104.9282, description: 'Capital with the Royal Palace and riverside' },
      { id: 'kh-siem-reap', name: 'Siem Reap', lat: 13.3633, lng: 103.8564, description: 'Gateway to Angkor Wat temple complex' },
      { id: 'kh-sihanoukville', name: 'Sihanoukville', lat: 10.6093, lng: 103.5297, description: 'Beach town with nearby islands' },
      { id: 'kh-battambang', name: 'Battambang', lat: 13.0957, lng: 103.2022, description: 'Colonial charm and bamboo train' },
      { id: 'kh-koh-rong', name: 'Koh Rong', lat: 10.6972, lng: 103.2586, description: 'Island paradise with bioluminescent plankton' },
    ]
  },
  {
    id: 'CN', name: 'China', continent: 'Asia', lat: 35.8617, lng: 104.1954, emoji: '🇨🇳',
    description: 'Ancient civilization with the Great Wall, terracotta warriors, and modern megacities.',
    cities: [
      { id: 'cn-beijing', name: 'Beijing', lat: 39.9042, lng: 116.4074, description: 'Capital with the Forbidden City and Great Wall' },
      { id: 'cn-shanghai', name: 'Shanghai', lat: 31.2304, lng: 121.4737, description: 'Futuristic skyline on the Huangpu River' },
      { id: 'cn-xian', name: "Xi'an", lat: 34.3416, lng: 108.9398, description: 'Terracotta Army and ancient Silk Road start' },
      { id: 'cn-guilin', name: 'Guilin', lat: 25.2744, lng: 110.29, description: 'Karst mountains and the Li River cruise' },
      { id: 'cn-chengdu', name: 'Chengdu', lat: 30.5728, lng: 104.0668, description: 'Panda capital and Sichuan cuisine' },
      { id: 'cn-hong-kong', name: 'Hong Kong', lat: 22.3193, lng: 114.1694, description: 'Asia\'s World City — dazzling skyline' },
      { id: 'cn-lhasa', name: 'Lhasa', lat: 29.65, lng: 91.1, description: 'Roof of the world with the Potala Palace' },
      { id: 'cn-hangzhou', name: 'Hangzhou', lat: 30.2741, lng: 120.1551, description: 'West Lake — heaven on earth' },
      { id: 'cn-zhangjiajie', name: 'Zhangjiajie', lat: 29.1169, lng: 110.4792, description: 'Avatar mountains — floating pillars' },
      { id: 'cn-great-wall', name: 'Great Wall (Badaling)', lat: 40.4319, lng: 116.5704, description: 'Most iconic section of the Great Wall' },
    ]
  },
  {
    id: 'CY', name: 'Cyprus', continent: 'Asia', lat: 35.1264, lng: 33.4299, emoji: '🇨🇾',
    description: 'Mediterranean island of Aphrodite with ancient ruins and golden beaches.',
    cities: [
      { id: 'cy-nicosia', name: 'Nicosia', lat: 35.1856, lng: 33.3823, description: 'Last divided capital in the world' },
      { id: 'cy-paphos', name: 'Paphos', lat: 34.7754, lng: 32.4245, description: 'UNESCO mosaics — birthplace of Aphrodite' },
      { id: 'cy-limassol', name: 'Limassol', lat: 34.707, lng: 33.0226, description: 'Coastal city with wine villages' },
      { id: 'cy-ayia-napa', name: 'Ayia Napa', lat: 34.9826, lng: 34.0057, description: 'Crystal-clear coves and lively nightlife' },
    ]
  },
  {
    id: 'GE', name: 'Georgia', continent: 'Asia', lat: 42.3154, lng: 43.3569, emoji: '🇬🇪',
    description: 'Caucasus gem with ancient wine culture, mountain villages, and warm hospitality.',
    cities: [
      { id: 'ge-tbilisi', name: 'Tbilisi', lat: 41.7151, lng: 44.8271, description: 'Capital with sulfur baths and Old Town charm' },
      { id: 'ge-batumi', name: 'Batumi', lat: 41.6168, lng: 41.6367, description: 'Black Sea resort with futuristic architecture' },
      { id: 'ge-kazbegi', name: 'Kazbegi (Stepantsminda)', lat: 42.6559, lng: 44.6383, description: 'Stunning Gergeti Trinity Church in the Caucasus' },
      { id: 'ge-mtskheta', name: 'Mtskheta', lat: 41.8447, lng: 44.7206, description: 'UNESCO ancient capital of Georgia' },
      { id: 'ge-kutaisi', name: 'Kutaisi', lat: 42.2679, lng: 42.6946, description: 'Second city with Gelati Monastery' },
    ]
  },
  {
    id: 'IN', name: 'India', continent: 'Asia', lat: 20.5937, lng: 78.9629, emoji: '🇮🇳',
    description: 'Incredible India — land of the Taj Mahal, spices, and ancient temples.',
    cities: [
      { id: 'in-delhi', name: 'New Delhi', lat: 28.6139, lng: 77.209, description: 'Capital blending Mughal and modern heritage' },
      { id: 'in-agra', name: 'Agra', lat: 27.1767, lng: 78.0081, description: 'Home of the iconic Taj Mahal' },
      { id: 'in-jaipur', name: 'Jaipur', lat: 26.9124, lng: 75.7873, description: 'Pink City of Rajasthan' },
      { id: 'in-varanasi', name: 'Varanasi', lat: 25.3176, lng: 82.9739, description: 'Sacred city on the Ganges — oldest living city' },
      { id: 'in-mumbai', name: 'Mumbai', lat: 19.076, lng: 72.8777, description: 'City of dreams — Bollywood capital' },
      { id: 'in-goa', name: 'Goa', lat: 15.2993, lng: 74.124, description: 'Beach paradise with Portuguese heritage' },
      { id: 'in-kerala', name: 'Kerala (Kochi)', lat: 9.9312, lng: 76.2673, description: 'God\'s Own Country — backwaters and spices' },
      { id: 'in-udaipur', name: 'Udaipur', lat: 24.5854, lng: 73.7125, description: 'City of Lakes — Venice of the East' },
      { id: 'in-rishikesh', name: 'Rishikesh', lat: 30.0869, lng: 78.2676, description: 'Yoga capital on the holy Ganges' },
      { id: 'in-ladakh', name: 'Leh-Ladakh', lat: 34.1526, lng: 77.5771, description: 'High-altitude desert with Buddhist monasteries' },
    ]
  },
  {
    id: 'ID', name: 'Indonesia', continent: 'Asia', lat: -0.7893, lng: 113.9213, emoji: '🇮🇩',
    description: 'Archipelago of 17,000 islands with Bali, Komodo dragons, and ancient temples.',
    cities: [
      { id: 'id-bali', name: 'Bali', lat: -8.3405, lng: 115.092, description: 'Island of the Gods — temples, rice terraces, beaches' },
      { id: 'id-jakarta', name: 'Jakarta', lat: -6.2088, lng: 106.8456, description: 'Mega-city capital on Java' },
      { id: 'id-yogyakarta', name: 'Yogyakarta', lat: -7.7956, lng: 110.3695, description: 'Javanese culture — Borobudur and Prambanan' },
      { id: 'id-komodo', name: 'Komodo', lat: -8.5, lng: 119.45, description: 'Home of the Komodo dragon' },
      { id: 'id-ubud', name: 'Ubud', lat: -8.5069, lng: 115.2625, description: 'Bali\'s cultural heart among rice paddies' },
      { id: 'id-raja-ampat', name: 'Raja Ampat', lat: -1.0, lng: 130.5, description: 'World\'s richest marine biodiversity' },
      { id: 'id-lombok', name: 'Lombok', lat: -8.65, lng: 116.35, description: 'Bali\'s quieter neighbor with Mount Rinjani' },
      { id: 'id-flores', name: 'Flores', lat: -8.6575, lng: 121.0794, description: 'Kelimutu tri-colored crater lakes' },
      { id: 'id-bromo', name: 'Mount Bromo', lat: -7.9425, lng: 112.953, description: 'Dramatic volcanic landscape in East Java' },
      { id: 'id-nias', name: 'Nias', lat: 1.1, lng: 97.55, description: 'Legendary surf and megalithic culture' },
    ]
  },
  {
    id: 'IR', name: 'Iran', continent: 'Asia', lat: 32.4279, lng: 53.688, emoji: '🇮🇷',
    description: 'Persia reborn — stunning mosques, ancient ruins, and Persian gardens.',
    cities: [
      { id: 'ir-isfahan', name: 'Isfahan', lat: 32.6546, lng: 51.6680, description: 'Half the world — Imam Square and bridges' },
      { id: 'ir-tehran', name: 'Tehran', lat: 35.6892, lng: 51.389, description: 'Capital beneath the Alborz mountains' },
      { id: 'ir-shiraz', name: 'Shiraz', lat: 29.5918, lng: 52.5837, description: 'City of poets, wine, and Persepolis nearby' },
      { id: 'ir-yazd', name: 'Yazd', lat: 31.8974, lng: 54.3569, description: 'UNESCO desert city with wind towers' },
      { id: 'ir-persepolis', name: 'Persepolis', lat: 29.9352, lng: 52.8914, description: 'Ruins of the ancient Persian Empire capital' },
    ]
  },
  {
    id: 'IQ', name: 'Iraq', continent: 'Asia', lat: 33.2232, lng: 43.6793, emoji: '🇮🇶',
    description: 'Cradle of civilization — Mesopotamia with ancient Babylon and sacred sites.',
    cities: [
      { id: 'iq-baghdad', name: 'Baghdad', lat: 33.3128, lng: 44.3615, description: 'Capital on the Tigris — ancient seat of learning' },
      { id: 'iq-erbil', name: 'Erbil', lat: 36.191, lng: 44.0119, description: 'One of the oldest continuously inhabited cities' },
      { id: 'iq-babylon', name: 'Babylon', lat: 32.5427, lng: 44.4209, description: 'UNESCO ancient Mesopotamian city' },
      { id: 'iq-najaf', name: 'Najaf', lat: 32.0003, lng: 44.3354, description: 'Holy city with the Imam Ali shrine' },
    ]
  },
  {
    id: 'IL', name: 'Israel', continent: 'Asia', lat: 31.0461, lng: 34.8516, emoji: '🇮🇱',
    description: 'Ancient holy land with Jerusalem, the Dead Sea, and vibrant Tel Aviv.',
    cities: [
      { id: 'il-jerusalem', name: 'Jerusalem', lat: 31.7683, lng: 35.2137, description: 'Holy city sacred to three religions' },
      { id: 'il-tel-aviv', name: 'Tel Aviv', lat: 32.0853, lng: 34.7818, description: 'Nonstop city with Bauhaus architecture' },
      { id: 'il-dead-sea', name: 'Dead Sea', lat: 31.5, lng: 35.5, description: 'Lowest point on Earth — float effortlessly' },
      { id: 'il-haifa', name: 'Haifa', lat: 32.7940, lng: 34.9896, description: 'Baháʼí Gardens on Mount Carmel' },
      { id: 'il-eilat', name: 'Eilat', lat: 29.5577, lng: 34.9519, description: 'Red Sea resort with coral reef diving' },
    ]
  },
  {
    id: 'JP', name: 'Japan', continent: 'Asia', lat: 36.2048, lng: 138.2529, emoji: '🇯🇵',
    description: 'Where ancient traditions meet cutting-edge technology.',
    cities: [
      { id: 'jp-tokyo', name: 'Tokyo', lat: 35.6762, lng: 139.6503, description: 'Neon-lit mega-city — world\'s busiest crossing' },
      { id: 'jp-kyoto', name: 'Kyoto', lat: 35.0116, lng: 135.7681, description: 'Ancient capital with 2000 temples and shrines' },
      { id: 'jp-osaka', name: 'Osaka', lat: 34.6937, lng: 135.5023, description: 'Japan\'s kitchen — street food paradise' },
      { id: 'jp-hiroshima', name: 'Hiroshima', lat: 34.3853, lng: 132.4553, description: 'Peace Memorial and nearby Miyajima island' },
      { id: 'jp-nara', name: 'Nara', lat: 34.6851, lng: 135.8048, description: 'Friendly deer and ancient Buddhist temples' },
      { id: 'jp-hakone', name: 'Hakone', lat: 35.2325, lng: 139.1069, description: 'Hot springs with Mount Fuji views' },
      { id: 'jp-okinawa', name: 'Okinawa', lat: 26.3344, lng: 127.8056, description: 'Tropical islands with unique Ryukyu culture' },
      { id: 'jp-fuji', name: 'Mount Fuji', lat: 35.3606, lng: 138.7274, description: 'Iconic sacred peak of Japan' },
      { id: 'jp-nikko', name: 'Nikko', lat: 36.7198, lng: 139.6982, description: 'Lavishly decorated Shinto shrines in the forest' },
      { id: 'jp-kanazawa', name: 'Kanazawa', lat: 36.5613, lng: 136.6562, description: 'Kenroku-en garden and samurai districts' },
    ]
  },
  {
    id: 'JO', name: 'Jordan', continent: 'Asia', lat: 30.5852, lng: 36.2384, emoji: '🇯🇴',
    description: 'Ancient Nabataean kingdom with Petra, the Dead Sea, and Wadi Rum.',
    cities: [
      { id: 'jo-amman', name: 'Amman', lat: 31.9454, lng: 35.9284, description: 'Capital built on seven hills with Roman ruins' },
      { id: 'jo-petra', name: 'Petra', lat: 30.3285, lng: 35.4444, description: 'Rose-red city carved into sandstone cliffs' },
      { id: 'jo-wadi-rum', name: 'Wadi Rum', lat: 29.5321, lng: 35.4131, description: 'Valley of the Moon — Mars-like desert' },
      { id: 'jo-aqaba', name: 'Aqaba', lat: 29.5267, lng: 35.0078, description: 'Red Sea resort with coral reef diving' },
      { id: 'jo-dead-sea', name: 'Dead Sea', lat: 31.5, lng: 35.5, description: 'Float in the lowest point on Earth' },
    ]
  },
  {
    id: 'KZ', name: 'Kazakhstan', continent: 'Asia', lat: 48.0196, lng: 66.9237, emoji: '🇰🇿',
    description: 'Vast Central Asian steppe with futuristic cities and ancient Silk Road.',
    cities: [
      { id: 'kz-astana', name: 'Astana', lat: 51.1694, lng: 71.4491, description: 'Futuristic capital on the steppe' },
      { id: 'kz-almaty', name: 'Almaty', lat: 43.2551, lng: 76.9126, description: 'Apple city at the foot of the Tian Shan' },
      { id: 'kz-charyn', name: 'Charyn Canyon', lat: 43.35, lng: 78.95, description: 'Central Asia\'s Grand Canyon' },
    ]
  },
  {
    id: 'KW', name: 'Kuwait', continent: 'Asia', lat: 29.3117, lng: 47.4818, emoji: '🇰🇼',
    description: 'Oil-rich Gulf state with modern architecture and rich maritime heritage.',
    cities: [
      { id: 'kw-kuwait-city', name: 'Kuwait City', lat: 29.3759, lng: 47.9774, description: 'Capital with the iconic Kuwait Towers' },
    ]
  },
  {
    id: 'KG', name: 'Kyrgyzstan', continent: 'Asia', lat: 41.2044, lng: 74.7661, emoji: '🇰🇬',
    description: 'Mountain paradise with yurt camps, alpine lakes, and nomadic culture.',
    cities: [
      { id: 'kg-bishkek', name: 'Bishkek', lat: 42.8746, lng: 74.5698, description: 'Green capital beneath the Ala-Too mountains' },
      { id: 'kg-issyk-kul', name: 'Issyk-Kul', lat: 42.5, lng: 77.0, description: 'Second largest alpine lake in the world' },
      { id: 'kg-karakol', name: 'Karakol', lat: 42.4907, lng: 78.3936, description: 'Adventure base for trekking and skiing' },
    ]
  },
  {
    id: 'LA', name: 'Laos', continent: 'Asia', lat: 19.8563, lng: 102.4955, emoji: '🇱🇦',
    description: 'Land of a million elephants with Buddhist temples and the Mekong River.',
    cities: [
      { id: 'la-luang-prabang', name: 'Luang Prabang', lat: 19.8847, lng: 102.1349, description: 'UNESCO town of monks and riverside temples' },
      { id: 'la-vientiane', name: 'Vientiane', lat: 17.9757, lng: 102.6331, description: 'Laid-back capital on the Mekong' },
      { id: 'la-vang-vieng', name: 'Vang Vieng', lat: 18.9222, lng: 102.4494, description: 'Karst landscapes and blue lagoons' },
      { id: 'la-4000-islands', name: 'Si Phan Don (4000 Islands)', lat: 14.0, lng: 105.85, description: 'Mekong river islands with dolphins' },
    ]
  },
  {
    id: 'LB', name: 'Lebanon', continent: 'Asia', lat: 33.8547, lng: 35.8623, emoji: '🇱🇧',
    description: 'Phoenician heritage with cedar forests, ancient ruins, and Mediterranean cuisine.',
    cities: [
      { id: 'lb-beirut', name: 'Beirut', lat: 33.8938, lng: 35.5018, description: 'Paris of the Middle East — resilient and vibrant' },
      { id: 'lb-byblos', name: 'Byblos', lat: 34.1205, lng: 35.6481, description: 'One of the oldest continuously inhabited cities' },
      { id: 'lb-baalbek', name: 'Baalbek', lat: 34.0064, lng: 36.2118, description: 'Colossal Roman temple ruins' },
      { id: 'lb-cedars', name: 'Cedars of God', lat: 34.25, lng: 36.05, description: 'Ancient cedar forest — national symbol' },
    ]
  },
  {
    id: 'MY', name: 'Malaysia', continent: 'Asia', lat: 4.2105, lng: 101.9758, emoji: '🇲🇾',
    description: 'Southeast Asian mosaic of cultures, rainforests, and stunning islands.',
    cities: [
      { id: 'my-kuala-lumpur', name: 'Kuala Lumpur', lat: 3.139, lng: 101.6869, description: 'Capital with the iconic Petronas Twin Towers' },
      { id: 'my-langkawi', name: 'Langkawi', lat: 6.35, lng: 99.8, description: 'Jewel of Kedah — duty-free island paradise' },
      { id: 'my-penang', name: 'George Town, Penang', lat: 5.4141, lng: 100.3288, description: 'UNESCO street art and food capital' },
      { id: 'my-borneo', name: 'Kota Kinabalu', lat: 5.9804, lng: 116.0735, description: 'Gateway to Mount Kinabalu and Borneo' },
      { id: 'my-malacca', name: 'Malacca', lat: 2.1896, lng: 102.2501, description: 'UNESCO historic trading port' },
      { id: 'my-perhentian', name: 'Perhentian Islands', lat: 5.9, lng: 102.75, description: 'Tropical diving paradise' },
    ]
  },
  {
    id: 'MV', name: 'Maldives', continent: 'Asia', lat: 3.2028, lng: 73.2207, emoji: '🇲🇻',
    description: 'Paradise of overwater villas, coral atolls, and crystal-clear Indian Ocean.',
    cities: [
      { id: 'mv-male', name: 'Malé', lat: 4.1755, lng: 73.5093, description: 'Colorful island capital' },
      { id: 'mv-maafushi', name: 'Maafushi', lat: 3.9415, lng: 73.4907, description: 'Popular local island with budget stays' },
      { id: 'mv-ari', name: 'Ari Atoll', lat: 3.85, lng: 72.85, description: 'Whale shark encounters and luxury resorts' },
    ]
  },
  {
    id: 'MN', name: 'Mongolia', continent: 'Asia', lat: 46.8625, lng: 103.8467, emoji: '🇲🇳',
    description: 'Land of Genghis Khan with vast steppes, nomadic culture, and the Gobi Desert.',
    cities: [
      { id: 'mn-ulaanbaatar', name: 'Ulaanbaatar', lat: 47.8864, lng: 106.9057, description: 'Capital — world\'s coldest capital city' },
      { id: 'mn-gobi', name: 'Gobi Desert', lat: 43.5, lng: 105.0, description: 'Vast desert with dinosaur fossils and sand dunes' },
      { id: 'mn-khuvsgul', name: 'Khuvsgul Lake', lat: 51.1, lng: 100.45, description: 'Blue Pearl — Mongolia\'s deepest lake' },
    ]
  },
  {
    id: 'MM', name: 'Myanmar', continent: 'Asia', lat: 21.9162, lng: 95.956, emoji: '🇲🇲',
    description: 'Golden land of pagodas, ancient kingdoms, and the Irrawaddy River.',
    cities: [
      { id: 'mm-yangon', name: 'Yangon', lat: 16.8661, lng: 96.1951, description: 'Former capital with the golden Shwedagon Pagoda' },
      { id: 'mm-bagan', name: 'Bagan', lat: 21.1717, lng: 94.8585, description: 'Plain of 2000+ ancient temples' },
      { id: 'mm-mandalay', name: 'Mandalay', lat: 21.9588, lng: 96.0891, description: 'Cultural capital with U Bein Bridge' },
      { id: 'mm-inle', name: 'Inle Lake', lat: 20.5833, lng: 96.9167, description: 'Floating gardens and leg-rowing fishermen' },
    ]
  },
  {
    id: 'NP', name: 'Nepal', continent: 'Asia', lat: 28.3949, lng: 84.124, emoji: '🇳🇵',
    description: 'Roof of the world with Mount Everest, ancient temples, and warm hearts.',
    cities: [
      { id: 'np-kathmandu', name: 'Kathmandu', lat: 27.7172, lng: 85.324, description: 'Temple-filled capital in a Himalayan valley' },
      { id: 'np-pokhara', name: 'Pokhara', lat: 28.2096, lng: 83.9856, description: 'Lakeside city with Annapurna views' },
      { id: 'np-everest', name: 'Everest Base Camp', lat: 28.0025, lng: 86.8528, description: 'Gateway to the world\'s highest peak' },
      { id: 'np-chitwan', name: 'Chitwan', lat: 27.5291, lng: 84.3542, description: 'Jungle safaris with rhinos and tigers' },
      { id: 'np-lumbini', name: 'Lumbini', lat: 27.4833, lng: 83.2833, description: 'Birthplace of the Buddha — UNESCO site' },
    ]
  },
  {
    id: 'OM', name: 'Oman', continent: 'Asia', lat: 21.4735, lng: 55.9754, emoji: '🇴🇲',
    description: 'Arabian gem with dramatic fjords, desert forts, and frankincense heritage.',
    cities: [
      { id: 'om-muscat', name: 'Muscat', lat: 23.5880, lng: 58.3829, description: 'Capital with the Grand Mosque and souks' },
      { id: 'om-nizwa', name: 'Nizwa', lat: 22.9333, lng: 57.5333, description: 'Historic oasis city with a grand fort' },
      { id: 'om-wahiba', name: 'Wahiba Sands', lat: 22.0, lng: 58.5, description: 'Desert dune experience with Bedouin camps' },
      { id: 'om-musandam', name: 'Musandam', lat: 26.2, lng: 56.25, description: 'Norway of Arabia — dramatic fjords' },
    ]
  },
  {
    id: 'PK', name: 'Pakistan', continent: 'Asia', lat: 30.3753, lng: 69.3451, emoji: '🇵🇰',
    description: 'Land of ancient Indus civilization, Karakoram peaks, and Mughal splendor.',
    cities: [
      { id: 'pk-lahore', name: 'Lahore', lat: 31.5204, lng: 74.3587, description: 'Heart of Pakistan — Mughal heritage and food' },
      { id: 'pk-islamabad', name: 'Islamabad', lat: 33.6844, lng: 73.0479, description: 'Modern capital at the foot of Margalla Hills' },
      { id: 'pk-hunza', name: 'Hunza Valley', lat: 36.3167, lng: 74.65, description: 'Real Shangri-La in the Karakoram' },
      { id: 'pk-karachi', name: 'Karachi', lat: 24.8607, lng: 67.0011, description: 'City of Lights — bustling port metropolis' },
      { id: 'pk-swat', name: 'Swat Valley', lat: 35.2227, lng: 72.3544, description: 'Switzerland of the East — lush green valley' },
    ]
  },
  {
    id: 'PS', name: 'Palestine', continent: 'Asia', lat: 31.9522, lng: 35.2332, emoji: '🇵🇸',
    description: 'Ancient land with Bethlehem, Jericho, and deep cultural heritage.',
    cities: [
      { id: 'ps-bethlehem', name: 'Bethlehem', lat: 31.7054, lng: 35.2024, description: 'Birthplace of Jesus — Church of the Nativity' },
      { id: 'ps-ramallah', name: 'Ramallah', lat: 31.9038, lng: 35.2034, description: 'De facto administrative capital' },
      { id: 'ps-jericho', name: 'Jericho', lat: 31.8611, lng: 35.4603, description: 'Oldest inhabited city in the world' },
    ]
  },
  {
    id: 'PH', name: 'Philippines', continent: 'Asia', lat: 12.8797, lng: 121.774, emoji: '🇵🇭',
    description: 'Over 7,000 islands with pristine beaches, rice terraces, and vibrant festivals.',
    cities: [
      { id: 'ph-manila', name: 'Manila', lat: 14.5995, lng: 120.9842, description: 'Capital with Spanish colonial Intramuros' },
      { id: 'ph-palawan', name: 'El Nido, Palawan', lat: 11.1784, lng: 119.3903, description: 'Last frontier — limestone cliffs and lagoons' },
      { id: 'ph-boracay', name: 'Boracay', lat: 11.9674, lng: 121.9248, description: 'Famous White Beach paradise' },
      { id: 'ph-cebu', name: 'Cebu', lat: 10.3157, lng: 123.8854, description: 'Queen City with whale shark encounters' },
      { id: 'ph-bohol', name: 'Bohol', lat: 9.85, lng: 124.0, description: 'Chocolate Hills and tiny tarsiers' },
      { id: 'ph-siargao', name: 'Siargao', lat: 9.8482, lng: 126.0458, description: 'Surfing capital of the Philippines' },
      { id: 'ph-banaue', name: 'Banaue', lat: 16.9145, lng: 121.0567, description: 'Eighth Wonder — 2000-year-old rice terraces' },
    ]
  },
  {
    id: 'QA', name: 'Qatar', continent: 'Asia', lat: 25.3548, lng: 51.1839, emoji: '🇶🇦',
    description: 'Ultramodern Gulf peninsula with world-class museums and 2022 World Cup legacy.',
    cities: [
      { id: 'qa-doha', name: 'Doha', lat: 25.2854, lng: 51.531, description: 'Capital with the Museum of Islamic Art' },
    ]
  },
  {
    id: 'SA', name: 'Saudi Arabia', continent: 'Asia', lat: 23.8859, lng: 45.0792, emoji: '🇸🇦',
    description: 'Birthplace of Islam opening to tourism with ancient Nabataean sites.',
    cities: [
      { id: 'sa-riyadh', name: 'Riyadh', lat: 24.7136, lng: 46.6753, description: 'Capital transforming with Vision 2030' },
      { id: 'sa-jeddah', name: 'Jeddah', lat: 21.4858, lng: 39.1925, description: 'Red Sea gateway with historic Al-Balad district' },
      { id: 'sa-al-ula', name: 'AlUla', lat: 26.6117, lng: 37.9192, description: 'Hegra — Saudi Arabia\'s first UNESCO site' },
      { id: 'sa-mecca', name: 'Mecca', lat: 21.4225, lng: 39.8262, description: 'Holiest city in Islam' },
      { id: 'sa-medina', name: 'Medina', lat: 24.5247, lng: 39.5692, description: 'Second holiest city in Islam' },
      { id: 'sa-neom', name: 'NEOM', lat: 27.95, lng: 35.3, description: 'Futuristic mega-city under construction' },
    ]
  },
  {
    id: 'SG', name: 'Singapore', continent: 'Asia', lat: 1.3521, lng: 103.8198, emoji: '🇸🇬',
    description: 'Garden city-state with futuristic architecture and incredible street food.',
    cities: [
      { id: 'sg-singapore', name: 'Singapore', lat: 1.3521, lng: 103.8198, description: 'Lion City — Marina Bay Sands and Gardens by the Bay' },
    ]
  },
  {
    id: 'KR', name: 'South Korea', continent: 'Asia', lat: 35.9078, lng: 127.7669, emoji: '🇰🇷',
    description: 'K-pop nation with palaces, kimchi, and cutting-edge technology.',
    cities: [
      { id: 'kr-seoul', name: 'Seoul', lat: 37.5665, lng: 126.978, description: 'Capital blending K-pop culture and royal palaces' },
      { id: 'kr-busan', name: 'Busan', lat: 35.1796, lng: 129.0756, description: 'Beach city with Gamcheon Culture Village' },
      { id: 'kr-jeju', name: 'Jeju Island', lat: 33.4996, lng: 126.5312, description: 'Volcanic island — Hawaii of Korea' },
      { id: 'kr-gyeongju', name: 'Gyeongju', lat: 35.8562, lng: 129.2247, description: 'Museum without walls — ancient Silla capital' },
      { id: 'kr-dmz', name: 'DMZ', lat: 37.9, lng: 126.65, description: 'Demilitarized Zone — Cold War frontier' },
    ]
  },
  {
    id: 'LK', name: 'Sri Lanka', continent: 'Asia', lat: 7.8731, lng: 80.7718, emoji: '🇱🇰',
    description: 'Teardrop of India with ancient temples, tea hills, and tropical beaches.',
    cities: [
      { id: 'lk-colombo', name: 'Colombo', lat: 6.9271, lng: 79.8612, description: 'Commercial capital with colonial heritage' },
      { id: 'lk-sigiriya', name: 'Sigiriya', lat: 7.957, lng: 80.7603, description: 'UNESCO Lion Rock fortress in the sky' },
      { id: 'lk-kandy', name: 'Kandy', lat: 7.2906, lng: 80.6337, description: 'Sacred city of the Temple of the Tooth' },
      { id: 'lk-galle', name: 'Galle', lat: 6.0535, lng: 80.2210, description: 'UNESCO Dutch fort on the southern coast' },
      { id: 'lk-ella', name: 'Ella', lat: 6.8667, lng: 81.0467, description: 'Hill country with the famous train ride' },
    ]
  },
  {
    id: 'SY', name: 'Syria', continent: 'Asia', lat: 34.8021, lng: 38.9968, emoji: '🇸🇾',
    description: 'Ancient cradle of civilization with Aleppo, Damascus, and Palmyra.',
    cities: [
      { id: 'sy-damascus', name: 'Damascus', lat: 33.5138, lng: 36.2765, description: 'Oldest continuously inhabited capital' },
      { id: 'sy-aleppo', name: 'Aleppo', lat: 36.2021, lng: 37.1343, description: 'Ancient citadel and trading crossroads' },
      { id: 'sy-palmyra', name: 'Palmyra', lat: 34.5519, lng: 38.2684, description: 'Queen Zenobia\'s desert oasis city ruins' },
    ]
  },
  {
    id: 'TW', name: 'Taiwan', continent: 'Asia', lat: 23.6978, lng: 120.9605, emoji: '🇹🇼',
    description: 'Beautiful island with night markets, Taroko Gorge, and warm hospitality.',
    cities: [
      { id: 'tw-taipei', name: 'Taipei', lat: 25.033, lng: 121.5654, description: 'Capital with Taipei 101 and night markets' },
      { id: 'tw-taroko', name: 'Taroko Gorge', lat: 24.1753, lng: 121.495, description: 'Dramatic marble gorge in the mountains' },
      { id: 'tw-jiufen', name: 'Jiufen', lat: 25.1097, lng: 121.8449, description: 'Spirited Away mountain village' },
      { id: 'tw-sun-moon-lake', name: 'Sun Moon Lake', lat: 23.8612, lng: 120.9166, description: 'Scenic mountain lake in central Taiwan' },
      { id: 'tw-kaohsiung', name: 'Kaohsiung', lat: 22.6273, lng: 120.3014, description: 'Port city with Dragon Tiger Tower' },
    ]
  },
  {
    id: 'TJ', name: 'Tajikistan', continent: 'Asia', lat: 38.861, lng: 71.2761, emoji: '🇹🇯',
    description: 'Mountain republic with the Pamir Highway and Central Asian adventure.',
    cities: [
      { id: 'tj-dushanbe', name: 'Dushanbe', lat: 38.5598, lng: 68.774, description: 'Capital with grand Soviet-era architecture' },
      { id: 'tj-pamir', name: 'Pamir Highway', lat: 38.8, lng: 72.8, description: 'Second highest highway in the world' },
    ]
  },
  {
    id: 'TH', name: 'Thailand', continent: 'Asia', lat: 15.87, lng: 100.9925, emoji: '🇹🇭',
    description: 'Land of smiles with golden temples, tropical islands, and incredible food.',
    cities: [
      { id: 'th-bangkok', name: 'Bangkok', lat: 13.7563, lng: 100.5018, description: 'City of Angels — temples, tuk-tuks, and street food' },
      { id: 'th-chiang-mai', name: 'Chiang Mai', lat: 18.7883, lng: 98.9853, description: 'Rose of the North — temples and mountains' },
      { id: 'th-phuket', name: 'Phuket', lat: 7.8804, lng: 98.3923, description: 'Pearl of the Andaman — beach paradise' },
      { id: 'th-krabi', name: 'Krabi', lat: 8.0863, lng: 98.9063, description: 'Limestone cliffs and emerald waters' },
      { id: 'th-koh-samui', name: 'Koh Samui', lat: 9.5120, lng: 100.0136, description: 'Tropical island with coconut groves' },
      { id: 'th-pai', name: 'Pai', lat: 19.3597, lng: 98.4403, description: 'Bohemian mountain town in the north' },
      { id: 'th-ayutthaya', name: 'Ayutthaya', lat: 14.3532, lng: 100.5689, description: 'UNESCO ruins of the ancient capital' },
      { id: 'th-koh-phi-phi', name: 'Koh Phi Phi', lat: 7.7407, lng: 98.7784, description: 'Iconic islands from The Beach' },
      { id: 'th-chiang-rai', name: 'Chiang Rai', lat: 19.9105, lng: 99.8406, description: 'White Temple and Golden Triangle' },
      { id: 'th-kanchanaburi', name: 'Kanchanaburi', lat: 14.0043, lng: 99.5483, description: 'Bridge over the River Kwai' },
    ]
  },
  {
    id: 'TL', name: 'Timor-Leste', continent: 'Asia', lat: -8.8742, lng: 125.7275, emoji: '🇹🇱',
    description: 'Southeast Asia\'s youngest nation with pristine diving and mountain culture.',
    cities: [
      { id: 'tl-dili', name: 'Dili', lat: -8.5569, lng: 125.5603, description: 'Capital with Cristo Rei statue' },
      { id: 'tl-atauro', name: 'Atauro Island', lat: -8.25, lng: 125.6, description: 'World-class diving biodiversity' },
    ]
  },
  {
    id: 'TR', name: 'Turkey', continent: 'Asia', lat: 38.9637, lng: 35.2433, emoji: '🇹🇷',
    description: 'Where East meets West — Istanbul, Cappadocia, and Aegean coasts.',
    cities: [
      { id: 'tr-istanbul', name: 'Istanbul', lat: 41.0082, lng: 28.9784, description: 'City on two continents — Hagia Sophia and bazaars' },
      { id: 'tr-cappadocia', name: 'Cappadocia', lat: 38.6431, lng: 34.8289, description: 'Fairy chimneys and hot air balloon rides' },
      { id: 'tr-antalya', name: 'Antalya', lat: 36.8969, lng: 30.7133, description: 'Turkish Riviera with ancient ruins' },
      { id: 'tr-pamukkale', name: 'Pamukkale', lat: 37.9137, lng: 29.1187, description: 'Cotton Castle — white travertine terraces' },
      { id: 'tr-ephesus', name: 'Ephesus', lat: 37.9394, lng: 27.3417, description: 'Best-preserved ancient Greek city' },
      { id: 'tr-bodrum', name: 'Bodrum', lat: 37.0344, lng: 27.4305, description: 'Aegean resort with ancient Mausoleum' },
      { id: 'tr-fethiye', name: 'Fethiye', lat: 36.6513, lng: 29.1226, description: 'Blue Lagoon and Lycian Way hiking' },
      { id: 'tr-trabzon', name: 'Trabzon', lat: 41.0027, lng: 39.7168, description: 'Black Sea city with Sumela Monastery' },
      { id: 'tr-ankara', name: 'Ankara', lat: 39.9334, lng: 32.8597, description: 'Capital with Atatürk\'s mausoleum' },
      { id: 'tr-mardin', name: 'Mardin', lat: 37.3212, lng: 40.7245, description: 'Mesopotamian hilltop city with stone architecture' },
    ]
  },
  {
    id: 'TM', name: 'Turkmenistan', continent: 'Asia', lat: 38.9697, lng: 59.5563, emoji: '🇹🇲',
    description: 'Central Asian nation with the Darvaza Gas Crater and Silk Road ruins.',
    cities: [
      { id: 'tm-ashgabat', name: 'Ashgabat', lat: 37.9601, lng: 58.3261, description: 'White marble capital — city of records' },
      { id: 'tm-darvaza', name: 'Darvaza (Door to Hell)', lat: 40.2525, lng: 58.4397, description: 'Burning gas crater in the Karakum Desert' },
    ]
  },
  {
    id: 'AE', name: 'United Arab Emirates', continent: 'Asia', lat: 23.4241, lng: 53.8478, emoji: '🇦🇪',
    description: 'Futuristic desert nation with Dubai\'s skyline and Abu Dhabi\'s culture.',
    cities: [
      { id: 'ae-dubai', name: 'Dubai', lat: 25.2048, lng: 55.2708, description: 'City of superlatives — Burj Khalifa and beyond' },
      { id: 'ae-abu-dhabi', name: 'Abu Dhabi', lat: 24.4539, lng: 54.3773, description: 'Capital with the Sheikh Zayed Grand Mosque' },
      { id: 'ae-sharjah', name: 'Sharjah', lat: 25.3463, lng: 55.4209, description: 'Cultural capital of the UAE' },
    ]
  },
  {
    id: 'UZ', name: 'Uzbekistan', continent: 'Asia', lat: 41.3775, lng: 64.5853, emoji: '🇺🇿',
    description: 'Heart of the Silk Road with Samarkand\'s turquoise domes and ancient bazaars.',
    cities: [
      { id: 'uz-samarkand', name: 'Samarkand', lat: 39.6542, lng: 66.9597, description: 'Registan Square — Silk Road jewel' },
      { id: 'uz-bukhara', name: 'Bukhara', lat: 39.7675, lng: 64.4231, description: 'UNESCO city of 140 monuments' },
      { id: 'uz-khiva', name: 'Khiva', lat: 41.3786, lng: 60.3636, description: 'Walled inner city — open-air museum' },
      { id: 'uz-tashkent', name: 'Tashkent', lat: 41.2995, lng: 69.2401, description: 'Capital with ornate metro stations' },
    ]
  },
  {
    id: 'VN', name: 'Vietnam', continent: 'Asia', lat: 14.0583, lng: 108.2772, emoji: '🇻🇳',
    description: 'S-shaped nation with Ha Long Bay, ancient towns, and legendary street food.',
    cities: [
      { id: 'vn-hanoi', name: 'Hanoi', lat: 21.0285, lng: 105.8542, description: 'Capital with Old Quarter and Ho Chi Minh mausoleum' },
      { id: 'vn-ho-chi-minh', name: 'Ho Chi Minh City', lat: 10.8231, lng: 106.6297, description: 'Dynamic southern city — formerly Saigon' },
      { id: 'vn-ha-long', name: 'Ha Long Bay', lat: 20.9101, lng: 107.1839, description: 'UNESCO — 1,600 limestone islands rising from emerald waters' },
      { id: 'vn-hoi-an', name: 'Hoi An', lat: 15.8801, lng: 108.338, description: 'UNESCO ancient town with lantern-lit streets' },
      { id: 'vn-hue', name: 'Huế', lat: 16.4637, lng: 107.5909, description: 'Imperial citadel of the Nguyen dynasty' },
      { id: 'vn-sapa', name: 'Sa Pa', lat: 22.3364, lng: 103.8438, description: 'Mountain town with terraced rice paddies' },
      { id: 'vn-da-nang', name: 'Da Nang', lat: 16.0544, lng: 108.2022, description: 'Beach city with the Golden Bridge' },
      { id: 'vn-phong-nha', name: 'Phong Nha', lat: 17.5833, lng: 106.2833, description: 'World\'s largest cave — Son Doong' },
      { id: 'vn-ninh-binh', name: 'Ninh Binh', lat: 20.2539, lng: 105.975, description: 'Ha Long Bay on land — karst landscapes' },
      { id: 'vn-phu-quoc', name: 'Phu Quoc', lat: 10.2269, lng: 103.9575, description: 'Island paradise in the Gulf of Thailand' },
    ]
  },
  {
    id: 'YE', name: 'Yemen', continent: 'Asia', lat: 15.5527, lng: 48.5164, emoji: '🇾🇪',
    description: 'Arabia Felix with ancient skyscraper cities and Socotra Island.',
    cities: [
      { id: 'ye-sanaa', name: "Sana'a", lat: 15.3694, lng: 44.191, description: 'UNESCO old city with tower houses' },
      { id: 'ye-socotra', name: 'Socotra Island', lat: 12.4634, lng: 53.8237, description: 'Alien island with dragon blood trees' },
    ]
  },
  {
    id: 'KP', name: 'North Korea', continent: 'Asia', lat: 40.3399, lng: 127.5101, emoji: '🇰🇵',
    description: 'Hermit kingdom with monumental architecture and the Korean DMZ.',
    cities: [
      { id: 'kp-pyongyang', name: 'Pyongyang', lat: 39.0392, lng: 125.7625, description: 'Showcase capital with grand monuments' },
    ]
  },

  // ============================================
  // EUROPE (44 countries)
  // ============================================
  {
    id: 'AL', name: 'Albania', continent: 'Europe', lat: 41.1533, lng: 20.1683, emoji: '🇦🇱',
    description: 'Hidden gem with the Albanian Riviera, ancient ruins, and mountain villages.',
    cities: [
      { id: 'al-tirana', name: 'Tirana', lat: 41.3275, lng: 19.8187, description: 'Colorful capital with Ottoman and Italian influences' },
      { id: 'al-berat', name: 'Berat', lat: 40.7058, lng: 19.9522, description: 'UNESCO City of a Thousand Windows' },
      { id: 'al-gjirokaster', name: 'Gjirokastër', lat: 40.0758, lng: 20.1389, description: 'UNESCO stone city in the mountains' },
      { id: 'al-sarande', name: 'Sarandë', lat: 39.8661, lng: 20.005, description: 'Albanian Riviera resort town' },
      { id: 'al-ksamil', name: 'Ksamil', lat: 39.7714, lng: 20.0006, description: 'Greek-style beaches on the Ionian Sea' },
    ]
  },
  {
    id: 'AD', name: 'Andorra', continent: 'Europe', lat: 42.5063, lng: 1.5218, emoji: '🇦🇩',
    description: 'Tiny Pyrenean principality with skiing and duty-free shopping.',
    cities: [
      { id: 'ad-andorra-la-vella', name: 'Andorra la Vella', lat: 42.5078, lng: 1.5211, description: 'Highest capital in Europe' },
    ]
  },
  {
    id: 'AT', name: 'Austria', continent: 'Europe', lat: 47.5162, lng: 14.5501, emoji: '🇦🇹',
    description: 'Alpine elegance with Vienna\'s palaces, Salzburg\'s music, and mountain grandeur.',
    cities: [
      { id: 'at-vienna', name: 'Vienna', lat: 48.2082, lng: 16.3738, description: 'Imperial capital of music and coffee houses' },
      { id: 'at-salzburg', name: 'Salzburg', lat: 47.8095, lng: 13.055, description: 'Mozart\'s birthplace and Sound of Music city' },
      { id: 'at-innsbruck', name: 'Innsbruck', lat: 47.2692, lng: 11.4041, description: 'Alpine capital surrounded by mountains' },
      { id: 'at-hallstatt', name: 'Hallstatt', lat: 47.5622, lng: 13.6493, description: 'Fairytale lakeside village in the Alps' },
      { id: 'at-graz', name: 'Graz', lat: 47.0707, lng: 15.4395, description: 'UNESCO old town and culinary capital' },
    ]
  },
  {
    id: 'BY', name: 'Belarus', continent: 'Europe', lat: 53.7098, lng: 27.9534, emoji: '🇧🇾',
    description: 'Eastern European country with vast forests and Soviet-era heritage.',
    cities: [
      { id: 'by-minsk', name: 'Minsk', lat: 53.9006, lng: 27.559, description: 'Capital with grand Soviet architecture' },
      { id: 'by-brest', name: 'Brest', lat: 52.0976, lng: 23.7341, description: 'Brest Fortress — WWII memorial' },
    ]
  },
  {
    id: 'BE', name: 'Belgium', continent: 'Europe', lat: 50.5039, lng: 4.4699, emoji: '🇧🇪',
    description: 'Land of waffles, chocolate, beer, and stunning medieval towns.',
    cities: [
      { id: 'be-brussels', name: 'Brussels', lat: 50.8503, lng: 4.3517, description: 'EU capital with Grand Place and Atomium' },
      { id: 'be-bruges', name: 'Bruges', lat: 51.2093, lng: 3.2247, description: 'Venice of the North — medieval fairytale' },
      { id: 'be-ghent', name: 'Ghent', lat: 51.0543, lng: 3.7174, description: 'Medieval gem with vibrant student culture' },
      { id: 'be-antwerp', name: 'Antwerp', lat: 51.2194, lng: 4.4025, description: 'Diamond capital and fashion hub' },
    ]
  },
  {
    id: 'BA', name: 'Bosnia and Herzegovina', continent: 'Europe', lat: 43.9159, lng: 17.6791, emoji: '🇧🇦',
    description: 'Where East meets West with Ottoman bridges and untouched nature.',
    cities: [
      { id: 'ba-sarajevo', name: 'Sarajevo', lat: 43.8563, lng: 18.4131, description: 'Capital where civilizations meet' },
      { id: 'ba-mostar', name: 'Mostar', lat: 43.3438, lng: 17.8078, description: 'Iconic Stari Most bridge over the Neretva' },
    ]
  },
  {
    id: 'BG', name: 'Bulgaria', continent: 'Europe', lat: 42.7339, lng: 25.4858, emoji: '🇧🇬',
    description: 'Ancient Thracian land with Black Sea beaches and rose valleys.',
    cities: [
      { id: 'bg-sofia', name: 'Sofia', lat: 42.6977, lng: 23.3219, description: 'Capital beneath Vitosha Mountain' },
      { id: 'bg-plovdiv', name: 'Plovdiv', lat: 42.1354, lng: 24.7453, description: 'One of Europe\'s oldest cities' },
      { id: 'bg-rila', name: 'Rila Monastery', lat: 42.1333, lng: 23.3403, description: 'UNESCO monastery in the mountains' },
      { id: 'bg-veliko-tarnovo', name: 'Veliko Tarnovo', lat: 43.0757, lng: 25.6172, description: 'Medieval capital on dramatic cliffs' },
    ]
  },
  {
    id: 'HR', name: 'Croatia', continent: 'Europe', lat: 45.1, lng: 15.2, emoji: '🇭🇷',
    description: 'Adriatic paradise with Dubrovnik, island-hopping, and Game of Thrones locations.',
    cities: [
      { id: 'hr-dubrovnik', name: 'Dubrovnik', lat: 42.6507, lng: 18.0944, description: 'Pearl of the Adriatic — King\'s Landing' },
      { id: 'hr-split', name: 'Split', lat: 43.5081, lng: 16.4402, description: 'Diocletian\'s Palace — living Roman ruin' },
      { id: 'hr-zagreb', name: 'Zagreb', lat: 45.815, lng: 15.9819, description: 'Capital with Upper Town charm' },
      { id: 'hr-plitvice', name: 'Plitvice Lakes', lat: 44.8654, lng: 15.582, description: 'UNESCO cascading turquoise lakes' },
      { id: 'hr-hvar', name: 'Hvar', lat: 43.1729, lng: 16.4411, description: 'Lavender island with nightlife' },
      { id: 'hr-rovinj', name: 'Rovinj', lat: 45.0812, lng: 13.6387, description: 'Istrian fishing village turned gem' },
    ]
  },
  {
    id: 'CZ', name: 'Czechia', continent: 'Europe', lat: 49.8175, lng: 15.473, emoji: '🇨🇿',
    description: 'Bohemian jewel with Prague\'s spires, castles, and world-famous beer.',
    cities: [
      { id: 'cz-prague', name: 'Prague', lat: 50.0755, lng: 14.4378, description: 'City of a Hundred Spires — Charles Bridge and Old Town' },
      { id: 'cz-cesky-krumlov', name: 'Český Krumlov', lat: 48.8127, lng: 14.3175, description: 'UNESCO fairytale town on the Vltava' },
      { id: 'cz-brno', name: 'Brno', lat: 49.1951, lng: 16.6068, description: 'Moravian capital with vibrant culture' },
      { id: 'cz-karlovy-vary', name: 'Karlovy Vary', lat: 50.2317, lng: 12.8716, description: 'Elegant spa town with thermal springs' },
    ]
  },
  {
    id: 'DK', name: 'Denmark', continent: 'Europe', lat: 56.2639, lng: 9.5018, emoji: '🇩🇰',
    description: 'Hygge nation with Viking heritage, design excellence, and Lego.',
    cities: [
      { id: 'dk-copenhagen', name: 'Copenhagen', lat: 55.6761, lng: 12.5683, description: 'Capital of cool — Nyhavn and Tivoli Gardens' },
    ]
  },
  {
    id: 'EE', name: 'Estonia', continent: 'Europe', lat: 58.5953, lng: 25.0136, emoji: '🇪🇪',
    description: 'Digital nation with a beautifully preserved medieval capital.',
    cities: [
      { id: 'ee-tallinn', name: 'Tallinn', lat: 59.437, lng: 24.7536, description: 'Best-preserved medieval Old Town in Europe' },
    ]
  },
  {
    id: 'FI', name: 'Finland', continent: 'Europe', lat: 61.9241, lng: 25.7482, emoji: '🇫🇮',
    description: 'Land of midnight sun, Northern Lights, saunas, and Santa Claus.',
    cities: [
      { id: 'fi-helsinki', name: 'Helsinki', lat: 60.1699, lng: 24.9384, description: 'Design capital on the Baltic Sea' },
      { id: 'fi-rovaniemi', name: 'Rovaniemi', lat: 66.5039, lng: 25.7294, description: 'Official hometown of Santa Claus on the Arctic Circle' },
      { id: 'fi-lapland', name: 'Lapland', lat: 68.0, lng: 26.0, description: 'Northern Lights, reindeer, and glass igloos' },
    ]
  },
  {
    id: 'FR', name: 'France', continent: 'Europe', lat: 46.2276, lng: 2.2137, emoji: '🇫🇷',
    description: 'Art, wine, cuisine, and romance — the world\'s most-visited country.',
    cities: [
      { id: 'fr-paris', name: 'Paris', lat: 48.8566, lng: 2.3522, description: 'City of Light — Eiffel Tower and Louvre' },
      { id: 'fr-nice', name: 'Nice', lat: 43.7102, lng: 7.262, description: 'French Riviera gem with azure waters' },
      { id: 'fr-lyon', name: 'Lyon', lat: 45.764, lng: 4.8357, description: 'Gastronomic capital of France' },
      { id: 'fr-bordeaux', name: 'Bordeaux', lat: 44.8378, lng: -0.5792, description: 'World wine capital with elegant architecture' },
      { id: 'fr-provence', name: 'Provence', lat: 43.9493, lng: 6.0679, description: 'Lavender fields and Provençal villages' },
      { id: 'fr-mont-saint-michel', name: 'Mont Saint-Michel', lat: 48.636, lng: -1.5114, description: 'UNESCO island abbey rising from the sea' },
      { id: 'fr-marseille', name: 'Marseille', lat: 43.2965, lng: 5.3698, description: 'France\'s oldest city on the Mediterranean' },
      { id: 'fr-strasbourg', name: 'Strasbourg', lat: 48.5734, lng: 7.7521, description: 'European capital with half-timbered charm' },
      { id: 'fr-chamonix', name: 'Chamonix', lat: 45.9237, lng: 6.8694, description: 'Gateway to Mont Blanc — alpine paradise' },
      { id: 'fr-versailles', name: 'Versailles', lat: 48.8049, lng: 2.1204, description: 'Palace of the Sun King' },
    ]
  },
  {
    id: 'DE', name: 'Germany', continent: 'Europe', lat: 51.1657, lng: 10.4515, emoji: '🇩🇪',
    description: 'Engineering excellence meets fairytale castles, beer gardens, and history.',
    cities: [
      { id: 'de-berlin', name: 'Berlin', lat: 52.5200, lng: 13.405, description: 'Capital of reunification — vibrant art and history' },
      { id: 'de-munich', name: 'Munich', lat: 48.1351, lng: 11.582, description: 'Bavarian capital — Oktoberfest and beer gardens' },
      { id: 'de-neuschwanstein', name: 'Neuschwanstein', lat: 47.5576, lng: 10.7498, description: 'Disney\'s inspiration — fairytale castle' },
      { id: 'de-hamburg', name: 'Hamburg', lat: 53.5511, lng: 9.9937, description: 'Port city with the Elbphilharmonie' },
      { id: 'de-cologne', name: 'Cologne', lat: 50.9375, lng: 6.9603, description: 'Gothic cathedral and Rhine River' },
      { id: 'de-heidelberg', name: 'Heidelberg', lat: 49.3988, lng: 8.6724, description: 'Romantic castle ruins and old university' },
      { id: 'de-black-forest', name: 'Black Forest', lat: 48.25, lng: 8.15, description: 'Enchanted forest with cuckoo clocks' },
      { id: 'de-dresden', name: 'Dresden', lat: 51.0504, lng: 13.7373, description: 'Florence on the Elbe — baroque splendor' },
    ]
  },
  {
    id: 'GR', name: 'Greece', continent: 'Europe', lat: 39.0742, lng: 21.8243, emoji: '🇬🇷',
    description: 'Cradle of Western civilization with mythical islands and ancient wonders.',
    cities: [
      { id: 'gr-athens', name: 'Athens', lat: 37.9838, lng: 23.7275, description: 'Acropolis city — birthplace of democracy' },
      { id: 'gr-santorini', name: 'Santorini', lat: 36.3932, lng: 25.4615, description: 'Iconic blue domes and volcanic sunsets' },
      { id: 'gr-mykonos', name: 'Mykonos', lat: 37.4467, lng: 25.3289, description: 'Windmills, beaches, and vibrant nightlife' },
      { id: 'gr-crete', name: 'Crete', lat: 35.2401, lng: 24.8093, description: 'Largest Greek island — Minoan palaces' },
      { id: 'gr-meteora', name: 'Meteora', lat: 39.7217, lng: 21.6306, description: 'Monasteries perched on rock pillars' },
      { id: 'gr-rhodes', name: 'Rhodes', lat: 36.4349, lng: 28.2176, description: 'Medieval old town and ancient Colossus' },
      { id: 'gr-corfu', name: 'Corfu', lat: 39.6243, lng: 19.9217, description: 'Lush Ionian island with Venetian influences' },
      { id: 'gr-delphi', name: 'Delphi', lat: 38.4824, lng: 22.5010, description: 'Ancient oracle at the navel of the world' },
      { id: 'gr-thessaloniki', name: 'Thessaloniki', lat: 40.6401, lng: 22.9444, description: 'Northern capital with Byzantine heritage' },
      { id: 'gr-zakynthos', name: 'Zakynthos', lat: 37.7870, lng: 20.8979, description: 'Shipwreck Beach — Navagio' },
    ]
  },
  {
    id: 'HU', name: 'Hungary', continent: 'Europe', lat: 47.1625, lng: 19.5033, emoji: '🇭🇺',
    description: 'Thermal bath culture, ruin bars, and stunning Danube architecture.',
    cities: [
      { id: 'hu-budapest', name: 'Budapest', lat: 47.4979, lng: 19.0402, description: 'Pearl of the Danube — thermal baths and ruin bars' },
      { id: 'hu-eger', name: 'Eger', lat: 47.9025, lng: 20.3772, description: 'Castle town famous for Bull\'s Blood wine' },
    ]
  },
  {
    id: 'IS', name: 'Iceland', continent: 'Europe', lat: 64.9631, lng: -19.0208, emoji: '🇮🇸',
    description: 'Land of fire and ice with volcanoes, glaciers, and the Northern Lights.',
    cities: [
      { id: 'is-reykjavik', name: 'Reykjavik', lat: 64.1466, lng: -21.9426, description: 'World\'s northernmost capital' },
      { id: 'is-golden-circle', name: 'Golden Circle', lat: 64.3271, lng: -20.1199, description: 'Geysers, waterfalls, and tectonic plates' },
      { id: 'is-vik', name: 'Vik', lat: 63.4186, lng: -19.0060, description: 'Black sand beaches and basalt columns' },
      { id: 'is-blue-lagoon', name: 'Blue Lagoon', lat: 63.8804, lng: -22.4495, description: 'Iconic geothermal spa in a lava field' },
      { id: 'is-jokulsarlon', name: 'Jökulsárlón', lat: 64.0784, lng: -16.2306, description: 'Glacial lagoon with floating icebergs' },
    ]
  },
  {
    id: 'IE', name: 'Ireland', continent: 'Europe', lat: 53.4129, lng: -8.2439, emoji: '🇮🇪',
    description: 'Emerald Isle of ancient castles, literary legends, and warm pub culture.',
    cities: [
      { id: 'ie-dublin', name: 'Dublin', lat: 53.3498, lng: -6.2603, description: 'Capital of Guinness, literature, and craic' },
      { id: 'ie-galway', name: 'Galway', lat: 53.2707, lng: -9.0568, description: 'Bohemian city of festivals and music' },
      { id: 'ie-cliffs-moher', name: 'Cliffs of Moher', lat: 52.9719, lng: -9.4269, description: 'Dramatic 214m sea cliffs on the Atlantic' },
      { id: 'ie-ring-of-kerry', name: 'Ring of Kerry', lat: 51.8739, lng: -9.9, description: 'Scenic coastal drive in County Kerry' },
      { id: 'ie-cork', name: 'Cork', lat: 51.8985, lng: -8.4756, description: 'Real capital of Ireland — food and culture' },
    ]
  },
  {
    id: 'IT', name: 'Italy', continent: 'Europe', lat: 41.8719, lng: 12.5674, emoji: '🇮🇹',
    description: 'La Dolce Vita — art, architecture, history, and the best food on Earth.',
    cities: [
      { id: 'it-rome', name: 'Rome', lat: 41.9028, lng: 12.4964, description: 'Eternal City — Colosseum, Vatican, and gelato' },
      { id: 'it-venice', name: 'Venice', lat: 45.4408, lng: 12.3155, description: 'Floating city of canals and gondolas' },
      { id: 'it-florence', name: 'Florence', lat: 43.7696, lng: 11.2558, description: 'Renaissance capital — Uffizi and Duomo' },
      { id: 'it-amalfi', name: 'Amalfi Coast', lat: 40.6340, lng: 14.6027, description: 'Cliffside towns above the Mediterranean' },
      { id: 'it-cinque-terre', name: 'Cinque Terre', lat: 44.1461, lng: 9.6439, description: 'Five colorful fishing villages on the coast' },
      { id: 'it-milan', name: 'Milan', lat: 45.4642, lng: 9.19, description: 'Fashion capital with The Last Supper' },
      { id: 'it-naples', name: 'Naples', lat: 40.8518, lng: 14.2681, description: 'Birthplace of pizza near Pompeii and Vesuvius' },
      { id: 'it-sicily', name: 'Sicily (Palermo)', lat: 38.1157, lng: 13.3615, description: 'Mediterranean\'s largest island' },
      { id: 'it-tuscany', name: 'Tuscany (Siena)', lat: 43.3188, lng: 11.3308, description: 'Rolling hills, vineyards, and medieval towns' },
      { id: 'it-como', name: 'Lake Como', lat: 45.9944, lng: 9.2572, description: 'Alpine lake surrounded by villas and mountains' },
    ]
  },
  {
    id: 'LV', name: 'Latvia', continent: 'Europe', lat: 56.8796, lng: 24.6032, emoji: '🇱🇻',
    description: 'Baltic gem with Art Nouveau architecture and pristine nature.',
    cities: [
      { id: 'lv-riga', name: 'Riga', lat: 56.9496, lng: 24.1052, description: 'Capital with the finest Art Nouveau district' },
    ]
  },
  {
    id: 'LI', name: 'Liechtenstein', continent: 'Europe', lat: 47.166, lng: 9.5554, emoji: '🇱🇮',
    description: 'Tiny alpine principality with castle views and alpine hiking.',
    cities: [
      { id: 'li-vaduz', name: 'Vaduz', lat: 47.1410, lng: 9.5215, description: 'Capital with the hilltop Vaduz Castle' },
    ]
  },
  {
    id: 'LT', name: 'Lithuania', continent: 'Europe', lat: 55.1694, lng: 23.8813, emoji: '🇱🇹',
    description: 'Baltic nation with baroque Vilnius and the Curonian Spit.',
    cities: [
      { id: 'lt-vilnius', name: 'Vilnius', lat: 54.6872, lng: 25.2797, description: 'UNESCO baroque Old Town capital' },
      { id: 'lt-trakai', name: 'Trakai', lat: 54.6522, lng: 24.9336, description: 'Island castle on a glacial lake' },
    ]
  },
  {
    id: 'LU', name: 'Luxembourg', continent: 'Europe', lat: 49.8153, lng: 6.1296, emoji: '🇱🇺',
    description: 'Grand Duchy with fairy-tale castle ruins and multilingual culture.',
    cities: [
      { id: 'lu-luxembourg', name: 'Luxembourg City', lat: 49.6117, lng: 6.13, description: 'UNESCO fortress city with dramatic gorges' },
    ]
  },
  {
    id: 'MT', name: 'Malta', continent: 'Europe', lat: 35.9375, lng: 14.3754, emoji: '🇲🇹',
    description: 'Mediterranean archipelago with Knights Templar history and megalithic temples.',
    cities: [
      { id: 'mt-valletta', name: 'Valletta', lat: 35.8989, lng: 14.5146, description: 'UNESCO capital built by the Knights of St. John' },
      { id: 'mt-gozo', name: 'Gozo', lat: 36.0444, lng: 14.2511, description: 'Calypso\'s isle with rural Mediterranean charm' },
      { id: 'mt-mdina', name: 'Mdina', lat: 35.8856, lng: 14.4024, description: 'Silent City — medieval walled capital' },
    ]
  },
  {
    id: 'MD', name: 'Moldova', continent: 'Europe', lat: 47.4116, lng: 28.3699, emoji: '🇲🇩',
    description: 'Europe\'s hidden wine country with underground wine cities.',
    cities: [
      { id: 'md-chisinau', name: 'Chișinău', lat: 47.0105, lng: 28.8638, description: 'Capital with parks and Soviet heritage' },
      { id: 'md-milestii-mici', name: 'Milestii Mici', lat: 46.9667, lng: 29.1667, description: 'World\'s largest wine cellar' },
    ]
  },
  {
    id: 'MC', name: 'Monaco', continent: 'Europe', lat: 43.7384, lng: 7.4246, emoji: '🇲🇨',
    description: 'Glamorous city-state on the French Riviera with the Grand Prix and casinos.',
    cities: [
      { id: 'mc-monaco', name: 'Monte Carlo', lat: 43.7402, lng: 7.4267, description: 'Casino, Grand Prix, and Mediterranean luxury' },
    ]
  },
  {
    id: 'ME', name: 'Montenegro', continent: 'Europe', lat: 42.7087, lng: 19.3744, emoji: '🇲🇪',
    description: 'Adriatic coast jewel with the Bay of Kotor and rugged mountains.',
    cities: [
      { id: 'me-kotor', name: 'Kotor', lat: 42.4247, lng: 18.7712, description: 'UNESCO walled town in a dramatic fjord' },
      { id: 'me-budva', name: 'Budva', lat: 42.2864, lng: 18.8430, description: 'Medieval old town and Riviera beaches' },
      { id: 'me-durmitor', name: 'Durmitor', lat: 43.15, lng: 19.0, description: 'UNESCO mountain park with Tara Canyon' },
    ]
  },
  {
    id: 'NL', name: 'Netherlands', continent: 'Europe', lat: 52.1326, lng: 5.2913, emoji: '🇳🇱',
    description: 'Land below the sea with canals, tulips, windmills, and cycling culture.',
    cities: [
      { id: 'nl-amsterdam', name: 'Amsterdam', lat: 52.3676, lng: 4.9041, description: 'Canal city with the Van Gogh Museum and Anne Frank House' },
      { id: 'nl-rotterdam', name: 'Rotterdam', lat: 51.9244, lng: 4.4777, description: 'Architectural showcase and Europe\'s largest port' },
      { id: 'nl-hague', name: 'The Hague', lat: 52.0705, lng: 4.3007, description: 'City of peace and justice' },
      { id: 'nl-keukenhof', name: 'Keukenhof', lat: 52.2697, lng: 4.5462, description: 'World\'s largest flower garden — millions of tulips' },
    ]
  },
  {
    id: 'MK', name: 'North Macedonia', continent: 'Europe', lat: 41.5126, lng: 21.7455, emoji: '🇲🇰',
    description: 'Balkan treasure with Lake Ohrid and ancient Ottoman bazaars.',
    cities: [
      { id: 'mk-skopje', name: 'Skopje', lat: 41.9973, lng: 21.4280, description: 'Capital with the Old Bazaar and bridge' },
      { id: 'mk-ohrid', name: 'Ohrid', lat: 41.1172, lng: 20.8016, description: 'UNESCO lake town — Jerusalem of the Balkans' },
    ]
  },
  {
    id: 'NO', name: 'Norway', continent: 'Europe', lat: 60.472, lng: 8.4689, emoji: '🇳🇴',
    description: 'Land of fjords, Northern Lights, and Viking heritage.',
    cities: [
      { id: 'no-oslo', name: 'Oslo', lat: 59.9139, lng: 10.7522, description: 'Capital with world-class museums' },
      { id: 'no-bergen', name: 'Bergen', lat: 60.3913, lng: 5.3221, description: 'Gateway to the fjords — Bryggen wharf' },
      { id: 'no-tromso', name: 'Tromsø', lat: 69.6492, lng: 18.9553, description: 'Arctic capital — Northern Lights gateway' },
      { id: 'no-lofoten', name: 'Lofoten', lat: 68.25, lng: 14.5, description: 'Dramatic Arctic islands with fishing villages' },
      { id: 'no-geiranger', name: 'Geirangerfjord', lat: 62.1008, lng: 7.0943, description: 'UNESCO fjord — Norway\'s most scenic' },
    ]
  },
  {
    id: 'PL', name: 'Poland', continent: 'Europe', lat: 51.9194, lng: 19.1451, emoji: '🇵🇱',
    description: 'Rich history with medieval old towns, Auschwitz memorial, and vibrant cities.',
    cities: [
      { id: 'pl-krakow', name: 'Kraków', lat: 50.0647, lng: 19.945, description: 'Medieval gem with Wawel Castle and vibrant nightlife' },
      { id: 'pl-warsaw', name: 'Warsaw', lat: 52.2297, lng: 21.0122, description: 'Phoenix capital rebuilt from wartime ruins' },
      { id: 'pl-gdansk', name: 'Gdańsk', lat: 54.352, lng: 18.6466, description: 'Hanseatic port with colorful waterfront' },
      { id: 'pl-wroclaw', name: 'Wrocław', lat: 51.1079, lng: 17.0385, description: 'City of bridges and hidden dwarfs' },
      { id: 'pl-zakopane', name: 'Zakopane', lat: 49.2992, lng: 19.9496, description: 'Winter capital at the foot of the Tatras' },
    ]
  },
  {
    id: 'PT', name: 'Portugal', continent: 'Europe', lat: 39.3999, lng: -8.2245, emoji: '🇵🇹',
    description: 'Atlantic soul with Lisbon\'s hills, Porto\'s wine, and Algarve beaches.',
    cities: [
      { id: 'pt-lisbon', name: 'Lisbon', lat: 38.7223, lng: -9.1393, description: 'City of seven hills — fado, pastéis, trams' },
      { id: 'pt-porto', name: 'Porto', lat: 41.1579, lng: -8.6291, description: 'Port wine city on the Douro River' },
      { id: 'pt-sintra', name: 'Sintra', lat: 38.7987, lng: -9.3817, description: 'UNESCO fairytale palaces in misty mountains' },
      { id: 'pt-algarve', name: 'Algarve (Lagos)', lat: 37.1028, lng: -8.6731, description: 'Dramatic sea cliffs and golden beaches' },
      { id: 'pt-azores', name: 'Azores', lat: 38.7223, lng: -27.2209, description: 'Mid-Atlantic volcanic islands paradise' },
      { id: 'pt-madeira', name: 'Madeira', lat: 32.6669, lng: -16.9241, description: 'Garden island with dramatic levada walks' },
    ]
  },
  {
    id: 'RO', name: 'Romania', continent: 'Europe', lat: 45.9432, lng: 24.9668, emoji: '🇷🇴',
    description: 'Transylvania\'s castles, painted monasteries, and Carpathian wilderness.',
    cities: [
      { id: 'ro-bucharest', name: 'Bucharest', lat: 44.4268, lng: 26.1025, description: 'Little Paris with the Palace of Parliament' },
      { id: 'ro-brasov', name: 'Brașov', lat: 45.6427, lng: 25.5887, description: 'Medieval Saxon town beneath the Carpathians' },
      { id: 'ro-bran', name: 'Bran Castle', lat: 45.515, lng: 25.3672, description: 'Dracula\'s Castle in Transylvania' },
      { id: 'ro-sibiu', name: 'Sibiu', lat: 45.7983, lng: 24.1256, description: 'European Capital of Culture with eye houses' },
      { id: 'ro-sighisoara', name: 'Sighișoara', lat: 46.2197, lng: 24.7956, description: 'UNESCO medieval citadel — Dracula\'s birthplace' },
    ]
  },
  {
    id: 'RU', name: 'Russia', continent: 'Europe', lat: 61.524, lng: 105.3188, emoji: '🇷🇺',
    description: 'World\'s largest country spanning two continents with imperial grandeur.',
    cities: [
      { id: 'ru-moscow', name: 'Moscow', lat: 55.7558, lng: 37.6173, description: 'Capital with the Kremlin and Red Square' },
      { id: 'ru-st-petersburg', name: 'Saint Petersburg', lat: 59.9343, lng: 30.3351, description: 'Venice of the North — Hermitage Museum' },
      { id: 'ru-baikal', name: 'Lake Baikal', lat: 53.5, lng: 108.0, description: 'World\'s deepest lake — Siberian jewel' },
      { id: 'ru-kazan', name: 'Kazan', lat: 55.7887, lng: 49.1221, description: 'Where Europe meets Asia — Kremlin and mosques' },
      { id: 'ru-kamchatka', name: 'Kamchatka', lat: 55.0, lng: 159.0, description: 'Volcanic peninsula — Russia\'s wild east' },
    ]
  },
  {
    id: 'SM', name: 'San Marino', continent: 'Europe', lat: 43.9424, lng: 12.4578, emoji: '🇸🇲',
    description: 'World\'s oldest republic perched atop Mount Titano in Italy.',
    cities: [
      { id: 'sm-san-marino', name: 'San Marino', lat: 43.9356, lng: 12.4473, description: 'Hilltop capital with three medieval towers' },
    ]
  },
  {
    id: 'RS', name: 'Serbia', continent: 'Europe', lat: 44.0165, lng: 21.0059, emoji: '🇷🇸',
    description: 'Balkan crossroads with legendary nightlife and Ottoman-Hapsburg heritage.',
    cities: [
      { id: 'rs-belgrade', name: 'Belgrade', lat: 44.7866, lng: 20.4489, description: 'White City — legendary nightlife on the Danube' },
      { id: 'rs-novi-sad', name: 'Novi Sad', lat: 45.2671, lng: 19.8335, description: 'EXIT festival city with Petrovaradin Fortress' },
    ]
  },
  {
    id: 'SK', name: 'Slovakia', continent: 'Europe', lat: 48.669, lng: 19.699, emoji: '🇸🇰',
    description: 'Heart of Europe with castles, caves, and the High Tatras mountains.',
    cities: [
      { id: 'sk-bratislava', name: 'Bratislava', lat: 48.1486, lng: 17.1077, description: 'Compact capital on the Danube' },
      { id: 'sk-high-tatras', name: 'High Tatras', lat: 49.15, lng: 20.15, description: 'Smallest alpine mountain range in the world' },
    ]
  },
  {
    id: 'SI', name: 'Slovenia', continent: 'Europe', lat: 46.1512, lng: 14.9955, emoji: '🇸🇮',
    description: 'Pocket-sized Alpine-Mediterranean paradise with a dragon capital.',
    cities: [
      { id: 'si-ljubljana', name: 'Ljubljana', lat: 46.0569, lng: 14.5058, description: 'Green capital with dragon bridge and castle' },
      { id: 'si-bled', name: 'Lake Bled', lat: 46.3683, lng: 14.1146, description: 'Fairy-tale lake with an island church' },
      { id: 'si-piran', name: 'Piran', lat: 45.5283, lng: 13.5681, description: 'Venetian coastal gem on the Adriatic' },
    ]
  },
  {
    id: 'ES', name: 'Spain', continent: 'Europe', lat: 40.4637, lng: -3.7492, emoji: '🇪🇸',
    description: 'Passionate land of flamenco, tapas, Gaudí, and sun-drenched coasts.',
    cities: [
      { id: 'es-barcelona', name: 'Barcelona', lat: 41.3874, lng: 2.1686, description: 'Gaudí\'s masterpiece city on the Mediterranean' },
      { id: 'es-madrid', name: 'Madrid', lat: 40.4168, lng: -3.7038, description: 'Royal capital with the Prado and nightlife' },
      { id: 'es-seville', name: 'Seville', lat: 37.3891, lng: -5.9845, description: 'Flamenco capital with the Alcázar palace' },
      { id: 'es-granada', name: 'Granada', lat: 37.1773, lng: -3.5986, description: 'Moorish jewel — the Alhambra palace' },
      { id: 'es-san-sebastian', name: 'San Sebastián', lat: 43.3183, lng: -1.9812, description: 'Basque culinary capital with La Concha beach' },
      { id: 'es-mallorca', name: 'Mallorca', lat: 39.6953, lng: 3.0176, description: 'Balearic island with mountains and coves' },
      { id: 'es-ibiza', name: 'Ibiza', lat: 38.9067, lng: 1.4206, description: 'Party island with UNESCO Dalt Vila' },
      { id: 'es-toledo', name: 'Toledo', lat: 39.8628, lng: -4.0273, description: 'City of Three Cultures — medieval skyline' },
      { id: 'es-valencia', name: 'Valencia', lat: 39.4699, lng: -0.3763, description: 'City of Arts and Sciences — paella birthplace' },
      { id: 'es-santiago', name: 'Santiago de Compostela', lat: 42.8782, lng: -8.5448, description: 'End of the Camino pilgrimage' },
    ]
  },
  {
    id: 'SE', name: 'Sweden', continent: 'Europe', lat: 60.1282, lng: 18.6435, emoji: '🇸🇪',
    description: 'Scandinavian kingdom of design, ABBA, and the Northern Lights.',
    cities: [
      { id: 'se-stockholm', name: 'Stockholm', lat: 59.3293, lng: 18.0686, description: 'Venice of the North — spread across 14 islands' },
      { id: 'se-gothenburg', name: 'Gothenburg', lat: 57.7089, lng: 11.9746, description: 'Seafood capital with Liseberg park' },
      { id: 'se-kiruna', name: 'Kiruna', lat: 67.8558, lng: 20.2253, description: 'Arctic city with the Icehotel' },
    ]
  },
  {
    id: 'CH', name: 'Switzerland', continent: 'Europe', lat: 46.8182, lng: 8.2275, emoji: '🇨🇭',
    description: 'Alpine paradise with chocolate, watches, and breathtaking mountain scenery.',
    cities: [
      { id: 'ch-zurich', name: 'Zürich', lat: 47.3769, lng: 8.5417, description: 'Financial capital on the lake' },
      { id: 'ch-lucerne', name: 'Lucerne', lat: 47.0502, lng: 8.3093, description: 'Chapel Bridge and lake with mountain backdrop' },
      { id: 'ch-interlaken', name: 'Interlaken', lat: 46.6863, lng: 7.8632, description: 'Adventure capital between two alpine lakes' },
      { id: 'ch-zermatt', name: 'Zermatt', lat: 46.0207, lng: 7.7491, description: 'Car-free village beneath the Matterhorn' },
      { id: 'ch-geneva', name: 'Geneva', lat: 46.2044, lng: 6.1432, description: 'International city with the Jet d\'Eau' },
      { id: 'ch-bern', name: 'Bern', lat: 46.9480, lng: 7.4474, description: 'UNESCO medieval capital with bear park' },
    ]
  },
  {
    id: 'UA', name: 'Ukraine', continent: 'Europe', lat: 48.3794, lng: 31.1656, emoji: '🇺🇦',
    description: 'Largest country entirely in Europe with rich culture and history.',
    cities: [
      { id: 'ua-kyiv', name: 'Kyiv', lat: 50.4501, lng: 30.5234, description: 'Capital with golden-domed churches' },
      { id: 'ua-lviv', name: 'Lviv', lat: 49.8397, lng: 24.0297, description: 'UNESCO old town — coffee capital of Ukraine' },
      { id: 'ua-odesa', name: 'Odesa', lat: 46.4825, lng: 30.7233, description: 'Pearl of the Black Sea' },
    ]
  },
  {
    id: 'GB', name: 'United Kingdom', continent: 'Europe', lat: 55.3781, lng: -3.436, emoji: '🇬🇧',
    description: 'Historic isles of Shakespeare, the Beatles, and the royal crown.',
    cities: [
      { id: 'gb-london', name: 'London', lat: 51.5074, lng: -0.1278, description: 'World capital — Big Ben, Buckingham, and The City' },
      { id: 'gb-edinburgh', name: 'Edinburgh', lat: 55.9533, lng: -3.1883, description: 'Scottish capital with castle and Arthur\'s Seat' },
      { id: 'gb-bath', name: 'Bath', lat: 51.3811, lng: -2.3590, description: 'UNESCO Roman spa city with Georgian architecture' },
      { id: 'gb-oxford', name: 'Oxford', lat: 51.752, lng: -1.2577, description: 'City of dreaming spires' },
      { id: 'gb-stonehenge', name: 'Stonehenge', lat: 51.1789, lng: -1.8262, description: 'UNESCO prehistoric stone circle' },
      { id: 'gb-scottish-highlands', name: 'Scottish Highlands', lat: 57.0, lng: -5.0, description: 'Rugged mountains, lochs, and castles' },
      { id: 'gb-york', name: 'York', lat: 53.9600, lng: -1.0873, description: 'Viking city with medieval walls and Minster' },
      { id: 'gb-liverpool', name: 'Liverpool', lat: 53.4084, lng: -2.9916, description: 'Beatles city with UNESCO waterfront' },
      { id: 'gb-cambridge', name: 'Cambridge', lat: 52.2053, lng: 0.1218, description: 'World-renowned university city' },
      { id: 'gb-cotswolds', name: 'Cotswolds', lat: 51.8, lng: -1.7, description: 'Honey-colored villages in rolling hills' },
    ]
  },
  {
    id: 'VA', name: 'Vatican City', continent: 'Europe', lat: 41.9029, lng: 12.4534, emoji: '🇻🇦',
    description: 'World\'s smallest state — seat of the Catholic Church with priceless art.',
    cities: [
      { id: 'va-vatican', name: 'Vatican City', lat: 41.9029, lng: 12.4534, description: 'St. Peter\'s Basilica and the Sistine Chapel' },
    ]
  },

  // ============================================
  // NORTH AMERICA (23 countries)
  // ============================================
  {
    id: 'AG', name: 'Antigua and Barbuda', continent: 'North America', lat: 17.0608, lng: -61.7964, emoji: '🇦🇬',
    description: 'Caribbean twin-island nation with 365 beaches — one for every day.',
    cities: [
      { id: 'ag-st-johns', name: "St. John's", lat: 17.1274, lng: -61.8468, description: 'Capital with colorful waterfront' },
    ]
  },
  {
    id: 'BS', name: 'Bahamas', continent: 'North America', lat: 25.0343, lng: -77.3963, emoji: '🇧🇸',
    description: 'Tropical archipelago with pink sand beaches and swimming pigs.',
    cities: [
      { id: 'bs-nassau', name: 'Nassau', lat: 25.0343, lng: -77.3963, description: 'Capital with Atlantis Resort nearby' },
      { id: 'bs-exuma', name: 'Exuma', lat: 23.5, lng: -75.7667, description: 'Swimming pigs and crystal-clear waters' },
    ]
  },
  {
    id: 'BB', name: 'Barbados', continent: 'North America', lat: 13.1939, lng: -59.5432, emoji: '🇧🇧',
    description: 'Caribbean island of rum, cricket, and stunning Atlantic beaches.',
    cities: [
      { id: 'bb-bridgetown', name: 'Bridgetown', lat: 13.1132, lng: -59.5988, description: 'UNESCO capital with colonial history' },
    ]
  },
  {
    id: 'BZ', name: 'Belize', continent: 'North America', lat: 17.1899, lng: -88.4976, emoji: '🇧🇿',
    description: 'Caribbean coast meets Maya ruins and the world\'s second largest reef.',
    cities: [
      { id: 'bz-belize-city', name: 'Belize City', lat: 17.4985, lng: -88.1886, description: 'Largest city and former capital' },
      { id: 'bz-san-pedro', name: 'San Pedro', lat: 17.9214, lng: -87.9611, description: 'Island town on Ambergris Caye' },
      { id: 'bz-caye-caulker', name: 'Caye Caulker', lat: 17.7514, lng: -88.0253, description: 'Go Slow — laid-back Caribbean island' },
    ]
  },
  {
    id: 'CA', name: 'Canada', continent: 'North America', lat: 56.1304, lng: -106.3468, emoji: '🇨🇦',
    description: 'Second-largest country with Niagara Falls, Rocky Mountains, and maple syrup.',
    cities: [
      { id: 'ca-vancouver', name: 'Vancouver', lat: 49.2827, lng: -123.1207, description: 'Pacific gem between mountains and ocean' },
      { id: 'ca-toronto', name: 'Toronto', lat: 43.6532, lng: -79.3832, description: 'Multicultural metropolis with the CN Tower' },
      { id: 'ca-banff', name: 'Banff', lat: 51.1784, lng: -115.5708, description: 'Rocky Mountain paradise with turquoise lakes' },
      { id: 'ca-montreal', name: 'Montreal', lat: 45.5017, lng: -73.5673, description: 'Paris of North America — bilingual and vibrant' },
      { id: 'ca-quebec', name: 'Quebec City', lat: 46.8139, lng: -71.2080, description: 'UNESCO walled city with French charm' },
      { id: 'ca-niagara', name: 'Niagara Falls', lat: 43.0896, lng: -79.0849, description: 'Iconic thundering waterfalls' },
      { id: 'ca-victoria', name: 'Victoria', lat: 48.4284, lng: -123.3656, description: 'Garden city on Vancouver Island' },
      { id: 'ca-jasper', name: 'Jasper', lat: 52.8737, lng: -117.9547, description: 'Rocky Mountain wildlife and dark sky preserve' },
      { id: 'ca-ottawa', name: 'Ottawa', lat: 45.4215, lng: -75.6972, description: 'Capital with Parliament Hill' },
      { id: 'ca-whistler', name: 'Whistler', lat: 50.1163, lng: -122.9574, description: 'World-class ski resort' },
    ]
  },
  {
    id: 'CR', name: 'Costa Rica', continent: 'North America', lat: 9.7489, lng: -83.7534, emoji: '🇨🇷',
    description: 'Pura Vida — biodiversity hotspot with rainforests, volcanoes, and beaches.',
    cities: [
      { id: 'cr-san-jose', name: 'San José', lat: 9.9281, lng: -84.0907, description: 'Capital in the Central Valley' },
      { id: 'cr-arenal', name: 'Arenal', lat: 10.4626, lng: -84.7032, description: 'Volcano with hot springs and zip-lines' },
      { id: 'cr-monteverde', name: 'Monteverde', lat: 10.3105, lng: -84.825, description: 'Cloud forest with hanging bridges' },
      { id: 'cr-manuel-antonio', name: 'Manuel Antonio', lat: 9.3917, lng: -84.1417, description: 'Beach national park with monkeys' },
      { id: 'cr-tamarindo', name: 'Tamarindo', lat: 10.2994, lng: -85.8375, description: 'Pacific surf town with sea turtles' },
    ]
  },
  {
    id: 'CU', name: 'Cuba', continent: 'North America', lat: 21.5218, lng: -77.7812, emoji: '🇨🇺',
    description: 'Time-capsule island with vintage cars, salsa, and revolutionary history.',
    cities: [
      { id: 'cu-havana', name: 'Havana', lat: 23.1136, lng: -82.3666, description: 'Colorful capital with vintage Chevys and salsa' },
      { id: 'cu-trinidad', name: 'Trinidad', lat: 21.8022, lng: -79.9805, description: 'UNESCO colonial town frozen in time' },
      { id: 'cu-vinales', name: 'Viñales', lat: 22.6189, lng: -83.7147, description: 'UNESCO valley with tobacco farms and mogotes' },
    ]
  },
  {
    id: 'DM', name: 'Dominica', continent: 'North America', lat: 15.415, lng: -61.371, emoji: '🇩🇲',
    description: 'Nature island of the Caribbean with boiling lakes and rainforest trails.',
    cities: [
      { id: 'dm-roseau', name: 'Roseau', lat: 15.3017, lng: -61.3881, description: 'Capital surrounded by volcanic peaks' },
    ]
  },
  {
    id: 'DO', name: 'Dominican Republic', continent: 'North America', lat: 18.7357, lng: -70.1627, emoji: '🇩🇴',
    description: 'Caribbean nation with all-inclusive resorts and colonial Santo Domingo.',
    cities: [
      { id: 'do-santo-domingo', name: 'Santo Domingo', lat: 18.4861, lng: -69.9312, description: 'First European city in the Americas' },
      { id: 'do-punta-cana', name: 'Punta Cana', lat: 18.5601, lng: -68.3725, description: 'Paradise beach resort destination' },
      { id: 'do-samana', name: 'Samaná', lat: 19.2082, lng: -69.332, description: 'Whale watching and Las Terrenas beaches' },
    ]
  },
  {
    id: 'SV', name: 'El Salvador', continent: 'North America', lat: 13.7942, lng: -88.8965, emoji: '🇸🇻',
    description: 'Central America\'s smallest country with volcanic surf beaches.',
    cities: [
      { id: 'sv-san-salvador', name: 'San Salvador', lat: 13.6929, lng: -89.2182, description: 'Capital surrounded by volcanoes' },
      { id: 'sv-el-tunco', name: 'El Tunco', lat: 13.4917, lng: -89.3833, description: 'Famous surf beach on the Pacific' },
    ]
  },
  {
    id: 'GD', name: 'Grenada', continent: 'North America', lat: 12.1165, lng: -61.679, emoji: '🇬🇩',
    description: 'Spice island of the Caribbean with nutmeg and underwater sculpture parks.',
    cities: [
      { id: 'gd-st-georges', name: "St. George's", lat: 12.0561, lng: -61.7486, description: 'Picturesque capital with horseshoe harbor' },
    ]
  },
  {
    id: 'GT', name: 'Guatemala', continent: 'North America', lat: 15.7835, lng: -90.2308, emoji: '🇬🇹',
    description: 'Land of the Maya with Tikal, Lake Atitlán, and vibrant markets.',
    cities: [
      { id: 'gt-antigua', name: 'Antigua Guatemala', lat: 14.5586, lng: -90.7295, description: 'UNESCO colonial city beneath volcanoes' },
      { id: 'gt-tikal', name: 'Tikal', lat: 17.2220, lng: -89.6237, description: 'UNESCO Maya ruins rising above the jungle' },
      { id: 'gt-atitlan', name: 'Lake Atitlán', lat: 14.6953, lng: -91.2, description: 'Most beautiful lake in the world' },
      { id: 'gt-guatemala-city', name: 'Guatemala City', lat: 14.6349, lng: -90.5069, description: 'Capital and largest city in Central America' },
    ]
  },
  {
    id: 'HT', name: 'Haiti', continent: 'North America', lat: 18.9712, lng: -72.2852, emoji: '🇭🇹',
    description: 'First Black republic with vibrant art, music, and resilient spirit.',
    cities: [
      { id: 'ht-port-au-prince', name: 'Port-au-Prince', lat: 18.5944, lng: -72.3074, description: 'Capital with the Iron Market' },
      { id: 'ht-citadelle', name: 'Citadelle Laferrière', lat: 19.5733, lng: -72.2443, description: 'UNESCO mountaintop fortress' },
    ]
  },
  {
    id: 'HN', name: 'Honduras', continent: 'North America', lat: 15.2, lng: -86.2419, emoji: '🇭🇳',
    description: 'Maya ruins at Copán, Bay Islands diving, and Caribbean coast.',
    cities: [
      { id: 'hn-tegucigalpa', name: 'Tegucigalpa', lat: 14.0723, lng: -87.1921, description: 'Capital in the mountains' },
      { id: 'hn-roatan', name: 'Roatán', lat: 16.3167, lng: -86.5333, description: 'Caribbean diving paradise on the reef' },
      { id: 'hn-copan', name: 'Copán', lat: 14.838, lng: -89.1422, description: 'UNESCO Maya archaeological site' },
    ]
  },
  {
    id: 'JM', name: 'Jamaica', continent: 'North America', lat: 18.1096, lng: -77.2975, emoji: '🇯🇲',
    description: 'One love — reggae, jerk cuisine, Blue Mountains, and Caribbean vibes.',
    cities: [
      { id: 'jm-kingston', name: 'Kingston', lat: 18.0179, lng: -76.8099, description: 'Capital and birthplace of reggae' },
      { id: 'jm-montego-bay', name: 'Montego Bay', lat: 18.4762, lng: -77.8939, description: 'Hip Strip resort town' },
      { id: 'jm-ocho-rios', name: 'Ocho Rios', lat: 18.407, lng: -77.1052, description: 'Dunn\'s River Falls and Bob Marley' },
    ]
  },
  {
    id: 'MX', name: 'Mexico', continent: 'North America', lat: 23.6345, lng: -102.5528, emoji: '🇲🇽',
    description: 'Ancient civilizations, incredible cuisine, vibrant culture, and paradise beaches.',
    cities: [
      { id: 'mx-mexico-city', name: 'Mexico City', lat: 19.4326, lng: -99.1332, description: 'Mega-city built on an Aztec lake' },
      { id: 'mx-cancun', name: 'Cancún', lat: 21.1619, lng: -86.8515, description: 'Caribbean beach paradise on the Riviera Maya' },
      { id: 'mx-oaxaca', name: 'Oaxaca', lat: 17.0732, lng: -96.7266, description: 'Culinary capital with Monte Albán ruins' },
      { id: 'mx-tulum', name: 'Tulum', lat: 20.2115, lng: -87.4654, description: 'Maya ruins overlooking Caribbean cliffs' },
      { id: 'mx-san-miguel', name: 'San Miguel de Allende', lat: 20.9144, lng: -100.7452, description: 'UNESCO colonial gem voted best city' },
      { id: 'mx-playa', name: 'Playa del Carmen', lat: 20.6296, lng: -87.0739, description: 'Riviera Maya hub with cenotes nearby' },
      { id: 'mx-guanajuato', name: 'Guanajuato', lat: 21.019, lng: -101.2574, description: 'Colorful colonial city in a ravine' },
      { id: 'mx-chichen-itza', name: 'Chichén Itzá', lat: 20.6843, lng: -88.5678, description: 'New Wonder of the World — Maya pyramid' },
      { id: 'mx-puerto-vallarta', name: 'Puerto Vallarta', lat: 20.6534, lng: -105.2253, description: 'Pacific coast resort with Malecón' },
      { id: 'mx-merida', name: 'Mérida', lat: 20.9674, lng: -89.5926, description: 'White City — gateway to Yucatán cenotes' },
    ]
  },
  {
    id: 'NI', name: 'Nicaragua', continent: 'North America', lat: 12.8654, lng: -85.2072, emoji: '🇳🇮',
    description: 'Land of lakes and volcanoes with colonial cities and Pacific surf.',
    cities: [
      { id: 'ni-granada', name: 'Granada', lat: 11.9344, lng: -85.956, description: 'Colorful colonial city on Lake Nicaragua' },
      { id: 'ni-leon', name: 'León', lat: 12.4375, lng: -86.878, description: 'University city with volcano boarding' },
      { id: 'ni-san-juan', name: 'San Juan del Sur', lat: 11.2531, lng: -85.8706, description: 'Pacific surf and beach town' },
    ]
  },
  {
    id: 'PA', name: 'Panama', continent: 'North America', lat: 8.538, lng: -80.7821, emoji: '🇵🇦',
    description: 'Crossroads of the Americas with the Canal, San Blas islands, and rainforests.',
    cities: [
      { id: 'pa-panama-city', name: 'Panama City', lat: 8.9824, lng: -79.5199, description: 'Skyline city with the Panama Canal' },
      { id: 'pa-bocas', name: 'Bocas del Toro', lat: 9.3403, lng: -82.2411, description: 'Caribbean archipelago paradise' },
      { id: 'pa-san-blas', name: 'San Blas', lat: 9.55, lng: -78.8, description: 'Indigenous Guna island paradise' },
    ]
  },
  {
    id: 'KN', name: 'Saint Kitts and Nevis', continent: 'North America', lat: 17.3578, lng: -62.783, emoji: '🇰🇳',
    description: 'Caribbean twin-island federation with Brimstone Hill fortress.',
    cities: [
      { id: 'kn-basseterre', name: 'Basseterre', lat: 17.2958, lng: -62.7267, description: 'Capital with Georgian architecture' },
    ]
  },
  {
    id: 'LC', name: 'Saint Lucia', continent: 'North America', lat: 13.9094, lng: -60.9789, emoji: '🇱🇨',
    description: 'Volcanic Caribbean island with the iconic Pitons and lush rainforest.',
    cities: [
      { id: 'lc-castries', name: 'Castries', lat: 14.0101, lng: -60.9875, description: 'Capital with duty-free shopping' },
      { id: 'lc-soufriere', name: 'Soufrière', lat: 13.8564, lng: -61.0564, description: 'Town beneath the majestic Pitons' },
    ]
  },
  {
    id: 'VC', name: 'Saint Vincent and the Grenadines', continent: 'North America', lat: 12.9843, lng: -61.2872, emoji: '🇻🇨',
    description: 'Caribbean sailing paradise with 32 islands and cays.',
    cities: [
      { id: 'vc-kingstown', name: 'Kingstown', lat: 13.1539, lng: -61.2275, description: 'Capital with botanical gardens' },
    ]
  },
  {
    id: 'TT', name: 'Trinidad and Tobago', continent: 'North America', lat: 10.6918, lng: -61.2225, emoji: '🇹🇹',
    description: 'Carnival nation with steelpan music and incredible biodiversity.',
    cities: [
      { id: 'tt-port-of-spain', name: 'Port of Spain', lat: 10.6596, lng: -61.5086, description: 'Carnival capital of the Caribbean' },
    ]
  },
  {
    id: 'US', name: 'United States', continent: 'North America', lat: 37.0902, lng: -95.7129, emoji: '🇺🇸',
    description: 'Land of the free — diverse landscapes from NYC to the Grand Canyon.',
    cities: [
      { id: 'us-new-york', name: 'New York City', lat: 40.7128, lng: -74.006, description: 'The Big Apple — Statue of Liberty and Times Square' },
      { id: 'us-san-francisco', name: 'San Francisco', lat: 37.7749, lng: -122.4194, description: 'Golden Gate Bridge and tech capital' },
      { id: 'us-los-angeles', name: 'Los Angeles', lat: 34.0522, lng: -118.2437, description: 'City of Angels — Hollywood and beaches' },
      { id: 'us-grand-canyon', name: 'Grand Canyon', lat: 36.1069, lng: -112.1129, description: 'One of the Seven Natural Wonders' },
      { id: 'us-las-vegas', name: 'Las Vegas', lat: 36.1699, lng: -115.1398, description: 'Entertainment capital of the world' },
      { id: 'us-miami', name: 'Miami', lat: 25.7617, lng: -80.1918, description: 'Art Deco, Latin culture, and South Beach' },
      { id: 'us-hawaii', name: 'Hawaii (Honolulu)', lat: 21.3069, lng: -157.8583, description: 'Tropical paradise in the Pacific' },
      { id: 'us-washington', name: 'Washington D.C.', lat: 38.9072, lng: -77.0369, description: 'Capital with monuments and Smithsonian' },
      { id: 'us-chicago', name: 'Chicago', lat: 41.8781, lng: -87.6298, description: 'Windy City with world-class architecture' },
      { id: 'us-yellowstone', name: 'Yellowstone', lat: 44.4280, lng: -110.5885, description: 'First national park — geysers and bison' },
    ]
  },

  // ============================================
  // SOUTH AMERICA (12 countries)
  // ============================================
  {
    id: 'AR', name: 'Argentina', continent: 'South America', lat: -38.4161, lng: -63.6167, emoji: '🇦🇷',
    description: 'Land of tango, steak, Patagonia, and Iguazú Falls.',
    cities: [
      { id: 'ar-buenos-aires', name: 'Buenos Aires', lat: -34.6037, lng: -58.3816, description: 'Paris of South America — tango and steak' },
      { id: 'ar-iguazu', name: 'Iguazú Falls', lat: -25.6953, lng: -54.4367, description: 'Greatest waterfall system on Earth' },
      { id: 'ar-patagonia', name: 'El Calafate (Patagonia)', lat: -50.3380, lng: -72.2648, description: 'Perito Moreno Glacier and wild Patagonia' },
      { id: 'ar-mendoza', name: 'Mendoza', lat: -32.8895, lng: -68.8458, description: 'Wine capital at the foot of the Andes' },
      { id: 'ar-bariloche', name: 'Bariloche', lat: -41.1335, lng: -71.3103, description: 'Swiss-style lake town in the Andes' },
      { id: 'ar-ushuaia', name: 'Ushuaia', lat: -54.8019, lng: -68.3030, description: 'End of the world — southernmost city' },
      { id: 'ar-salta', name: 'Salta', lat: -24.7821, lng: -65.4232, description: 'Colonial city with the Train to the Clouds' },
    ]
  },
  {
    id: 'BO', name: 'Bolivia', continent: 'South America', lat: -16.2902, lng: -63.5887, emoji: '🇧🇴',
    description: 'High-altitude nation with Salar de Uyuni and indigenous cultures.',
    cities: [
      { id: 'bo-la-paz', name: 'La Paz', lat: -16.4897, lng: -68.1193, description: 'World\'s highest administrative capital' },
      { id: 'bo-uyuni', name: 'Salar de Uyuni', lat: -20.1338, lng: -67.4891, description: 'World\'s largest salt flat — surreal mirror' },
      { id: 'bo-sucre', name: 'Sucre', lat: -19.0196, lng: -65.2619, description: 'UNESCO White City — constitutional capital' },
      { id: 'bo-tiwanaku', name: 'Tiwanaku', lat: -16.555, lng: -68.6731, description: 'UNESCO pre-Inca archaeological site' },
    ]
  },
  {
    id: 'BR', name: 'Brazil', continent: 'South America', lat: -14.235, lng: -51.9253, emoji: '🇧🇷',
    description: 'Samba nation with Carnival, Amazon rainforest, and Copacabana beaches.',
    cities: [
      { id: 'br-rio', name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729, description: 'Marvelous City — Christ the Redeemer and Carnival' },
      { id: 'br-sao-paulo', name: 'São Paulo', lat: -23.5505, lng: -46.6333, description: 'South America\'s largest city — food and culture' },
      { id: 'br-amazon', name: 'Manaus (Amazon)', lat: -3.119, lng: -60.0217, description: 'Gateway to the Amazon rainforest' },
      { id: 'br-salvador', name: 'Salvador', lat: -12.9714, lng: -38.5124, description: 'Afro-Brazilian culture in the Pelourinho' },
      { id: 'br-iguazu', name: 'Foz do Iguaçu', lat: -25.5163, lng: -54.5854, description: 'Brazilian side of the mighty Iguazu Falls' },
      { id: 'br-florianopolis', name: 'Florianópolis', lat: -27.5954, lng: -48.548, description: 'Magic island with 42 beaches' },
      { id: 'br-fernando', name: 'Fernando de Noronha', lat: -3.8547, lng: -32.4247, description: 'UNESCO volcanic island marine paradise' },
      { id: 'br-pantanal', name: 'Pantanal', lat: -18.0, lng: -57.0, description: 'World\'s largest tropical wetland — jaguar safari' },
      { id: 'br-lencois', name: 'Lençóis Maranhenses', lat: -2.5, lng: -43.1167, description: 'Surreal white sand dunes with blue lagoons' },
      { id: 'br-paraty', name: 'Paraty', lat: -23.2175, lng: -44.7169, description: 'Colonial gem between mountains and sea' },
    ]
  },
  {
    id: 'CL', name: 'Chile', continent: 'South America', lat: -35.6751, lng: -71.543, emoji: '🇨🇱',
    description: 'Long ribbon of land from the Atacama Desert to Patagonian glaciers.',
    cities: [
      { id: 'cl-santiago', name: 'Santiago', lat: -33.4489, lng: -70.6693, description: 'Capital beneath the snow-capped Andes' },
      { id: 'cl-atacama', name: 'Atacama Desert', lat: -23.8634, lng: -69.1328, description: 'Driest desert on Earth with stargazing' },
      { id: 'cl-easter-island', name: 'Easter Island', lat: -27.1127, lng: -109.3497, description: 'Remote island with mysterious Moai statues' },
      { id: 'cl-torres-del-paine', name: 'Torres del Paine', lat: -50.9423, lng: -73.4068, description: 'Epic Patagonian national park' },
      { id: 'cl-valparaiso', name: 'Valparaíso', lat: -33.0472, lng: -71.6127, description: 'UNESCO bohemian port city of street art' },
    ]
  },
  {
    id: 'CO', name: 'Colombia', continent: 'South America', lat: 4.5709, lng: -74.2973, emoji: '🇨🇴',
    description: 'Magical realism in real life — Cartagena, coffee, and Caribbean coast.',
    cities: [
      { id: 'co-bogota', name: 'Bogotá', lat: 4.711, lng: -74.0721, description: 'Capital at 2,600m with gold museum and street art' },
      { id: 'co-cartagena', name: 'Cartagena', lat: 10.391, lng: -75.5144, description: 'UNESCO walled city on the Caribbean' },
      { id: 'co-medellin', name: 'Medellín', lat: 6.2442, lng: -75.5812, description: 'City of Eternal Spring — transformed marvel' },
      { id: 'co-lost-city', name: 'Ciudad Perdida (Lost City)', lat: 11.0381, lng: -73.9264, description: 'Jungle trek to ancient Tairona ruins' },
      { id: 'co-tayrona', name: 'Tayrona NP', lat: 11.3, lng: -73.95, description: 'Caribbean jungle beaches' },
      { id: 'co-salento', name: 'Salento', lat: 4.6369, lng: -75.5714, description: 'Coffee region with giant wax palms' },
    ]
  },
  {
    id: 'EC', name: 'Ecuador', continent: 'South America', lat: -1.8312, lng: -78.1834, emoji: '🇪🇨',
    description: 'Straddling the equator with the Galápagos, Andes, and Amazon in one small nation.',
    cities: [
      { id: 'ec-quito', name: 'Quito', lat: -0.1807, lng: -78.4678, description: 'UNESCO capital in a valley of volcanoes' },
      { id: 'ec-galapagos', name: 'Galápagos Islands', lat: -0.9538, lng: -90.9656, description: 'Darwin\'s living laboratory of evolution' },
      { id: 'ec-cuenca', name: 'Cuenca', lat: -2.9001, lng: -79.0059, description: 'UNESCO colonial city with Panama hats' },
      { id: 'ec-banos', name: 'Baños', lat: -1.3928, lng: -78.4269, description: 'Adventure capital at a volcano\'s base' },
    ]
  },
  {
    id: 'GY', name: 'Guyana', continent: 'South America', lat: 4.8604, lng: -58.9302, emoji: '🇬🇾',
    description: 'South America\'s only English-speaking country with Kaieteur Falls.',
    cities: [
      { id: 'gy-georgetown', name: 'Georgetown', lat: 6.8013, lng: -58.1551, description: 'Wooden colonial capital on the Atlantic' },
      { id: 'gy-kaieteur', name: 'Kaieteur Falls', lat: 5.1756, lng: -59.4811, description: 'World\'s largest single-drop waterfall' },
    ]
  },
  {
    id: 'PY', name: 'Paraguay', continent: 'South America', lat: -23.4425, lng: -58.4438, emoji: '🇵🇾',
    description: 'Heart of South America with Guaraní culture and Jesuit missions.',
    cities: [
      { id: 'py-asuncion', name: 'Asunción', lat: -25.2637, lng: -57.5759, description: 'Mother of Cities — one of the oldest capitals' },
      { id: 'py-trinidad', name: 'Trinidad', lat: -27.1333, lng: -55.7333, description: 'UNESCO Jesuit mission ruins' },
    ]
  },
  {
    id: 'PE', name: 'Peru', continent: 'South America', lat: -9.19, lng: -75.0152, emoji: '🇵🇪',
    description: 'Inca empire with Machu Picchu, Nazca Lines, and world-class cuisine.',
    cities: [
      { id: 'pe-cusco', name: 'Cusco', lat: -13.532, lng: -71.9675, description: 'Navel of the world — Inca capital' },
      { id: 'pe-machu-picchu', name: 'Machu Picchu', lat: -13.1631, lng: -72.545, description: 'Lost City of the Incas — Wonder of the World' },
      { id: 'pe-lima', name: 'Lima', lat: -12.0464, lng: -77.0428, description: 'Gastronomic capital of South America' },
      { id: 'pe-sacred-valley', name: 'Sacred Valley', lat: -13.3333, lng: -72.1167, description: 'Inca heartland between Cusco and Machu Picchu' },
      { id: 'pe-nazca', name: 'Nazca Lines', lat: -14.735, lng: -75.13, description: 'Mysterious ancient geoglyphs in the desert' },
      { id: 'pe-lake-titicaca', name: 'Lake Titicaca', lat: -15.8402, lng: -69.9312, description: 'Highest navigable lake — floating islands' },
      { id: 'pe-arequipa', name: 'Arequipa', lat: -16.409, lng: -71.5375, description: 'White City — gateway to Colca Canyon' },
      { id: 'pe-amazon', name: 'Iquitos (Amazon)', lat: -3.7481, lng: -73.2472, description: 'Largest city unreachable by road — Amazon gateway' },
    ]
  },
  {
    id: 'SR', name: 'Suriname', continent: 'South America', lat: 3.9193, lng: -56.0278, emoji: '🇸🇷',
    description: 'South America\'s smallest country with Dutch colonial heritage and rainforest.',
    cities: [
      { id: 'sr-paramaribo', name: 'Paramaribo', lat: 5.8520, lng: -55.2038, description: 'UNESCO wooden colonial capital' },
    ]
  },
  {
    id: 'UY', name: 'Uruguay', continent: 'South America', lat: -32.5228, lng: -55.7658, emoji: '🇺🇾',
    description: 'Progressive South American gem with gaucho culture and Atlantic beaches.',
    cities: [
      { id: 'uy-montevideo', name: 'Montevideo', lat: -34.9011, lng: -56.1645, description: 'Capital with tango heritage on the Río de la Plata' },
      { id: 'uy-punta-del-este', name: 'Punta del Este', lat: -34.9481, lng: -54.9511, description: 'South America\'s St. Tropez' },
      { id: 'uy-colonia', name: 'Colonia del Sacramento', lat: -34.4626, lng: -57.8400, description: 'UNESCO colonial town on the river' },
    ]
  },
  {
    id: 'VE', name: 'Venezuela', continent: 'South America', lat: 6.4238, lng: -66.5897, emoji: '🇻🇪',
    description: 'Angel Falls, Caribbean islands, and the Orinoco Delta.',
    cities: [
      { id: 've-caracas', name: 'Caracas', lat: 10.4806, lng: -66.9036, description: 'Capital in a valley beneath Ávila mountain' },
      { id: 've-angel-falls', name: 'Angel Falls', lat: 5.9701, lng: -62.5362, description: 'World\'s highest uninterrupted waterfall' },
      { id: 've-los-roques', name: 'Los Roques', lat: 11.8517, lng: -66.7567, description: 'Caribbean coral atoll archipelago' },
    ]
  },

  // ============================================
  // OCEANIA (14 countries)
  // ============================================
  {
    id: 'AU', name: 'Australia', continent: 'Oceania', lat: -25.2744, lng: 133.7751, emoji: '🇦🇺',
    description: 'Land down under with the Great Barrier Reef, Uluru, and unique wildlife.',
    cities: [
      { id: 'au-sydney', name: 'Sydney', lat: -33.8688, lng: 151.2093, description: 'Harbour City — Opera House and Bondi Beach' },
      { id: 'au-melbourne', name: 'Melbourne', lat: -37.8136, lng: 144.9631, description: 'Cultural capital of coffee, street art, and sport' },
      { id: 'au-great-barrier', name: 'Great Barrier Reef', lat: -18.2871, lng: 147.6992, description: 'World\'s largest coral reef system' },
      { id: 'au-uluru', name: 'Uluru', lat: -25.3444, lng: 131.0369, description: 'Sacred red monolith in the outback' },
      { id: 'au-cairns', name: 'Cairns', lat: -16.9186, lng: 145.7781, description: 'Gateway to the Reef and Daintree Rainforest' },
      { id: 'au-perth', name: 'Perth', lat: -31.9505, lng: 115.8605, description: 'Isolated capital with stunning beaches' },
      { id: 'au-tasmania', name: 'Tasmania (Hobart)', lat: -42.8821, lng: 147.3272, description: 'Island state with pristine wilderness' },
      { id: 'au-gold-coast', name: 'Gold Coast', lat: -28.0167, lng: 153.4, description: 'Surf beaches and theme parks' },
      { id: 'au-kangaroo-island', name: 'Kangaroo Island', lat: -35.8, lng: 137.2, description: 'Wildlife sanctuary off South Australia' },
      { id: 'au-whitsundays', name: 'Whitsunday Islands', lat: -20.25, lng: 148.95, description: 'Tropical islands with Whitehaven Beach' },
    ]
  },
  {
    id: 'FJ', name: 'Fiji', continent: 'Oceania', lat: -17.7134, lng: 178.065, emoji: '🇫🇯',
    description: 'Paradise archipelago of 333 islands with crystal-clear waters and warm bula spirit.',
    cities: [
      { id: 'fj-suva', name: 'Suva', lat: -18.1416, lng: 178.4419, description: 'Capital on the island of Viti Levu' },
      { id: 'fj-nadi', name: 'Nadi', lat: -17.7765, lng: 177.9456, description: 'Gateway city to Fiji\'s islands' },
      { id: 'fj-yasawa', name: 'Yasawa Islands', lat: -16.9, lng: 177.35, description: 'Remote island paradise with blue lagoons' },
    ]
  },
  {
    id: 'KI', name: 'Kiribati', continent: 'Oceania', lat: -3.3704, lng: -168.734, emoji: '🇰🇮',
    description: 'Pacific island nation spanning all four hemispheres.',
    cities: [
      { id: 'ki-tarawa', name: 'South Tarawa', lat: 1.4518, lng: 173.0016, description: 'Capital atoll with WWII history' },
    ]
  },
  {
    id: 'MH', name: 'Marshall Islands', continent: 'Oceania', lat: 7.1315, lng: 171.1845, emoji: '🇲🇭',
    description: 'Pacific atolls with incredible diving and WWII history.',
    cities: [
      { id: 'mh-majuro', name: 'Majuro', lat: 7.0897, lng: 171.3803, description: 'Capital atoll with lagoon' },
    ]
  },
  {
    id: 'FM', name: 'Micronesia', continent: 'Oceania', lat: 7.4256, lng: 150.5508, emoji: '🇫🇲',
    description: 'Tropical islands with ancient ruins and world-class diving.',
    cities: [
      { id: 'fm-palikir', name: 'Palikir', lat: 6.9248, lng: 158.1610, description: 'Capital on the island of Pohnpei' },
    ]
  },
  {
    id: 'NR', name: 'Nauru', continent: 'Oceania', lat: -0.5228, lng: 166.9315, emoji: '🇳🇷',
    description: 'World\'s smallest island nation — a phosphate island in the Pacific.',
    cities: [
      { id: 'nr-yaren', name: 'Yaren', lat: -0.5477, lng: 166.9209, description: 'De facto capital district' },
    ]
  },
  {
    id: 'NZ', name: 'New Zealand', continent: 'Oceania', lat: -40.9006, lng: 174.886, emoji: '🇳🇿',
    description: 'Middle-earth — dramatic landscapes from fjords to volcanoes.',
    cities: [
      { id: 'nz-auckland', name: 'Auckland', lat: -36.8485, lng: 174.7633, description: 'City of Sails with Sky Tower views' },
      { id: 'nz-queenstown', name: 'Queenstown', lat: -45.0312, lng: 168.6626, description: 'Adventure capital surrounded by mountains' },
      { id: 'nz-milford-sound', name: 'Milford Sound', lat: -44.6718, lng: 167.9269, description: 'Eighth Wonder of the World — dramatic fjord' },
      { id: 'nz-rotorua', name: 'Rotorua', lat: -38.1368, lng: 176.2497, description: 'Geothermal wonderland and Maori culture' },
      { id: 'nz-wellington', name: 'Wellington', lat: -41.2865, lng: 174.7762, description: 'Coolest little capital — Te Papa museum' },
      { id: 'nz-hobbiton', name: 'Hobbiton (Matamata)', lat: -37.872, lng: 175.683, description: 'Lord of the Rings movie set' },
      { id: 'nz-franz-josef', name: 'Franz Josef Glacier', lat: -43.3861, lng: 170.1833, description: 'Glaciers meeting rainforest' },
      { id: 'nz-wanaka', name: 'Wanaka', lat: -44.7032, lng: 169.1321, description: 'Lakeside town with That Wanaka Tree' },
    ]
  },
  {
    id: 'PW', name: 'Palau', continent: 'Oceania', lat: 7.515, lng: 134.5825, emoji: '🇵🇼',
    description: 'Rock Islands with jellyfish lake and world-class diving.',
    cities: [
      { id: 'pw-ngerulmud', name: 'Ngerulmud', lat: 7.5006, lng: 134.6244, description: 'One of the smallest capitals in the world' },
    ]
  },
  {
    id: 'PG', name: 'Papua New Guinea', continent: 'Oceania', lat: -6.315, lng: 143.9555, emoji: '🇵🇬',
    description: 'Last frontier with 800+ languages, tribal cultures, and pristine reefs.',
    cities: [
      { id: 'pg-port-moresby', name: 'Port Moresby', lat: -9.4438, lng: 147.1803, description: 'Capital on the Coral Sea coast' },
      { id: 'pg-goroka', name: 'Goroka', lat: -6.0833, lng: 145.3833, description: 'Highland city known for the Goroka Show' },
    ]
  },
  {
    id: 'WS', name: 'Samoa', continent: 'Oceania', lat: -13.759, lng: -172.1046, emoji: '🇼🇸',
    description: 'Heart of Polynesia with lava fields and turquoise swimming holes.',
    cities: [
      { id: 'ws-apia', name: 'Apia', lat: -13.8333, lng: -171.75, description: 'Capital with Robert Louis Stevenson\'s home' },
    ]
  },
  {
    id: 'SB', name: 'Solomon Islands', continent: 'Oceania', lat: -9.6457, lng: 160.1562, emoji: '🇸🇧',
    description: 'WWII battleground turned tropical paradise with incredible diving.',
    cities: [
      { id: 'sb-honiara', name: 'Honiara', lat: -9.4456, lng: 159.9729, description: 'Capital on the island of Guadalcanal' },
    ]
  },
  {
    id: 'TO', name: 'Tonga', continent: 'Oceania', lat: -21.179, lng: -175.1982, emoji: '🇹🇴',
    description: 'Friendly Islands — Polynesian kingdom with whale watching and blowholes.',
    cities: [
      { id: 'to-nukualofa', name: "Nuku'alofa", lat: -21.2087, lng: -175.1982, description: 'Capital of the only Pacific monarchy' },
    ]
  },
  {
    id: 'TV', name: 'Tuvalu', continent: 'Oceania', lat: -7.1095, lng: 177.6493, emoji: '🇹🇻',
    description: 'Fourth smallest country — low-lying atolls in the Pacific.',
    cities: [
      { id: 'tv-funafuti', name: 'Funafuti', lat: -8.5243, lng: 179.1942, description: 'Capital atoll with conservation area' },
    ]
  },
  {
    id: 'VU', name: 'Vanuatu', continent: 'Oceania', lat: -15.3767, lng: 166.9592, emoji: '🇻🇺',
    description: 'Adventure islands with active volcanoes, bungee jumping, and blue holes.',
    cities: [
      { id: 'vu-port-vila', name: 'Port Vila', lat: -17.7334, lng: 168.3273, description: 'Capital with harbor views and markets' },
      { id: 'vu-tanna', name: 'Tanna (Mt. Yasur)', lat: -19.5322, lng: 169.4425, description: 'Active volcano you can stand on the rim of' },
    ]
  },
];

// ============================================
// Build ALL_PLACES index for search
// ============================================
export const ALL_PLACES = [];
COUNTRIES.forEach(country => {
  ALL_PLACES.push({
    type: 'country',
    id: country.id,
    name: country.name,
    continent: country.continent,
    lat: country.lat,
    lng: country.lng,
    emoji: country.emoji,
    description: country.description,
  });
  country.cities.forEach(city => {
    ALL_PLACES.push({
      type: 'city',
      id: city.id,
      name: city.name,
      countryId: country.id,
      countryName: country.name,
      continent: country.continent,
      lat: city.lat,
      lng: city.lng,
      description: city.description,
    });
  });
});

// ============================================
// Continents metadata
// ============================================
export const CONTINENTS = [
  { name: 'Africa', emoji: '🌍', count: COUNTRIES.filter(c => c.continent === 'Africa').length },
  { name: 'Asia', emoji: '🌏', count: COUNTRIES.filter(c => c.continent === 'Asia').length },
  { name: 'Europe', emoji: '🌍', count: COUNTRIES.filter(c => c.continent === 'Europe').length },
  { name: 'North America', emoji: '🌎', count: COUNTRIES.filter(c => c.continent === 'North America').length },
  { name: 'South America', emoji: '🌎', count: COUNTRIES.filter(c => c.continent === 'South America').length },
  { name: 'Oceania', emoji: '🌏', count: COUNTRIES.filter(c => c.continent === 'Oceania').length },
];
