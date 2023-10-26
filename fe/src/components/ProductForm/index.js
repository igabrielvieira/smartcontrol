import PropTypes from 'prop-types';
import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';

import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService'

import { Form, ButtonContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

const ProductForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [quantityItens, setQuantityItens] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = (name && (
    quantityItens && (
      categoryId && (
        errors.length === 0
      )
    )
  ));

  useImperativeHandle(ref, () => ({
    setFieldsValues: (product) => {
      setName(product.name ?? '');
      setCategoryId(product.category_id ?? '');
      setQuantityItens(product.quantidade_itens ?? '');
    },
    resetFields: () => {
      setName('');
      setCategoryId('');
      setQuantityItens('');
    }
  }), []);

  useEffect(() => {
    let isMounted = true

    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        if (isMounted) {
          setCategories(categoriesList);
        }
      } catch { } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();

    return () => {
      isMounted = false;
    }

  }, []);

  function handleNameChange(event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' })
    } else {
      removeError('name');
    }
  }

  function handleQuantityItensChange(event) {
    setQuantityItens(event.target.value)

    if (!event.target.value) {
      setError({ field: 'quantityItens', message: 'A quantidade é obrigatória.' })
    } else {
      removeError('quantityItens');
    }
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Cancela o refresh nativo

    setIsSubmitting(true);

    await onSubmit({
      name, categoryId, quantityItens,
    });

    setIsSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder="Nome *"
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('quantityItens')}>
        <Input
          type="number"
          error={getErrorMessageByFieldName('quantityItens')}
          placeholder="Quantidade *"
          value={quantityItens}
          onChange={handleQuantityItensChange}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria *</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}

        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});


export default ProductForm;
