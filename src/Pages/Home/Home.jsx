import style from './Home.module.css';

function Home() {
    return (
        <div className='container'>
            <div className='contant'>
                <div className={style.search_box}>
                    <select name='brands' className={style.select}>
                        <option value=''>Brands</option>
                        <option value='1'>Brand 1</option>
                        <option value='2'>Brand 2</option>
                        <option value='3'>Brand 3</option>
                    </select>
                    <select name='category' className={style.select}>
                        <option value=''>Category</option>
                        <option value='1'>Category 1</option>
                        <option value='2'>Category 2</option>
                        <option value='3'>Category 3</option>
                    </select>
                    <input placeholder='Search ...' className={style.input} />
                    <select name='sort' className={style.select}>
                        <option value=''>Sort</option>
                        <option value='1'>Sort 1</option>
                        <option value='2'>Sort 2</option>
                        <option value='3'>Sort 3</option>
                    </select>
                    <select name='filter' className={style.select}>
                        <option value=''>Filter</option>
                        <option value='1'>Filter 1</option>
                        <option value='2'>Filter 2</option>
                        <option value='3'>Filter 3</option>
                    </select>
                </div>

                <hr />

                <div className={style.products_box}>
                    <div className={style.product}>
                        <img src='/public/test_product.png' alt='Product 1' className={style.product_image} />
                        <div className={style.product_info}>
                            <p className={style.info}>hikvsion</p>
                            <p className={style.info}>ip kamera</p>
                            <p className={style.info}>hybrid</p>
                        </div>
                    </div>
                    <div className={style.product}>
                        {/* <img src='/public/test_product.webp' alt='Product 1' className={style.product_image} /> */}
                        <h3 className={style.product_title}>Product 1</h3>
                        <p className={style.product_price}>$10.00</p>
                    </div>
                    <div className={style.product}>
                        {/* <img src='/public/test_product.webp' alt='Product 1' className={style.product_image} /> */}
                        <h3 className={style.product_title}>Product 1</h3>
                        <p className={style.product_price}>$10.00</p>
                    </div>
                    <div className={style.product}>
                        {/* <img src='/public/test_product.webp' alt='Product 1' className={style.product_image} /> */}
                        <h3 className={style.product_title}>Product 1</h3>
                        <p className={style.product_price}>$10.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;