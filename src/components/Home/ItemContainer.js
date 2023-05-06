import { useContext, useState } from 'react';
import foodDishes from './Data';
import styles from './ItemContainer.module.css';
import CartContext from '../context';

export default function ItemContainer() {
    const [items, setItems] = useState(1);
    const ctx = useContext(CartContext);

    const onChangeHandler = (event) => {
        setItems(event.target.value)
    }
    function addTocart() {
        ctx.setNoCart(pre => pre + Number(items))
    }

    return (
        <div className={styles.container}>
            {foodDishes.map((product) => (
                <div key={product.id} className={styles.product}>
                    <img src={product.image} alt={product.name} className={styles.image} />
                    <div className={styles.details}>
                        <h3 className={styles.name}>{product.name}</h3>
                        <p className={styles.price}>{`$ ${product.price}`}</p>
                        <button className={styles.button} onClick={addTocart}>Add to Cart</button>
                        <input type="number" onChange={onChangeHandler} className={styles.input} placeholder='1' />
                    </div>
                </div>
            ))}
        </div>
    );
}