'use strict'
const Property = use('App/Models/Property')
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
      'regiao'

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
  return property
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
