import { Container, InputSearchContainer, ContainerBody, Card, ErrorContainer } from './styles';

import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import sad from '../../assets/images/sad.svg';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';

import ProductsService from '../../services/ProductsService';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import toast from '../../utils/toast';
import Button from '../../components/Button';

export default function ListProducts() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalVisibleProduct, setIsDeleteModalVisibleProduct] = useState(false);
  const [productBeingDeleted, setProductBeingDeleted] = useState(null);
  const [products, setProducts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => products.filter((product) => (
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [products, searchTerm]); // Renderização do filtro e dos produtos apenas quando estes estados forem modificados, para não sobrecarregar a aplicação em todas as renderizações.

  const loadProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const productsList = await ProductsService.listProducts(orderBy);

      setHasError(false);
      setProducts(productsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  function handleOrderProduct() {
    setOrderBy(
      (prevState) => prevState === 'asc' ? 'desc' : 'asc',
    );
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleCloseDeleteModalProduct() {
    setIsDeleteModalVisibleProduct(false);
    setProductBeingDeleted(null);
  }

  function handleDeleteProduct(product) {
    setProductBeingDeleted(product);
    setIsDeleteModalVisibleProduct(true);
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

  function handleTryAgain() {
    loadProducts();
  }

  return (
    <>
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

      {!isLoading && (
        filteredProducts !== 0 && (
          <Container>
            {products.length > 0 && (
              <InputSearchContainer>
                <input
                  value={searchTerm}
                  type="text"
                  placeholder='Pesquise por um produto...'
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
              {(!hasError && products.length > 0) && (
                <strong>
                  {filteredProducts.length}
                  {filteredProducts.length === 1 ? ' produto' : ' produtos'}
                </strong>
              )}

              {!isLoading && (
                products.length < 1 && (
                  !hasError && (
                    <span className="message">Por favor, crie um produto para visualiza-lo aqui.</span>
                  )
                )
              )}

              {(products.length > 0 && filteredProducts.length < 1) && (
                <span className="message">Nenhum resultado foi encontrado para <h3>{searchTerm}</h3></span>
              )}

              {filteredProducts.length !== 0 && (
                <div className="titleTable">
                  <span onClick={handleOrderProduct} className="productsId">ID</span>
                  <span className="productsProduct">PRODUTO</span>
                  <span className="productsQnt">QNT.</span>
                  <span className="productsCategory">CATEGORIA</span>
                </div>
              )}

              {!isLoading && (
                filteredProducts.map((product) => (
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
                ))
              )}

            </ContainerBody>
          </Container>
        )
      )}
    </>
  );
}
