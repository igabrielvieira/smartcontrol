import { Container, InputSearchContainer, ContainerBody, Card, ErrorContainer } from './styles';

import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/sad.svg';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import CategoriesService from '../../services/CategoriesService';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import toast from '../../utils/toast';
import Button from '../../components/Button';

export default function ListCategories() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisibleCategory, setIsDeleteModalVisibleCategory] = useState(false);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState(null);
  const [categories, setCategories] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = useMemo(() => categories.filter((category) => (
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [categories, searchTerm]); // Renderização do filtro e das categorias apenas quando estes estados forem modificados, para não sobrecarregar a aplicação em todas as renderizações.

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const categoriesList = await CategoriesService.listCategories(orderBy);

      setHasError(false);
      setCategories(categoriesList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  async function handleOrderCategory() {
    setOrderBy(
      (prevState) => prevState === 'asc' ? 'desc' : 'asc',
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleCloseDeleteModalCategory() {
    setIsDeleteModalVisibleCategory(false);
    setCategoryBeingDeleted(null);
  }

  function handleDeleteCategory(category) {
    setCategoryBeingDeleted(category);
    setIsDeleteModalVisibleCategory(true);
  }

  async function handleConfirmDeleteCategory() {
    try {
      setIsLoadingDelete(true);
      await CategoriesService.deleteCategory(categoryBeingDeleted.id);

      setCategories(categories.filter((prevState) => (
        prevState.id !== categoryBeingDeleted.id
      )));

      toast({
        type: 'success',
        text: 'Categoria deletada com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar a categoria.',
      });
    } finally {
      setIsLoadingDelete(false);
      handleCloseDeleteModalCategory();
    }

  }

  function handleTryAgain() {
    loadCategories();
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <Modal
        isLoading={isLoadingDelete}
        danger={true}
        visible={isDeleteModalVisibleCategory}
        confirmLabel="Deletar"
        title={`Tem certeza que deseja excluir a categoria "${categoryBeingDeleted?.name}"?`}
        onCancel={handleCloseDeleteModalCategory}
        onConfirm={handleConfirmDeleteCategory}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

      {!isLoading && (
        filteredCategories !== 0 && (
          <Container>
            {categories.length > 0 && (
              <InputSearchContainer>
                <input
                  value={searchTerm}
                  type="text"
                  placeholder='Pesquise por uma categoria...'
                  onChange={handleChangeSearchTerm}
                  maxLength="50"
                />
              </InputSearchContainer>
            )}

            {hasError && (
              <ErrorContainer>
                <img src={sad} alt="Sad" />

                <div className="details">
                  <strong>
                    Ocorreu um erro ao carregar seus dados!
                  </strong>

                  <Button type="button" onClick={handleTryAgain}>
                    Tentar Novamente
                  </Button>
                </div>
              </ErrorContainer>
            )}

            <ContainerBody>
              {(!hasError && categories.length > 0) && (
                <strong>
                  {filteredCategories.length}
                  {filteredCategories.length === 1 ? ' categoria' : ' categorias'}
                </strong>
              )}

              {!isLoading && (
                categories.length < 1 && (
                  !hasError && (
                    <span className="message">Por favor, crie uma categoria para visualiza-la aqui.</span>
                  )
                )
              )}

              {(categories.length > 0 && filteredCategories.length < 1) && (
                <span className="message">Nenhum resultado foi encontrado para <h3>{searchTerm}</h3></span>
              )}

              {filteredCategories.length !== 0 && (
                <div className="titleTable">
                  <span onClick={handleOrderCategory} className="productsCategory">CATEGORIA</span>
                  <span className="productsProduct">PRODUTOS</span>
                </div>
              )}

              {!isLoading && (
                filteredCategories.map((category) => (
                  <Card key={category.id}>
                    <div className="info">
                      <div className="product-name">
                        <span className="productsCategory">{category.name}</span>
                        <span className="productsQnt">{category.quantidade_pertencente}</span>
                      </div>
                    </div>

                    <div className="actions">
                      <Link to={`/editcategory/${category.id}`}>
                        <img src={edit} alt="Edit" />
                      </Link>
                      <button
                        onClick={() => handleDeleteCategory(category)}
                        type="button"
                      >
                        <img src={trash} alt="Delete" />
                      </button>
                    </div>
                  </Card>
                ))
              )}

            </ContainerBody>
          </Container>
        )
      )}
    </>
  );
}
