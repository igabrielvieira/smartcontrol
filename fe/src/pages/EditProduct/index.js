import PageHeader from '../../components/PageHeader';
import ProductForm from '../../components/ProductForm';
import ProductsService from '../../services/ProductsService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';
import { Container } from './styles';

import { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function EditProduct() {
  const [isLoading, setIsLoading] = useState(true);
  const [productName, setProductName] = useState('');
  const productFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    async function loadProduct(id) {
      try {
        const product = await ProductsService.getProductById(id);

        if (isMounted) {
          productFormRef.current.setFieldsValues(product);
          setIsLoading(false);
          setProductName(product.name);
        }
      } catch (error) {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Produto não encontrado.',
        })
      }
    }

    loadProduct(id);

    return () => {
      isMounted = false;
    }

  }, [id, history]);

  async function handleSubmit(formData) {
    try {
      const product = {
        name: formData.name,
        category_id: formData.categoryId,
        quantidade_itens: formData.quantityItens,
      }

      const productData = await ProductsService.updateProduct(id, product);

      setProductName(productData.name);

      toast({
        type: 'success',
        text: 'Produto editado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o produto!',
      });
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader
        title={isLoading ? 'Carregando...' : `Editar "${productName}"`}
      />

      <ProductForm
        ref={productFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
