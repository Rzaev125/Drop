import style from './Home.module.css';
import ProductImg from '../../assets/img/test_product.png';

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
                    <div className={style.product_card}>
                        <div className={style.product_specs}>
                            <button className={style.spec_button}><b>Hikvision</b></button>
                            <button className={style.spec_button}><b>IP Kamera</b></button>
                        </div>
                        <div className={style.product_icons}>
                            <div className={style.icon}>❤️</div>
                            <div className={style.icon}>↔️</div>
                            <div className={style.icon}>⚖️</div>
                        </div>
                        <img className={style.product_image} src={ProductImg} alt='Product 1' />
                        <h2 className={style.product_title}>DS-2CE17D0T-IT3</h2>
                        <div className={style.product_price_container}>
                            <span className={style.product_price}>199 AZN</span>
                            <button className={style.price_button}>Qiymat</button>
                        </div>
                    </div>

                    <div className={style.product_card}>
                        <div className={style.product_specs}>
                            <button className={style.spec_button}><b>Hikvision</b></button>
                            <button className={style.spec_button}><b>IP Kamera</b></button>
                        </div>
                        <div className={style.product_icons}>
                            <div className={style.icon}>❤️</div>
                            <div className={style.icon}>↔️</div>
                            <div className={style.icon}>⚖️</div>
                        </div>
                        <img className={style.product_image} src={ProductImg} alt='Product 1' />
                        <h2 className={style.product_title}>DS-2CE17D0T-IT3</h2>
                        <div className={style.product_price_container}>
                            <span className={style.product_price}>199 AZN</span>
                            <button className={style.price_button}>Qiymat</button>
                        </div>
                    </div>

                    <div className={style.product_card}>
                        <div className={style.product_specs}>
                            <button className={style.spec_button}><b>Hikvision</b></button>
                            <button className={style.spec_button}><b>IP Kamera</b></button>
                        </div>
                        <div className={style.product_icons}>
                            <div className={style.icon}>❤️</div>
                            <div className={style.icon}>↔️</div>
                            <div className={style.icon}>⚖️</div>
                        </div>
                        <img className={style.product_image} src={ProductImg} alt='Product 1' />
                        <h2 className={style.product_title}>DS-2CE17D0T-IT3</h2>
                        <div className={style.product_price_container}>
                            <span className={style.product_price}>199 AZN</span>
                            <button className={style.price_button}>Qiymat</button>
                        </div>
                    </div>

                    <div className={style.product_card}>
                        <div className={style.product_specs}>
                            <button className={style.spec_button}><b>Hikvision</b></button>
                            <button className={style.spec_button}><b>IP Kamera</b></button>
                        </div>
                        <div className={style.product_icons}>
                            <div className={style.icon}>❤️</div>
                            <div className={style.icon}>↔️</div>
                            <div className={style.icon}>⚖️</div>
                        </div>
                        <img className={style.product_image} src={ProductImg} alt='Product 1' />
                        <hr />
                        <h2 className={style.product_title}>DS-2CE17D0T-IT3</h2>
                        <div className={style.product_price_container}>
                            <span className={style.product_price}>199 AZN</span>
                            <button className={style.price_button}>Qiymat</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;