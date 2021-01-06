import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};
  err.inner.forEach(error => {
    /* os métodos do error que não são obrigatórios, como path?, pode vir como undefined
      e gerar um erro. Para resolver isso, usa o if para se houver conteúdo no path, setar
      a messagem de erro no validationErrors. Faz necessários isso por conta da atualização
      do Yup, por isso que está diferente da aula.
    */
    if (error.path) {
      validationErrors[error.path] = error.message;
    }
  });

  return validationErrors;
}
