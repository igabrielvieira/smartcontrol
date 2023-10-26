import PageHeader from '../../components/PageHeader';
import CategoryForm from '../../components/CategoryForm';
import CategoriesService from '../../services/CategoriesService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';
import { Container } from './styles';

import { useEffect, useState, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function EditCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const categoryFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;

    async function loadCategory(id) {
      try {
        const category = await CategoriesService.getCategoryById(id);

        if (isMounted) {
          categoryFormRef.current.setFieldsValues(category);
          setIsLoading(false);
          setCategoryName(category.name);
        }
      } catch (error) {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Categoria não encontrada.',
        })
      }
    }

    loadCategory(id);

    return () => {
      isMounted = false;
    }

  }, [id, history]);

  async function handleSubmit(formData) {
    try {
      const category = {
        id: formData.categoryId,
        name: formData.name,
        quantidade_pertencente: formData.quantityBelonging,
      }

      const categoryData = await CategoriesService.updateCategory(id, category);

      setCategoryName(categoryData.name);

      toast({
        type: 'success',
        text: 'Categoria editada com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar a categoria!',
      });
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando...' : `Editar "${categoryName}"`} />

      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
