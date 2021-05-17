var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BNjkwYzY2OTgtYjNiZi00YmNiLTk5YTQtZTQyZjM1YzA1ZmMwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BN2E3NDU1ZTktNzZjNy00MWU3LWI4YmMtMjdjNTIzMDU0MDdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTBlZGY1OTAtN2RjMC00ZThiLWFiZmUtN2VkOGMxNmMyYjQwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BYjc1N2M1YjMtYzBiNi00NGFiLThkN2QtY2EwZGU5MDRkODAzXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]


var filmeEscolhido = prompt("Qual poster você quer ver?")

if (filmeEscolhido === "Moxie"){ document.write("<img src=" + listaFilmes[0] + ">")}

else if (filmeEscolhido === "Chicago"){document.write("<img src=" + listaFilmes[1] + ">")}

else if (filmeEscolhido === "Soul"){document.write("<img src=" + listaFilmes[2] + ">")}

else if (filmeEscolhido === "A Voz Suprema do Blues" || filmeEscolhido === "Ma Rainey's Black Bottom"){document.write("<img src=" + listaFilmes[3] + ">")}

else if (filmeEscolhido === "Parasite" || filmeEscolhido === "Parasita"){document.write("<img src=" + listaFilmes[4] + ">")}

else if (filmeEscolhido === "Bacurau"){document.write("<img src=" + listaFilmes[5] + ">")}

else if (filmeEscolhido === "Joker" || filmeEscolhido === "Coringa"){document.write("<img src=" + listaFilmes[6] + ">")}

else {alert("Filme indisponível na base de dados.")
     for (var i = 0; i < listaFilmes.length; i++)
  document.write("<img src=" + listaFilmes[i] + ">" )}
            
 



// para perguntar



  //for (var i = 0; i < filmes.length ; i++){ console.log(filmes[i])}


//colchete = junta as informações de 