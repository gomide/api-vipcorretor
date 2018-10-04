'use strict'
const Property = use('App/Models/Property')
const Database = use('Database')
/**
 * Resourceful controller for interacting with properties
 */
class PropertyController {
  /**
   * Show a list of all properties.
   * GET properties
   */
  async index () {
    const properties = Property.all()   
    return properties
  }

  /**
   * Render a form to be used for creating a new property.
   * GET properties/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new property.
   * POST properties
   */
  async store ({ auth, request, response }) {
   

    const data = request.only([
     
      'owner_id',
      'descricao',
      'departamento',
      'id_proprietario',
      'id_captador',
      'numeroAndar',
      'preco',
      'numeroElevador',
      'dataConstrucao',
      'areaPrivativa',
      'areaTotal',
      'valorAgio',
      'saldoDevedor',
      'valorCondominio',
      'permuta',
      'dataCadastro',
      'codigoAnuncio',
      'endereco',
      'cep',
      'geolocalizacao',
      'situacao',
      'empresa',
      'tipo',
      'bairro',
      'regiao',
      'cidade',
      'mobilia',
      'cobertura',
      'exclusividade',
      'dormitorio',
      'garagem',
      'banheiro',
      'suite',
      'morador'

    ])

    const property = await Property.create({...data, user_id: 1 })
  }

  /**
   * Display a single property.
   * GET properties/:id
   */
  async show ({ params }) {
    
    const property = await Property.findOrFail(params.id)
    await property.load('images') 
    await property.load('owners') 
    await property.load('users')
    await property.load('feedbacks')
  return property
  }

  async teste ({ request }) {   
    const data = request.only(
      ['precoMin', 
      'precoMax', 
      'areaMin', 
      'areaMax', 
      'departamento',
      'qtdQuartosMin',
      'qtdQuartosMax',
      'tipo'
    ])
    const precoMin = data.precoMin
    const precoMax = data.precoMax
    const areaMax = data.areaMax
    const areaMin = data.areaMin
    const departamento = data.departamento
    const qtdQuartosMin = data.qtdQuartosMin
    const qtdQuartosMax = data.qtdQuartosMax
    const tipo = data.tipo
    const query = Database.table('properties')
                  .select('id', 
                  'descricao' , 
                  'preco', 
                  'areaTotal', 
                  'codigoAnuncio', 
                  'bairro', 
                  'endereco', 
                  'tipo', 
                  'dormitorio',
                  'exclusividade'
                )
                  .whereBetween('preco', [precoMin, precoMax])
                  .whereBetween('areaTotal', [areaMin, areaMax])
                  .whereBetween('dormitorio', [qtdQuartosMin, qtdQuartosMax])
                  .where('departamento', departamento)
                  .where('tipo', tipo)
                  
                  
                    
          
    
   
    return query
  }


  async mostrar ({ params }) {
    
    const property = await Property.findOrFail(params.id)
    await property.load('images') 
    return property
  }

  /**
   * Render a form to update an existing property.
   * GET properties/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update property details.
   * PUT or PATCH properties/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a property with id.
   * DELETE properties/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PropertyController
