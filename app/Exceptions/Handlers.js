'use strict'

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler {
    /**
     * Handle exception thrown during the HTTP lifecycle
     *
     * @method handle
     *
     * @param  {Object} error
     * @param  {Object} options.request
     * @param  {Object} options.response
     *
     * @return {void}
     */
    async handle (error, { request, response, view }) {
        // response.status(error.status).send(error.message)
        console.log(error.message)
        // if (error.name === 'InvalidSessionException') {
        //     // response.route('admin.login')
        //     response.redirect('/admin/login')
        //     // response.status(403)
        //     // return view.render('admin.login')
        // }
        // response.status(error.status).send(error.message)
    }

    /**
     * Report exception for logging or debugging.
     *
     * @method report
     *
     * @param  {Object} error
     * @param  {Object} options.request
     *
     * @return {void}
     */
    async report (error, { request }) {
        console.log('report.')
    }
}

module.exports = ExceptionHandler
