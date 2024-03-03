'use server'
import { createEntry } from '../../lib/createEntry'

export async function createFormEntry (prevState, formData) {
    //send the data via api
    const fields = {
      "first_name": {
        "en-US": formData.get('first_name')
      },
      "last_name": {
        "en-US": formData.get('last_name')
      },
      "email_adress": {
        "en-US": formData.get('email')
      },
      "subject": {
        "en-US": formData.get('subject')
      },
      "description": {
        "en-US": formData.get('description')
      }
    }
    
    if(fields) {
      await createEntry(fields, "contact_form")
    }

    return {
      message: 'Test message',
    }
}