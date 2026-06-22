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
    ]
  },
  {
    id: 'AO', name: 'Angola', continent: 'Africa', lat: -11.2027, lng: 17.8739, emoji: '🇦🇴',
    description: 'A vast Southern African nation with diverse wildlife and Atlantic beaches.',
    cities: [
      { id: 'ao-luanda', name: 'Luanda', lat: -8.8399, lng: 13.2894, description: 'Vibrant capital on the Atlantic coast' },
    ]
  },
  {
    id: 'BJ', name: 'Benin', continent: 'Africa', lat: 9.3077, lng: 2.3158, emoji: '🇧🇯',
    description: 'Birthplace of Voodoo and the historic Kingdom of Dahomey.',
    cities: [
      { id: 'bj-cotonou', name: 'Cotonou', lat: 6.3703, lng: 2.3912, description: 'Economic capital and largest city' },
    ]
  },
  {
    id: 'BW', name: 'Botswana', continent: 'Africa', lat: -22.3285, lng: 24.6849, emoji: '🇧🇼',
    description: 'Home to the Okavango Delta and incredible African wildlife.',
    cities: [
      { id: 'bw-gaborone', name: 'Gaborone', lat: -24.6282, lng: 25.9231, description: 'Modern capital city' },
    ]
  },
  {
    id: 'BF', name: 'Burkina Faso', continent: 'Africa', lat: 12.3714, lng: -1.5197, emoji: '🇧🇫',
    description: 'Land of upright people, known for arts, culture, and film festivals.',
    cities: [
      { id: 'bf-ouagadougou', name: 'Ouagadougou', lat: 12.3714, lng: -1.5197, description: 'Capital and cultural center' },
    ]
  },
  {
    id: 'BI', name: 'Burundi', continent: 'Africa', lat: -3.3731, lng: 29.9189, emoji: '🇧🇮',
    description: 'Heart of Africa with Lake Tanganyika and lush highlands.',
    cities: [
      { id: 'bi-bujumbura', name: 'Bujumbura', lat: -3.3822, lng: 29.3644, description: 'Former capital on Lake Tanganyika' },
    ]
  },
  {
    id: 'CV', name: 'Cabo Verde', continent: 'Africa', lat: 16.5388, lng: -23.0418, emoji: '🇨🇻',
    description: 'Volcanic island archipelago with stunning beaches and Creole culture.',
    cities: [
      { id: 'cv-praia', name: 'Praia', lat: 14.9331, lng: -23.5133, description: 'Capital city on Santiago island' },
    ]
  },
  {
    id: 'CM', name: 'Cameroon', continent: 'Africa', lat: 7.3697, lng: 12.3547, emoji: '🇨🇲',
    description: 'Africa in miniature — diverse landscapes from beaches to deserts.',
    cities: [
      { id: 'cm-douala', name: 'Douala', lat: 4.0511, lng: 9.7679, description: 'Economic capital and largest city' },
    ]
  },
  {
    id: 'CF', name: 'Central African Republic', continent: 'Africa', lat: 6.6111, lng: 20.9394, emoji: '🇨🇫',
    description: 'Wild heart of Africa with dense rainforests and unique wildlife.',
    cities: [
      { id: 'cf-bangui', name: 'Bangui', lat: 4.3947, lng: 18.5582, description: 'Capital on the Ubangi River' },
    ]
  },
  {
    id: 'TD', name: 'Chad', continent: 'Africa', lat: 15.4542, lng: 18.7322, emoji: '🇹🇩',
    description: 'From Saharan dunes to Lake Chad, a land of contrasts.',
    cities: [
      { id: 'td-ndjamena', name: "N'Djamena", lat: 12.1348, lng: 15.0557, description: 'Capital at the confluence of two rivers' },
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
    ]
  },
  {
    id: 'CD', name: 'DR Congo', continent: 'Africa', lat: -4.0383, lng: 21.7587, emoji: '🇨🇩',
    description: 'Vast central African nation with incredible biodiversity and the Congo River.',
    cities: [
      { id: 'cd-kinshasa', name: 'Kinshasa', lat: -4.4419, lng: 15.2663, description: 'Mega-city capital with vibrant music scene' },
    ]
  },
  {
    id: 'CI', name: "Côte d'Ivoire", continent: 'Africa', lat: 7.54, lng: -5.5471, emoji: '🇨🇮',
    description: 'West African nation known for cocoa, culture, and vibrant cities.',
    cities: [
      { id: 'ci-abidjan', name: 'Abidjan', lat: 5.3599, lng: -4.0083, description: 'Economic capital — the Paris of West Africa' },
    ]
  },
  {
    id: 'DJ', name: 'Djibouti', continent: 'Africa', lat: 11.8251, lng: 42.5903, emoji: '🇩🇯',
    description: 'Strategic Horn of Africa nation with otherworldly landscapes.',
    cities: [
      { id: 'dj-djibouti', name: 'Djibouti City', lat: 11.588, lng: 43.145, description: 'Capital and port city' },
    ]
  },
  {
    id: 'EG', name: 'Egypt', continent: 'Africa', lat: 26.8206, lng: 30.8025, emoji: '🇪🇬',
    description: 'Land of pharaohs, pyramids, and the Nile — cradle of civilization.',
    cities: [
      { id: 'eg-cairo', name: 'Cairo', lat: 30.0444, lng: 31.2357, description: 'Sprawling capital home to the Pyramids of Giza' },
    ]
  },
  {
    id: 'GQ', name: 'Equatorial Guinea', continent: 'Africa', lat: 1.6508, lng: 10.2679, emoji: '🇬🇶',
    description: 'Oil-rich nation with lush islands and mainland rainforest.',
    cities: [
      { id: 'gq-malabo', name: 'Malabo', lat: 3.7504, lng: 8.7371, description: 'Capital on Bioko Island' },
    ]
  },
  {
    id: 'ER', name: 'Eritrea', continent: 'Africa', lat: 15.1794, lng: 39.7823, emoji: '🇪🇷',
    description: 'Red Sea nation with Italian-influenced architecture and ancient history.',
    cities: [
      { id: 'er-asmara', name: 'Asmara', lat: 15.3229, lng: 38.9251, description: 'UNESCO Art Deco capital at 2300m elevation' },
    ]
  },
  {
    id: 'SZ', name: 'Eswatini', continent: 'Africa', lat: -26.5225, lng: 31.4659, emoji: '🇸🇿',
    description: 'Small kingdom known for wildlife reserves and vibrant cultural festivals.',
    cities: [
      { id: 'sz-mbabane', name: 'Mbabane', lat: -26.3054, lng: 31.1367, description: 'Administrative capital in the highlands' },
    ]
  },
  {
    id: 'ET', name: 'Ethiopia', continent: 'Africa', lat: 9.145, lng: 40.4897, emoji: '🇪🇹',
    description: 'Ancient civilization, rock-hewn churches, and the birthplace of coffee.',
    cities: [
      { id: 'et-addis-ababa', name: 'Addis Ababa', lat: 9.0245, lng: 38.7468, description: 'Capital of Africa and seat of the AU' },
    ]
  },
  {
    id: 'GA', name: 'Gabon', continent: 'Africa', lat: -0.8037, lng: 11.6094, emoji: '🇬🇦',
    description: 'Equatorial nation with pristine rainforests and Atlantic beaches.',
    cities: [
      { id: 'ga-libreville', name: 'Libreville', lat: 0.3924, lng: 9.4536, description: 'Capital on the Gabon Estuary' },
    ]
  },
  {
    id: 'GM', name: 'Gambia', continent: 'Africa', lat: 13.4432, lng: -15.3101, emoji: '🇬🇲',
    description: 'The smiling coast of Africa — smallest mainland African country.',
    cities: [
      { id: 'gm-banjul', name: 'Banjul', lat: 13.4549, lng: -16.5790, description: 'Capital on an island in the river mouth' },
    ]
  },
  {
    id: 'GH', name: 'Ghana', continent: 'Africa', lat: 7.9465, lng: -1.0232, emoji: '🇬🇭',
    description: 'Gold Coast nation with castles, cocoa, and warm hospitality.',
    cities: [
      { id: 'gh-accra', name: 'Accra', lat: 5.6037, lng: -0.187, description: 'Vibrant capital with bustling markets' },
    ]
  },
  {
    id: 'GN', name: 'Guinea', continent: 'Africa', lat: 9.9456, lng: -9.6966, emoji: '🇬🇳',
    description: 'West African nation with highlands, waterfalls, and rich culture.',
    cities: [
      { id: 'gn-conakry', name: 'Conakry', lat: 9.6412, lng: -13.5784, description: 'Capital on the Atlantic peninsula' },
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
    ]
  },
  {
    id: 'MG', name: 'Madagascar', continent: 'Africa', lat: -18.7669, lng: 46.8691, emoji: '🇲🇬',
    description: 'Island of lemurs, baobabs, and otherworldly biodiversity.',
    cities: [
      { id: 'mg-antananarivo', name: 'Antananarivo', lat: -18.8792, lng: 47.5079, description: 'Hilltop capital with French colonial charm' },
    ]
  },
  {
    id: 'MW', name: 'Malawi', continent: 'Africa', lat: -13.2543, lng: 34.3015, emoji: '🇲🇼',
    description: 'The warm heart of Africa with the great Lake Malawi.',
    cities: [
      { id: 'mw-lilongwe', name: 'Lilongwe', lat: -13.9626, lng: 33.7741, description: 'Capital in the central region' },
    ]
  },
  {
    id: 'ML', name: 'Mali', continent: 'Africa', lat: 17.5707, lng: -3.9962, emoji: '🇲🇱',
    description: 'Land of Timbuktu, ancient mosques, and Saharan trading routes.',
    cities: [
      { id: 'ml-bamako', name: 'Bamako', lat: 12.6392, lng: -8.0029, description: 'Capital on the Niger River' },
    ]
  },
  {
    id: 'MR', name: 'Mauritania', continent: 'Africa', lat: 21.0079, lng: -10.9408, emoji: '🇲🇷',
    description: 'Saharan nation with ancient caravan cities and the Richat Structure.',
    cities: [
      { id: 'mr-nouakchott', name: 'Nouakchott', lat: 18.0735, lng: -15.9582, description: 'Capital on the Atlantic coast' },
    ]
  },
  {
    id: 'MU', name: 'Mauritius', continent: 'Africa', lat: -20.3484, lng: 57.5522, emoji: '🇲🇺',
    description: 'Indian Ocean paradise with turquoise lagoons and multicultural charm.',
    cities: [
      { id: 'mu-port-louis', name: 'Port Louis', lat: -20.1609, lng: 57.5012, description: 'Capital with vibrant waterfront' },
    ]
  },
  {
    id: 'MA', name: 'Morocco', continent: 'Africa', lat: 31.7917, lng: -7.0926, emoji: '🇲🇦',
    description: 'Gateway to Africa with imperial cities, souks, and the Sahara.',
    cities: [
      { id: 'ma-marrakech', name: 'Marrakech', lat: 31.6295, lng: -7.9811, description: 'Red City with Jemaa el-Fnaa square' },
    ]
  },
  {
    id: 'MZ', name: 'Mozambique', continent: 'Africa', lat: -18.6657, lng: 35.5296, emoji: '🇲🇿',
    description: 'Indian Ocean coastline with pristine archipelagos and coral reefs.',
    cities: [
      { id: 'mz-maputo', name: 'Maputo', lat: -25.9692, lng: 32.5732, description: 'Capital with Portuguese colonial architecture' },
    ]
  },
  {
    id: 'NA', name: 'Namibia', continent: 'Africa', lat: -22.9576, lng: 18.4904, emoji: '🇳🇦',
    description: 'Stark desert beauty — from Sossusvlei dunes to the Skeleton Coast.',
    cities: [
      { id: 'na-windhoek', name: 'Windhoek', lat: -22.5609, lng: 17.0658, description: 'Capital with German colonial heritage' },
    ]
  },
  {
    id: 'NE', name: 'Niger', continent: 'Africa', lat: 17.6078, lng: 8.0817, emoji: '🇳🇪',
    description: 'Saharan nation with ancient sultanates and the Air Mountains.',
    cities: [
      { id: 'ne-niamey', name: 'Niamey', lat: 13.5116, lng: 2.1254, description: 'Capital on the Niger River' },
    ]
  },
  {
    id: 'NG', name: 'Nigeria', continent: 'Africa', lat: 9.082, lng: 8.6753, emoji: '🇳🇬',
    description: 'Africa\'s most populous nation and cultural powerhouse.',
    cities: [
      { id: 'ng-lagos', name: 'Lagos', lat: 6.5244, lng: 3.3792, description: 'Mega-city of Afrobeats and Nollywood' },
    ]
  },
  {
    id: 'RW', name: 'Rwanda', continent: 'Africa', lat: -1.9403, lng: 29.8739, emoji: '🇷🇼',
    description: 'Land of a thousand hills with mountain gorillas and remarkable renewal.',
    cities: [
      { id: 'rw-kigali', name: 'Kigali', lat: -1.9706, lng: 30.1044, description: 'Cleanest capital in Africa' },
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
    ]
  },
  {
    id: 'SC', name: 'Seychelles', continent: 'Africa', lat: -4.6796, lng: 55.492, emoji: '🇸🇨',
    description: 'Indian Ocean paradise with granite islands and turquoise waters.',
    cities: [
      { id: 'sc-victoria', name: 'Victoria', lat: -4.6191, lng: 55.4513, description: 'One of the world\'s smallest capitals' },
    ]
  },
  {
    id: 'SL', name: 'Sierra Leone', continent: 'Africa', lat: 8.4606, lng: -11.7799, emoji: '🇸🇱',
    description: 'West African coast with beautiful beaches and lush rainforests.',
    cities: [
      { id: 'sl-freetown', name: 'Freetown', lat: 8.484, lng: -13.2299, description: 'Capital on a mountainous peninsula' },
    ]
  },
  {
    id: 'SO', name: 'Somalia', continent: 'Africa', lat: 5.1521, lng: 46.1996, emoji: '🇸🇴',
    description: 'Horn of Africa nation with the longest coastline on the continent.',
    cities: [
      { id: 'so-mogadishu', name: 'Mogadishu', lat: 2.0469, lng: 45.3182, description: 'Capital on the Indian Ocean coast' },
    ]
  },
  {
    id: 'ZA', name: 'South Africa', continent: 'Africa', lat: -30.5595, lng: 22.9375, emoji: '🇿🇦',
    description: 'Rainbow nation with safaris, wine lands, and dramatic coastlines.',
    cities: [
      { id: 'za-cape-town', name: 'Cape Town', lat: -33.9249, lng: 18.4241, description: 'Mother City with Table Mountain' },
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
    ]
  },
  {
    id: 'TZ', name: 'Tanzania', continent: 'Africa', lat: -6.369, lng: 34.8888, emoji: '🇹🇿',
    description: 'Home to Kilimanjaro, the Serengeti, and the spice island of Zanzibar.',
    cities: [
      { id: 'tz-dar-es-salaam', name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083, description: 'Largest city and former capital' },
    ]
  },
  {
    id: 'TG', name: 'Togo', continent: 'Africa', lat: 8.6195, lng: 0.8248, emoji: '🇹🇬',
    description: 'Narrow West African nation with palm-lined beaches and voodoo markets.',
    cities: [
      { id: 'tg-lome', name: 'Lomé', lat: 6.1256, lng: 1.2254, description: 'Capital with a famous fetish market' },
    ]
  },
  {
    id: 'TN', name: 'Tunisia', continent: 'Africa', lat: 33.8869, lng: 9.5375, emoji: '🇹🇳',
    description: 'Mediterranean gem with Carthage ruins, Star Wars sets, and Saharan oases.',
    cities: [
      { id: 'tn-tunis', name: 'Tunis', lat: 36.8065, lng: 10.1815, description: 'Capital with the ancient Medina' },
    ]
  },
  {
    id: 'UG', name: 'Uganda', continent: 'Africa', lat: 1.3733, lng: 32.2903, emoji: '🇺🇬',
    description: 'Pearl of Africa with gorilla trekking, the Nile source, and lush landscapes.',
    cities: [
      { id: 'ug-kampala', name: 'Kampala', lat: 0.3476, lng: 32.5825, description: 'Capital built on seven hills' },
    ]
  },
  {
    id: 'ZM', name: 'Zambia', continent: 'Africa', lat: -13.1339, lng: 27.8493, emoji: '🇿🇲',
    description: 'Home to Victoria Falls and some of Africa\'s best walking safaris.',
    cities: [
      { id: 'zm-lusaka', name: 'Lusaka', lat: -15.3875, lng: 28.3228, description: 'Capital and commercial hub' },
    ]
  },
  {
    id: 'ZW', name: 'Zimbabwe', continent: 'Africa', lat: -19.0154, lng: 29.1549, emoji: '🇿🇼',
    description: 'Ancient ruins, Victoria Falls, and world-class wildlife.',
    cities: [
      { id: 'zw-harare', name: 'Harare', lat: -17.8292, lng: 31.0522, description: 'Capital with jacaranda-lined avenues' },
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
    ]
  },
  {
    id: 'AM', name: 'Armenia', continent: 'Asia', lat: 40.0691, lng: 45.0382, emoji: '🇦🇲',
    description: 'Ancient Christian nation with monasteries perched among dramatic mountains.',
    cities: [
      { id: 'am-yerevan', name: 'Yerevan', lat: 40.1792, lng: 44.4991, description: 'Pink City capital with Ararat views' },
    ]
  },
  {
    id: 'AZ', name: 'Azerbaijan', continent: 'Asia', lat: 40.1431, lng: 47.5769, emoji: '🇦🇿',
    description: 'Land of fire on the Caspian Sea, blending ancient and ultra-modern.',
    cities: [
      { id: 'az-baku', name: 'Baku', lat: 40.4093, lng: 49.8671, description: 'Futuristic capital with the Flame Towers' },
    ]
  },
  {
    id: 'BH', name: 'Bahrain', continent: 'Asia', lat: 25.9304, lng: 50.6378, emoji: '🇧🇭',
    description: 'Island kingdom in the Persian Gulf with ancient Dilmun civilization.',
    cities: [
      { id: 'bh-manama', name: 'Manama', lat: 26.2285, lng: 50.5860, description: 'Capital with the Bahrain World Trade Center' },
    ]
  },
  {
    id: 'BD', name: 'Bangladesh', continent: 'Asia', lat: 23.685, lng: 90.3563, emoji: '🇧🇩',
    description: 'Delta nation with the Sundarbans mangrove forest and vibrant culture.',
    cities: [
      { id: 'bd-dhaka', name: 'Dhaka', lat: 23.8103, lng: 90.4125, description: 'Bustling capital — city of rickshaws' },
    ]
  },
  {
    id: 'BT', name: 'Bhutan', continent: 'Asia', lat: 27.5142, lng: 90.4336, emoji: '🇧🇹',
    description: 'Last Shangri-La measuring Gross National Happiness amid Himalayan peaks.',
    cities: [
      { id: 'bt-thimphu', name: 'Thimphu', lat: 27.4728, lng: 89.6390, description: 'Capital without traffic lights' },
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
    ]
  },
  {
    id: 'CN', name: 'China', continent: 'Asia', lat: 35.8617, lng: 104.1954, emoji: '🇨🇳',
    description: 'Ancient civilization with the Great Wall, terracotta warriors, and modern megacities.',
    cities: [
      { id: 'cn-beijing', name: 'Beijing', lat: 39.9042, lng: 116.4074, description: 'Capital with the Forbidden City and Great Wall' },
    ]
  },
  {
    id: 'CY', name: 'Cyprus', continent: 'Asia', lat: 35.1264, lng: 33.4299, emoji: '🇨🇾',
    description: 'Mediterranean island of Aphrodite with ancient ruins and golden beaches.',
    cities: [
      { id: 'cy-nicosia', name: 'Nicosia', lat: 35.1856, lng: 33.3823, description: 'Last divided capital in the world' },
    ]
  },
  {
    id: 'GE', name: 'Georgia', continent: 'Asia', lat: 42.3154, lng: 43.3569, emoji: '🇬🇪',
    description: 'Caucasus gem with ancient wine culture, mountain villages, and warm hospitality.',
    cities: [
      { id: 'ge-tbilisi', name: 'Tbilisi', lat: 41.7151, lng: 44.8271, description: 'Capital with sulfur baths and Old Town charm' },
    ]
  },
  {
    id: 'IN', name: 'India', continent: 'Asia', lat: 20.5937, lng: 78.9629, emoji: '🇮🇳',
    description: 'Incredible India — land of the Taj Mahal, spices, and ancient temples.',
    cities: [
      { id: 'in-delhi', name: 'New Delhi', lat: 28.6139, lng: 77.209, description: 'Capital blending Mughal and modern heritage' },
    ]
  },
  {
    id: 'ID', name: 'Indonesia', continent: 'Asia', lat: -0.7893, lng: 113.9213, emoji: '🇮🇩',
    description: 'Archipelago of 17,000 islands with Bali, Komodo dragons, and ancient temples.',
    cities: [
      { id: 'id-bali', name: 'Bali', lat: -8.3405, lng: 115.092, description: 'Island of the Gods — temples, rice terraces, beaches' },
    ]
  },
  {
    id: 'IR', name: 'Iran', continent: 'Asia', lat: 32.4279, lng: 53.688, emoji: '🇮🇷',
    description: 'Persia reborn — stunning mosques, ancient ruins, and Persian gardens.',
    cities: [
      { id: 'ir-isfahan', name: 'Isfahan', lat: 32.6546, lng: 51.6680, description: 'Half the world — Imam Square and bridges' },
    ]
  },
  {
    id: 'IQ', name: 'Iraq', continent: 'Asia', lat: 33.2232, lng: 43.6793, emoji: '🇮🇶',
    description: 'Cradle of civilization — Mesopotamia with ancient Babylon and sacred sites.',
    cities: [
      { id: 'iq-baghdad', name: 'Baghdad', lat: 33.3128, lng: 44.3615, description: 'Capital on the Tigris — ancient seat of learning' },
    ]
  },
  {
    id: 'IL', name: 'Israel', continent: 'Asia', lat: 31.0461, lng: 34.8516, emoji: '🇮🇱',
    description: 'Ancient holy land with Jerusalem, the Dead Sea, and vibrant Tel Aviv.',
    cities: [
      { id: 'il-jerusalem', name: 'Jerusalem', lat: 31.7683, lng: 35.2137, description: 'Holy city sacred to three religions' },
    ]
  },
  {
    id: 'JP', name: 'Japan', continent: 'Asia', lat: 36.2048, lng: 138.2529, emoji: '🇯🇵',
    description: 'Where ancient traditions meet cutting-edge technology.',
    cities: [
      { id: 'jp-tokyo', name: 'Tokyo', lat: 35.6762, lng: 139.6503, description: 'Neon-lit mega-city — world\'s busiest crossing' },
    ]
  },
  {
    id: 'JO', name: 'Jordan', continent: 'Asia', lat: 30.5852, lng: 36.2384, emoji: '🇯🇴',
    description: 'Ancient Nabataean kingdom with Petra, the Dead Sea, and Wadi Rum.',
    cities: [
      { id: 'jo-amman', name: 'Amman', lat: 31.9454, lng: 35.9284, description: 'Capital built on seven hills with Roman ruins' },
    ]
  },
  {
    id: 'KZ', name: 'Kazakhstan', continent: 'Asia', lat: 48.0196, lng: 66.9237, emoji: '🇰🇿',
    description: 'Vast Central Asian steppe with futuristic cities and ancient Silk Road.',
    cities: [
      { id: 'kz-astana', name: 'Astana', lat: 51.1694, lng: 71.4491, description: 'Futuristic capital on the steppe' },
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
    ]
  },
  {
    id: 'LA', name: 'Laos', continent: 'Asia', lat: 19.8563, lng: 102.4955, emoji: '🇱🇦',
    description: 'Land of a million elephants with Buddhist temples and the Mekong River.',
    cities: [
      { id: 'la-luang-prabang', name: 'Luang Prabang', lat: 19.8847, lng: 102.1349, description: 'UNESCO town of monks and riverside temples' },
    ]
  },
  {
    id: 'LB', name: 'Lebanon', continent: 'Asia', lat: 33.8547, lng: 35.8623, emoji: '🇱🇧',
    description: 'Phoenician heritage with cedar forests, ancient ruins, and Mediterranean cuisine.',
    cities: [
      { id: 'lb-beirut', name: 'Beirut', lat: 33.8938, lng: 35.5018, description: 'Paris of the Middle East — resilient and vibrant' },
    ]
  },
  {
    id: 'MY', name: 'Malaysia', continent: 'Asia', lat: 4.2105, lng: 101.9758, emoji: '🇲🇾',
    description: 'Southeast Asian mosaic of cultures, rainforests, and stunning islands.',
    cities: [
      { id: 'my-kuala-lumpur', name: 'Kuala Lumpur', lat: 3.139, lng: 101.6869, description: 'Capital with the iconic Petronas Twin Towers' },
    ]
  },
  {
    id: 'MV', name: 'Maldives', continent: 'Asia', lat: 3.2028, lng: 73.2207, emoji: '🇲🇻',
    description: 'Paradise of overwater villas, coral atolls, and crystal-clear Indian Ocean.',
    cities: [
      { id: 'mv-male', name: 'Malé', lat: 4.1755, lng: 73.5093, description: 'Colorful island capital' },
    ]
  },
  {
    id: 'MN', name: 'Mongolia', continent: 'Asia', lat: 46.8625, lng: 103.8467, emoji: '🇲🇳',
    description: 'Land of Genghis Khan with vast steppes, nomadic culture, and the Gobi Desert.',
    cities: [
      { id: 'mn-ulaanbaatar', name: 'Ulaanbaatar', lat: 47.8864, lng: 106.9057, description: 'Capital — world\'s coldest capital city' },
    ]
  },
  {
    id: 'MM', name: 'Myanmar', continent: 'Asia', lat: 21.9162, lng: 95.956, emoji: '🇲🇲',
    description: 'Golden land of pagodas, ancient kingdoms, and the Irrawaddy River.',
    cities: [
      { id: 'mm-yangon', name: 'Yangon', lat: 16.8661, lng: 96.1951, description: 'Former capital with the golden Shwedagon Pagoda' },
    ]
  },
  {
    id: 'NP', name: 'Nepal', continent: 'Asia', lat: 28.3949, lng: 84.124, emoji: '🇳🇵',
    description: 'Roof of the world with Mount Everest, ancient temples, and warm hearts.',
    cities: [
      { id: 'np-kathmandu', name: 'Kathmandu', lat: 27.7172, lng: 85.324, description: 'Temple-filled capital in a Himalayan valley' },
    ]
  },
  {
    id: 'OM', name: 'Oman', continent: 'Asia', lat: 21.4735, lng: 55.9754, emoji: '🇴🇲',
    description: 'Arabian gem with dramatic fjords, desert forts, and frankincense heritage.',
    cities: [
      { id: 'om-muscat', name: 'Muscat', lat: 23.5880, lng: 58.3829, description: 'Capital with the Grand Mosque and souks' },
    ]
  },
  {
    id: 'PK', name: 'Pakistan', continent: 'Asia', lat: 30.3753, lng: 69.3451, emoji: '🇵🇰',
    description: 'Land of ancient Indus civilization, Karakoram peaks, and Mughal splendor.',
    cities: [
      { id: 'pk-lahore', name: 'Lahore', lat: 31.5204, lng: 74.3587, description: 'Heart of Pakistan — Mughal heritage and food' },
    ]
  },
  {
    id: 'PS', name: 'Palestine', continent: 'Asia', lat: 31.9522, lng: 35.2332, emoji: '🇵🇸',
    description: 'Ancient land with Bethlehem, Jericho, and deep cultural heritage.',
    cities: [
      { id: 'ps-bethlehem', name: 'Bethlehem', lat: 31.7054, lng: 35.2024, description: 'Birthplace of Jesus — Church of the Nativity' },
    ]
  },
  {
    id: 'PH', name: 'Philippines', continent: 'Asia', lat: 12.8797, lng: 121.774, emoji: '🇵🇭',
    description: 'Over 7,000 islands with pristine beaches, rice terraces, and vibrant festivals.',
    cities: [
      { id: 'ph-manila', name: 'Manila', lat: 14.5995, lng: 120.9842, description: 'Capital with Spanish colonial Intramuros' },
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
    ]
  },
  {
    id: 'LK', name: 'Sri Lanka', continent: 'Asia', lat: 7.8731, lng: 80.7718, emoji: '🇱🇰',
    description: 'Teardrop of India with ancient temples, tea hills, and tropical beaches.',
    cities: [
      { id: 'lk-colombo', name: 'Colombo', lat: 6.9271, lng: 79.8612, description: 'Commercial capital with colonial heritage' },
    ]
  },
  {
    id: 'SY', name: 'Syria', continent: 'Asia', lat: 34.8021, lng: 38.9968, emoji: '🇸🇾',
    description: 'Ancient cradle of civilization with Aleppo, Damascus, and Palmyra.',
    cities: [
      { id: 'sy-damascus', name: 'Damascus', lat: 33.5138, lng: 36.2765, description: 'Oldest continuously inhabited capital' },
    ]
  },
  {
    id: 'TW', name: 'Taiwan', continent: 'Asia', lat: 23.6978, lng: 120.9605, emoji: '🇹🇼',
    description: 'Beautiful island with night markets, Taroko Gorge, and warm hospitality.',
    cities: [
      { id: 'tw-taipei', name: 'Taipei', lat: 25.033, lng: 121.5654, description: 'Capital with Taipei 101 and night markets' },
    ]
  },
  {
    id: 'TJ', name: 'Tajikistan', continent: 'Asia', lat: 38.861, lng: 71.2761, emoji: '🇹🇯',
    description: 'Mountain republic with the Pamir Highway and Central Asian adventure.',
    cities: [
      { id: 'tj-dushanbe', name: 'Dushanbe', lat: 38.5598, lng: 68.774, description: 'Capital with grand Soviet-era architecture' },
    ]
  },
  {
    id: 'TH', name: 'Thailand', continent: 'Asia', lat: 15.87, lng: 100.9925, emoji: '🇹🇭',
    description: 'Land of smiles with golden temples, tropical islands, and incredible food.',
    cities: [
      { id: 'th-bangkok', name: 'Bangkok', lat: 13.7563, lng: 100.5018, description: 'City of Angels — temples, tuk-tuks, and street food' },
    ]
  },
  {
    id: 'TL', name: 'Timor-Leste', continent: 'Asia', lat: -8.8742, lng: 125.7275, emoji: '🇹🇱',
    description: 'Southeast Asia\'s youngest nation with pristine diving and mountain culture.',
    cities: [
      { id: 'tl-dili', name: 'Dili', lat: -8.5569, lng: 125.5603, description: 'Capital with Cristo Rei statue' },
    ]
  },
  {
    id: 'TR', name: 'Turkey', continent: 'Asia', lat: 38.9637, lng: 35.2433, emoji: '🇹🇷',
    description: 'Where East meets West — Istanbul, Cappadocia, and Aegean coasts.',
    cities: [
      { id: 'tr-istanbul', name: 'Istanbul', lat: 41.0082, lng: 28.9784, description: 'City on two continents — Hagia Sophia and bazaars' },
    ]
  },
  {
    id: 'TM', name: 'Turkmenistan', continent: 'Asia', lat: 38.9697, lng: 59.5563, emoji: '🇹🇲',
    description: 'Central Asian nation with the Darvaza Gas Crater and Silk Road ruins.',
    cities: [
      { id: 'tm-ashgabat', name: 'Ashgabat', lat: 37.9601, lng: 58.3261, description: 'White marble capital — city of records' },
    ]
  },
  {
    id: 'AE', name: 'United Arab Emirates', continent: 'Asia', lat: 23.4241, lng: 53.8478, emoji: '🇦🇪',
    description: 'Futuristic desert nation with Dubai\'s skyline and Abu Dhabi\'s culture.',
    cities: [
      { id: 'ae-dubai', name: 'Dubai', lat: 25.2048, lng: 55.2708, description: 'City of superlatives — Burj Khalifa and beyond' },
    ]
  },
  {
    id: 'UZ', name: 'Uzbekistan', continent: 'Asia', lat: 41.3775, lng: 64.5853, emoji: '🇺🇿',
    description: 'Heart of the Silk Road with Samarkand\'s turquoise domes and ancient bazaars.',
    cities: [
      { id: 'uz-samarkand', name: 'Samarkand', lat: 39.6542, lng: 66.9597, description: 'Registan Square — Silk Road jewel' },
    ]
  },
  {
    id: 'VN', name: 'Vietnam', continent: 'Asia', lat: 14.0583, lng: 108.2772, emoji: '🇻🇳',
    description: 'S-shaped nation with Ha Long Bay, ancient towns, and legendary street food.',
    cities: [
      { id: 'vn-hanoi', name: 'Hanoi', lat: 21.0285, lng: 105.8542, description: 'Capital with Old Quarter and Ho Chi Minh mausoleum' },
    ]
  },
  {
    id: 'YE', name: 'Yemen', continent: 'Asia', lat: 15.5527, lng: 48.5164, emoji: '🇾🇪',
    description: 'Arabia Felix with ancient skyscraper cities and Socotra Island.',
    cities: [
      { id: 'ye-sanaa', name: "Sana'a", lat: 15.3694, lng: 44.191, description: 'UNESCO old city with tower houses' },
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
    ]
  },
  {
    id: 'BY', name: 'Belarus', continent: 'Europe', lat: 53.7098, lng: 27.9534, emoji: '🇧🇾',
    description: 'Eastern European country with vast forests and Soviet-era heritage.',
    cities: [
      { id: 'by-minsk', name: 'Minsk', lat: 53.9006, lng: 27.559, description: 'Capital with grand Soviet architecture' },
    ]
  },
  {
    id: 'BE', name: 'Belgium', continent: 'Europe', lat: 50.5039, lng: 4.4699, emoji: '🇧🇪',
    description: 'Land of waffles, chocolate, beer, and stunning medieval towns.',
    cities: [
      { id: 'be-brussels', name: 'Brussels', lat: 50.8503, lng: 4.3517, description: 'EU capital with Grand Place and Atomium' },
    ]
  },
  {
    id: 'BA', name: 'Bosnia and Herzegovina', continent: 'Europe', lat: 43.9159, lng: 17.6791, emoji: '🇧🇦',
    description: 'Where East meets West with Ottoman bridges and untouched nature.',
    cities: [
      { id: 'ba-sarajevo', name: 'Sarajevo', lat: 43.8563, lng: 18.4131, description: 'Capital where civilizations meet' },
    ]
  },
  {
    id: 'BG', name: 'Bulgaria', continent: 'Europe', lat: 42.7339, lng: 25.4858, emoji: '🇧🇬',
    description: 'Ancient Thracian land with Black Sea beaches and rose valleys.',
    cities: [
      { id: 'bg-sofia', name: 'Sofia', lat: 42.6977, lng: 23.3219, description: 'Capital beneath Vitosha Mountain' },
    ]
  },
  {
    id: 'HR', name: 'Croatia', continent: 'Europe', lat: 45.1, lng: 15.2, emoji: '🇭🇷',
    description: 'Adriatic paradise with Dubrovnik, island-hopping, and Game of Thrones locations.',
    cities: [
      { id: 'hr-dubrovnik', name: 'Dubrovnik', lat: 42.6507, lng: 18.0944, description: 'Pearl of the Adriatic — King\'s Landing' },
    ]
  },
  {
    id: 'CZ', name: 'Czechia', continent: 'Europe', lat: 49.8175, lng: 15.473, emoji: '🇨🇿',
    description: 'Bohemian jewel with Prague\'s spires, castles, and world-famous beer.',
    cities: [
      { id: 'cz-prague', name: 'Prague', lat: 50.0755, lng: 14.4378, description: 'City of a Hundred Spires — Charles Bridge and Old Town' },
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
    ]
  },
  {
    id: 'FR', name: 'France', continent: 'Europe', lat: 46.2276, lng: 2.2137, emoji: '🇫🇷',
    description: 'Art, wine, cuisine, and romance — the world\'s most-visited country.',
    cities: [
      { id: 'fr-paris', name: 'Paris', lat: 48.8566, lng: 2.3522, description: 'City of Light — Eiffel Tower and Louvre' },
    ]
  },
  {
    id: 'DE', name: 'Germany', continent: 'Europe', lat: 51.1657, lng: 10.4515, emoji: '🇩🇪',
    description: 'Engineering excellence meets fairytale castles, beer gardens, and history.',
    cities: [
      { id: 'de-berlin', name: 'Berlin', lat: 52.5200, lng: 13.405, description: 'Capital of reunification — vibrant art and history' },
    ]
  },
  {
    id: 'GR', name: 'Greece', continent: 'Europe', lat: 39.0742, lng: 21.8243, emoji: '🇬🇷',
    description: 'Cradle of Western civilization with mythical islands and ancient wonders.',
    cities: [
      { id: 'gr-athens', name: 'Athens', lat: 37.9838, lng: 23.7275, description: 'Acropolis city — birthplace of democracy' },
    ]
  },
  {
    id: 'HU', name: 'Hungary', continent: 'Europe', lat: 47.1625, lng: 19.5033, emoji: '🇭🇺',
    description: 'Thermal bath culture, ruin bars, and stunning Danube architecture.',
    cities: [
      { id: 'hu-budapest', name: 'Budapest', lat: 47.4979, lng: 19.0402, description: 'Pearl of the Danube — thermal baths and ruin bars' },
    ]
  },
  {
    id: 'IS', name: 'Iceland', continent: 'Europe', lat: 64.9631, lng: -19.0208, emoji: '🇮🇸',
    description: 'Land of fire and ice with volcanoes, glaciers, and the Northern Lights.',
    cities: [
      { id: 'is-reykjavik', name: 'Reykjavik', lat: 64.1466, lng: -21.9426, description: 'World\'s northernmost capital' },
    ]
  },
  {
    id: 'IE', name: 'Ireland', continent: 'Europe', lat: 53.4129, lng: -8.2439, emoji: '🇮🇪',
    description: 'Emerald Isle of ancient castles, literary legends, and warm pub culture.',
    cities: [
      { id: 'ie-dublin', name: 'Dublin', lat: 53.3498, lng: -6.2603, description: 'Capital of Guinness, literature, and craic' },
    ]
  },
  {
    id: 'IT', name: 'Italy', continent: 'Europe', lat: 41.8719, lng: 12.5674, emoji: '🇮🇹',
    description: 'La Dolce Vita — art, architecture, history, and the best food on Earth.',
    cities: [
      { id: 'it-rome', name: 'Rome', lat: 41.9028, lng: 12.4964, description: 'Eternal City — Colosseum, Vatican, and gelato' },
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
    ]
  },
  {
    id: 'MD', name: 'Moldova', continent: 'Europe', lat: 47.4116, lng: 28.3699, emoji: '🇲🇩',
    description: 'Europe\'s hidden wine country with underground wine cities.',
    cities: [
      { id: 'md-chisinau', name: 'Chișinău', lat: 47.0105, lng: 28.8638, description: 'Capital with parks and Soviet heritage' },
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
    ]
  },
  {
    id: 'NL', name: 'Netherlands', continent: 'Europe', lat: 52.1326, lng: 5.2913, emoji: '🇳🇱',
    description: 'Land below the sea with canals, tulips, windmills, and cycling culture.',
    cities: [
      { id: 'nl-amsterdam', name: 'Amsterdam', lat: 52.3676, lng: 4.9041, description: 'Canal city with the Van Gogh Museum and Anne Frank House' },
    ]
  },
  {
    id: 'MK', name: 'North Macedonia', continent: 'Europe', lat: 41.5126, lng: 21.7455, emoji: '🇲🇰',
    description: 'Balkan treasure with Lake Ohrid and ancient Ottoman bazaars.',
    cities: [
      { id: 'mk-skopje', name: 'Skopje', lat: 41.9973, lng: 21.4280, description: 'Capital with the Old Bazaar and bridge' },
    ]
  },
  {
    id: 'NO', name: 'Norway', continent: 'Europe', lat: 60.472, lng: 8.4689, emoji: '🇳🇴',
    description: 'Land of fjords, Northern Lights, and Viking heritage.',
    cities: [
      { id: 'no-oslo', name: 'Oslo', lat: 59.9139, lng: 10.7522, description: 'Capital with world-class museums' },
    ]
  },
  {
    id: 'PL', name: 'Poland', continent: 'Europe', lat: 51.9194, lng: 19.1451, emoji: '🇵🇱',
    description: 'Rich history with medieval old towns, Auschwitz memorial, and vibrant cities.',
    cities: [
      { id: 'pl-krakow', name: 'Kraków', lat: 50.0647, lng: 19.945, description: 'Medieval gem with Wawel Castle and vibrant nightlife' },
    ]
  },
  {
    id: 'PT', name: 'Portugal', continent: 'Europe', lat: 39.3999, lng: -8.2245, emoji: '🇵🇹',
    description: 'Atlantic soul with Lisbon\'s hills, Porto\'s wine, and Algarve beaches.',
    cities: [
      { id: 'pt-lisbon', name: 'Lisbon', lat: 38.7223, lng: -9.1393, description: 'City of seven hills — fado, pastéis, trams' },
    ]
  },
  {
    id: 'RO', name: 'Romania', continent: 'Europe', lat: 45.9432, lng: 24.9668, emoji: '🇷🇴',
    description: 'Transylvania\'s castles, painted monasteries, and Carpathian wilderness.',
    cities: [
      { id: 'ro-bucharest', name: 'Bucharest', lat: 44.4268, lng: 26.1025, description: 'Little Paris with the Palace of Parliament' },
    ]
  },
  {
    id: 'RU', name: 'Russia', continent: 'Europe', lat: 61.524, lng: 105.3188, emoji: '🇷🇺',
    description: 'World\'s largest country spanning two continents with imperial grandeur.',
    cities: [
      { id: 'ru-moscow', name: 'Moscow', lat: 55.7558, lng: 37.6173, description: 'Capital with the Kremlin and Red Square' },
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
    ]
  },
  {
    id: 'SK', name: 'Slovakia', continent: 'Europe', lat: 48.669, lng: 19.699, emoji: '🇸🇰',
    description: 'Heart of Europe with castles, caves, and the High Tatras mountains.',
    cities: [
      { id: 'sk-bratislava', name: 'Bratislava', lat: 48.1486, lng: 17.1077, description: 'Compact capital on the Danube' },
    ]
  },
  {
    id: 'SI', name: 'Slovenia', continent: 'Europe', lat: 46.1512, lng: 14.9955, emoji: '🇸🇮',
    description: 'Pocket-sized Alpine-Mediterranean paradise with a dragon capital.',
    cities: [
      { id: 'si-ljubljana', name: 'Ljubljana', lat: 46.0569, lng: 14.5058, description: 'Green capital with dragon bridge and castle' },
    ]
  },
  {
    id: 'ES', name: 'Spain', continent: 'Europe', lat: 40.4637, lng: -3.7492, emoji: '🇪🇸',
    description: 'Passionate land of flamenco, tapas, Gaudí, and sun-drenched coasts.',
    cities: [
      { id: 'es-barcelona', name: 'Barcelona', lat: 41.3874, lng: 2.1686, description: 'Gaudí\'s masterpiece city on the Mediterranean' },
    ]
  },
  {
    id: 'SE', name: 'Sweden', continent: 'Europe', lat: 60.1282, lng: 18.6435, emoji: '🇸🇪',
    description: 'Scandinavian kingdom of design, ABBA, and the Northern Lights.',
    cities: [
      { id: 'se-stockholm', name: 'Stockholm', lat: 59.3293, lng: 18.0686, description: 'Venice of the North — spread across 14 islands' },
    ]
  },
  {
    id: 'CH', name: 'Switzerland', continent: 'Europe', lat: 46.8182, lng: 8.2275, emoji: '🇨🇭',
    description: 'Alpine paradise with chocolate, watches, and breathtaking mountain scenery.',
    cities: [
      { id: 'ch-zurich', name: 'Zürich', lat: 47.3769, lng: 8.5417, description: 'Financial capital on the lake' },
    ]
  },
  {
    id: 'UA', name: 'Ukraine', continent: 'Europe', lat: 48.3794, lng: 31.1656, emoji: '🇺🇦',
    description: 'Largest country entirely in Europe with rich culture and history.',
    cities: [
      { id: 'ua-kyiv', name: 'Kyiv', lat: 50.4501, lng: 30.5234, description: 'Capital with golden-domed churches' },
    ]
  },
  {
    id: 'GB', name: 'United Kingdom', continent: 'Europe', lat: 55.3781, lng: -3.436, emoji: '🇬🇧',
    description: 'Historic isles of Shakespeare, the Beatles, and the royal crown.',
    cities: [
      { id: 'gb-london', name: 'London', lat: 51.5074, lng: -0.1278, description: 'World capital — Big Ben, Buckingham, and The City' },
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
    ]
  },
  {
    id: 'CA', name: 'Canada', continent: 'North America', lat: 56.1304, lng: -106.3468, emoji: '🇨🇦',
    description: 'Second-largest country with Niagara Falls, Rocky Mountains, and maple syrup.',
    cities: [
      { id: 'ca-vancouver', name: 'Vancouver', lat: 49.2827, lng: -123.1207, description: 'Pacific gem between mountains and ocean' },
    ]
  },
  {
    id: 'CR', name: 'Costa Rica', continent: 'North America', lat: 9.7489, lng: -83.7534, emoji: '🇨🇷',
    description: 'Pura Vida — biodiversity hotspot with rainforests, volcanoes, and beaches.',
    cities: [
      { id: 'cr-san-jose', name: 'San José', lat: 9.9281, lng: -84.0907, description: 'Capital in the Central Valley' },
    ]
  },
  {
    id: 'CU', name: 'Cuba', continent: 'North America', lat: 21.5218, lng: -77.7812, emoji: '🇨🇺',
    description: 'Time-capsule island with vintage cars, salsa, and revolutionary history.',
    cities: [
      { id: 'cu-havana', name: 'Havana', lat: 23.1136, lng: -82.3666, description: 'Colorful capital with vintage Chevys and salsa' },
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
    ]
  },
  {
    id: 'SV', name: 'El Salvador', continent: 'North America', lat: 13.7942, lng: -88.8965, emoji: '🇸🇻',
    description: 'Central America\'s smallest country with volcanic surf beaches.',
    cities: [
      { id: 'sv-san-salvador', name: 'San Salvador', lat: 13.6929, lng: -89.2182, description: 'Capital surrounded by volcanoes' },
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
    ]
  },
  {
    id: 'HT', name: 'Haiti', continent: 'North America', lat: 18.9712, lng: -72.2852, emoji: '🇭🇹',
    description: 'First Black republic with vibrant art, music, and resilient spirit.',
    cities: [
      { id: 'ht-port-au-prince', name: 'Port-au-Prince', lat: 18.5944, lng: -72.3074, description: 'Capital with the Iron Market' },
    ]
  },
  {
    id: 'HN', name: 'Honduras', continent: 'North America', lat: 15.2, lng: -86.2419, emoji: '🇭🇳',
    description: 'Maya ruins at Copán, Bay Islands diving, and Caribbean coast.',
    cities: [
      { id: 'hn-tegucigalpa', name: 'Tegucigalpa', lat: 14.0723, lng: -87.1921, description: 'Capital in the mountains' },
    ]
  },
  {
    id: 'JM', name: 'Jamaica', continent: 'North America', lat: 18.1096, lng: -77.2975, emoji: '🇯🇲',
    description: 'One love — reggae, jerk cuisine, Blue Mountains, and Caribbean vibes.',
    cities: [
      { id: 'jm-kingston', name: 'Kingston', lat: 18.0179, lng: -76.8099, description: 'Capital and birthplace of reggae' },
    ]
  },
  {
    id: 'MX', name: 'Mexico', continent: 'North America', lat: 23.6345, lng: -102.5528, emoji: '🇲🇽',
    description: 'Ancient civilizations, incredible cuisine, vibrant culture, and paradise beaches.',
    cities: [
      { id: 'mx-mexico-city', name: 'Mexico City', lat: 19.4326, lng: -99.1332, description: 'Mega-city built on an Aztec lake' },
    ]
  },
  {
    id: 'NI', name: 'Nicaragua', continent: 'North America', lat: 12.8654, lng: -85.2072, emoji: '🇳🇮',
    description: 'Land of lakes and volcanoes with colonial cities and Pacific surf.',
    cities: [
      { id: 'ni-granada', name: 'Granada', lat: 11.9344, lng: -85.956, description: 'Colorful colonial city on Lake Nicaragua' },
    ]
  },
  {
    id: 'PA', name: 'Panama', continent: 'North America', lat: 8.538, lng: -80.7821, emoji: '🇵🇦',
    description: 'Crossroads of the Americas with the Canal, San Blas islands, and rainforests.',
    cities: [
      { id: 'pa-panama-city', name: 'Panama City', lat: 8.9824, lng: -79.5199, description: 'Skyline city with the Panama Canal' },
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
    ]
  },
  {
    id: 'BO', name: 'Bolivia', continent: 'South America', lat: -16.2902, lng: -63.5887, emoji: '🇧🇴',
    description: 'High-altitude nation with Salar de Uyuni and indigenous cultures.',
    cities: [
      { id: 'bo-la-paz', name: 'La Paz', lat: -16.4897, lng: -68.1193, description: 'World\'s highest administrative capital' },
    ]
  },
  {
    id: 'BR', name: 'Brazil', continent: 'South America', lat: -14.235, lng: -51.9253, emoji: '🇧🇷',
    description: 'Samba nation with Carnival, Amazon rainforest, and Copacabana beaches.',
    cities: [
      { id: 'br-rio', name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729, description: 'Marvelous City — Christ the Redeemer and Carnival' },
    ]
  },
  {
    id: 'CL', name: 'Chile', continent: 'South America', lat: -35.6751, lng: -71.543, emoji: '🇨🇱',
    description: 'Long ribbon of land from the Atacama Desert to Patagonian glaciers.',
    cities: [
      { id: 'cl-santiago', name: 'Santiago', lat: -33.4489, lng: -70.6693, description: 'Capital beneath the snow-capped Andes' },
    ]
  },
  {
    id: 'CO', name: 'Colombia', continent: 'South America', lat: 4.5709, lng: -74.2973, emoji: '🇨🇴',
    description: 'Magical realism in real life — Cartagena, coffee, and Caribbean coast.',
    cities: [
      { id: 'co-bogota', name: 'Bogotá', lat: 4.711, lng: -74.0721, description: 'Capital at 2,600m with gold museum and street art' },
    ]
  },
  {
    id: 'EC', name: 'Ecuador', continent: 'South America', lat: -1.8312, lng: -78.1834, emoji: '🇪🇨',
    description: 'Straddling the equator with the Galápagos, Andes, and Amazon in one small nation.',
    cities: [
      { id: 'ec-quito', name: 'Quito', lat: -0.1807, lng: -78.4678, description: 'UNESCO capital in a valley of volcanoes' },
    ]
  },
  {
    id: 'GY', name: 'Guyana', continent: 'South America', lat: 4.8604, lng: -58.9302, emoji: '🇬🇾',
    description: 'South America\'s only English-speaking country with Kaieteur Falls.',
    cities: [
      { id: 'gy-georgetown', name: 'Georgetown', lat: 6.8013, lng: -58.1551, description: 'Wooden colonial capital on the Atlantic' },
    ]
  },
  {
    id: 'PY', name: 'Paraguay', continent: 'South America', lat: -23.4425, lng: -58.4438, emoji: '🇵🇾',
    description: 'Heart of South America with Guaraní culture and Jesuit missions.',
    cities: [
      { id: 'py-asuncion', name: 'Asunción', lat: -25.2637, lng: -57.5759, description: 'Mother of Cities — one of the oldest capitals' },
    ]
  },
  {
    id: 'PE', name: 'Peru', continent: 'South America', lat: -9.19, lng: -75.0152, emoji: '🇵🇪',
    description: 'Inca empire with Machu Picchu, Nazca Lines, and world-class cuisine.',
    cities: [
      { id: 'pe-cusco', name: 'Cusco', lat: -13.532, lng: -71.9675, description: 'Navel of the world — Inca capital' },
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
    ]
  },
  {
    id: 'VE', name: 'Venezuela', continent: 'South America', lat: 6.4238, lng: -66.5897, emoji: '🇻🇪',
    description: 'Angel Falls, Caribbean islands, and the Orinoco Delta.',
    cities: [
      { id: 've-caracas', name: 'Caracas', lat: 10.4806, lng: -66.9036, description: 'Capital in a valley beneath Ávila mountain' },
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
    ]
  },
  {
    id: 'FJ', name: 'Fiji', continent: 'Oceania', lat: -17.7134, lng: 178.065, emoji: '🇫🇯',
    description: 'Paradise archipelago of 333 islands with crystal-clear waters and warm bula spirit.',
    cities: [
      { id: 'fj-suva', name: 'Suva', lat: -18.1416, lng: 178.4419, description: 'Capital on the island of Viti Levu' },
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
