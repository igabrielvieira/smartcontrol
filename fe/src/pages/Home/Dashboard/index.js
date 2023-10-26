import { Container } from './styles';
import Card from './Card';

export default function Dashboard({ title, products, categories }) {
  return (
    <Container>
      <span className="title">{title}</span>

      <Card products={products} categories={categories} />

    </Container>
  );
}
