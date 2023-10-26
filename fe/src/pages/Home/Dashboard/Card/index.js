import { CardItem, Container } from './styles';
import dashIcon from '../../../../assets/images/icons/dash-icon.svg';

import ProductsService from '../../../../services/ProductsService';
import { useCallback, useEffect, useState } from 'react';
import CategoriesService from '../../../../services/CategoriesService';
import Spinner from '../../../../components/Spinner';

export default function Card({ products, categories }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [biggestProduct, setBiggestProduct] = useState([]);
  const [smallestProduct, setSmallestProduct] = useState([]);
  const [biggestCategory, setBiggestCategory] = useState([]);

  const loadBiggestProduct = useCallback(async () => {
    try {
      const getBiggestProduct = await ProductsService.getBiggestProduct();
      setBiggestProduct(getBiggestProduct);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadSmallestProduct = useCallback(async () => {
    try {
      const getSmallestProduct = await ProductsService.getSmallestProduct();
      setSmallestProduct(getSmallestProduct);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadBiggestCategory = useCallback(async () => {
    try {
      const getBiggestCategory = await CategoriesService.getBiggestCategory();
      setBiggestCategory(getBiggestCategory);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBiggestProduct();
    loadSmallestProduct();
    loadBiggestCategory();
  }, [loadBiggestProduct, loadSmallestProduct, loadBiggestCategory]);

  return (
    <>
      {isLoading && (
        <Container>
          <CardItem>
            <Spinner size={24} />
          </CardItem>

          <CardItem>
            <Spinner size={24} />
          </CardItem>

          <CardItem>
            <Spinner size={24} />
          </CardItem>

          <CardItem>
            <Spinner size={24} />
          </CardItem>

          <CardItem>
            <Spinner size={24} />
          </CardItem>

        </Container>
      )}

      {!isLoading && (
        !hasError && (
          <Container>
            <CardItem>
              <img src={dashIcon} alt="Dashboard icon" />

              <div className="rightCard">
                <span>Total Produtos</span>

                <div className="estatisticSide">
                  <span className="numberRightCard">{products}</span>
                  <span className="estatistic">+ 56%</span>
                </div>
              </div>
            </CardItem>

            <CardItem>
              <img src={dashIcon} alt="Dashboard icon" />

              <div className="rightCard">
                <span>Total Categorias</span>

                <div className="estatisticSide">
                  <span className="numberRightCard">{categories}</span>
                  <span className="estatistic">+ 83%</span>
                </div>
              </div>
            </CardItem>

            <CardItem>
              <img src={dashIcon} alt="Dashboard icon" />

              <div className="rightCard">
                <span>Maior Produto</span>

                {biggestProduct.map((product) => (
                  <div className="estatisticSide" key={product.id}>
                    <span className="itemSpan">({product.id}) {product.name}</span>
                  </div>
                ))}
              </div>
            </CardItem>

            <CardItem>
              <img className="down" src={dashIcon} alt="Dashboard icon" />

              <div className="rightCard">
                <span>Menor Produto</span>

                {smallestProduct.map((product) => (
                  <div className="estatisticSide" key={product.id}>
                    <span className="itemSpan">({product.id}) {product.name}</span>
                  </div>
                ))}
              </div>
            </CardItem>

            <CardItem>
              <img src={dashIcon} alt="Dashboard icon" />

              <div className="rightCard">
                <span>Maior Categoria</span>

                {biggestCategory.map((category) => (
                  <div className="estatisticSide" key={category.id}>
                    <span className="categorySpan">{category.name}</span>
                  </div>
                ))}
              </div>
            </CardItem>

          </Container>
        )
      )}
    </>
  );
}
