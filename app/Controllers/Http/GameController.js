'use strict'

class GameController {
    index(context) {
        
    }
    gaming({request}) {
        const number = +request.input('number')
    
        if (!number) {
            return 'Please specify a number by passing ?number=<num> to the url'
        }

        const randomNumber = ~~(Math.random() * 20) + 1
        return  'From GameController. ' + (randomNumber === number
                ? 'Matched'
                : `Match failed. The actual number is ${randomNumber}`)
    }
    gaming2({request, view}) {
        const number = +request.input('number')

        const randomNumber = ~~(Math.random() * 20) + 1
        return view.render('game', {
            number,
            randomNumber
        })
    }
}

module.exports = GameController
