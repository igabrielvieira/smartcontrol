import PageHeader from '../../components/PageHeader';
import ProductForm from '../../components/ProductForm';
import ProductsService from '../../services/ProductsService';
import toast from '../../utils/toast';

import { Container } from './styles';

import { useRef } from 'react';

export default function NewProduct() {
  const productFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const product = {
        name: formData.name,
        category_id: formData.categoryId,
        quantidade_itens: formData.quantityItens,
      }

      await ProductsService.createProduct(product);

      productFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Produto cadastrado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o produto!',
      });
    }
  }

  return (
    <Container>
      <PageHeader
        title="Novo Produto"
      />

      <ProductForm
        ref={productFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
