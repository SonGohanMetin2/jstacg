/* Metin2 weapon data
 * @author Son Gohan
 * @license GNU GPL v3
 */
 
if(!tacgGlobals)
	var tacgGlobals = {};
	
tacgGlobals.weapons = {
	'Glaive': {
		level: 1,
		atkmin: [14, 22, 30, 38, 46, 54, 62, 70, 78, 86],
		atkmax: [22, 30, 38, 46, 54, 62, 70, 78, 86, 86],
		type: 'twohanded'
	},
	'Lancia': {
		level: 5,
		atkmin: [23, 31, 39, 47, 55, 63, 71, 79, 87, 95],
		atkmax: [33, 41, 49, 57, 65, 73, 81, 89, 97, 95],
		type: 'twohanded'
	},
	'Lama Decapitazione': {
		level: 10,
		atkmin: [24, 32, 40, 48, 56, 64, 72, 80, 88, 96],
		atkmax: [42, 50, 58, 66, 74, 82, 90, 98, 106, 96],
		type: 'twohanded'
	},
	'Lancia del Ragno': {
		level: 15,
		atkmin: [30, 38, 46, 54, 62, 70, 78, 86, 94, 102],
		atkmax: [44, 52, 60, 68, 76, 84, 92, 100, 108, 102],
		type: 'twohanded'
	},
	'Guisarma': {
		level: 20,
		atkmin: [34, 42, 50, 58, 66, 74, 82, 90, 98, 106],
		atkmax: [52, 60, 68, 76, 84, 92, 100, 108, 116, 106],
		type: 'twohanded'
	},
	'Falce da Guerra': {
		level: 25,
		atkmin: [52, 58, 64, 70, 76, 84, 93, 103, 114, 126],
		atkmax: [86, 92, 98, 104, 110, 118, 127, 137, 148, 126],
		type: 'twohanded'
	},
	'Lama di Ferro Rosso': {
		level: 30,
		atkmin: [72, 78, 83, 89, 94, 102, 110, 120, 130, 142],
		atkmax: [109, 115, 120, 126, 131, 139, 147, 157, 167, 142],
		type: 'twohanded'
	},
	'Forca da Battaglia': {
		level: 32,
		atkmin: [58, 64, 70, 76, 82, 90, 99, 109, 120, 132],
		atkmax: [88, 94, 100, 106, 112, 120, 129, 139, 150, 132],
		type: 'twohanded'
	},
	'Alabarda': {
		level: 36,
		atkmin: [60, 66, 72, 78, 84, 92, 101, 111, 122, 134],
		atkmax: [96, 102, 108, 114, 120, 128, 137, 147, 158, 134],
		type: 'twohanded'
	},
	'Ascia Gigante': {
		level: 40,
		atkmin: [69, 75, 81, 87, 93, 101, 110, 120, 131, 143],
		atkmax: [103, 109, 115, 121, 127, 135, 144, 154, 165, 143],
		type: 'twohanded'
	},
	'Picco Glaciale': {
		level: 45,
		atkmin: [84, 89, 94, 99, 104, 111, 119, 128, 138, 149],
		atkmax: [122, 127, 132, 137, 142, 149, 157, 166, 176, 149],
		type: 'twohanded'
	},
	'Spada dei Dodici Spiriti': {
		level: 50,
		atkmin: [85, 90, 95, 100, 105, 112, 120, 129, 139, 150],
		atkmax: [139, 144, 149, 154, 159, 166, 174, 183, 193, 150],
		type: 'twohanded'
	},
	'Lama della Salvezza': {
		level: 55,
		atkmin: [86, 91, 96, 101, 106, 113, 121, 130, 140, 151],
		atkmax: [154, 159, 164, 169, 174, 181, 189, 198, 208, 151],
		type: 'twohanded'
	},
	'Uccidi Leoni': {
		level: 60,
		atkmin: [102, 107, 112, 117, 122, 129, 137, 146, 156, 167],
		atkmax: [156, 161, 166, 171, 176, 183, 191, 200, 210, 167],
		type: 'twohanded'
	},
	'Lama Elettromagnetica': {
		level: 65,
		atkmin: [126, 132, 139, 174, 156, 166, 177, 189, 202, 216],
		atkmax: [194, 200, 207, 242, 224, 234, 245, 257, 270, 216],
		type: 'twohanded'
	},
	'Partigiano': {
		level: 65,
		atkmin: [136, 144, 153, 163, 174, 186, 199, 213, 238, 273],
		atkmax: [184, 192, 201, 211, 222, 234, 247, 261, 286, 273],
		type: 'twohanded'
	},
	'Lama Mezzuomo': {
		level: 70,
		atkmin: [126, 134, 143, 153, 164, 176, 189, 203, 228, 263],
		atkmax: [194, 202, 211, 221, 232, 244, 257, 271, 296, 263],
		type: 'twohanded'
	},
	'Spada del Rancore': {
		level: 75,
		atkmin: [136, 142, 149, 157, 166, 176, 187, 199, 212, 226],
		atkmax: [184, 190, 197, 205, 214, 224, 235, 247, 260, 226],
		type: 'twohanded'
	},
	'Lama Solare': {
		level: 87-105,
		atkmin: [203, 237, 240, 246, 254, 267, 285, 313, 335, 417],
		atkmax: [284, 318, 321, 327, 335, 348, 366, 394, 416, 417],
		type: 'twohanded'
	},
	'Spada': {
		level: 1,
		atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
		atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 76],
		type: 'sword'
	},
	'Spada Lunga': {
		level: 5,
		atkmin: [15, 22, 29, 36, 43, 50, 57, 64, 71, 78],
		atkmax: [19, 26, 33, 40, 47, 54, 61, 68, 75, 78],
		type: 'sword'
	},
	'Spada della Luna Crescente': {
		level: 10,
		atkmin: [20, 27, 34, 41, 48, 55, 62, 69, 76, 83],
		atkmax: [24, 31, 38, 45, 52, 59, 66, 73, 80, 83],
		type: 'sword'
	},
	'Spada di Bambù': {
		level: 15,
		atkmin: [22, 29, 36, 43, 50, 57, 64, 71, 78, 85],
		atkmax: [26, 33, 40, 47, 54, 61, 68, 75, 82, 85],
		type: 'sword'
	},
	'Spada Larga': {
		level: 20,
		atkmin: [25, 32, 39, 46, 53, 60, 67, 74, 81, 88],
		atkmax: [35, 42, 49, 56, 63, 70, 77, 84, 91, 88],
		type: 'sword'
	},
	'Spada d\'Argento': {
		level: 25,
		atkmin: [36, 42, 48, 54, 60, 68, 76, 97, 98, 109],
		atkmax: [46, 52, 58, 64, 70, 78, 86, 107, 108, 109],
		type: 'sword'
	},
	'Spada della Luna Piena': {
		level: 30,
		atkmin: [57, 63, 68, 74, 79, 87, 95, 105, 115, 127],
		atkmax: [73, 79, 84, 90, 95, 103, 111, 121, 131, 127],
		type: 'sword'
	},
	'Spada dell\'Orchidea': {
		level: 32,
		atkmin: [38, 44, 50, 56, 62, 70, 79, 89, 100, 112],
		atkmax: [52, 58, 64, 70, 76, 84, 93, 103, 114, 112],
		type: 'sword'
	},
	'Spada Bastarda': {
		level: 36,
		atkmin: [48, 54, 60, 66, 72, 80, 89, 99, 110, 122],
		atkmax: [58, 64, 70, 76, 82, 90, 99, 109, 120, 122],
		type: 'sword'
	},
	'Spada Barbara': {
		level: 40,
		atkmin: [52, 58, 64, 70, 76, 84, 93, 103, 114, 126],
		atkmax: [68, 74, 80, 86, 92, 100, 109, 119, 130, 126],
		type: 'sword'
	},
	'Spada Insanguinata': {
		level: 45,
		atkmin: [65, 70, 75, 80, 85, 92, 100, 109, 119, 130],
		atkmax: [87, 92, 97, 102, 107, 114, 122, 131, 141, 130],
		type: 'sword'
	},
	'Spada Grande': {
		level: 50,
		atkmin: [69, 74, 79, 84, 89, 96, 104, 113, 123, 134],
		atkmax: [91, 96, 101, 106, 111, 118, 126, 135, 145, 134],
		type: 'sword'
	},
	'Spada del Mago': {
		level: 55,
		atkmin: [74, 79, 84, 89, 94, 101, 109, 118, 128, 139],
		atkmax: [100, 105, 110, 115, 120, 26, 135, 144, 154, 139],
		type: 'sword'
	},
	'Spada della Mezza Luna': {
		level: 60,
		atkmin: [72, 77, 82, 87, 82, 99, 107, 116, 126, 137],
		atkmax: [108, 113, 118, 123, 118, 135, 143, 152, 162, 137],
		type: 'sword'
	},
	'Spada di Ninfa': {
		level: 65,
		atkmin: [102, 108, 115, 123, 132, 142, 153, 165, 178, 192],
		atkmax: [138, 144, 151, 159, 168, 178, 189, 201, 214, 192],
		type: 'sword'
	},
	'Spada da Battaglia': {
		level: 65,
		atkmin: [100, 108, 117, 127, 138, 150, 163, 177, 202, 237],
		atkmax: [140, 148, 157, 167, 178, 190, 203, 217, 242, 237],
		type: 'sword'
	},
	'Spada Pungolo': {
		level: 70,
		atkmin: [102, 108, 115, 123, 132, 142, 153, 165, 178, 192],
		atkmax: [138, 144, 151, 159, 168, 178, 189, 201, 214, 192],
		type: 'sword'
	},
	'Spada Velenosa': {
		level: 75,
		atkmin: [100, 108, 117, 127, 138, 150, 163, 177, 202, 237],
		atkmax: [140, 148, 157, 167, 178, 190, 203, 217, 242, 237],
		type: 'sword'
	},
	'Spada di Tritone': {
		level: 80-90,
		atkmin: [237, 238, 240, 244, 249, 255, 262, 270, 280, 290],
		atkmax: [277, 278, 280, 284, 289, 295, 301, 308, 316, 290],
		type: 'sword'
	},
	'Spada Runica': {
		level: 87-105,
		atkmin: [153, 163, 167, 175, 186, 203, 227, 267, 320, 403],
		atkmax: [207, 217, 221, 229, 240, 257, 281, 321, 374, 403],
		type: 'sword'
	},
	'Spada dell\'Esorcismo': {
		level: 65,
		atkmin: [98, 104, 111, 119, 128, 138, 149, 161, 174, 188],
		atkmax: [142, 148, 155, 163, 172, 182, 193, 205, 218, 188],
		type: 'sura-sword'
	},
	'Spada Zanna di Spirito': {
		level: 65,
		atkmin: [77, 82, 87, 96, 105, 113, 119, 123, 131, 142],
		atkmax: [139, 144, 149, 158, 167, 175, 181, 185, 193, 142],
		type: 'sura-sword'
	},
	'Lama del Demone': {
		level: 70,
		atkmin: [77, 80, 83, 90, 97, 103, 107, 109, 105, 95],
		atkmax: [139, 142, 145, 152, 159, 165, 169, 171, 167, 95],
		type: 'sura-sword'
	},
	'Spada del Leone': {
		level: 75,
		atkmin: [90, 96, 103, 111, 120, 130, 141, 153, 166, 180],
		atkmax: [110, 116, 123, 131, 140, 150, 161, 173, 186, 180],
		type: 'sura-sword'
	},
	'Lama Tagliente': {
		level: 80-90,
		atkmin: [192, 194, 197, 201, 206, 212, 219, 227, 236, 248],
		atkmax: [214, 216, 219, 223, 228, 234, 241, 249, 258, 248],
		type: 'sura-sword'
	},
	'Spada Santa': {
		level: 80-90,
		atkmin: [145, 147, 150, 154, 159, 165, 173, 183, 195, 210],
		atkmax: [210, 212, 214, 217, 220, 224, 228, 234, 241, 210],
		type: 'sura-sword'
	},
	'Lama Dente di Drago': {
		level: 87-105,
		atkmin: [116, 126, 130, 138, 147, 166, 190, 227, 283, 366],
		atkmax: [164, 174, 178, 186, 195, 214, 238, 275, 331, 366],
		type: 'sura-sword'
	},
	'Arco': {
		level: 1,
		atkmin: [7, 15, 23, 31, 39, 47, 55, 63, 69, 79],
		atkmax: [29, 37, 45, 53, 61, 69, 77, 85, 91, 79],
		type: 'bow'
	},
	'Arco Lungo': {
		level: 5,
		atkmin: [15, 23, 31, 39, 47, 55, 63, 71, 79, 87],
		atkmax: [51, 59, 67, 75, 83, 91, 99, 107, 115, 87],
		type: 'bow'
	},
	'Arco Composito': {
		level: 10,
		atkmin: [19, 27, 35, 43, 51, 59, 67, 75, 83, 91],
		atkmax: [57, 65, 73, 81, 89, 97, 105, 113, 121, 91],
		type: 'bow'
	},
	'Arco da Battaglia': {
		level: 15,
		atkmin: [26, 34, 42, 50, 58, 66, 74, 82, 90, 98],
		atkmax: [70, 78, 86, 94, 102, 110, 118, 126, 134, 98],
		type: 'bow'
	},
	'Arco Lungo Cavalleresco': {
		level: 20,
		atkmin: [40, 48, 56, 64, 72, 80, 88, 96, 104, 112],
		atkmax: [88, 96, 104, 112, 120, 128, 136, 144, 152, 112],
		type: 'bow'
	},
	'Arco da Battaglia Cavalleresco': {
		level: 25,
		atkmin: [50, 57, 64, 71, 78, 87, 97, 108, 120, 133],
		atkmax: [118, 125, 132, 139, 146, 155, 165, 176, 188, 133],
		type: 'bow'
	},
	'Arco di Corno': {
		level: 30,
		atkmin: [85, 92, 98, 105, 111, 120, 129, 140, 151, 164],
		atkmax: [178, 185, 191, 198, 204, 213, 222, 233, 244, 164],
		type: 'bow'
	},
	'Arco Decorato in Rame': {
		level: 32,
		atkmin: [62, 69, 76, 83, 90, 97, 111, 122, 134, 147],
		atkmax: [128, 135, 142, 149, 156, 163, 177, 188, 200, 147],
		type: 'bow'
	},
	'Arco della Distruzione': {
		level: 36,
		atkmin: [64, 71, 78, 85, 92, 101, 111, 122, 134, 147],
		atkmax: [150, 157, 164, 171, 178, 187, 197, 208, 220, 147],
		type: 'bow'
	},
	'Arco degli Occhi Rossi': {
		level: 40,
		atkmin: [65, 72, 79, 86, 93, 102, 112, 123, 135, 148],
		atkmax: [194, 201, 208, 215, 222, 231, 241, 252, 264, 148],
		type: 'bow'
	},
	'Arco Foglia di Spina': {
		level: 45,
		atkmin: [106, 112, 118, 124, 130, 138, 147, 157, 168, 180],
		atkmax: [206, 212, 218, 224, 230, 238, 247, 257, 268, 180],
		type: 'bow'
	},
	'Arco Corno di Toro': {
		level: 50,
		atkmin: [116, 122, 128, 134, 140, 148, 157, 167, 178, 190],
		atkmax: [216, 222, 228, 234, 240, 248, 257, 267, 278, 190],
		type: 'bow'
	},
	'Arco dell\'Unicorno': {
		level: 55,
		atkmin: [139, 145, 151, 157, 163, 171, 180, 190, 201, 213],
		atkmax: [213, 219, 225, 231, 237, 245, 254, 264, 275, 213],
		type: 'bow'
	},
	'Arco delle Ali Giganti': {
		level: 60,
		atkmin: [135, 141, 147, 153, 159, 167, 176, 186, 197, 209],
		atkmax: [251, 257, 263, 269, 275, 283, 292, 302, 313, 209],
		type: 'bow'
	},
	'Arco Albicocca': {
		level: 65,
		atkmin: [190, 196, 203, 211, 220, 230, 241, 253, 266, 280],
		atkmax: [290, 296, 303, 311, 320, 330, 341, 353, 366, 280],
		type: 'bow'
	},
	'Arco Drago Giallo Gigante': {
		level: 65,
		atkmin: [187, 195, 204, 214, 225, 237, 250, 264, 289, 324],
		atkmax: [293, 301, 310, 320, 331, 343, 356, 370, 395, 324],
		type: 'bow'
	},
	'Arco Drago Blu': {
		level: 70,
		atkmin: [187, 193, 200, 208, 217, 227, 238, 250, 263, 277],
		atkmax: [293, 299, 306, 314, 323, 333, 344, 356, 369, 277],
		type: 'bow'
	},
	'Arco d\'Acciaio Corvino': {
		level: 75,
		atkmin: [190, 196, 203, 211, 220, 230, 241, 253, 266, 280],
		atkmax: [290, 296, 303, 311, 320, 330, 341, 353, 366, 280],
		type: 'bow'
	},
	'Arco Diavolo Gigante': {
		level: 80-90,
		atkmin: [325, 330, 336, 343, 351, 360, 370, 381, 393, 410],
		atkmax: [431, 432, 434, 437, 440, 444, 449, 454, 460, 410],
		type: 'bow'
	},
	'Arco della Fenice': {
		level: 87-105,
		atkmin: [237, 247, 251, 259, 270, 287, 311, 348, 404, 487],
		atkmax: [436, 446, 450, 458, 469, 486, 510, 547, 603, 487],
		type: 'bow'
	},
	'Pugnale': {
		level: 1,
		atkmin: [8, 12, 16, 20, 24, 28, 32, 36, 40, 44],
		atkmax: [11, 15, 19, 23, 27, 31, 35, 39, 43, 44],
		type: 'dagger'
	},
	'Amija': {
		level: 5,
		atkmin: [12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
		atkmax: [16, 20, 24, 28, 32, 36, 40, 44, 48, 48],
		type: 'dagger'
	},
	'Pugnale del Cobra': {
		level: 10,
		atkmin: [13, 17, 21, 25, 29, 33, 37, 41, 45, 49],
		atkmax: [15, 19, 23, 27, 31, 35, 39, 43, 47, 49],
		type: 'dagger'
	},
	'Nove Lame': {
		level: 15,
		atkmin: [14, 18, 22, 26, 30, 34, 38, 42, 46, 50],
		atkmax: [18, 22, 26, 30, 34, 38, 42, 46, 50, 50],
		type: 'dagger'
	},
	'Pugnale a Forbice': {
		level: 20,
		atkmin: [15, 19, 23, 27, 31, 35, 39, 43, 47, 51],
		atkmax: [19, 23, 27, 31, 35, 39, 43, 47, 51, 51],
		type: 'dagger'
	},
	'Coltello Corto': {
		level: 25,
		atkmin: [28, 31, 34, 37, 40, 45, 51, 58, 66, 75],
		atkmax: [32, 35, 38, 41, 44, 49, 55, 62, 70, 75],
		type: 'dagger'
	},
	'Pugnale Foglia Nera': {
		level: 30,
		atkmin: [40, 43, 45, 48, 50, 55, 60, 67, 74, 83],
		atkmax: [44, 47, 49, 52, 54, 59, 64, 71, 78, 83],
		type: 'dagger'
	},
	'Coltello Fortunato': {
		level: 32,
		atkmin: [30, 33, 36, 39, 42, 47, 53, 60, 68, 77],
		atkmax: [36, 39, 42, 45, 48, 53, 59, 66, 74, 77],
		type: 'dagger'
	},
	'Coltello Morso Gatto': {
		level: 36,
		atkmin: [33, 36, 39, 42, 45, 50, 55, 63, 71, 80],
		atkmax: [37, 40, 43, 46, 49, 54, 59, 67, 75, 80],
		type: 'dagger'
	},
	'Pugnale Diabolico': {
		level: 40,
		atkmin: [36, 39, 42, 45, 48, 53, 59, 66, 74, 83],
		atkmax: [40, 43, 46, 49, 52, 57, 63, 70, 78, 83],
		type: 'dagger'
	},
	'Pugnale Colpo Diabolico': {
		level: 45,
		atkmin: [47, 49, 51, 53, 55, 59, 64, 70, 77, 85],
		atkmax: [51, 53, 55, 57, 59, 63, 68, 74, 81, 85],
		type: 'dagger'
	},
	'Pugnale Insanguinato': {
		level: 50,
		atkmin: [48, 50, 52, 54, 56, 60, 65, 71, 78, 86],
		atkmax: [56, 58, 60, 62, 64, 68, 73, 79, 86, 86],
		type: 'dagger'
	},
	'Coltello del Costato': {
		level: 55,
		atkmin: [49, 51, 53, 55, 57, 61, 66, 72, 79, 87],
		atkmax: [59, 61, 63, 65, 67, 71, 76, 82, 89, 87],
		type: 'dagger'
	},
	'Chakram': {
		level: 60,
		atkmin: [53, 55, 57, 59, 61, 65, 70, 76, 83, 91],
		atkmax: [65, 67, 69, 71, 73, 77, 82, 88, 95, 91],
		type: 'dagger'
	},
	'Coltello del Fulmine': {
		level: 65,
		atkmin: [74, 80, 87, 95, 104, 114, 125, 137, 150, 164],
		atkmax: [86, 92, 99, 107, 116, 126, 137, 149, 162, 164],
		type: 'dagger'
	},
	'Coltello del Drago': {
		level: 65,
		atkmin: [74, 82, 91, 101, 112, 124, 137, 151, 176, 211],
		atkmax: [86, 94, 103, 113, 124, 136, 149, 163, 188, 211],
		type: 'dagger'
	},
	'Coltello Siamese': {
		level: 70,
		atkmin: [74, 80, 87, 95, 104, 114, 125, 137, 150, 164],
		atkmax: [86, 92, 99, 107, 116, 126, 137, 149, 162, 164],
		type: 'dagger'
	},
	'Chakram Ala di Diavolo': {
		level: 75,
		atkmin: [83, 91, 100, 110, 121, 133, 146, 160, 184, 220],
		atkmax: [92, 100, 109, 119, 130, 142, 155, 169, 193, 220],
		type: 'dagger'
	},
	'Coltello Senz\'Anima': {
		level: 80-90,
		atkmin: [225, 227, 229, 232, 235, 239, 245, 253, 263, 275],
		atkmax: [235, 238, 242, 247, 253, 260, 268, 277, 288, 275],
		type: 'dagger'
	},
	'Lama Cinque Elementi': {
		level: 87-105,
		atkmin: [116, 128, 128, 143, 157, 179, 209, 255, 326, 431],
		atkmax: [136, 148, 148, 163, 177, 199, 229, 275, 346, 431],
		type: 'dagger'
	},
	'Ventaglio': {
		level: 1,
		atkmin: [11, 18, 25, 32, 39, 46, 53, 60, 67, 74],
		atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 74],
		type: 'fan'
	},
	'Ventaglio di Ferro': {
		level: 5,
		atkmin: [11, 18, 25, 32, 39, 46, 53, 60, 67, 74],
		atkmax: [17, 24, 31, 38, 45, 52, 59, 66, 73, 74],
		type: 'fan'
	},
	'Ventaglio Tigre Nera': {
		level: 10,
		atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
		atkmax: [19, 26, 33, 40, 47, 54, 61, 68, 75, 76],
		type: 'fan'
	},
	'Ventaglio della Gru': {
		level: 15,
		atkmin: [17, 24, 31, 38, 45, 52, 59, 66, 73, 80],
		atkmax: [21, 28, 35, 42, 49, 56, 63, 70, 77, 80],
		type: 'fan'
	},
	'Ventaglio del Pavone': {
		level: 20,
		atkmin: [18, 25, 32, 39, 46, 53, 60, 67, 74, 81],
		atkmax: [24, 31, 38, 45, 52, 59, 66, 73, 80, 81],
		type: 'fan'
	},
	'Ventaglio Acquatico': {
		level: 25,
		atkmin: [27, 33, 39, 45, 51, 59, 68, 78, 89, 101],
		atkmax: [41, 47, 53, 59, 65, 73, 82, 92, 103, 101],
		type: 'fan'
	},
	'Ventaglio Vento Autunnale': {
		level: 30,
		atkmin: [43, 49, 54, 60, 65, 73, 81, 91, 101, 113],
		atkmax: [55, 61, 66, 72, 77, 85, 93, 103, 113, 113],
		type: 'fan'
	},
	'Ventalio di Pietra': {
		level: 32,
		atkmin: [30, 36, 42, 51, 57, 62, 71, 81, 92, 104],
		atkmax: [46, 52, 58, 67, 73, 78, 87, 97, 108, 104],
		type: 'fan'
	},
	'Ventaglio Oceanico': {
		level: 36,
		atkmin: [35, 41, 47, 53, 59, 67, 76, 86, 97, 109],
		atkmax: [45, 51, 57, 63, 69, 77, 86, 96, 107, 109],
		type: 'fan'
	},
	'Ventaglio Pungolo': {
		level: 40,
		atkmin: [37, 43, 49, 55, 61, 69, 78, 88, 99, 111],
		atkmax: [53, 59, 65, 71, 77, 85, 94, 104, 115, 111],
		type: 'fan'
	},
	'Ventaglio della Fenice': {
		level: 45,
		atkmin: [50, 55, 60, 65, 70, 77, 85, 94, 104, 115],
		atkmax: [64, 69, 74, 79, 84, 91, 99, 108, 118, 115],
		type: 'fan'
	},
	'Ventaglio Triplo': {
		level: 50,
		atkmin: [49, 54, 59, 64, 69, 76, 84, 93, 103, 114],
		atkmax: [73, 78, 83, 88, 93, 100, 108, 117, 127, 114],
		type: 'fan'
	},
	'Ventaglio Sopracciglia': {
		level: 55,
		atkmin: [52, 57, 62, 67, 72, 79, 87, 96, 106, 117],
		atkmax: [78, 83, 88, 93, 98, 105, 113, 122, 132, 117],
		type: 'fan'
	},
	'Ventaglio Solare': {
		level: 60,
		atkmin: [55, 60, 65, 70, 75, 82, 90, 99, 109, 120],
		atkmax: [83, 88, 93, 98, 103, 110, 118, 127, 137, 120],
		type: 'fan'
	},
	'Ventaglio Salvezza': {
		level: 65,
		atkmin: [69, 75, 82, 90, 99, 109, 120, 132, 145, 159],
		atkmax: [91, 97, 104, 112, 121, 131, 142, 154, 167, 159],
		type: 'fan'
	},
	'Ventaglio Paradisiaco': {
		level: 65,
		atkmin: [64, 72, 81, 91, 102, 114, 127, 141, 166, 201],
		atkmax: [96, 104, 113, 123, 134, 146, 159, 173, 198, 201],
		type: 'fan'
	},
	'Ventaglio dell\'Estasi': {
		level: 70,
		atkmin: [69, 75, 82, 90, 99, 109, 120, 132, 145, 159],
		atkmax: [91, 97, 104, 112, 121, 131, 142, 154, 167, 159],
		type: 'fan'
	},
	'Ventaglio del Demone': {
		level: 80-90,
		atkmin: [165, 168, 172, 177, 183, 190, 198, 206, 215, 225],
		atkmax: [185, 187, 189, 192, 195, 200, 207, 216, 225, 225],
		type: 'fan'
	},
	'Ventaglio del Drago': {
		level: 87-105,
		atkmin: [115, 123, 126, 132, 141, 155, 174, 203, 248, 315],
		atkmax: [173, 181, 184, 190, 199, 213, 232, 261, 306, 315],
		type: 'fan'
	},
	'Campana di Rame': {
		level: 10,
		atkmin: [13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
		atkmax: [15, 22, 29, 36, 43, 50, 57, 64, 71, 76],
		type: 'bell'
	},
	'Campana d\'Argento': {
		level: 15,
		atkmin: [20, 27, 34, 41, 48, 55, 62, 69, 76, 83],
		atkmax: [26, 33, 40, 47, 54, 61, 68, 75, 82, 83],
		type: 'bell'
	},
	'Campana d\'Oro': {
		level: 20,
		atkmin: [25, 32, 39, 46, 53, 60, 67, 74, 81, 88],
		atkmax: [35, 42, 49, 56, 63, 70, 77, 84, 91, 88],
		type: 'bell'
	},
	'Campana Antica': {
		level: 30,
		atkmin: [50, 56, 61, 67, 72, 80, 88, 98, 108, 120],
		atkmax: [70, 76, 81, 87, 92, 100, 108, 118, 128, 120],
		type: 'bell'
	},
	'Campana di Giada': {
		level: 32,
		atkmin: [29, 35, 41, 47, 53, 61, 70, 80, 91, 103],
		atkmax: [39, 45, 51, 57, 63, 71, 80, 90, 101, 103],
		type: 'bell'
	},
	'Campana della Fonte': {
		level: 36,
		atkmin: [41, 47, 53, 59, 65, 73, 82, 92, 103, 115],
		atkmax: [51, 57, 63, 69, 75, 83, 92, 102, 113, 115],
		type: 'bell'
	},
	'Campana Albicocca': {
		level: 40,
		atkmin: [42, 48, 54, 60, 66, 74, 83, 93, 104, 116],
		atkmax: [60, 66, 72, 78, 84, 92, 101, 111, 122, 116],
		type: 'bell'
	},
	'Campana Magica': {
		level: 50,
		atkmin: [59, 64, 69, 74, 79, 86, 94, 103, 113, 124],
		atkmax: [89, 94, 99, 104, 109, 116, 124, 133, 143, 124],
		type: 'bell'
	},
	'Campana Scarabeo d\'Oro': {
		level: 55,
		atkmin: [68, 73, 78, 83, 88, 95, 103, 112, 118, 139],
		atkmax: [90, 95, 100, 105, 110, 117, 125, 134, 144, 139],
		type: 'bell'
	},
	'Campana Scarabeo d\'Acciaio': {
		level: 60,
		atkmin: [76, 81, 86, 91, 96, 103, 111, 120, 130, 141],
		atkmax: [104, 109, 114, 119, 124, 131, 139, 148, 158, 141],
		type: 'bell'
	},
	'Campana Cielo e Terra': {
		level: 65,
		atkmin: [72, 78, 85, 93, 102, 112, 123, 135, 148, 162],
		atkmax: [108, 114, 121, 129, 138, 148, 159, 171, 184, 162],
		type: 'bell'
	},
	'Campana Uccello Tonante': {
		level: 65,
		atkmin: [91, 99, 108, 118, 129, 141, 154, 168, 193, 228],
		atkmax: [129, 137, 146, 156, 167, 179, 192, 206, 231, 228],
		type: 'bell'
	},
	'Campana Orchidea': {
		level: 75,
		atkmin: [72, 80, 89, 99, 110, 122, 135, 149, 172, 209],
		atkmax: [108, 116, 125, 135, 146, 158, 171, 185, 208, 209],
		type: 'bell'
	},
	'Campana Fauci di Drago': {
		level: 80-90,
		atkmin: [170, 172, 176, 184, 194, 206, 220, 235, 254, 275],
		atkmax: [200, 202, 206, 213, 223, 235, 249, 266, 286, 275],
		type: 'bell'
	},
	'Campana Spirito Drago': {
		level: 87-105,
		atkmin: [166, 175, 178, 185, 195, 211, 232, 265, 316, 391],
		atkmax: [194, 203, 206, 213, 223, 239, 260, 293, 344, 391],
		type: 'bell'
	}
}
