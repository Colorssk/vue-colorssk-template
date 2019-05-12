
'use strict'
import mongoose from './db'

const jobSchema = new mongoose.Schema({
  job_name: String
})

export default mongoose.model('job', jobSchema)
