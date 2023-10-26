import { Link } from 'react-router-dom';

import { Container, InputSearchContainer, Card, ContentContainer, CardHeader, ErrorContainer, EmptyListContainer, SearchNotFoundContainer, TopDiv } from './styles';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/sad.svg';
import emptyBox from '../../assets/images/empty-box.svg';

import { useEffect, useState, useCallback } from 'react';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import ProductsHeader from './Container/ProductsHeader';
import ContainerDiv from '../Home/Container';
import Dashboard from './Dashboard';
import ProductsService from '../../services/ProductsService';
import CategoriesService from '../../services/CategoriesService';
import toast from '../../utils/toast';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisibleProduct, setIsDeleteModalVisibleProduct] = useState(false);
  const [isDeleteModalVisibleCategory, setIsDeleteModalVisibleCategory] = useState(false);
  const [productBeingDeleted, setProductBeingDeleted] = useState(null);
  const [categoryBeingDeleted, setCategoryBeingDeleted] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      loadCategories();
      const productsList = await ProductsService.listProducts('asc');

      setHasError(false);
      setProducts(productsList);
    } catch {
      setHasError(false);
    } finally {
      setIsLoading(false);
    }
  }, [])

  const loadCategories = useCallback(async () => {
    try {
      setIsLoading(true);
      const categoriesList = await CategoriesService.listCategories();

      setHasError(false);
      setCategories(categoriesList);
    } catch {
      setHasError(false);
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, [loadProducts, loadCategories]);

  function handleDeleteProduct(product) {
    setProductBeingDeleted(product);
    setIsDeleteModalVisibleProduct(true);
  }

  function handleDeleteCategory(category) {
    setCategoryBeingDeleted(category);
    setIsDeleteModalVisibleCategory(true);
  }

  function handleCloseDeleteModalProduct() {
    setIsDeleteModalVisibleProduct(false);
    setIsDeleteModalVisibleCategory(false);
    setProductBeingDeleted(null);
  }

  function handleCloseDeleteModalCategory() {
    setIsDeleteModalVisibleCategory(false);
    setCategoryBeingDeleted(null);
  }

  async function handleConfirmDeleteProduct() {
    try {
      setIsLoadingDelete(true);
      await ProductsService.deleteProduct(productBeingDeleted.id);

      setProducts(products.filter((prevState) => (
        prevState.id !== productBeingDeleted.id
      )));

      toast({
        type: 'success',
        text: 'Produto deletado com sucesso!',
      });
    } catch {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao deletar o produto.',
      });
    } finally {
      setIsLoadingDelete(false);
      handleCloseDeleteModalProduct();
    }

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
    loadProducts();
    loadCategories();
  }

  return (
    <Container>

      <Loader isLoading={isLoading} />

      <Modal
        isLoading={isLoadingDelete}
        danger={true}
        visible={isDeleteModalVisibleProduct}
        confirmLabel="Deletar"
        title={`Tem certeza que deseja excluir o produto "${productBeingDeleted?.name}"?`}
        onCancel={handleCloseDeleteModalProduct}
        onConfirm={handleConfirmDeleteProduct}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>

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

      {!hasError && (
        products.length > 0) && (
          <>
            <TopDiv>
              <h3>
                Bem-vindo!
              </h3>
            </TopDiv>

            <Dashboard title="Dashboard" products={products.length} categories={categories.length} />

            <ContentContainer>
              {!isLoading && (
                <ProductsHeader type="product" width={650} height={45} title="Produtos" imgName="productsIcon">
                  <ContainerDiv type="product" width={650} height={45}>
                    {products.map((product) => (
                      <Card key={product.id}>
                        <div className="info">
                          <div className="product-name">
                            <span className="productsId">{product.id}</span>
                            <span className="productsProduct">{product.name}</span>
                            <span className="productsQnt">{product.quantidade_itens}</span>
                            <span className="productsCategory">{product.category_name}</span>
                          </div>
                        </div>

                        <div className="actions">
                          <Link to={`/editproduct/${product.id}`}>
                            <img src={edit} alt="Edit" />
                          </Link>
                          <button
                            onClick={() => handleDeleteProduct(product)}
                            type="button"
                          >
                            <img src={trash} alt="Delete" />
                          </button>
                        </div>
                      </Card>
                    ))}
                  </ContainerDiv>
                </ProductsHeader>
              )}

              {!isLoading && (
                <ProductsHeader type="category" width={370} height={45} title="Categorias">
                  <ContainerDiv type="category" width={370} height={45}>
                    {categories.map((category) => (
                      <Card key={category.id}>
                        <div className="info">
                          <div className="product-name">
                            <span className="categoriesCategory">{category.name}</span>
                            <span className="categoriesProduct">{category.quantidade_pertencente}</span>
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
                    ))}
                  </ContainerDiv>
                </ProductsHeader>
              )}
            </ContentContainer>
          </>
        )
      }

      {(products.length < 1 && !isLoading) && (
        !hasError && (
          (
            <EmptyListContainer>
              <img src={emptyBox} alt="Empty box" />

              <p>
                Você ainda não tem nenhum produto cadastrado!
                Clique no botão <strong>"Criar produto"</strong> ao
                lado para cadastrar o seu primeiro!
              </p>
            </EmptyListContainer>
          )
        )
      )}

    </Container >
  );
}

