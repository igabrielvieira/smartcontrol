const db = require('../../database');

class ProductsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT products.*, categories.name AS category_name
      FROM products
      LEFT JOIN categories ON categories.id = products.category_id
      ORDER BY id ${direction}
    `);
    return rows;
  }

  async findBiggest() {
    const rows = await db.query(`
      SELECT *
      FROM products
      ORDER BY quantidade_itens DESC
      LIMIT 1
    `);
    return rows;
  }

  async findSmallest() {
    const rows = await db.query(`
      SELECT *
      FROM products
      ORDER BY quantidade_itens ASC
      LIMIT 1
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT products.*, categories.name AS category_name
      FROM products
      LEFT JOIN categories ON categories.id = products.category_id
      WHERE products.id = $1`, [id]);
    return row;
  }

  async create({ name, category_id, quantidade_itens }) {
    const [row] = await db.query(`
      INSERT INTO products(name, category_id, quantidade_itens)
      VALUES($1, $2, $3)
      RETURNING *
    `, [name, category_id, quantidade_itens]);
    return row;
  }

  async update(id, { name, category_id, quantidade_itens }) {
    const [row] = await db.query(`
      UPDATE products
      SET name = $1, category_id = $2, quantidade_itens = $3
      WHERE id = $4
      RETURNING *
    `, [name, category_id, quantidade_itens, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM products WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ProductsRepository();
