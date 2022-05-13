$('#submit').on('click', function(evento) {
    evento.preventDefault()
    
  
    var nome = $("#pk-name").val()
    var name = nome.toLowerCase()
    var url = `https://pokeapi.co/api/v2/pokemon/${name}`
  
    $.ajax({
      url: url,
      type: "GET",
      dataType: 'json',
  
      success: function(result) {
        console.log(result)
  
        $('#name_pokemon').html(`Oi eu sou o ${result.name} !`)
        $('#img_pokemon').html(`<img style= "width: 200px" src="${result.sprites.front_default}"/>`)
        $('#hability_pokemon').html(`Habilidade: ${result.abilities[1].ability.name}`)
        $('#type_pokemon').html(`Movimento: ${result.moves[0].move.name}`)
        
      },
  
      error: function() {
        alert("Pokemon não encontrado")
      }
      
    })
  })