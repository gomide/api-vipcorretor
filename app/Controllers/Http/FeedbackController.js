'use strict'

/**
 * Resourceful controller for interacting with feedbacks
 */
class FeedbackController {
  /**
   * Show a list of all feedbacks.
   * GET feedbacks
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new feedback.
   * GET feedbacks/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new feedback.
   * POST feedbacks
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single feedback.
   * GET feedbacks/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing feedback.
   * GET feedbacks/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update feedback details.
   * PUT or PATCH feedbacks/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a feedback with id.
   * DELETE feedbacks/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FeedbackController
