import PropTypes from 'prop-types';
import { useState, forwardRef, useImperativeHandle } from 'react';

import useErrors from '../../hooks/useErrors';

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Button from '../Button';

const CategoryForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = name && (
    errors.length === 0
  );

  useImperativeHandle(ref, () => ({
    setFieldsValues: (category) => {
      setName(category.name ?? '');
      setCategoryId(category.id ?? '');
    },
    resetFields: () => {
      setName('');
    }
  }), []);

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Cancela o refresh nativo

    setIsSubmitting(true);

    await onSubmit({
      name, categoryId
    });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome da categoria *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});


export default CategoryForm;
