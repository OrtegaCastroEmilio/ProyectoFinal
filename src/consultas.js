//En Este archivo se encuentran todas las consultas


//Se quiere saber todos los grupos que se consideren Rock alternativo independientemente de como esté escrito

db.grupos.find({
    $and:
    [
        {
        $or:
        [
            {genero: {$regex:/Rock alternati.o/,$options:"s"}},
            {genero: {$regex: /Rock Alternativo/i}},
        ]
        }
]
}).pretty()

//Se saber cuales son los solistas que no sean de España y sigan activos
db.grupos.find({
    $and:
    [
        {pais:{$ne:"espana"}},
        {activo:{$eq:true}},
        {
            integrantes:{$exists: false}
        }
    ]
}).pretty()

//Un amigo quiere meter musica en su movil, pero solo acepta canciones que duren menos de 5 minutos aparte se que solo se gusta el rap español

db.grupos.find({
        $and:
        [
            {cancion:{$elemMatch:{nombre:/.*/, duracion:{$lt:5.00}}}},
            {genero:{$in:["rap"]}},
            {pais:{$eq:"espana"}},
        ]
}).pretty()
