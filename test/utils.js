import jsonschema from 'jsonschema'

const validator = new jsonschema.Validator()

export const validateSchema = (object, schema) => {
  return validator.validate(object, schema)
}
