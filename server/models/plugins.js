
'use strict'
import isodate from 'isodate'

const lastModified = (schema, option) => {
  schema.add({lastMod: Date})
  schema.pre('save', function (next) {
    this.lastMod = isodate(new Date())
    next()
  })
}

export default lastModified
