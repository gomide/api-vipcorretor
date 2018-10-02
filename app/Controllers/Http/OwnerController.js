'use strict'
const Owner = use('App/Models/Owner')
/**
 * Resourceful controller for interacting with owners
 */
class OwnerController {
  /**
   * Show a list of all owners.
   * GET owners
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new owner.
   * GET owners/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new owner.
   * POST owners
   */
  async store ({ request, response }) {

    const data = request.only([
      'nome',
      'cpfCnpj',
      'telefone',
      'tipoPessoa'


    ])

    const owner = await Owner.create({...data })
  }

  /**
   * Display a single owner.
   * GET owners/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing owner.
   * GET owners/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update owner details.
   * PUT or PATCH owners/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a owner with id.
   * DELETE owners/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OwnerController
