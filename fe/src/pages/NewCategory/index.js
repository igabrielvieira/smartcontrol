import PageHeader from '../../components/PageHeader';
import CategoryForm from '../../components/CategoryForm';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

import { Container } from './styles';

import { useRef } from 'react';

export default function NewCategory() {
  const categoryFormRef = useRef(null);

  async function handleSubmit(formData) {
    try {
      const category = {
        name: formData.name,
      }

      await CategoriesService.createCategory(category);

      categoryFormRef.current.resetFields();

      toast({
        type: 'success',
        text: 'Categoria cadastrada com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar a categoria!',
      });
    }
  }

  return (
    <Container>
      <PageHeader
        title="Nova Categoria"
      />

      <CategoryForm
        ref={categoryFormRef}
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
