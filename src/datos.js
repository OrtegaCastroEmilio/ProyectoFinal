db.grupos.drop()
db.grupos.insertMany([
{grupo: "Led Zeppelin",//*grupo del grupo*//
    integrantes: ["Robert Plant","Jimi Page","John Bonham","John Paul Jones"],//integrantes del grupo//
    fechainicio:new Date("12-05-1968"),//fecha aprox de creación del grupo//
    añosactivo: 12, //periodo de actividad del grupo//
    "activo": false,//Si continua o no activo el grupo
    pais:"Reino Unido",//Procedencia
    genero:["Hard Rock","Blues"],//genero o generos musicales al que pertenece
    cancion:{nombre:"Stairway To Heaven", duracion:8.02},//nombre y duración de la cancion más famosa del grupo
},
{grupo:"Metallica",integrantes: ["James Hetfield","Lars Ulrich","Kirk Hammett","Cliff Burton"],fechainicio:new Date("01-01-1981"),añosactivo:40,activo: true,pais:"EEUU", genero:["Heavy Metal","Trash Metal","Metal"],cancion:{nombre:"Enter Sandman",duracion:5.31}},
{grupo:"Rage Against the Machine", integrantes:["Zack de la Rocha","Tom Morello","Tim Commerford","Brad Wilk"],fechainicio:new Date("01-01-1991"),añosactivo:15,activo:true,pais:"EEUU",genero:["Metal","rap Metal","Metal Alternativo"],cancion:{nombre:"Killing in the name",duracion:5.13}},
{grupo:"Extremoduro",integrantes:["Roberto Iniesta","Iñaki Anton","Jose Ignacio Cantera","Miguel Colino"],fechainicio:new Date("11-07-1987"),añosactivo:32,activo:false,pais:"espana",genero:["Hard Rock"],cancion:{nombre:"La vereda de la puerta de atras",duracion:4.03}},
{grupo:"System of a Down",integrantes:["Serj Tankian","Daron Malakjan","Shavo Odadjian","John Dolmaya"],fechainicio:new Date("04-27-1994"),añosactivo:12,activo:false,pais:"EEUU",genero:["Metal","Heavy Metal","Metal Alternativo"],cancion:{nombre:"Chop Suey",duracion:3.30}},
{grupo:"Joy Division",integrantes:["Ian Curtis","Bernard Sumner","Peter Hook","Stephen Morris"],fechainicio:new Date("02-22-1976"),añosactivo:4,activo:false,pais:"Reino Unido",genero:["Post-Punk"],cancion:{nombre:"Love will tear us apart",duracion:3.26}},
{grupo:"Nirvana",integrantes:["Kurt Cobain","Dave Grohl","Krist Novoselic"],fechainicio:new Date("01-01-1987"),añosactivo:7,activo:false,pais:"EEUU",genero:["Grunge"],cancion:{nombre:"Smell Like Teen Spirit",duracion:5.00}},
{grupo:"Crystal Castles",integrantes:["Alice Glass","Ethan Kath"],fechainicio:new Date("01-01-2004"),añosactivo:17,activo:true,pais:"Canada,",genero:["Electronica"],cancion:{nombre:"Crimewave",duracion:4.18}},
{grupo:"The Cure",integrantes:["Robert Smith","Roger O'Donnell","Jason Cooper","Reeves Gabrels"],fechainicio:new Date("01-01-1976"),añosactivo:45,activo:true,pais:"Reino Unido",genero:["Post-Punk","Rock alternativo"],cancion:{nombre:"Boys Don't Cry",duracion:2.35}},
{grupo:"Violadores del Verso",integrantes:["Kase.O","Sho-Hai","Lirico","R de Rumba"],fechainicio:new Date("01-01-1995"),añosactivo:26,activo:true,pais:"espana",genero:["rap"],cancion:{nombre:"Cantando",duracion:5.32}},
{grupo:"Black Sabbath",integrantes:["Ozzy Osbourne","Tony Iommi","Geezer Butler","Bill Ward"],fechainicio:new Date("01-01-1968"),añosactivo:44,activo:false,pais:"Reino Unido",genero:["Heavy Metal","Hard Rock"],cancion:{nombre:"Paranoid",duracion:2.48}},
{grupo:"Death Grips",integrantes:["MCRIDE","Zach Hill","Andy Morin"],fechainicio:new Date("31-12-2010"),añosactivo:11,activo:true,pais:"EEUU",genero:["Hip-Hop","Industrial","rap"],cancion:{nombre:"Get Got",duracion:2.51}},
{grupo:"Daft Punk",integrantes:["Guy-Manuel","Thomas Bangalter"],fechainicio:new Date ("10-01-1993"),añosactivo:28,activo:false,pais:"Francia",genero:["Electronica"],cancion:{nombre:"One more time",duracion:5.20}},
{grupo:"Rammstein",integrantes:["Till Lindemann","Richard Z. Kruspe","Christoph Schneider","Oliver Riedel","Paul H. Landers"],fechainicio:new Date("02-15-1994"),añosactivo:27,pais:"Alemania",genero:["Heavy Metal","Industrial"],cancion:{nombre:"Du Hast",duracion:3.54}},
{grupo:"Foo Fighters",integrantes:["Dave Grohl","Pat Smear","Nate Mendel","Taylor Hawkins","Chris Shiflett"],fechainicio:new Date("01-01-1994"),añosactivo:27,activo:true,pais:"EEUU",genero:["Hard Rock","Rock alternativo"],cancion:{nombre:"Everlong",duracion:4.10}},
{grupo:"Pixies",integrantes:["Black Francis","David Lovering","Joey Santiago","Kim Deal"],fechainicio:new Date("01-01-1986"),añosactivo:35,activo:true,pais:"EEUU",genero:["Rock Álternativo"],cancion:{nombre:"Where Is my Mind",duracion:3.54}},
{grupo:"Red Hot Chili Peppers",integrantes:["Anthony Kiedis","Flea","Chad Smith","John Frusciante"],fechainicio: new Date("01-01-1983"),añosactivo:38,activo:true,pais:"EEUU",genero:["Rock Alternatibo"],cancion:{nombre:"Californication",duracion:5.29}},
{grupo:"Gorillaz",integrantes:["Damon Albarn","Jamie Hewlett","Remi Kabaka Jr."],fechainicio:new Date("01-01-1998"),añosactivo:28,activo:true,pais:"Reino Unido",genero:["Electronica","Rock Alternativo"],cancion:{nombre:"Feel Good INC",duracion:3.42}},
{grupo:"The Smiths",integrantes:["Morrissey","Johnny Marr","Mike Joyce","Andy Rourke","Craig Gannon"],fechainicio: new Date("01-01-1982"),añosactivo:5,activo:false,pais:"Reino Unido",genero:["Rock Alternativo","Post-Punk"],cancion:{nombre:"This Charming Man",duracion:2.42}},
{grupo:"SFDK",integrantes:["Zatu","Accion Sanchez"],fechainicio: new Date("01-01-1993"),añosactivo:28,activo:true,pais:"espana",genero:["rap","Hip-Hop"],cancion:{nombre:"No eres Feo ni Na",duracion:4.49}},
{grupo:"Yung Beef",fechainicio: new Date("01-01-2010"),añosactivo:11,activo:true,pais:"espana",genero:["Trap","rap"],cancion:{nombre:"Metallica",duracion:3.48}},
{grupo:"Joji",fechainicio: new Date("01-01-2017"),añosactivo:6,activo:true,pais:"EEUU",genero:["rap","Hip-Hop"],cancion:{nombre:"Pretty Boy",duracion:2.36}},
{grupo:"Camaron de la Isla",fechainicio: new Date("01-01-1958"),añosactivo:34,activo:false,pais:"espana",genero:["Flamenco"],cancion:{nombre:"La Leyenda Del Tiempo",duracion:3.40}},
{grupo:"David Bowie",fechainicio: new Date("01-01-1962"),añosactivo:54,activo:false,pais:"EEUU",genero:["Rock"],cancion:{nombre:"Heroes",duracion:6.11}},
{grupo:"The Beatles",integrantes:["John Lennon","Paul McCartney","George Harrison","Ringo Starr"],fechainicio:new Date("01-01-1960"),añosactivo:10,activo:false,pais:"Reino Unido",genero:["Rock","Pop"],cancion:{nombre:"Here Comes the Sun",duracion:3.05}},
{grupo:"Nujabes",fechainicio:new Date ("01-02-1996"),añosactivo:14,activo:false,pais:"Japon",genero:["Hip`-Hop"],cancion:{nombre:"battlecry",duracion:3.21}},
{grupo:"The Pillows",integrantes:["Sawao Yamanaka","Yoshiaki Manabe","Shinichirou Sato"],fechainicio: new Date("01-03-1989"),añosactivo:32,activo:true,pais:"Japon",genero:["Rock","Rock alternativo"],cancion:{nombre:"Last Dinosaur",duracion:3.55}},
])

